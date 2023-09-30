const dotenv=require('dotenv');
const mongoose=require('mongoose');
const express= require('express');
const app=express();
const cors = require('cors');
dotenv.config({path:'./config.env'})
const PORT=process.env.PORT;
app.use(cors());
app.use(express.json());
require('./db/conn');

const Item_info=require("./model/itemSchema");

app.use(require('./router/routes'));
app.get("/",(req,res)=>{
    res.send(`Hello`);
})

app.listen(PORT,()=>{
    console.log(`connection is extablish at ${PORT}`);
})