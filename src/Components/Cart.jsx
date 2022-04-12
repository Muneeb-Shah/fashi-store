import axios from "axios";
import React from "react";
import StripeCheckout from "react-stripe-checkout";
import { ToastContainer, toast } from "react-toastify";
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
    const response = await axios.post("http://localhost:8080/checkout", {
      product,
      token,
    });
    const status = response.data.status;
    if (status === "success") {
      handleClearCart();
      props.history.push("/");
      toast.success("Thanks for Shopping!", {
        position: toast.POSITION.TOP_CENTER,
      });
    }
  };
  console.log(props);
  return (
    <div className="cart">
      <div className="container">
        <div className="cart__items">
          {productsInCart.length < 1 ? (
            <div className="cart__items-no-products">No Products In Cart</div>
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
        <div className="cart-btns">
          <button
            className="btn-primary cart__clear-cart-btn"
            onClick={handleClearCart}
          >
            CLEAR CART
          </button>
          <div className="stripe-checkout">
            <StripeCheckout
              stripeKey="pk_test_51KnZokGDP9hBttjZswQWWgqmk6wiInRLcrnj0WxbPRe2xl4LzkTooWsX4JsW65ITd8oXm26M0kIEsWIY1u8EWXyJ00C3Hrz9On"
              token={handleToken}
              billingAddress
              shippingAddress
              amount={totalPrice * 100}
              name="All Cart Products"
            ></StripeCheckout>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
