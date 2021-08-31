import React from "react";
import { useState } from "react";
import { createContext } from "react";

export const PostContext = createContext(null);

function Post({ children }) {
  const [pets, setPets] = useState([]);
  return (
    <PostContext.Provider value={{ pets, setPets }}>
      {children}
    </PostContext.Provider>
  );
}

export default Post;
