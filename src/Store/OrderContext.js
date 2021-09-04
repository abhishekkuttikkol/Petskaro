import React from "react";
import { useState } from "react";
import { createContext } from "react";

export const OrderPlaceContext = createContext(null);

function OrderContext({ children }) {
  const [details, setDetails] = useState();
  return (
    <OrderPlaceContext.Provider value={{ details, setDetails }}>
      {children}
    </OrderPlaceContext.Provider>
  );
}

export default OrderContext;
