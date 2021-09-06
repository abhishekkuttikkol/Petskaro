import React from "react";
import Home from "./Pages/Home";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ViewProductPage from "./Pages/ViewProductPage";
import SignIn from "./Components/SignIn";
import Signup from "./Components/Signup";
import { App as Firebase } from "./Firebase/config";
import { useEffect } from "react";
import { useContext } from "react";
import { AuthContext } from "./Store/AuthContext";
import SellerOrder from "./Components/SellerOrder";
import Contact from "./Components/Contact";
import WishList from "./Components/WishList";
import ResetPassword from "./Components/ResetPassword";
import "tailwindcss/tailwind.css";
import MyOrders from "./Components/MyOrders";
import Order from "./Components/Order";
import AddPets from "./Components/AddPets";
import MyPosts from "./Components/MyPosts";

function App() {
  const { setUser } = useContext(AuthContext);
  useEffect(() => {
    Firebase.auth().onAuthStateChanged((user) => {
      setUser(user);
    });
  });
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/seller order">
            <SellerOrder />
          </Route>
          <Route exact path="/pets:petid">
            <ViewProductPage />
          </Route>
          <Route exact path="/sign-in">
            <SignIn />
          </Route>
          <Route exact path="/sign-up">
            <Signup />
          </Route>
          <Route exact path="/contact">
            <Contact />
          </Route>
          <Route exact path="/wish list">
            <WishList />
          </Route>
          <Route exact path="/my orders">
            <MyOrders />
          </Route>
          <Route exact path="/order">
            <Order />
          </Route>
          <Route exact path="/add pet">
            <AddPets />
          </Route>
          <Route exact path="/my posts">
            <MyPosts />
          </Route>
          <Route exact path="/reset password">
            <ResetPassword />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
