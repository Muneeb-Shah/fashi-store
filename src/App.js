import { Fragment } from "react";
import "./App.css";
import Header from "./Components/Header";
import Main from "./Components/Main";
import Footer from "./Components/Footer";
import ProductsPage from "./Components/ProductsPage";
import Products from "./Components/Products";
import ProductsContextProvider from "./Global/ProductsContext";
import Banner from "./Components/Banner";

function App() {
  return (
    <Fragment>
      <div className="container">
        <ProductsContextProvider>
          <Products />
        </ProductsContextProvider>
      </div>
    </Fragment>
  );
}

export default App;
