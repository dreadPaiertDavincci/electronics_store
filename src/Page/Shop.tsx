import { useState } from "react";
import { FiSearch } from "react-icons/fi";
import { MdArrowCircleRight } from "react-icons/md";
import { ProductData } from "../Com/ProductData";
import "../Style/Sidebar.css";
import ProductCard from "../Com/ProductCard";
function Shop() {
  const categories: string[] = [
    "CCTV",
    "Camera",
    "Earbuds",
    "Headphone",
    "Joystick",
    "Keyboard",
    "Laptop",
    "Monitor",
    "Mouse",
    "Phone",
  ];

  const brands: string[] = [
    "CamNX",
    "DesertX",
    "LoginX",
    "Monixon",
    "Nexoy",
    "StarnX",
  ];
  const [searchTerm, setSearchTerm] = useState<string>("");

  const filteredCategories = categories.filter((cat) =>
    cat.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const filteredBrands = brands.filter((brand) =>
    brand.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <section className="ShopSction">
      <aside className="sidebar">
        {/* Search Box */}
        <div className="search-box">
          <input
            className="inputCA"
            type="text"
            placeholder="Search..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <FiSearch className="search-icon" />
        </div>

        {/* Categories */}
        <h3 className="section-title">Categories</h3>
        <ul className="list-box">
          {filteredCategories.map((cat, index) => (
            <li key={index} className="list-item">
              <span>{cat}</span>
              <MdArrowCircleRight className="list-icon" />
            </li>
          ))}
        </ul>

        {/* Brands */}
        <h3 className="section-title">Brands</h3>
        <ul className="list-box">
          {filteredBrands.map((brand, index) => (
            <li key={index} className="list-item">
              <span>{brand}</span>
              <MdArrowCircleRight className="list-icon" />
            </li>
          ))}
        </ul>
      </aside>

      {/* Products */}
      <div className="products-container">
        {ProductData.map((p) => (
          <ProductCard
            key={p.id}
            image={p.cardImage}
            title={p.cardH3Title}
            price={p.Price}
            id={p.id}  
          />
        ))}
      </div>
    </section>
  );
}
export default Shop;
