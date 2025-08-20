import { IoIosRemoveCircleOutline } from "react-icons/io";
import "../Style/CartFavuret.css";
import Footer from "./Footer";
function Favourite() {
  return (
    <>
      <section className="cartPageSection">
        <div className="InfoCon">
          <div className="ContinarCardCart">
            <div className="cartCard">
              <div className="CartImage">
                <img
                  id="cartimage"
                  src="../../src/HomeImage/C1.png"
                  alt="tahiyati"
                />
              </div>
              <div className="cartCardBody">
                <h2 id="cartTi">Airpod</h2>
                <p id="cartPa">Lorem ipsum dolor sit amet.</p>
                <p id="cartStar">⭐⭐⭐⭐</p>
                <div className="PriceContinar">
                  <p className="PriceCart">Price: 000$</p>
                 
                  <button type="submit" 
                  onClick={(e) => {e.stopPropagation()}}
                  className="favuButton">Add to Cart</button>
                </div>
              </div>
              <div className="SilConti">
                <IoIosRemoveCircleOutline />
              </div>
            </div>

            
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
export default Favourite;
