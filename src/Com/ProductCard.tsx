import { Link } from "react-router-dom";
import "../Style/ProductCard.css";

type ProductCardProps = {
  id: number;
  image: string;
  title: string;
  price: string;
};

const ProductCard = ({ id, image, title, price }: ProductCardProps) => {
  return (
  <Link to={`/product/${id}`} className="product-link">
  <div className="product-card">
    <img src={image} alt={title} className="product-image" />
    <div className="product-info-wrapper">
      <div className="product-text">
        <h3 className="product-title">{title}</h3>
        <p className="product-price">{price}</p>
      </div>
      <div className="product-arrow">→</div> 
    </div>
  </div>
</Link>
  );
};

export default ProductCard;
