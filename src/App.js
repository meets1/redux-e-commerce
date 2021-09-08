import "./App.css";
import Home from "./components/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Product from "./components/Product";
import Cart from "./components/Cart";
import Navbar from "./components/Navbar";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import Wishlist from "./components/Wishlist";

function App() {
  const productCount = useSelector((state) => state.addToCartReducer.cartItems);
  const [pc, setPc] = useState(0);
  useEffect(() => {
    if (productCount) {
      setPc(productCount.length);
    }
  }, [productCount]);
  return (
    <div className="app">
      <Router>
        <Navbar pc={pc} />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/product/:productId" component={Product} />
          <Route exact path="/cart" component={Cart} />
          <Route exact path="/wishlist" component={Wishlist} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
