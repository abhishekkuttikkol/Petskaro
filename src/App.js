import React from "react";
import Home from "./Pages/Home";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ViewProductPage from "./Pages/ViewProductPage";
import SignIn from "./Components/SignIn";
import Signup from "./Components/Signup";
import Post from "./Store/PostContext";
import SidebarControl from "./Store/SidebarContext";
import { App as Firebase } from "./Firebase/config";
import { useEffect } from "react";
import { useContext } from "react";
import { AuthContext } from "./Store/AuthContext";
import Cart from "./Components/Cart";
import Search from "./Store/SearchContext";
import Contact from "./Components/Contact";

function App() {
  const { setUser } = useContext(AuthContext);
  useEffect(() => {
    Firebase.auth().onAuthStateChanged((user) => {
      setUser(user);
    });
  });
  return (
    <div className="App">
      <SidebarControl>
        <Search>
        <Post>
          <Router>
            <Switch>
              <Route exact path="/">
                <Home />
              </Route>
              <Route exact path="/cart">
                <Cart />
                <Home />
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
                <Contact/>
              </Route>
            </Switch>
          </Router>
        </Post>
        </Search>
      </SidebarControl>
    </div>
  );
}

export default App;
