import React from "react";
import "../Style/ProductCard.css";

type ProductCardProps = {
  image: string;
  title: string;
  price: string;
};

const ProductCard: React.FC<ProductCardProps> = ({ image, title, price }) => {
  return (
    <div className="product-card">
      <img src={image} alt={title} className="product-image" />
      <h3 className="product-title">{title}</h3>
      <p className="product-price">{price}</p>
      <div className="arrow-icon">→</div>
    </div>
  );
};

export default ProductCard;