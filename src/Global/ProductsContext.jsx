import React, { createContext, useState, useEffect } from "react";
import axios from "axios";

export const ProductContext = createContext();

const ProductsContextProvider = (props) => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const getProducts = async () => {
      const result = await axios(
        "https://fashi-backend.herokuapp.com/api/products"
      );
      setProducts(result.data.data);
    };
    getProducts();
  }, []);

  return (
    <ProductContext.Provider value={{ products }}>
      {props.children}
    </ProductContext.Provider>
  );
};

export default ProductsContextProvider;
