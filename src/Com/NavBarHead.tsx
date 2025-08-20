import { Link } from "react-router";
import "../Style/NavBar.css";
import SearchField from "./SearchField";
function NavBarHead() {
  return (
    <div className="navHeader">
      <div className="LogoHeader">
       <img id = "LogoImage" src="../../public/Logo/نص_فقرتك-removebg-preview.png" alt="" />
      </div>
      <div className="SearchCon">
        <SearchField />
      </div>
      <div className="favuret_Cart_User">
        <div className="iconCon">
          <Link to="/CartPage"><i id="icones" className="bxr  bx-calendar-heart"></i></Link>
          <span className="cartSpan">0</span>
        </div>
        <div className="iconCon">
         <Link to="/Favuret"><i id="icones" className="bx  bx-shopping-bag-alt"></i></Link>
          <span className="cartSpan">0</span>
        </div>
      </div>
    </div>
  );
}
export default NavBarHead;