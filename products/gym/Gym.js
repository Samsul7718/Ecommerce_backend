import gym from "../../assets/pdImage.js";
const GymProducts = [
  
  {
    id: "101",
    name: "Trademill",
    price: 379.99,
    description: "The universal fitness comfort and style...",
    images: [gym.trademill,gym.dumble,gym.starx,gym.chest], 
    colors: ["black","red", "blue"],
    size: ["S", "M", "L", "XL"],
    
  },
  {
    id: "102",
    name: "Dumble Set",
    price: 69.99,
    description: "Soft corner to build the massive biseps...",
    images: [gym.dumble,gym.starx,gym.chest,gym.trademill],
    colors: ["black","red", "blue"],
    size: ["S", "M", "L", "XL"],
    
  },
   {
    id: "103",
    name: "Starx Machine",
    price: 439.99,
    description: "Advanced starx machine for full body workout...",
    images: [gym.starx,gym.chest,gym.trademill,gym.dumble],
    colors: ["black","red", "blue"],
    size: ["S", "M", "L", "XL"],
   },
   {
    id: "104",
    name: "Chest Press Machine",
    price: 136.99,
    description: "Build your chest muscles with this amazing machine...",
    images: [gym.chest,gym.trademill,gym.dumble,gym.starx],
    colors: ["black","red", "blue"],
    size: ["S", "M", "L", "XL"],
  },
];
export default GymProducts;