import React from "react";
import Cart from "./Components/Cart";
import Header from "./Components/Header";
import Home from "./Pages/Home";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ViewProductPage from "./Pages/ViewProductPage";
import SignIn from "./Components/SignIn";
import Signup from "./Components/Signup";
import Post from "./Store/PostContext";
import SidebarControl from "./Store/SidebarContext"
import {App as Firebase} from "./Firebase/config"
import { useEffect } from "react";
import { useContext } from "react";
import Auth, { AuthContext } from "./Store/AuthContext";

function App() {
  const {setUser} = useContext(AuthContext)
  useEffect(() => {
    Firebase.auth().onAuthStateChanged((user)=>{
      console.log(user)
      setUser(user)
    })
  })
  return (
    <div className="App">
      <SidebarControl>
      <Post>
      <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/cart">
            <Cart />
          </Route>
          <Route exact path="/products">
            <ViewProductPage />
          </Route>
          <Route exact path="/sign-in">
            <SignIn />
          </Route>
          <Route exact path="/sign-up">
            <Signup />
          </Route>
        </Switch>
      </Router>
      </Post>
    </SidebarControl>

    </div>
  
  );
}

export default App;
