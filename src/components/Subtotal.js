import React from "react";
import "./subtotal.css";
import { useStateValue } from "./StateProvider";
import CurrencyFormat from "react-currency-format";
import { getBasketTotal } from "./reducer";
import { useHistory } from "react-router-dom";

const Subtotal = () => {
  const history = useHistory();

  const [{ basket, user }, dispatch] = useStateValue();
  // console.log(getBasketTotal);
  return (
    <div className="subtotal">
      <CurrencyFormat
        renderText={(value) => (
          <>
            <p>
              Subtotal ({basket.length} items): <strong>{value}</strong>
            </p>
            <small className="subtotal_gift">
              <input type="checkbox" /> This order contains a gift
            </small>
          </>
        )}
        decimalScale={2}
        value={getBasketTotal(basket)}
        displayType={"text"}
        thousandSeparator={true}
        prefix={"₹"}
      />
      <button
        onClick={
          !user
            ? alert("sign in for checkout")
            : (e) => history.push("/payment")
        }
        className={!user ? "not_user" : "user_found"}
      >
        {basket.length === 0 ? "Basket is Empty" : "Proceed To Checkout"}
      </button>
    </div>
  );
};

export default Subtotal;
