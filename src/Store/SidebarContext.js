import React from "react";
import { useState } from "react";
import { createContext } from "react";

export const SidebarContext = createContext(null);

function SidebarControl({ children }) {
  const [open, setopen] = useState(false);
  return (
    <SidebarContext.Provider value={{ open, setopen }}>
      {children}
    </SidebarContext.Provider>
  );
}

export default SidebarControl;
