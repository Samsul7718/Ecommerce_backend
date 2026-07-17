import laptop from "../../assets/pdImage.js"

const Laptop=[
      {
        id: "801",
        name: "ASUS",
        price: 3599.99,
        description: "New Lounch for developer friendly",
        images: [laptop.asus,laptop.lenevo,laptop.macbook,laptop.macpro],
        colors: ["black","red", "blue"],
        size: ["13cm", "15cm"],
      },
       {
        id: "802",
        name: "Lenovo",
        price: 599.99,
        description: "New Lounch for Gameing laptop",
        images: [laptop.lenevo,laptop.macbook,laptop.macpro,laptop.asus],
        colors: ["black","red", "blue"],
        size: ["13.5cm", "14cm", "15cm"],
      },
       {
        id: "803",
        name: "Macbook",
        price: 9599.99,
        description: "Fast Processer for coding product...",
        images: [laptop.macbook,laptop.macpro,laptop.asus,laptop.lenevo],
        colors: ["black","red", "blue"],
        size: ["13cm", "15cm"],
      },
       {
        id: "804",
        name: "MacPro",
        price: 13599.99,
        description: "Superfast processor for AI Intrigration",
        images: [laptop.macpro,laptop.macbook,laptop.asus,laptop.lenevo],
        colors: ["black","red", "blue"],
        size: ["13cm", "15cm", "17cm"],
      },
]
export default Laptop;