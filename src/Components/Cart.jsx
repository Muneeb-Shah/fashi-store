import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import StripeCheckout from "react-stripe-checkout";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

toast.configure();

const apiEndpoint = "http://localhost:1337";

const Cart = (props) => {
  const {
    productsInCart,
    handleProductIncrement,
    handleProductDecrement,
    handleProductRemove,
    handleClearCart,
    currentUser,
  } = props;

  let totalPrice = 0;
  if (productsInCart) {
    productsInCart.forEach(
      (product) =>
        (totalPrice = totalPrice + product.attributes.price * product.qty)
    );
  }

  const handleToken = async (token) => {
    const product = { name: "All Cart Products", price: totalPrice };

    const response = await toast.promise(
      axios.post("http://localhost:8080/checkout", {
        product,
        token,
      }),
      {
        pending: "Please Wait",
      },
      { position: "top-center", theme: "dark" }
    );

    const status = response.data.status;

    if (status === "success") {
      handleClearCart();
      toast.success("Thanks for Shopping!", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        theme: "colored",
        progress: undefined,
      });
      props.history.push("/");
    }
    if (status === "faliure") {
      toast.error("Payment Failed!", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
    }
  };

  return (
    <div className="cart">
      <div className="container">
        <div className="cart__items">
          {productsInCart.length < 1 ? (
            <div className="cart__items-no-products">Your cart is empty</div>
          ) : (
            productsInCart.map((product) => (
              <div key={product.id} className="cart__items__item">
                <div className="cart__item-details-left">
                  <img
                    src={`${apiEndpoint}${product.attributes.featureImage.data.attributes.url}`}
                    alt=""
                  />
                  <div className="cart__item-name">
                    {product.attributes.name}
                  </div>
                  <div className="cart__total">
                    <span className="cart__total__total-price">
                      ${product.attributes.price}
                    </span>
                  </div>
                </div>
                <div className="cart__item-qty-section">
                  <button onClick={() => handleProductIncrement(product)}>
                    +
                  </button>
                  <span className="cart__item-qty">{product.qty}</span>
                  <button onClick={() => handleProductDecrement(product)}>
                    -
                  </button>
                </div>
                <div className="cart__item-details-right">
                  <span className="cart__item-price">
                    ${product.attributes.price * product.qty}
                  </span>

                  <button
                    className="cart__item__remove-btn"
                    onClick={() => handleProductRemove(product)}
                  >
                    X
                  </button>
                </div>
              </div>
            ))
          )}
        </div>
        <div className="cart__total">
          <span>TOTAL:</span>
          <span className="cart__total__total-price total-price">
            ${totalPrice}
          </span>
        </div>
        {productsInCart.length > 0 && (
          <div className="cart-btns">
            <button
              className="btn-primary cart__clear-cart-btn"
              onClick={handleClearCart}
            >
              CLEAR CART
            </button>
            <div className="stripe-checkout">
              {currentUser ? (
                <StripeCheckout
                  stripeKey="pk_test_51KnZokGDP9hBttjZswQWWgqmk6wiInRLcrnj0WxbPRe2xl4LzkTooWsX4JsW65ITd8oXm26M0kIEsWIY1u8EWXyJ00C3Hrz9On"
                  token={handleToken}
                  billingAddress
                  shippingAddress
                  amount={totalPrice * 100}
                  name="All Cart Products"
                ></StripeCheckout>
              ) : (
                <Link
                  to={{ pathname: "/login", state: { from: props.location } }}
                >
                  <button className="btn-primary cart__checkout-btn">
                    LOGIN TO PAY
                  </button>
                </Link>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
