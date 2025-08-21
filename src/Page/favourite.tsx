import { IoIosRemoveCircleOutline } from "react-icons/io";
import "../Style/CartFavuret.css";
import Footer from "./Footer";
import { useFavourite } from "../Com/FavouriteContext";
import { useCart } from "../Com/CartContext";

function Favourite() {
  const { favourites, toggleFavourite } = useFavourite();
  const { addToCart } = useCart();

  return (
    <>
      <section className="cartPageSection">
        <div className="InfoCon">
          <div className="ContinarCardCart">
            {favourites.length === 0 && <p>No favourites yet ❤️</p>}
            {favourites.map((product) => (
              <div key={product.id} className="cartCard">
                <div className="CartImage">
                  <img
                    id="cartimage"
                    src={product.cardImage}
                    alt={product.cardH3Title}
                  />
                </div>
                <div className="cartCardBody">
                  <h2 id="cartTi">{product.cardH3Title}</h2>
                  <p id="cartPa">Lorem ipsum dolor sit amet.</p>
                  <p id="cartStar">{product.star}</p>
                  <div className="PriceContinar">
                    <p className="PriceCart">{product.Price}</p>
                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        addToCart(product, 1);
                      }}
                      className="favuButton"
                    >
                      Add to Cart
                    </button>
                  </div>
                </div>
                <div
                  className="SilConti"
                  onClick={() => toggleFavourite(product)}
                >
                  <IoIosRemoveCircleOutline />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default Favourite;
