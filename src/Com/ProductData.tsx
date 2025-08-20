export type ProductDataType = {
  id: number;
  cardImage: string;   
  cardH3Title: string;
  Price: string;
  category: string;
};

export const ProductData: ProductDataType[] = [
  /////////////////////Camera///////////////////////////////
  { id: 1, cardImage: "../../src/ProductImage/CAM1.png", cardH3Title: "Camera", Price: "$90.00 USD", category: "camera" },
  { id: 2, cardImage: "../../src/ProductImage/CAM2.png", cardH3Title: "Camera", Price: "$80.00 USD", category: "camera" },
  { id: 3, cardImage: "../../src/ProductImage/CAM3.png", cardH3Title: "Camera", Price: "$60.00 USD", category: "camera" },
  { id: 4, cardImage: "../../src/ProductImage/CAM4.png", cardH3Title: "Camera", Price: "$80.00 USD", category: "camera" },
    /////////////////////watch///////////////////////////////
  { id: 5 , cardImage: "../../src/ProductImage/WAT1.png", cardH3Title: "Watch", Price: "$10.00 USD", category: "watch" },
  { id: 6, cardImage: "../../src/ProductImage/WAT2.png", cardH3Title: "Watch", Price: "$20.00 USD", category: "watch" },
  { id: 7, cardImage: "../../src/ProductImage/WAT3.png", cardH3Title: "Watch", Price: "$8.00 USD", category: "watch" },
  { id: 8, cardImage: "../../src/ProductImage/WAT4.png", cardH3Title: "Watch", Price: "$7.00 USD", category: "watch" },
  { id: 9, cardImage: "../../src/ProductImage/WAT5.png", cardH3Title: "Watch", Price: "$6.00 USD", category: "watch" },
    /////////////////////Airpod///////////////////////////////
  { id: 10 , cardImage: "../../src/ProductImage/AIR1.png", cardH3Title:"Airpod", Price: "$8.00 USD", category: "airpod" },
  { id: 11, cardImage: "../../src/ProductImage/AIR2.png", cardH3Title: "Airpod", Price: "$25.00 USD", category: "airpod" },
  { id: 12, cardImage: "../../src/ProductImage/AIR3.png", cardH3Title: "Airpod", Price: "$18.00 USD", category: "airpod" },
  { id: 13, cardImage: "../../src/ProductImage/AIR4.png", cardH3Title: "Airpod", Price: "$9.00 USD", category: "airpod" },
  { id: 14, cardImage: "../../src/ProductImage/AIR5.png", cardH3Title: "Airpod", Price: "$20.00 USD", category: "airpod" },
  { id: 14, cardImage: "../../src/ProductImage/AIR7.png", cardH3Title: "Airpod", Price: "$25.00 USD", category: "airpod" },
  { id: 14, cardImage: "../../src/ProductImage/AIR8.png", cardH3Title: "Airpod", Price: "$26.00 USD", category: "airpod" },
  /////////////////////Phone///////////////////////////////
  { id: 15 , cardImage: "../../src/ProductImage/PH1.png", cardH3Title:"Phone", Price: "$100.00 USD", category: "phone" },
  { id: 16, cardImage: "../../src/ProductImage/PH2.png", cardH3Title: "Phone", Price: "$200.00 USD", category: "phone" },
  { id: 17, cardImage: "../../src/ProductImage/PH3.png", cardH3Title: "Phone", Price: "$250.00 USD", category: "phone" },
  { id: 18, cardImage: "../../src/ProductImage/PH4.png", cardH3Title: "Phone", Price: "$109.00 USD", category: "phone" },
  { id: 19, cardImage: "../../src/ProductImage/PH5.png", cardH3Title: "Phone", Price: "$120.00 USD", category: "phone" },
  { id: 20, cardImage: "../../src/ProductImage/PH6.png", cardH3Title: "Phone", Price: "$125.00 USD", category: "phone" },
  { id: 21, cardImage: "../../src/ProductImage/PH7.png", cardH3Title: "Phone", Price: "$140.00 USD", category: "phone" },
  /////////////////////jostik///////////////////////////////
  { id: 22, cardImage: "../../src/ProductImage/JOS1.png", cardH3Title: "Jostik", Price: "$30.00 USD", category: "jostik" },
  { id: 23, cardImage: "../../src/ProductImage/JOS2.png", cardH3Title: "Jostik", Price: "$25.00 USD", category: "jostik" },
  { id: 24, cardImage: "../../src/ProductImage/JOS3.png", cardH3Title: "Jostik", Price: "$60.00 USD", category: "jostik" },
  { id: 25, cardImage: "../../src/ProductImage/JOS4.png", cardH3Title: "Jostik", Price: "$82.00 USD", category: "jostik" },
  { id: 26, cardImage: "../../src/ProductImage/JOS5.png", cardH3Title: "Jostik", Price: "$7.00 USD" ,  category: "jostik" },
  /////////////////////Keyboard///////////////////////////////
  { id: 27, cardImage: "../../src/ProductImage/KE1.png", cardH3Title: "Keyboard", Price: "$15.00 USD", category: "keyboard" },
  { id: 28, cardImage: "../../src/ProductImage/KE2.png", cardH3Title: "Keyboard", Price: "$20.00 USD", category: "keyboard" },
  { id: 29, cardImage: "../../src/ProductImage/KE3.png", cardH3Title: "Keyboard", Price: "$8.00 USD", category: "keyboard" },
  { id: 30, cardImage: "../../src/ProductImage/KE4.png", cardH3Title: "Keyboard", Price: "$45.00 USD", category: "keyboard" },
  { id: 31, cardImage: "../../src/ProductImage/KE5.png", cardH3Title: "Keyboard", Price: "$50.00 USD" ,  category: "keyboard" },
  /////////////////////Mouse///////////////////////////////
  { id: 32, cardImage: "../../src/ProductImage/MO1.png", cardH3Title: "Mouse", Price: "$15.00 USD", category: "mouse" },
  { id: 33, cardImage: "../../src/ProductImage/MO2.png", cardH3Title: "Mouse", Price: "$40.00 USD", category: "mouse" },
  { id: 34, cardImage: "../../src/ProductImage/MO3.png", cardH3Title: "Mouse", Price: "$7.00 USD", category: "mouse" },
  { id: 35, cardImage: "../../src/ProductImage/MO4.png", cardH3Title: "Mouse", Price: "$49.00 USD", category: "mouse" },
  /////////////////////Playstaion 4///////////////////////////////
  { id: 36, cardImage: "../../src/ProductImage/P1.png", cardH3Title: "Ps4", Price: "$115.00 USD", category: "ps4" },
  { id: 37, cardImage: "../../src/ProductImage/P2.png", cardH3Title: "Ps4", Price: "$140.00 USD", category: "ps4" },
  { id: 38, cardImage: "../../src/ProductImage/P3.png", cardH3Title: "Ps4", Price: "$170.00 USD", category: "ps4" },
  /////////////////////Playstaion 5///////////////////////////////
  { id:39, cardImage: "../../src/ProductImage/PS5.png", cardH3Title: "Ps5", Price: "$215.00 USD", category: "ps5" },
  /////////////////////XBOX///////////////////////////////
   { id: 40, cardImage: "../../src/ProductImage/X1.png", cardH3Title: "XBOX", Price: "$150.00 USD", category: "xbox" },
  { id: 41, cardImage: "../../src/ProductImage/X2.png", cardH3Title: "XBOX", Price: "$170.00 USD", category: "xbox" },
  { id: 42, cardImage: "../../src/ProductImage/X3.png", cardH3Title: "XBOX", Price: "$190.00 USD", category: "xbox" },
  /////////////////////Laptop///////////////////////////////
  { id: 43, cardImage: "../../src/ProductImage/LAP1.png", cardH3Title: "Laptop", Price: "$125.00 USD", category: "laptop" },
  { id: 44, cardImage: "../../src/ProductImage/LAP2.png", cardH3Title: "Laptop", Price: "$240.00 USD", category: "laptop" },
  { id: 45, cardImage: "../../src/ProductImage/LAP3.png", cardH3Title: "Laptop", Price: "$307.00 USD", category: "laptop" },
  { id: 46, cardImage: "../../src/ProductImage/LAP4.png", cardH3Title: "Laptop", Price: "$349.00 USD", category: "laptop" },
  /////////////////////Secreen///////////////////////////////
  { id: 47, cardImage: "../../src/ProductImage/SC1.png", cardH3Title: "Mintor", Price: "$325.00 USD", category: "mintor" },
  { id: 48, cardImage: "../../src/ProductImage/SC2.png", cardH3Title: "Mintor", Price: "$340.00 USD", category: "mintor" },


];

export const HomeProduct: ProductDataType[] = [
  { id: 49, cardImage: "../../src/HomeImage/GA1.png", cardH3Title: "Blue Ear Muffs", Price: "$79.00 USD", category: "Game" },
  { id: 50, cardImage: "../../src/HomeImage/GA2.png", cardH3Title: "Blue Ear Muffs", Price: "$79.00 USD", category: "Game" },
  { id: 51, cardImage: "../../src/HomeImage/GA3.png", cardH3Title: "Blue Ear Muffs", Price: "$79.00 USD", category: "Game" },
  { id: 52, cardImage: "../../src/HomeImage/GA4.png", cardH3Title: "Blue Ear Muffs", Price: "$79.00 USD", category: "Game" },
  { id: 53, cardImage: "../../src/HomeImage/GA5.png", cardH3Title: "Blue Ear Muffs", Price: "$79.00 USD", category: "Game" },
  { id: 54, cardImage: "../../src/HomeImage/GA6.png", cardH3Title: "Blue Ear Muffs", Price: "$79.00 USD", category: "Game" },
];

export const HomeProduct2: ProductDataType[] = [
  { id: 55, cardImage: "../../src/HomeImage/AR1.png", cardH3Title: "Blue Ear Muffs", Price: "$79.00 USD", category: "Airpod" },
  { id: 56, cardImage: "../../src/HomeImage/AR2.png", cardH3Title: "Blue Ear Muffs", Price: "$79.00 USD", category: "Airpod" },
  { id: 57, cardImage: "../../src/HomeImage/AR3.png", cardH3Title: "Blue Ear Muffs", Price: "$79.00 USD", category: "Airpod" },
  { id: 58, cardImage: "../../src/HomeImage/AR4.png", cardH3Title: "Blue Ear Muffs", Price: "$79.00 USD", category: "Airpod" },
  { id: 59, cardImage: "../../src/HomeImage/AR5.png", cardH3Title: "Blue Ear Muffs", Price: "$79.00 USD", category: "Airpod" },
  { id: 60, cardImage: "../../src/HomeImage/AR6.png", cardH3Title: "Blue Ear Muffs", Price: "$79.00 USD", category: "Airpod" },
];

export const HomeProduct3: ProductDataType[] = [
  { id: 61, cardImage: "../../src/HomeImage/K1.png", cardH3Title: "Blue Ear Muffs", Price: "$79.00 USD", category: "Game" },
  { id: 62, cardImage: "../../src/HomeImage/K2.png", cardH3Title: "Blue Ear Muffs", Price: "$79.00 USD", category: "Game" },
  { id: 63, cardImage: "../../src/HomeImage/K3.png", cardH3Title: "Blue Ear Muffs", Price: "$79.00 USD", category: "Game" },
  { id: 64, cardImage: "../../src/HomeImage/K4.png", cardH3Title: "Blue Ear Muffs", Price: "$79.00 USD", category: "Game" },
  { id: 65, cardImage: "../../src/HomeImage/K5.png", cardH3Title: "Blue Ear Muffs", Price: "$79.00 USD", category: "Game" },
  { id: 66, cardImage: "../../src/HomeImage/K6.png", cardH3Title: "Blue Ear Muffs", Price: "$79.00 USD", category: "Game" },
];
