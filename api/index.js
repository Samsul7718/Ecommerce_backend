import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
// import serverless from "serverless-http";
// import  electronics from './products/electronics/Electronic.js';
import  MenProducts  from '../products/men-fashion/MenFashion.js';
import GirlProducts from '../products/women-fashion/WomenFashion.js';
import GymProducts from '../products/gym/Gym.js';
import ToyProducts from '../products/toy/Toys.js';
import KitProducts from '../products/kitchen/Kitchen.js';
import ShoeProducts from '../products/shoe/Shoes.js';
import Electronic from '../products/electronics/Electronic.js';
import Beauty from '../products/beauty/Beauty.js';
import Laptop from '../products/laptop/Laptop.js';




const allProducts=[...MenProducts,...GirlProducts,...GymProducts,...ToyProducts,...KitProducts,
    ...ShoeProducts,...Electronic,...Beauty,...Laptop,
];

const app=express();
dotenv.config();
app.use(cors({
    origin:[
        "https://ecommerce-three-umber.vercel.app",
        // "http://localhost:3000",
        // "http://localhost:5173",
        
    ],
    methods:['GET','POST'],
    credentials:true
}))

// app.use("/images", express.static(path.join(process.cwd(), "public/images")));
app.use(express.static('public'));
app.get('/',(req,res)=>{
    res.send('Server is up and running');
})
console.log("Registering /api/products route");

app.get('/api/products',(req,res)=>{
    res.json(allProducts)
})
// app.get("/api/products", (req, res) => {
//     console.log("🔥 /api/products route hit");
//     res.json({
//         success: true,
//         message: "Products API is working",
//         count: allProducts.length,
//         data: allProducts
//     });
// });


console.log("MEN:", MenProducts);
console.log("WOMEN:", GirlProducts);
console.log("ALL:", allProducts.length);


const port=process.env.PORT || 3000;

app.listen(port,()=>{
    console.log(`Server is running on port ${port}`);
})
// LOCAL ONLY — DO NOT RUN ON VERCEL
// if (process.env.NODE_ENV !== "production") {
//   const port = 3000;
//   app.listen(port, () => console.log("Local API running at http://localhost:3000"));
// }

// export const handler = serverless(app);
// export const handler = serverless(app);
export default app;