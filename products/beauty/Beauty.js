import beauty from "../../assets";


const  Beauty = [

  
  {
    id: "351",
    name: "Face Powder",
    price: 599.99,
    description: "Best looking buauty product...",
    images: [beauty.facepwd,beauty.dayCreme,beauty.lipstick,beauty.facewash],
    colors: ["black","red", "blue"],
    size: ["S", "M", "L", "XL"],
  },
  {
    id: "352",
    name: "Day-Creame",
    price: 549.99,
    description: "Perfect gradient day creame for unisex",
    images: [beauty.dayCreme,beauty.lipstick,beauty.facewash,beauty.facepwd],
    colors: ["red", "green"],
    size: ["S", "M", "L", "XL"],
  },
   {
    id: "353",
    name: "LipStick",
    price: 699.99,
    description: "Varient color colorful lipstick",
    images: [beauty.lipstick,beauty.facewash,beauty.facepwd,beauty.dayCreme],
    colors: ["black", "green"],
    size: ["S", "M", "L", "XL"],
  },
   {
    id: "354",
    name: "Face Wash",
    price: 223.99,
    description: "Getting dust free bright looking",
    images: [beauty.facewash,beauty.facepwd,beauty.dayCreme,beauty.lipstick],
    colors: ["black","blue", "green"],
    size: ["S", "M", "L", "XL"],
  },
];
export default Beauty;