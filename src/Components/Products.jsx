import { useState, useEffect, Fragment } from "react";
import axios from "axios";
import { FaCartPlus, FaThumbsUp } from "react-icons/fa";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
      const result = await axios(
        "http://localhost:1337/api/products?populate=*"
      );
      setProducts(result.data.data);
    };
    getProducts();

    const getCategories = async () => {
      const result = await axios("http://localhost:1337/api/categories");
      setCategories(result.data.data);
    };
    getCategories();
  }, []);

  const [outlined, setOutlined] = useState([true, false, false]);

  const handleClick = async (gender) => {
    if (gender === "all") {
      setOutlined([true, false, false]);
      const result = await axios(
        `http://localhost:1337/api/products?populate=*`
      );
      setProducts(result.data.data);
    }
    if (gender === "women") {
      setOutlined([false, true, false]);
      const result = await axios(
        `http://localhost:1337/api/products?filters[gender][name][$eq]=women&populate=*`
      );
      setProducts(result.data.data);
    }
    if (gender === "men") {
      setOutlined([false, false, true]);
      const result = await axios(
        `http://localhost:1337/api/products?filters[gender][name][$eq]=men&populate=*`
      );
      setProducts(result.data.data);
    }
  };

  console.log(products);

  return (
    <Fragment>
      <section className="banner">
        <div className="container">
          <div className="banner-content">
            <div
              className="banner-content__kids banner-content__item"
              onClick={() => handleClick(`all`)}
            >
              <div className="outline"></div>
              {outlined[0] && <div className="outlined"></div>}
              <p className="banner-content__desc">All</p>
            </div>

            <div
              className="banner-content__women banner-content__item"
              onClick={() => handleClick(`women`)}
            >
              <div className="outline"></div>
              <div className={outlined[1] ? "outlined" : ""}></div>
              <p className="banner-content__desc">Women's</p>
            </div>

            <div
              className="banner-content__men banner-content__item"
              onClick={() => handleClick(`men`)}
            >
              <div className="outline"></div>
              {outlined[2] && <div className="outlined"></div>}
              <p className="banner-content__desc">Men's</p>
            </div>
          </div>
        </div>
      </section>
      <ul className="products-category-nav">
        {categories.map((category) => (
          <li className="products-category-nav__item" key={category.id}>
            {category.attributes.name}
          </li>
        ))}
        {/* <li>
          <a href="">Clothings</a>
        </li>
        <li>
          <a href="">Handbags</a>
        </li>
        <li>
          <a href="">Shoes</a>
        </li>
        <li>
          <a href="">Accessories</a>
        </li> */}
      </ul>
      <section className="product-page__products container">
        {products.map((product) => (
          <div key={product.id} className="item-card">
            <img
              src={`http://localhost:1337${product.attributes.featureImage.data.attributes.url}`}
              className="product-img"
            />
            <div className="item-card__btns">
              <button className="btn-primary">
                <FaCartPlus />
              </button>
              <button className="btn-secondary add-to-cart">Add to Cart</button>
              <button className="btn-secondary">
                <FaThumbsUp />
              </button>
            </div>
            <i className="fa fa-heart item-card__like-btn"></i>
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
