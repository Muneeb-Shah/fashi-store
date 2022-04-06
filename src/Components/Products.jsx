import { useState, useEffect, Fragment } from "react";
import axios from "axios";

const Products = () => {
  let [products, setProducts] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
      const result = await axios(
        "http://localhost:1337/api/products?populate=*"
      );
      setProducts(result.data.data);
    };
    getProducts();
  }, []);

  const [menOutlined, setMenOutlined] = useState(false);
  const [womenOutlined, setWomenOutlined] = useState(false);
  const [allOutlined, setAllOutlined] = useState(false);

  const handleClick = async (category) => {
    if (category === "men") {
      setMenOutlined(!menOutlined);
      setWomenOutlined(false);
      setAllOutlined(false);
      const result = await axios(
        `http://localhost:1337/api/products?filters[gender][name][$eq]=men&populate=*`
      );
      setProducts(result.data.data);
    }
    if (category === "women") {
      setWomenOutlined(!womenOutlined);
      setMenOutlined(false);
      setAllOutlined(false);
      const result = await axios(
        `http://localhost:1337/api/products?filters[gender][name][$eq]=women&populate=*`
      );
      setProducts(result.data.data);
      if (category === "all") {
        setAllOutlined(!allOutlined);
        setMenOutlined(false);
        setWomenOutlined(false);
        const result = await axios(
          `http://localhost:1337/api/products?populate=*`
        );
        setProducts(result.data.data);
      }
    }
  };

  return (
    <Fragment>
      <section className="banner">
        <div className="container">
          <div className="banner-content">
            <div
              className="banner-content__men banner-content__item"
              onClick={() => handleClick(`men`)}
            >
              <div className="outline"></div>
              {menOutlined && <div className="outlined"></div>}
              <p className="banner-content__desc">Men's</p>
            </div>
            <div
              className="banner-content__women banner-content__item"
              onClick={() => handleClick(`women`)}
            >
              <div className="outline"></div>
              <div className={womenOutlined ? "outlined" : ""}></div>
              <p className="banner-content__desc">Women's</p>
            </div>
            <div
              className="banner-content__kids banner-content__item"
              onClick={() => handleClick(`all`)}
            >
              <div className="outline"></div>
              {allOutlined && <div className="outlined"></div>}
              <p className="banner-content__desc">All</p>
            </div>
          </div>
        </div>
      </section>
      <section className="product-page__products">
        {products.map((product) => (
          <div key={product.attributes.id}>
            <div className="item-card">
              <div className="item-card__image">
                <img
                  src={`http://localhost:1337${product.attributes.featureImage.data.attributes.url}`}
                  className="product-img"
                />
                <div className="item-card__btns">
                  <button className="btn-primary">
                    <i className="fa fa-cart-plus"></i>
                  </button>
                  <button className="btn-secondary add-to-cart">
                    Add to Cart
                  </button>
                  <button className="btn-secondary">
                    <i className="fa fa-thumbs-up"></i>
                  </button>
                </div>
                <i className="fa fa-heart item-card__like-btn"></i>
              </div>
              <div className="item-card__desc">
                <p className="item-card__desc__category">
                  {product.attributes.category}
                </p>
                <p className="item-card__desc__name">
                  {product.attributes.name}
                </p>
                <p className="item-card__desc__price">
                  ${product.attributes.price}
                </p>
              </div>
            </div>
          </div>
        ))}
      </section>
    </Fragment>
  );
};

export default Products;
