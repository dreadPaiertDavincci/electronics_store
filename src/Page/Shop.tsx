import { useMemo, useState, useRef } from "react";
import { FiSearch } from "react-icons/fi";
import { MdArrowCircleRight } from "react-icons/md";
import { ProductData } from "../Com/ProductData";
import "../Style/Shop.css";
import ProductCard from "../Com/ProductCard";
import Footer from "./Footer";
import { useCardAnimation } from "../Com/useCardAnimation";

function Shop() {
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [selectedCategory, setSelectedCategory] = useState<string>("Camera");

  const containerRef = useRef<HTMLDivElement>(null);
  useCardAnimation(containerRef, [selectedCategory]); // إعادة الانيميشن عند تغيير الكاتيجوري

  const normalize = (s: string) => s.trim().toLowerCase();

  const allCategories = useMemo(
    () =>
      Array.from(new Set(ProductData.map((p) => (p.category || "").trim())))
        .filter((c) => c.length > 0)
        .sort(),
    []
  );

  const brands: string[] = [
    "CamNX",
    "DesertX",
    "LoginX",
    "Monixon",
    "Nexoy",
    "StarnX",
  ];

  const filteredCategories = allCategories.filter((cat) =>
    normalize(cat).includes(normalize(searchTerm))
  );

  const filteredBrands = brands.filter((brand) =>
    normalize(brand).includes(normalize(searchTerm))
  );

  const filteredProducts = useMemo(() => {
    return ProductData.filter(
      (p) => normalize(p.category || "") === normalize(selectedCategory)
    );
  }, [selectedCategory]);

  return (
    <>
      <section className="ShopSction">
        <aside className="sidebar">
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

          <h3 className="section-title">Categories</h3>
          <ul className="list-box">
            {filteredCategories.map((cat) => (
              <li
                key={cat}
                className={`list-item ${
                  normalize(selectedCategory) === normalize(cat) ? "active" : ""
                }`}
                onClick={() => setSelectedCategory(cat)}
                style={{ cursor: "pointer" }}
              >
                <span>{cat}</span>
                <MdArrowCircleRight className="list-icon" />
              </li>
            ))}
          </ul>

          <h3 className="section-title">Brands</h3>
          <ul className="list-box">
            {filteredBrands.map((brand) => (
              <li key={brand} className="list-item">
                <span>{brand}</span>
                <MdArrowCircleRight className="list-icon" />
              </li>
            ))}
          </ul>
        </aside>

        <div className="products-container" ref={containerRef}>
          {filteredProducts.map((p, idx) => (
            <ProductCard
              key={`${p.id}-${p.cardImage}-${idx}`}
              image={p.cardImage}
              title={p.cardH3Title}
              price={p.Price}
              id={p.id}
            />
          ))}
        </div>
      </section>

      <div className="ShopFooter">
        <Footer />
      </div>
    </>
  );
}

export default Shop;
