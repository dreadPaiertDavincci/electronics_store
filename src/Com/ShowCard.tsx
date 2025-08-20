import React from "react";
import { useParams } from "react-router-dom";
import { ProductData } from "../Com/ProductData";
import "../Style/ShowCard.css";

const ProductPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const product = ProductData.find(p => p.id === Number(id));

  if (!product) return <h2>Product Not Found</h2>;

  return (
    <div className="show-page">
      <div className=" show-card">
        {/* صورة المنتج */}
        <div className="show-left">
          <img src={product.mainImage} alt={product.name} className="show-image" />
          <div className="show-thumbs">
            {product.thumbs.map((thumb, index) => (
              <img key={index} src={thumb} alt={`thumb${index + 1}`} />
            ))}
          </div>
        </div>

        {/* تفاصيل المنتج */}
        <div className="show-details">
          <h2>{product.name}</h2>
          <div className="show-rating">{product.rating}</div>
          <p className="show-price">{product.price}</p>
          <p className="show-desc">{product.desc}</p>

          <div className="cart-actions">
            <input type="number" defaultValue={1} min={1} />
            <button>Add to Cart</button>
          </div>

          <p className="show-sku"><strong>SKU:</strong> {product.sku}</p>

          <div className="share">
            <span>Share:</span>
            <i>👍</i>
            <i>🐦</i>
            <i>📌</i>
          </div>

          <div className="payment">
            <p>Payment Method:</p>
            <div className="payment-methods">
              <img src="https://upload.wikimedia.org/wikipedia/commons/4/41/Visa_Logo.png" alt="visa" />
              <img src="https://upload.wikimedia.org/wikipedia/commons/b/b5/PayPal.svg" alt="paypal" />
              <img src="https://upload.wikimedia.org/wikipedia/commons/a/a4/Mastercard_2019_logo.svg" alt="mastercard" />
              <img src="https://upload.wikimedia.org/wikipedia/commons/3/30/American_Express_logo_%282018%29.svg" alt="amex" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
