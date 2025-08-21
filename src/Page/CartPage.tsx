import "../Style/CartFavuret.css";
import { IoIosRemoveCircleOutline } from "react-icons/io";
import Footer from "./Footer";
import { useState, type ChangeEvent } from "react";
interface CartPageCounter  { 
  Counter:number; 
}
function CartPage() {
  const [count , setCount]  = useState<CartPageCounter>({Counter:0});
  const handleChang = (e:ChangeEvent<HTMLInputElement>)=> {
    const {value , name} = e.target; 
    setCount({...count , [name]:value});
  }

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
                <input
                  type="number"
                  name="Counter"
                  value={count.Counter}
                  onChange={handleChang}
                  defaultValue={1}
                  min={1}
                  id="cartCardFieldId"
                />
              </div>
            </div>
            <div className="SilConti">
              <IoIosRemoveCircleOutline />
            </div>
          </div>
        </div>

        <div className="ButtTotalContinar">
          <h1 id="TOID">Total Price</h1>
          <p id="priceToT">0000$</p>
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
