import { Link } from "react-router-dom";
import "../Style/NavBar.css";
import SearchField from "./SearchField";
import { useCart } from "./CartContext";
import { useFavourite } from "./FavouriteContext";

function NavBarHead() {
 // هذه هي القيمة الابتدائية للمجموع قبل أن يبدأ الجمع .
 // sum : هوه المتغير الي رح نخزن فيه المجموع
 // item: هاد اعتبر ال cart عبارة عن مصفوفة وبناء على عدد ال quantity عم يحسب ال total item
  const { cart } = useCart();

  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);

  const { favourites } = useFavourite();

  return (
    <div className="navHeader">
      <div className="LogoHeader">
        <img
          id="LogoImage"
          src="../../public/Logo/نص_فقرتك-removebg-preview.png"
          alt=""
        />
      </div>
      <div className="SearchCon">
        <SearchField />
      </div>
      <div className="favuret_Cart_User">
        <div className="iconCon">
          <Link to="/Favuret" id="HEDLİ" >
            <i id="icones" className="bx bx-heart"></i>
          </Link>
          <span className="cartSpan">{favourites.length}</span>
        </div>
        <div className="iconCon">
          <Link to="/CartPage" id="HEDLİ">
            <i id="icones" className="bx bx-shopping-bag-alt"></i>
          </Link>
          <span className="cartSpan">{totalItems}</span>
        </div>
      </div>
    </div>
  );
}

export default NavBarHead;
