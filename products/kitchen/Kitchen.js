import kit from "../../assets/pdImage.js";
const KitProducts = [
  
  {
    id: "201",
    name: "Coffee maker",
    price: 3079.99,
    description: "Brew the perfect cup of coffee with this state-of-the-art coffee maker...",
    images: [kit.coffee,kit.juicer,kit.ricemaker,kit.toaster], 
    colors: ["black","red", "blue"],
    size: ["S", "M", "L", "XL"],
    
  },
  {
    id: "202",
    name: "Juicer Machine",
    price: 2659.99,
    description: "juicer machine for fresh and healthy juices...",
    images: [kit.juicer,kit.ricemaker,kit.toaster,kit.coffee],
    colors: ["black","red", "blue"],
    size: ["S", "M", "L", "XL"],
    
  },
   {
    id: "203",
    name: "Rice Maker",
    price: 1209.99,
    description: "rice maker for perfect and fluffy rice every time...",
    images: [kit.ricemaker,kit.toaster,kit.coffee,kit.juicer],
    colors: ["black","red", "blue"],
    size: ["S", "M", "L", "XL"],
   },
   {
    id: "204",
    name: "Toaster",
    price: 4206.99,
    description: "toaster for crispy and golden toast...",
    images: [kit.toaster,kit.coffee,kit.juicer,kit.ricemaker],
    colors: ["black","red", "blue"],
    size: ["S", "M", "L", "XL"],
  },
];
export default KitProducts;