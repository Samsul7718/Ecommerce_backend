import shoe from "../../assets/pdImage.js";
const ShoeProducts = [
  
  {
    id: "251",
    name: "Nike Running Shoes",
    price: 5099.99,
    description: "High-performance running shoes designed for comfort and speed...",
    images: [shoe.nike,shoe.adidas,shoe.puma,shoe.reebok], 
    colors: ["black","red", "blue"],
    size: ["S", "M", "L", "XL"],
    
  },
  {
    id: "252",
    name: "Adidas Running Shoes",
    price: 3659.99,
    description: "Adidas running shoes with superior cushioning and support...",
    images: [shoe.adidas,shoe.puma,shoe.reebok,shoe.nike],
    colors: ["black","red", "blue"],
    size: ["S", "M", "L", "XL"],
    
  },
   {
    id: "253",
    name: "Puma Sports Shoes",
    price: 3209.99,
    description: "Puma sports shoes for all your athletic needs...",
    images: [shoe.puma,shoe.reebok,shoe.nike,shoe.adidas],
    colors: ["black","red", "blue"],
    size: ["S", "M", "L", "XL"],
   },
   {
    id: "254",
    name: "Reebok Casual Shoes",
    price: 4206.99,
    description: "Stylish and comfortable Reebok casual shoes for everyday wear...",
    images: [shoe.reebok,shoe.nike,shoe.adidas,shoe.puma],
    colors: ["black","red", "blue"],
    size: ["S", "M", "L", "XL"],
  },
];
export default ShoeProducts;