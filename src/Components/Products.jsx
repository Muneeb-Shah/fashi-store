import { useState, useEffect, useContext, Fragment } from "react";
import axios from "axios";

const apiEndpoint = "http://localhost:1337/api";

const Products = ({ handleAddCartClick }) => {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedGender, setSelectedGender] = useState("all");
  const [noProducts, setNoProducts] = useState(false);

  useEffect(() => {
    const getProducts = async () => {
      const result = await axios(`${apiEndpoint}/products?populate=*`);
      setProducts(result.data.data);
    };
    getProducts();

    const getCategories = async () => {
      const result = await axios(`${apiEndpoint}/categories`);
      setCategories(result.data.data);
    };
    getCategories();
  }, []);

  const handleGenderClick = async (gender) => {
    setSelectedGender(gender);

    if (gender === "all") {
      const result = await axios(`${apiEndpoint}/products?populate=*`);
      if (result.data.data.length === 0) setNoProducts(true);
      else if (result.data.data.length > 1) setNoProducts(false);
      setProducts(result.data.data);
    }
    if (gender === "women") {
      const result = await axios(
        `${apiEndpoint}/products?filters[gender][name][$eq]=women&populate=*`
      );
      if (result.data.data.length === 0) setNoProducts(true);
      else if (result.data.data.length > 1) setNoProducts(false);
      setProducts(result.data.data);
    }
    if (gender === "men") {
      const result = await axios(
        `${apiEndpoint}/products?filters[gender][name][$eq]=men&populate=*`
      );
      if (result.data.data.length === 0) setNoProducts(true);
      else if (result.data.data.length > 1) setNoProducts(false);
      setProducts(result.data.data);
    }
  };

  const handleCategoryClick = async (category) => {
    if (selectedGender === "all") {
      let result;
      if (category === "All")
        result = await axios(`${apiEndpoint}/products?populate=*`);
      else
        result = await axios(
          `${apiEndpoint}/products?filters[categories][name][$eq]=${category}&populate=*`
        );

      if (result.data.data.length === 0) setNoProducts(true);
      else if (result.data.data.length > 1) setNoProducts(false);

      setProducts(result.data.data);
    } else {
      let result;
      if (category === "All")
        result = await axios(
          `${apiEndpoint}/products?filters[gender][name][$eq]=${selectedGender}&populate=*`
        );
      else
        result = await axios(
          `${apiEndpoint}/products?filters[gender][name][$eq]=${selectedGender}&filters[categories][name][$eq]=${category}&populate=*`
        );
      if (result.data.data.length === 0) setNoProducts(true);
      else if (result.data.data.length > 1) setNoProducts(false);
      setProducts(result.data.data);
    }
  };
  return (
    <Fragment>
      <section className="banner">
        <div className="container">
          <div className="banner-content">
            <div
              className="banner-content__kids banner-content__item"
              onClick={() => handleGenderClick(`all`)}
            >
              <div className="outline"></div>
              {selectedGender === "all" && <div className="outlined"></div>}
              <p className="banner-content__desc">All</p>
            </div>

            <div
              className="banner-content__women banner-content__item"
              onClick={() => handleGenderClick(`women`)}
            >
              <div className="outline"></div>
              {selectedGender === "women" && <div className="outlined"></div>}
              <p className="banner-content__desc">Women's</p>
            </div>

            <div
              className="banner-content__men banner-content__item"
              onClick={() => handleGenderClick(`men`)}
            >
              <div className="outline"></div>
              {selectedGender === "men" && <div className="outlined"></div>}
              <p className="banner-content__desc">Men's</p>
            </div>
          </div>
        </div>
      </section>
      <ul className="products-category-nav">
        {categories.map((category) => (
          <li
            className="products-category-nav__item"
            key={category.id}
            onClick={() => handleCategoryClick(category.attributes.name)}
          >
            {category.attributes.name}
          </li>
        ))}
      </ul>
      {noProducts && (
        <div className="container">
          <div className="no-products">
            <p>COMMING SOON...</p>
          </div>
        </div>
      )}
      <section className="product-page__products container">
        {products.map((product) => (
          <div key={product.id} className="item-card">
            <img
              src={`http://localhost:1337${product.attributes.featureImage.data.attributes.url}`}
              className="product-img"
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
              <p className="item-card__desc__name">{product.attributes.name}</p>
              <p className="item-card__desc__price">
                ${product.attributes.price}
              </p>
            </div>
          </div>
        ))}
      </section>
    </Fragment>
  );
};

export default Products;
