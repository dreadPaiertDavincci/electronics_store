import React from "react";
import Sidebar from "../Page/Sidebar"; 
import ProductCard from "../Com/ProductCard";
import "../Style/Shop.css";
import "../Style/ProductCard.css";
import "../Style/Sidebar.css";

const Shop: React.FC = () => {
  const products = [
    {
      image: "/edit.jpg", 
      title: "Blue Ear Muffs",
      price: "$ 79.00 USD",
    },
    {
      image: "https://via.placeholder.com/300x200.png?text=Red+Ear+Muffs",
      title: "Red Ear Muffs",
      price: "$ 69.00 USD",
    },
  ];

  return (
    <div className="shop-layout">
      <Sidebar /> 
      <div className="shop-container">
        {products.map((p, index) => (
          <ProductCard
            key={index}
            image={p.image}
            title={p.title}
            price={p.price}
          />
        ))}
      </div>
    </div>
  );
};

export default Shop;
