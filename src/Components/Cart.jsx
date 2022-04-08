import React from "react";
const apiEndpoint = "http://localhost:1337";

const Cart = ({
  productsInCart,
  handleProductIncrement,
  handleProductDecrement,
  handleProductRemove,
  handleClearCart,
}) => {
  if (productsInCart.length) {
    const total = 0;
    productsInCart.reduce(
      (product) => total + product.attributes.price * product.qty
    );
    console.log("total   " + total);
  }
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
          <span className="cart__total__total-price">0</span>
        </div>
        <div className="cart-btns">
          <button
            className="btn-primary cart__clear-cart-btn"
            onClick={handleClearCart}
          >
            CLEAR CART
          </button>
          <button className="btn-primary cart__checkout-btn">CHECK OUT</button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
