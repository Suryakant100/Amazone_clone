export const initialState = {
  basket: [],
  user: null,
};

// selector
export const getBasketTotal = (basket) => {
  return basket?.reduce((amount, item) => item.s_price + amount, 0);
};
// console.log(getBasketTotal);
const reducer = (state, action) => {
  // console.log(action);
  switch (action.type) {
    case "ADD_TO-BASKET":
      return {
        ...state,
        basket: [...state.basket, action.item],
      };

    case "REMOVE_FROM_BASKET":
      const index = state.basket.findIndex(
        (basketitem) => basketitem.title === action.title
      );

      let newBasket = [...state.basket];
      if (index >= 0) {
        newBasket.splice(index, 1);
      } else {
        console.warn(`can't remove item (name:${action.title}) `);
      }
      return {
        ...state,
        basket: newBasket,
      };

    case "SET_USER":
      return {
        ...state,
        user: action.user,
      };

    case "EMPTY_BASKET":
      return {
        ...state,
        basket: [],
      };
    default:
      return state;
  }
};

export default reducer;
