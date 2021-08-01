import React from "react";
import "./nav.css";

const Nav = () => {
  return (
    <div className="nav">
      <div className="nav_content">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>

        <p className="1">All</p>

        <p className="2">Fresh</p>
        <p className="3">Surya's Amazon.in</p>
        <p className="4">Amazone Pay</p>
        <p className="5">Best Sellers</p>
        <p className="six">Mobile</p>
        <p className="seven">Prime</p>
        <p className="eight">Buy Again</p>
        <p className="nine">Coutomer Service</p>
        <p className="ten">Today's Deal</p>
        <p className="eleven">New Releases</p>
        <p className="twelve">Electronics</p>
      </div>
    </div>
  );
};

export default Nav;
