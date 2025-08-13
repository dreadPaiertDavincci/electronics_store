import React, { useState } from "react";
import { FiSearch } from "react-icons/fi";
import { MdArrowCircleRight } from "react-icons/md";
import "../Style/Sidebar.css";

const categories = [
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

const brands = [
  "CamNX",
  "DesertX",
  "LoginX",
  "Monixon",
  "Nexoy",
  "StarnX",
];

export default function Sidebar() {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredCategories = categories.filter((cat) =>
    cat.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const filteredBrands = brands.filter((brand) =>
    brand.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <aside className="sidebar">
      {/* Search Box */}
      <div className="search-box">
        <input
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
        {filteredCategories.map((cat) => (
          <li key={cat} className="list-item">
            <span>{cat}</span>
            <MdArrowCircleRight className="list-icon" />
          </li>
        ))}
      </ul>

      {/* Brands */}
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

  );
}
