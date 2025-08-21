import "../Style/CartFavuret.css";
import { IoIosRemoveCircleOutline } from "react-icons/io";
import Footer from "./Footer";
import { useCart } from "../Com/CartContext";

function CartPage() {
  const { cart, updateQuantity, removeFromCart } = useCart();

  const totalPrice = cart.reduce((sum, item) => {
    const price = Number(item.Price.replace(/[^0-9.]/g, ""));
    return sum + price * item.quantity;
  }, 0);

  return (
    <>
      <section className="cartPageSection">
        <div className="InfoCon">
          <div className="ContinarCardCart">
            {cart.map((item) => (
              <div className="cartCard" key={item.id}>
                <div className="CartImage">
                  <img id="cartimage" src={item.cardImage} alt={item.cardH3Title} />
                </div>
                <div className="cartCardBody">
                  <h2 id="cartTi">{item.cardH3Title}</h2>
                  <p id="cartPa">Lorem ipsum dolor sit amet.</p>
                  <p id="cartStar">{item.star}</p>
                  <div className="PriceContinar">
                    <p className="PriceCart">{item.Price}</p>
                    <input
                      type="number"
                      name="Counter"
                      value={item.quantity}
                      onChange={(e) => updateQuantity(item.id, Number(e.target.value))}
                      min={1}
                      id="cartCardFieldId"
                    />
                  </div>
                </div>
                <div className="SilConti" onClick={() => removeFromCart(item.id)}>
                  <IoIosRemoveCircleOutline />
                </div>
              </div>
            ))}
          </div>
          <div className="ButtTotalContinar">
            <h1 id="TOID">Total Price</h1>
            <p id="priceToT">{totalPrice}$</p>
            <button className="SubmitBtn" type="submit">
              Submit
            </button>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default CartPage;
