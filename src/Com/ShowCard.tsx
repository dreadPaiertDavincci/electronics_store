import { useParams, Link } from "react-router-dom";
import { ProductData, HomeProduct, HomeProduct2, HomeProduct3 } from "./ProductData";
import "../Style/ShowCard.css";
import { AiOutlineHeart } from "react-icons/ai";

function ShowCard() {
  const { id } = useParams<{ id: string }>();
  const allProducts = [...ProductData, ...HomeProduct, ...HomeProduct2, ...HomeProduct3];
  const product = allProducts.find((p) => p.id === Number(id));

  if (!product) {
    return (
      <div className="showcard-notfound">
        <h2>Product Not Found</h2>
        <Link to="/shop" className="back-link">Back to Shop</Link>
      </div>
    );
  }

  return (
    <div className="show-page">
      <div className="show-card">
                <div className="show-left">
          <img
               src={product.cardImage}
            alt={product.cardH3Title}
            className="show-image"
          />
        </div>
        <div className="show-details">
          <h2>{product.cardH3Title}</h2>
          <div className="show-rating">⭐⭐⭐⭐</div>
          <p className="show-price">{product.Price}</p>
          <p className="show-desc">
            This is a high-quality product designed to meet your needs.
            Enjoy premium quality and elegant design that fits your lifestyle.
          </p>
          <div className="cart-actions">
            <input type="number" defaultValue={1} min={1} />
            <button className="add-cart-btn">Add to Cart</button>
            <button className="wishlist-btn">
              <AiOutlineHeart size={22} />
            </button>
          </div>
          <p className="show-sku">
            <strong>SKU:</strong> NX8SA6IJ
          </p>
          <div className="share">
            <span>Share:</span>
            <i>👍</i>
            <i>🐦</i>
            <i>📌</i>
          </div>
          <Link to="/shop" className="back-link">← Back to Shop</Link>
        </div>
      </div>
    </div>
  );
}

export default ShowCard;
