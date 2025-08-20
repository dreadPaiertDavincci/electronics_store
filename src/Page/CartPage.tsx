import "../Style/CartPage.css";
import { IoIosRemoveCircleOutline } from "react-icons/io";

function CartPage() {
  return (
    <section className="cartPageSection">
      <div className="InfoCon">
        <div className="ContinarCardCart">

              <div className="cartCard">
                <div className="CartImage">
                    <img id="cartimage" src="../../src/HomeImage/C1.png" alt="tahiyati" />
                </div>
                <div className="cartCardBody">
                    <h2 id="cartTi">Airpod</h2>
                    <p id="cartPa">Lorem ipsum dolor sit amet.</p>
                    <p id="cartStar">⭐⭐⭐⭐</p>
                    <div className="PriceContinar">
                        <p className="PriceCart">Price: 000$</p>
                        <input type="number" name="" 
                        defaultValue={1} min={1}
                        id="cartCardFieldId" />
                    </div>
            
                </div>
                <div className="SilConti">
                    <IoIosRemoveCircleOutline />
                </div>
            </div>


        </div>

        <div className="ButtTotalContinar">

            <div className="TotalPriceContinar"> 
                <h1 id="TOID"></h1>
            </div>


        </div>
      </div>
    </section>
  );
}
export default CartPage;
