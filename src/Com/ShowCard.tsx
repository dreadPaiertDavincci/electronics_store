import React from "react";
import "../Style/ShowCard.css"; 

const ProductPage: React.FC = () => {
  return (
    <div className="product-page">
      <div className="product-card">
        
        <div className="product-left">
          <img
            src="https://via.placeholder.com/300x500.png?text=Fitness+Tracker"
            alt="Fitness Tracker"
            className="product-image"
          />

          <div className="product-thumbs">
            <img src="https://via.placeholder.com/80x120.png?text=Img1" alt="thumb1" />
            <img src="https://via.placeholder.com/80x120.png?text=Img2" alt="thumb2" />
            <img src="https://via.placeholder.com/80x120.png?text=Img3" alt="thumb3" />
          </div>
        </div>

        <div className="product-details">
          <h2>Fitness Tracker</h2>
          <div className="product-rating">⭐⭐⭐⭐</div>
          <p className="product-price">$ 80.00 USD</p>
          <p className="product-desc">
            Effect font move vertical share. Connection frame edit export
            arrow. Undo device move opacity image layer. List star blur
            strikethrough arrow.
          </p>

          <div className="cart-actions">
            <input type="number" defaultValue={1} min={1} />
            <button>Add to Cart</button>
          </div>

          <p className="product-sku">
            <strong>SKU:</strong> NX8SA6IJ
          </p>

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