import React from "react";
import Sidebar from "../Page/Sidebar"; 
import ProductCard from "../Com/ProductCard";
import "../Style/Shop.css";


function Shop()  {
  const products = [
    {
      image: "../../public/edit.jpg", 
      title: "Blue Ear Muffs",
      price: "$ 79.00 USD",
    },
   
  ];

  return (
    <section className="shop-section">
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
    </section>
  );
};

export default Shop;
