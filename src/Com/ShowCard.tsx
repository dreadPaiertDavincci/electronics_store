import { useParams, Link } from "react-router-dom";
import { ProductData, HomeProduct, HomeProduct2, HomeProduct3 } from "./ProductData";
import "../Style/ShowCard.css";

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
    <section className="showcard-section">
      <div className="showcard-container">
        <div className="showcard-image-box">
          <img src={product.cardImage} alt={product.cardH3Title} className="showcard-image" />
        </div>

        <div className="showcard-details">
          <h2 className="showcard-title">{product.cardH3Title}</h2>
          <p className="showcard-category">Category: {product.category}</p>
          <p className="showcard-price">{product.Price}</p>

          <p className="showcard-desc">
            This is a high-quality product designed to meet your needs. Enjoy premium quality
            and elegant design that fits your lifestyle.
          </p>

          <button className="showcard-addbtn">Add to Cart</button>
          <Link to="/shop" className="back-link">← Back to Shop</Link>
        </div>
      </div>
    </section>
  );
}

export default ShowCard;