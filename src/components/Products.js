import React from "react";
import "./products.css";
import { useStateValue } from "./StateProvider";

const Products = ({ title, s_price, A_price, img, rating }) => {
  const [{ basket }, dispatch] = useStateValue();
  console.log(`basket is>>>>`, basket);

  const addToBasket = () => {
    // dispatch the item inyo data layer
    dispatch({
      type: "ADD_TO-BASKET",
      item: {
        title: title,
        s_price: s_price,
        A_price: A_price,
        img: img,
        rating: rating,
      },
    });
  };
  return (
    <div className="product">
      <div className="product_info">
        <p>{title}</p>
        <p className="product_price">
          <small>₹</small>
          <strong> {s_price} </strong>
          <span>{A_price}</span>
        </p>
        <div className="product_rating">
          {Array(rating)
            .fill()
            .map((_, i) => {
              return <p>⭐</p>;
            })}
        </div>
      </div>
      <img src={img} alt="product" />
      <button onClick={addToBasket}>Add to Basket</button>
    </div>
  );
};

export default Products;
