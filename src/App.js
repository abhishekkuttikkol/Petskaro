import Cart from "./Components/Cart";
import Header from "./Components/Header";
import Home from "./Pages/Home";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ViewProductPage from "./Pages/ViewProductPage";
import SignIn from "./Components/SignIn";
import Signup from "./Components/Signup";
import Post from "./Store/PostContext";
import SidebarControl from "./Store/SidebarContext"


function App() {
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
