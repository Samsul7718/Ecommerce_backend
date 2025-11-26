import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import  electronics from './products/electronics/Electronic.js';
import  MenProducts  from './products/men fashion/MenFashion.js';



const allProducts=[...electronics,...MenProducts];

dotenv.config();
app.use(cors({
    origin:[
        "http://localhost:3000",
        "http://localhost:5173",
        "http://localhost:5174"
    ],
    methods:['GET','POST'],
    credentials:true
}))

const app=express();

app.get('/',(req,res)=>{
    res.send('Server is up and running');
})

app.get('/api/products',(req,res)=>{
    res.json(allProducts)
})

const port=process.env.PORT || 3000;

app.listen(port,()=>{
    console.log(`Server is running on port ${port}`);
})