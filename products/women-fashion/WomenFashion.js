import women from "../../assets/pdImage.js";


const GirlProducts = [
  
  {
    id: "51",
    name: "Long dress",
    price: 79.99,
    description: "These long dress specially designed for function and style...",
    images: [women.long,women.kurti,women.saree,women.burkha],
    colors: ["black","red", "blue"],
    size: ["S", "M", "L", "XL"],
    category: "women-fashion",
  },
  {
    id: "52",
    name: "Kurti",
    price: 49.99,
    description: "Soft cotton kurti for daily wear...",
    images: [women.kurti,women.saree,women.burkha,women.long],
    colors: ["red", "green"],
    size: ["S", "M", "L", "XL"],
    category: "women-fashion",
  },
   {
    id: "53",
    name: "South Saree",
    price: 45.99,
    description: "Long traditional saree for daily wear...",
    images: [women.saree,women.burkha,women.long,women.kurti],
    colors: ["black", "green"],
    size: ["S", "M", "L", "XL"],
    category: "women-fashion",
  },
   {
    id: "54",
    name: "Burkha",
    price: 88.99,
    description: "Elegant burkha for special occasions...",
    images: [women.burkha,women.long,women.kurti,women.saree],
    colors: ["black","blue", "green"],
    size: ["S", "M", "L", "XL"],
    category: "women-fashion",
  },
];
export default GirlProducts;