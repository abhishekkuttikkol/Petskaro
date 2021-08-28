import React from "react";
import { useState } from "react";
import { createContext } from "react";

export const PostContext = createContext(null);

function Post({ children }) {
  const [products, setProducts] = useState([]);
  return (
    <PostContext.Provider value={{ products, setProducts }}>
      {children}
    </PostContext.Provider>
  );
}

export default Post;