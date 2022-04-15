import React, { useState } from "react";
import { FaUser, FaLanguage, FaPowerOff } from "react-icons/fa";
import { Link } from "react-router-dom";

const Header = ({ currentUser, productsInCart }) => {
  const [expanded, setExpanded] = useState(false);
  const toggleExpand = () => {
    setExpanded(!expanded);
  };
  return (
    <header id="header">
      <section className="header__top">
        <div className="container">
          <div className="header__top__contact">
            <div className="header__top__contact__email">
              <i className="fa fa-envelope"></i>
              <span className="header__top__contact__email__content">
                hello.colorlib@gmail.com
              </span>
            </div>
            <div className="header__top__contact__phone">
              <i
                style={{ transform: "rotate(90deg)" }}
                className="fa fa-phone"
              ></i>
              <span>+65 11 188 8888</span>
            </div>
          </div>
          <div className="header__top__social">
            <div className="header__top__social__lang">
              <FaLanguage />
              <select className="social__lang__text" name="language">
                <option value="english">English</option>
                <option value="german">German</option>
              </select>
            </div>
            {!currentUser && (
              <>
                {" "}
                <Link className="header__top__social__login" to="/login">
                  <FaUser />
                  <span className="social__login__text">login</span>
                </Link>
              </>
            )}
            {currentUser && (
              <>
                {" "}
                <Link className="header__top__social__login" to="/logout">
                  <FaUser />
                  <span className="social__login__text">logout</span>
                </Link>
              </>
            )}
          </div>
        </div>
      </section>
      <section className="header__middle">
        <div className="container">
          <div className="header__middle__logo">
            <Link to="/">
              <img src="/assets/images/logo.png" alt="Fashi" />
            </Link>
          </div>
          <div className="header__middle__search">
            <select
              className="header__middle__search__categories"
              name="category"
            >
              <option value="All Categories">All Categories</option>
            </select>
            <div className="search-input">
              <input
                type="text"
                name="search"
                placeholder="What do you need?"
              />
              <i className="fa fa-search"></i>
            </div>
          </div>
          <div className="header__middle__cart">
            <Link className="notification-btn" to="/cart">
              <i className="fa fa-cart-plus"></i>
              <span className="notification-btn__badge">
                {productsInCart ? productsInCart.length : 0}
              </span>
            </Link>
          </div>
        </div>
      </section>
      <section className="header__bottom">
        <div className="container">
          <div className="header__bottom__upper">
            <nav className="main-nav">
              <ul className="main-nav__links">
                <li>
                  <Link to="/">HOME</Link>
                </li>
                <li>
                  <Link to="/products">SHOP</Link>
                </li>
                <li>
                  <Link to="/blog">BLOG</Link>
                </li>
                <li>
                  <Link to="/contact">CONTACT</Link>
                </li>
                <li>
                  <Link to="/orders">MY ORDERS</Link>
                </li>
              </ul>
            </nav>
          </div>
          <div
            className={
              expanded
                ? `header__bottom__lower collapsible collapsible--expanded`
                : "header__bottom__lower collapsible"
            }
          >
            <div className="collapsible__header">
              <i
                className="fa fa-arrow-circle-left collapsible__icon"
                onClick={toggleExpand}
              ></i>
            </div>
            <nav className="header__bottom__lower__nav collapsible__content">
              <ul className="header__bottom__lower__nav__links">
                <li>
                  <Link to="/">HOME</Link>
                </li>
                <li>
                  <Link to="/products">SHOP</Link>
                </li>
                <li>
                  <Link to="/blog">BLOG</Link>
                </li>
                <li>
                  <Link to="/contact">CONTACT</Link>
                </li>
                <li>
                  <Link to="/orders">MY ORDERS</Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </section>
    </header>
  );
};

export default Header;
