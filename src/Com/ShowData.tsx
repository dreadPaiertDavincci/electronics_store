export interface Product {
  id: number;
  name: string;
  price: string;
  rating: string;
  desc: string;
  sku: string;
  mainImage: string;
  thumbs: string[];
}

export const ProductData: Product[] = [
  {
    id: 1,
    name: "Fitness Tracker",
    price: "$ 80.00 USD",
    rating: "⭐⭐⭐⭐",
    desc: "Effect font move vertical share. Connection frame edit export arrow. Undo device move opacity image layer. List star blur strikethrough arrow.",
    sku: "NX8SA6IJ",
    mainImage: "https://via.placeholder.com/300x500.png?text=Fitness+Tracker",
    thumbs: [
      "https://via.placeholder.com/80x120.png?text=Img1",
      "https://via.placeholder.com/80x120.png?text=Img2",
      "https://via.placeholder.com/80x120.png?text=Img3"
    ],
  },
  {
    id: 2,
    name: "Smart Watch",
    price: "$ 120.00 USD",
    rating: "⭐⭐⭐⭐⭐",
    desc: "هذا وصف مختلف للساعة الذكية.",
    sku: "SW12345",
    mainImage: "https://via.placeholder.com/300x500.png?text=Smart+Watch",
    thumbs: [
      "https://via.placeholder.com/80x120.png?text=SW1",
      "https://via.placeholder.com/80x120.png?text=SW2",
      "https://via.placeholder.com/80x120.png?text=SW3"
    ],
  },
];
