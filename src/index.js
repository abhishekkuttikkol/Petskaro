import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import Auth from "./Store/AuthContext";
import OrderContext from "./Store/OrderContext";
import SidebarControl from "./Store/SidebarContext";
import Search from "./Store/SearchContext";
import Post from "./Store/PostContext";

ReactDOM.render(
  <React.StrictMode>
    <OrderContext>
      <SidebarControl>
        <Search>
          <Post>
            <Auth>
              <App />
            </Auth>
          </Post>
        </Search>
      </SidebarControl>
    </OrderContext>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
