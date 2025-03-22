import React from "react";
import "./Navbar.css";
const Navbar = () => {
  return (
    <div className="nav-container">
      <nav className="navbar">
        <ul>
          <li className="item-nav">
            <a href="">Home</a>
          </li>
          <li className="item-nav">
            <a href="">Sobre nós</a>
          </li>
          <li className="button-nav">
            <button>Carrinho</button>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
