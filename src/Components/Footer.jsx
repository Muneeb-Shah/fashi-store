import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer id="footer">
      <div class="container">
        <div class="footer__content">
          <ul class="footer__address">
            <li class="footer__address__logo">
              <Link to="/">
                <img src="/assets/images/xfooter-logo.png" alt="Fashi." />
              </Link>
            </li>
            <li>Address: 60 Road 11378 New York</li>
            <li>Phone: +65 11.188.888</li>
            <li>Email: hello.colorlib@gmail.com</li>
            <li>
              <ul class="footer__social-icons">
                <li>
                  <i class="fa fa-map-marker"></i>
                </li>
                <li>
                  <i
                    style={{ transform: "rotate(90deg)" }}
                    class="fa fa-phone"
                  ></i>
                </li>
                <li>
                  <i class="fa fa-envelope"></i>
                </li>
              </ul>
            </li>
          </ul>
          <ul class="footer__nav">
            <li>
              <ul>
                <li class="footer__nav__heading">Information</li>
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/products">Products</Link>
                </li>
                <li>
                  <Link to="/blog">Blog</Link>
                </li>
                <li>
                  <Link to="/contact">Contact</Link>
                </li>
              </ul>
            </li>
            <li>
              <ul>
                <li class="footer__nav__heading">My Account</li>
                <li>
                  <Link to="/orders">My Orders</Link>
                </li>
                <li>
                  <Link to="/cart">Shopping Cart</Link>
                </li>
              </ul>
            </li>
            <li>
              <ul>
                <li class="footer__nav__heading">Join Our Newsletter Now</li>
                <li>
                  Get E-mail updates about our latest shop and special offers.
                </li>
                <li>
                  <div class="search-input footer__search-input">
                    <input
                      type="text"
                      name="search"
                      placeholder="Enter Your E-mail"
                    />
                    <span>SUBSCRIBE</span>
                  </div>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
