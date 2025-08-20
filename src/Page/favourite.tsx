import React from "react";
import { FaShoppingCart, FaTrash } from "react-icons/fa"; // سلة و أيقونة الحذف
import "../Style/favourite.css";

const Favourite: React.FC = () => {
  return (
    <section className="favouriteSection">
      <div className="pp-card">
        <div className="pp-image-wrapper">
          {/* زر الحذف */}
          <button className="pp-delete-btn">
            <FaTrash />
          </button>

          <img
            src="/e.png"
            alt="Huawei Watch Fit 3"
            className="pp-image"
          />
          <span className="pp-badge-blue">
            3 Installments for the Advance Price
          </span>
        </div>

        <div className="pp-content">
          <h2 className="pp-title">Huawei Watch Fit 3 - White</h2>

          <div className="pp-rating">
            <span className="pp-stars">★★★★☆</span>
          </div>

          <div className="pp-features">
            <span className="pp-tag">🚚 Fast Delivery</span>
            <span className="pp-tag">📦 Shipping is Free</span>
          </div>

          <div className="pp-prices">
            <p className="pp-lowest">The Lowest Price in the Last 30 Days</p>
            <div>
              <span className="pp-new-price">3.699 TL</span>
              <span className="pp-old-price">3.999 TL</span>
            </div>
          </div>

          <div className="pp-actions">
            <span className="pp-stock">Running out</span>
            <button className="pp-btn">
              <FaShoppingCart style={{ marginRight: "8px" }} /> Add to cart
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Favourite;
