import men from "../../assets/pdImage.js";
const MenProducts = [
  
  {
    id: "1",
    name: "Formal Dress",
    price: 79.99,
    description: "These formals are designed for comfort and style...",
    images: [men.formal,men.shirt,men.pant,men.tshirt], 
    colors: ["black","red", "blue"],
    size: ["S", "M", "L", "XL"],
    category: "men-fashion",
    
  },
  {
    id: "2",
    name: "Casual Shirt",
    price: 49.99,
    description: "Soft cotton casual shirt for daily wear...",
    images: [men.shirt,men.formal,men.tshirt,men.pant],
    colors: ["black","red", "blue"],
    size: ["S", "M", "L", "XL"],
    category: "men-fashion",
    
  },
   {
    id: "3",
    name: " Office Wear",
    price: 39.99,
    description: "Soft cotton casual shirt for office wear...",
    images: [men.tshirt,men.formal,men.pant,men.shirt],
    colors: ["black","red", "blue"],
    size: ["S", "M", "L", "XL"],
    category: "men-fashion",
   },
   {
    id: "4",
    name: "Casual Pant",
    price: 36.99,
    description: "Soft cotton casual T_shirt for daily wear...",
    images: [men.pant,men.shirt,men.tshirt,men.formal],
    colors: ["black","red", "blue"],
    size: ["S", "M", "L", "XL"],
    category: "men-fashion",
  },
];
export default MenProducts;