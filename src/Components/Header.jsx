import React from "react";
import { FaUser, FaLanguage, FaPowerOff } from "react-icons/fa";
import { Link } from "react-router-dom";

const Header = ({ currentUser }) => {
  return (
    <header id="header">
      <section className="header__top">
        <div className="container">
          <div className="header__top__contact">
            <div className="header__top__contact__email">
              <i className="fa fa-envelope"></i>
              <span>hello.colorlib@gmail.com</span>
            </div>
            <div className="header__top__contact__phone">
              <i className="fa fa-phone"></i>
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
            <a href="">
              <img src="/assets/images/logo.png" alt="Fashi" />
            </a>
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
            <a className="notification-btn" href="">
              <i className="fa fa-cart-plus"></i>
              <span className="notification-btn__badge">0</span>
            </a>
            <p className="header__middle__cart__total">$150.00</p>
          </div>
        </div>
      </section>
      <section className="header__bottom">
        <div className="container">
          <div className="header__bottom__upper">
            <select className="header__bottom__depart" name="departments">
              <option value="All Categories">All DEPARTMENTS</option>
            </select>
            <nav className="main-nav">
              <ul className="main-nav__links">
                <li>
                  <a href="">HOME</a>
                </li>
                <li>
                  <Link to="/products">SHOP</Link>
                </li>
                <li>
                  <a href="">COLLECTION</a>
                </li>
                <li>
                  <a href="">BLOG</a>
                </li>
                <li>
                  <a href="">CONTACT</a>
                </li>
                <li>
                  <a href="">PAGES</a>
                </li>
              </ul>
            </nav>
          </div>
          <div className="header__bottom__lower collapsible">
            <div className="collapsible__header">
              <i className="fa fa-arrow-circle-left collapsible__icon"></i>
            </div>
            <nav className="header__bottom__lower__nav collapsible__content">
              <ul className="header__bottom__lower__nav__links">
                <li>
                  <a href="">HOME</a>
                </li>
                <li>
                  <a href="">SHOP</a>
                </li>
                <li>
                  <a href="">COLLECTION</a>
                </li>
                <li>
                  <a href="">BLOG</a>
                </li>
                <li>
                  <a href="">CONTACT</a>
                </li>
                <li>
                  <a href="">PAGES</a>
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
