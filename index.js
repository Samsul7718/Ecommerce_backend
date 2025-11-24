import express from 'express';
import dotenv from 'dotenv';

dotenv.config();

const app=express();

app.get('/',(req,res)=>{
    res.send('Server is up and running');
})

app.get('/api/products',(req,res)=>{
    res.json(products)
})

const port=process.env.PORT || 3000;

app.listen(port,()=>{
    console.log(`Server is running on port ${port}`);
})