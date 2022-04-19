import { useState, useEffect } from "react";
import { useLazyQuery } from "@apollo/client";
import Backdrop from "@mui/material/Backdrop";
import CircularProgress from "@mui/material/CircularProgress";
import Fade from "react-reveal/Fade";
import Bounce from "react-reveal/Bounce";
import { GET_ALL_PRODUCTS } from "../graphql/queries";

const Products = ({ handleAddCartClick }) => {
  const [products, setProducts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedGender, setSelectedGender] = useState("");

  const [getAllproducts] = useLazyQuery(GET_ALL_PRODUCTS, {
    onCompleted: (res) => {
      setProducts(res?.products?.data);
    },
    onError: (error) => {
      console.log("ERROR=", error);
    },
  });

  useEffect(() => {
    getAllproducts({
      variables: {
        gender: selectedGender || undefined,
        category: selectedCategory || undefined,
      },
    });
  }, [selectedCategory, selectedGender]);

  const handleGenderClick = (gender) => {
    setSelectedGender(gender);
    setSelectedCategory("");
  };

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };

  if (
    selectedGender === "" &&
    selectedCategory === "" &&
    products.length === 0
  ) {
    return (
      <section className="shop">
        <Backdrop
          sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
          open={true}
        >
          <CircularProgress color="inherit" />
          <div className="loader-text">LOADING PRODUCTS</div>
        </Backdrop>
      </section>
    );
  }

  return (
    <section className="shop">
      <div className="container">
        <h2 className="section-heading__heading">Shop</h2>
        <section className="banner">
          <Fade left>
            <div className="banner-content">
              <div
                className="banner-content__kids banner-content__item banner-content__item__clickable"
                onClick={() => handleGenderClick(``)}
              >
                <div className="outline"></div>
                {selectedGender === "" && <div className="outlined"></div>}
                <p className="banner-content__desc">All</p>
              </div>
              <div
                className="banner-content__women banner-content__item banner-content__item__clickable"
                onClick={() => handleGenderClick(`women`)}
              >
                <div className="outline"></div>
                {selectedGender === "women" && <div className="outlined"></div>}
                <p className="banner-content__desc">Women's</p>
              </div>
              <div
                className="banner-content__men banner-content__item banner-content__item__clickable"
                onClick={() => handleGenderClick(`men`)}
              >
                <div className="outline"></div>
                {selectedGender === "men" && <div className="outlined"></div>}
                <p className="banner-content__desc">Men's</p>
              </div>
            </div>
          </Fade>
        </section>
        <Bounce right>
          <ul className="products-category-nav">
            <li
              className={
                selectedCategory === ""
                  ? `products-category-nav__item__selected`
                  : "products-category-nav__item"
              }
              onClick={() => handleCategoryClick("")}
            >
              All
            </li>
            <li
              className={
                selectedCategory === "Jeans"
                  ? `products-category-nav__item__selected`
                  : "products-category-nav__item"
              }
              onClick={() => handleCategoryClick("Jeans")}
            >
              Jeans
            </li>
            <li
              className={
                selectedCategory === "Shirts"
                  ? `products-category-nav__item__selected`
                  : "products-category-nav__item"
              }
              onClick={() => handleCategoryClick("Shirts")}
            >
              Shirts
            </li>
            <li
              className={
                selectedCategory === "Shoes"
                  ? `products-category-nav__item__selected`
                  : "products-category-nav__item"
              }
              onClick={() => handleCategoryClick("Shoes")}
            >
              Shoes
            </li>
          </ul>
        </Bounce>
        {products.length === 0 && (
          <Fade right>
            <div className="container">
              <div className="no-products">
                <p>COMMING SOON...</p>
              </div>
            </div>
          </Fade>
        )}
        <section className="product-page__products">
          {products.map((product) => (
            <Fade left key={product.id}>
              <div className="item-card">
                <img
                  src={`https://fashi-backend.herokuapp.com${product.attributes.featureImage.data.attributes.url}`}
                  className="product-img"
                  alt="product image"
                />
                <div className="item-card__btns">
                  <button
                    className="btn-secondary add-to-cart"
                    onClick={() => handleAddCartClick(product)}
                  >
                    Add to Cart
                  </button>
                </div>
                <div className="item-card__desc">
                  <p className="item-card__desc__category">
                    {product.attributes.category}
                  </p>
                  <p className="item-card__desc__name">
                    {product.attributes.name}
                  </p>
                  <p className="item-card__desc__price">
                    Rs.{product.attributes.price}
                  </p>
                </div>
              </div>
            </Fade>
          ))}
        </section>
      </div>
    </section>
  );
};

export default Products;
