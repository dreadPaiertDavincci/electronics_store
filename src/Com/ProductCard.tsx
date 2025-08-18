import { Link } from "react-router-dom";
import "../Style/ProductCard.css";
  

type ProductCardProps = {
  image: string;
  title: string;
  price: string;
};

const ProductCard = ({ image, title, price }: ProductCardProps) => {
  return (
    
    <div className="product-card">
      <img src={image} alt={title} className="product-image" />
      <h3 className="product-title">{title}</h3>
      <p className="product-price">{price}</p>

      <Link to="/Product" className="arrow-icon">
        →
      </Link>
    </div>
  );
};

export default ProductCard;
