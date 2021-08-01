import React from "react";
import "./checkout.css";
import CheckoutProduct from "./CheckoutProduct";
import Subtotal from "./Subtotal";
import { useStateValue } from "./StateProvider";

const Checkout = () => {
  const [{ basket, user }, dispatch] = useStateValue();
  return (
    <div className="checkout">
      <div className="checkout_left">
        <img
          className="checkout_add"
          src="https://m.media-amazon.com/images/G/31/AMS/IN/970X250-_desktop_banner.jpg"
          alt="add"
        />

        <div style={{ width: "100%" }}>
          <h3>Hello,{!user ? "" : user.email}</h3>
          <h2 className="checkout_title">
            {basket.length > 0
              ? "Your Shopping Basket"
              : "Your Shopping Basket is Empty.."}
          </h2>
          {basket.map((item, i) => (
            <CheckoutProduct
              key={i}
              title={item.title}
              s_price={item.s_price}
              A_price={item.A_price}
              img={item.img}
              rating={item.rating}
            />
          ))}
        </div>
      </div>
      <div className="checkout_right">
        <Subtotal />
      </div>
    </div>
  );
};

export default Checkout;
