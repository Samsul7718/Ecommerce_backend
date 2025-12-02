import elect from "../../assets/pdImage.js";


const  Electronic = [

  
  {
    id: "301",
    name: "Macbook pro",
    price: 123499.99,
    description: "Worlds ist fastest and lightweighyt lapi",
    images: [elect.macbook,elect.speaker,elect.watch,elect.pendrive],
    colors: ["black","red", "blue"],
    size: ["S", "M", "L", "XL"],
  },
  {
    id: "302",
    name: "Speaker",
    price: 15449.99,
    description: "Enjoy your sound moment",
    images: [elect.speaker,elect.watch,elect.pendrive,elect.macbook],
    colors: ["red", "green"],
    size: ["S", "M", "L", "XL"],
  },
   {
    id: "303",
    name: "Wrist Watch",
    price: 9855.99,
    description: "Expensive watch ever",
    images: [elect.watch,elect.pendrive,elect.macbook,elect.speaker],
    colors: ["black", "green"],
    size: ["S", "M", "L", "XL"],
  },
   {
    id: "304",
    name: "Pendrive-4.0a",
    price:5732.99,
    description: "Fast and quick transfer data",
    images: [elect.pendrive,elect.macbook,elect.speaker,elect.watch],
    colors: ["black","blue", "green"],
    size: ["S", "M", "L", "XL"],
  },
];
export {Electronic};