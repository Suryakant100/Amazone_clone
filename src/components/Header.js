import React from "react";
import "./header.css";
import SearchIcon from "@material-ui/icons/Search";
import RoomIcon from "@material-ui/icons/Room";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import { Link } from "react-router-dom";
import { useStateValue } from "./StateProvider";
import { auth } from "../firebase";

const Header = () => {
  const [{ basket, user }, dispatch] = useStateValue();
  console.log(user);
  const handleAuth = () => {
    auth.signOut();
  };

  return (
    <div className="header">
      {/* logo */}
      <Link to="/">
        <img
          src="https://pngimg.com/uploads/amazon/amazon_PNG11.png"
          alt="amzon_logo"
          className="header_logo"
        />
      </Link>

      {/* location selector */}
      <div className="header_location">
        <span className="header_optionOneline header_hello">Hello</span>
        <span className="header_optionTwoline">
          <RoomIcon className="header_map" /> Select Your address
        </span>
      </div>
      {/* All option like amzone */}
      <div className="all_option">
        {/* <p className="amzone_all">All</p> */}
        <select className="header-select">
          <option>All</option>
          <option>Deals</option>
          <option>Alexa Skill</option>
          <option>Amazon Devices</option>
          <option>Amazone Pnatry</option>
          <option>Applicance</option>
          <option>App & Games</option>
          <option>Baby</option>
          <option>Beauty</option>
          <option>Books</option>
          <option>Cars & Moterbikes</option>
          <option>Cloaths</option>
        </select>
        {/* <ArrowDropDownIcon /> */}
      </div>
      {/* Search_bar */}
      <div className="header_search">
        <input className="header_searchInput" type="text" />
        {/* Search logo */}
        <SearchIcon className="header_searchIcon" />
      </div>
      <div className="header_nav">
        {/* 1 options in header/navbar */}
        <Link to={!user && "/login"}>
          <div className="header_options">
            <span className="header_optionOneline">
              Hello,{user ? user?.email : "Guest"}
            </span>
            <span onClick={handleAuth} className="header_optionTwoline">
              {user ? "Sign Out" : "Sign In"}
            </span>
          </div>
        </Link>
        {/* 2 options in header/navbar */}
        <div className="header_options">
          <span className="header_optionOneline">Returns</span>
          <span className="header_optionTwoline"> & Order</span>
        </div>
        {/* 3 options in header/navbar */}
        <div className="header_options">
          <span className="header_optionOneline">Your </span>
          <span className="header_optionTwoline">Prime</span>
        </div>
        <Link to="/checkout">
          <div className="header_cart">
            <ShoppingBasketIcon />
            <span className="header_optionOneline header_cartCount">
              {basket?.length}
            </span>
          </div>
        </Link>
        {/*cart/basket icon  */}
      </div>
    </div>
  );
};

export default Header;
