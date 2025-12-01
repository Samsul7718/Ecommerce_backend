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
    name: "Dumble Set",
    price: 69.99,
    description: "Soft corner to build the massive biseps...",
    images: [gym.dumble,gym.starx,gym.chest,gym.trademill],
    colors: ["black","red", "blue"],
    size: ["S", "M", "L", "XL"],
    
  },
   {
    id: "153",
    name: "Starx Machine",
    price: 439.99,
    description: "Advanced starx machine for full body workout...",
    images: [gym.starx,gym.chest,gym.trademill,gym.dumble],
    colors: ["black","red", "blue"],
    size: ["S", "M", "L", "XL"],
   },
   {
    id: "154",
    name: "Chest Press Machine",
    price: 136.99,
    description: "Build your chest muscles with this amazing machine...",
    images: [gym.chest,gym.trademill,gym.dumble,gym.starx],
    colors: ["black","red", "blue"],
    size: ["S", "M", "L", "XL"],
  },
];
export default ToyProducts;