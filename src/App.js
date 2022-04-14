import { useState, useEffect } from "react";
import { Redirect, Switch, Route } from "react-router-dom";
import { getCurrentUser } from "./Services/AuthService";
import { toast } from "react-toastify";
import "./App.css";
import Header from "./Components/Header";
import Main from "./Components/Main";
import Footer from "./Components/Footer";
import Products from "./Components/Products";
import RegisterForm from "./Components/RegisterForm";
import LoginForm from "./Components/LoginForm";
import Logout from "./Components/Logout";
import Cart from "./Components/Cart";
import "react-toastify/dist/ReactToastify.css";
import Blog from "./Components/Blog";
import NotFound from "./Components/NotFound";
import Contact from "./Components/Contact";
import Orders from "./Components/Orders";

localStorage.setItem("productsInCart", JSON.stringify(productsInCart));

function App() {
  const [currentUser] = useState(getCurrentUser());
  const [productsInCart, setProductsInCart] = useState([]);

  useEffect(() => {
    setProductsInCart(JSON.parse(localStorage.getItem("productsInCart")));
  }, []);

  useEffect(() => {
    localStorage.setItem("productsInCart", JSON.stringify(productsInCart));
  }, [productsInCart]);

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
    toast("Added to Cart", {
      position: "top-center",
      autoClose: 500,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      theme: "dark",
      progress: undefined,
    });
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

  return (
    <>
      <Header currentUser={currentUser} productsInCart={productsInCart} />
      <Switch>
        <Route exact path="/register" component={RegisterForm} />
        <Route exact path="/login" component={LoginForm} />
        <Route exact path="/logout" component={Logout} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/blog" component={Blog} />
        <Route
          exact
          path="/orders"
          render={(props) => {
            if (!currentUser)
              return (
                <Redirect
                  to={{ pathname: "/login", state: { from: props.location } }}
                />
              );
            else return <Orders currentUser={currentUser} {...props} />;
          }}
        />
        <Route
          exact
          path="/cart"
          render={(props) => (
            <Cart
              {...props}
              productsInCart={productsInCart}
              handleProductIncrement={handleProductIncrement}
              handleProductDecrement={handleProductDecrement}
              handleProductRemove={handleProductRemove}
              handleClearCart={handleClearCart}
              currentUser={currentUser}
            />
          )}
        />

        <Route
          exact
          path="/products"
          render={(props) => (
            <Products handleAddCartClick={handleAddCartClick} {...props} />
          )}
        />
        <Route exact path="/not-found" component={NotFound} />
        <Route exact path="/" component={Main} />
        <Redirect to="not-found" />
      </Switch>
      <Footer />
    </>
  );
}

export default App;
