import "../Style/NavBar.css";
import DarkMod from "./DarkMod";
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
          <i id="icones" className="bxr  bx-calendar-heart"></i>
          <span className="cartSpan">0</span>
        </div>

        <div className="iconCon">
          <i id="icones" className="bx  bx-shopping-bag-alt"></i>
          <span className="cartSpan">0</span>
        </div>
        <div className="dark">
          <DarkMod />
        </div>
      </div>
    </div>
  );
}
export default NavBarHead;