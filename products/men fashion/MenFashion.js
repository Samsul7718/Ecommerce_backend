import {shirt,pant,tshirt,formal} from "../../assets/pdImage.js";
const MenProducts = [
  
  {
    id: "1",
    name: "Formal Dress",
    price: 79.99,
    description: "These formals are designed for comfort and style...",
    images: [formal,shirt,pant,tshirt], 
    colors: ["black","red", "blue"],
    size: ["S", "M", "L", "XL"],
    
  },
  {
    id: "2",
    name: "Casual Shirt",
    price: 49.99,
    description: "Soft cotton casual shirt for daily wear...",
    images: [shirt,formal,tshirt,pant],
    colors: ["black","red", "blue"],
    size: ["S", "M", "L", "XL"],
    
  },
   {
    id: "3",
    name: "Casual Office Wear",
    price: 39.99,
    description: "Soft cotton casual shirt for office wear...",
    images: [tshirt,formal,pant,shirt],
    colors: ["black","red", "blue"],
    size: ["S", "M", "L", "XL"],
  
  },
   {
    id: "4",
    name: "Casual Pant",
    price: 36.99,
    description: "Soft cotton casual T_shirt for daily wear...",
    images: [pant,shirt,tshirt,formal],
    colors: ["black","red", "blue"],
    size: ["S", "M", "L", "XL"],
  },
];
export default MenProducts;