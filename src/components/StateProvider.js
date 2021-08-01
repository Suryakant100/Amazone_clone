import React, { createContext, useContext, useReducer } from "react";

// prepare the data layer
export const StateContext = createContext();

// wrap the app  and provide the data layer

export const StateProvider = ({ reducer, intialState, children }) => (
  <StateContext.Provider value={useReducer(reducer, intialState)}>
    {children}
  </StateContext.Provider>
);

// pull info from data layer

export const useStateValue = () => useContext(StateContext);
