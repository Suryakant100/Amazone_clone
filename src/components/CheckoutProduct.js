import React from "react";
import "./checkoutproduct.css";
import { useStateValue } from "./StateProvider";

const CheckoutProduct = ({ title, s_price, A_price, img, rating }) => {
  const [{ basket }, dispatch] = useStateValue();

  const removeFromBasket = () => {
    //   remove items from baskets
    dispatch({
      type: "REMOVE_FROM_BASKET",
      title: title,
    });
  };
  return (
    <div className="checkoutproduct">
      <img className="checkoutproduct_img" src={img} alt="product" />
      <div className="checkoutproduct_info">
        <p className="cheeckoutproduct_title">{title}</p>
        <p className="cheeckoutproduct_price">
          <small>₹</small>
          <strong> {s_price} </strong>
          <span>₹{A_price}</span>
        </p>
        <div className="ckeckoutproduct_rating">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <p key={i}>⭐</p>
            ))}
        </div>
        <button onClick={removeFromBasket}>Remove from Basket</button>
      </div>
    </div>
  );
};

export default CheckoutProduct;
