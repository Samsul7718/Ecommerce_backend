import toy from "../../assets/pdImage.js";
const ToyProducts = [
  
  {
    id: "151",
    name: "Car Toy",
    price: 179.99,
    description: "colorful and durable car toy for kids...",
    images: [toy.car,toy.bike,toy.jcb,toy.train], 
    colors: ["black","red", "blue"],
    size: ["S", "M", "L", "XL"],
    
  },
  {
    id: "152",
    name: "Bike Toy",
    price: 139.99,
    description: "big bike toy with realistic design and features...",
    images: [toy.bike,toy.jcb,toy.train,toy.car],
    colors: ["black","red", "blue"],
    size: ["S", "M", "L", "XL"],
    
  },
   {
    id: "153",
    name: "JCB Toy",
    price: 69.99,
    description: "powerful jcb toy for construction play...",
    images: [toy.jcb,toy.train,toy.car,toy.bike],
    colors: ["black","red", "blue"],
    size: ["S", "M", "L", "XL"],
   },
   {
    id: "154",
    name: "Train Toy",
    price: 136.99,
    description: "train toy with lights and sounds for fun...",
    images: [toy.train,toy.car,toy.bike,toy.jcb],
    colors: ["black","red", "blue"],
    size: ["S", "M", "L", "XL"],
  },
];
export default ToyProducts;