import { Fragment, useState, useEffect } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import "./App.css";
import Header from "./Components/Header";
import Main from "./Components/Main";
import Footer from "./Components/Footer";
import ProductsPage from "./Components/ProductsPage";
import Products from "./Components/Products";
import ProductsContextProvider from "./Global/ProductsContext";
import Banner from "./Components/Banner";
import RegisterForm from "./Components/RegisterForm";
import LoginForm from "./Components/LoginForm";
import Logout from "./Components/Logout";
import Cart from "./Components/Cart";

import { getCurrentUser } from "./Services/AuthService";

function App() {
  const [currentUser, setCurrentUser] = useState();
  useEffect(() => {
    const user = getCurrentUser();
    setCurrentUser(user);
  }, []);

  const [productsInCart, setProductsInCart] = useState([]);
  const handleAddCartClick = (product) => {
    const productExist = productsInCart.find((item) => item.id === product.id);
    if (productExist) {
      setProductsInCart(
        productsInCart.map((item) =>
          item.id === product.id
            ? { ...productExist, qty: productExist.qty + 1 }
            : item
        )
      );
    } else {
      setProductsInCart([...productsInCart, { ...product, qty: 1 }]);
    }
  };

  const handleProductIncrement = (product) => {
    setProductsInCart(
      productsInCart.map((item) =>
        item.id === product.id ? { ...product, qty: product.qty + 1 } : item
      )
    );
  };

  const handleProductDecrement = (product) => {
    if (product.qty === 1) {
      const updatedProducts = productsInCart.filter(
        (item) => item.id !== product.id
      );
      setProductsInCart(updatedProducts);
    } else {
      setProductsInCart(
        productsInCart.map((item) =>
          item.id === product.id ? { ...product, qty: product.qty - 1 } : item
        )
      );
    }
  };

  const handleProductRemove = (product) => {
    const updatedProducts = productsInCart.filter(
      (item) => item.id !== product.id
    );
    setProductsInCart(updatedProducts);
  };

  const handleClearCart = () => {
    setProductsInCart([]);
  };

  console.log(productsInCart);
  return (
    <Fragment>
      <Header currentUser={currentUser} productsInCart={productsInCart} />
      <Switch>
        <Route exact path="/register" component={RegisterForm} />
        <Route exact path="/login" component={LoginForm} />
        <Route exact path="/logout" component={Logout} />
        <Route
          exact
          path="/cart"
          render={(props) => (
            <Cart
              productsInCart={productsInCart}
              handleProductIncrement={handleProductIncrement}
              handleProductDecrement={handleProductDecrement}
              handleProductRemove={handleProductRemove}
              handleClearCart={handleClearCart}
              {...props}
            />
          )}
        />
        <Route
          exact
          path="/"
          render={(props) => (
            <Products handleAddCartClick={handleAddCartClick} {...props} />
          )}
        />
      </Switch>
    </Fragment>
  );
}

export default App;
