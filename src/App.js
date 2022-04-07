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
import { getCurrentUser } from "./Services/AuthService";

function App() {
  const [currentUser, setCurrentUser] = useState();
  useEffect(() => {
    const user = getCurrentUser();
    setCurrentUser(user);
  }, []);

  console.log(currentUser);
  return (
    <Fragment>
      <Header currentUser={currentUser} />
      <Switch>
        <Route exact path="/register" component={RegisterForm} />
        <Route exact path="/login" component={LoginForm} />
        <Route exact path="/logout" component={Logout} />
      </Switch>
    </Fragment>
  );
}

export default App;
