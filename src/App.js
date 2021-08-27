import Cart from "./Components/Cart";
import Header from "./Components/Header";
import Products from "./Components/Products";
import Home from "./Pages/Home";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ViewProductPage from "./Pages/ViewProductPage";
import SignIn from "./Components/SignIn";
import Signup from "./Components/Signup";

function App() {
  return (
    <div className="App">
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
    </div>
  );
}

export default App;
