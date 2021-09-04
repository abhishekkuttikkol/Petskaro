import React from "react";
import { useState } from "react";
import { createContext } from "react";

export const AuthContext = createContext();

function Auth({ children }) {
  const [user, setUser] = useState('');
  return (
    <AuthContext.Provider value={{ user, setUser }}>
      {children}
    </AuthContext.Provider>
  );
}

export default Auth;
