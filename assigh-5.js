const express = require("express");
const app = express();
const port = 3000;

const menu = [
    {"id": "1", "name": "ราเมนหมูชาชู", "price": 90},
    {"id": "2", "name": "ราเมนมิโสะ", "price": 95},
    {"id": "3", "name": "อุด้งเทมปุระ", "price": 100},
    {"id": "4", "name": "ข้าวหน้าปลาไหล", "price": 120},
    {"id": "5", "name": "ซูชิเซ็ต", "price": 150}
];

app.get('/',(req,res)=>{
    res.send("Welcome to Sakura Japanese Restaurant");
});

app.get('/menu',(req,res)=>{
    res.json(menu);
});

app.get('/menu/:id',(req,res)=>{
    const menuid = req.params.id;
    const food = menu.find(m => m.id === menuid);
    res.json(food);
});

app.get('/price',(req,res)=>{
    const quantity = req.query.quantity;
    const price = req.query.price;
    const result = quantity * price;
    res.json(result);
});

app.get('/discount',(req,res)=>{
    const total = req.query.total;
    if (total >= 500) {
        const result = total * 0.90;
        res.json(result);
    } else {
        res.json(total);
    }
});

app.listen(port,()=>{
    console.log("Sever is running");
});