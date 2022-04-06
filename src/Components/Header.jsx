const Header = () => {
  return (
    <header id="header">
      <section class="header__top">
        <div class="container">
          <div class="header__top__contact">
            <div class="header__top__contact__email">
              <i class="fa fa-envelope"></i>
              <span>hello.colorlib@gmail.com</span>
            </div>
            <div class="header__top__contact__phone">
              <i class="fa fa-phone"></i>
              <span>+65 11 188 8888</span>
            </div>
          </div>
          <div class="header__top__social">
            <ul class="header__top__social__social-icons">
              <li>
                <i class="fa fa-faucet"></i>
              </li>
              <li>
                <i class="fa fa-battery-full"></i>
              </li>
              <li>
                <i class="fa fa-envelope"></i>
              </li>
              <li>
                <i class="fa fa-fan"></i>
              </li>
            </ul>
            <div class="header__top__social__lang">
              <i class="fa fa-language"></i>
              <select name="language">
                <option value="english">English</option>
                <option value="german">German</option>
              </select>
            </div>
            <a class="header__top__social__login" href="">
              <i class="fa fa-user"></i>
              <span>login</span>
            </a>
          </div>
        </div>
      </section>
      <section class="header__middle">
        <div class="container">
          <div class="header__middle__logo">
            <a href="">
              <img src="/assets/images/logo.png" alt="Fashi" />
            </a>
          </div>
          <div class="header__middle__search">
            <select class="header__middle__search__categories" name="category">
              <option value="All Categories">All Categories</option>
            </select>
            <div class="search-input">
              <input
                type="text"
                name="search"
                placeholder="What do you need?"
              />
              <i class="fa fa-search"></i>
            </div>
          </div>
          <div class="header__middle__cart">
            <a class="notification-btn" href="">
              <i class="fa fa-heart"></i>
              <span class="notification-btn__badge">0</span>
            </a>

            <div class="notification-btn cart-hover-btn" href="">
              <i class="fa fa-cart-plus"></i>
              <span class="notification-btn__badge cart-badge">0</span>
              <div class="cart">
                <div class="cart__items"></div>
                <div class="cart__total">
                  <span>TOTAL:</span>
                  <span class="cart__total__total-price">0</span>
                </div>
                <button class="btn-primary cart__view-cart-btn">
                  VIEW CART
                </button>
                <button class="btn-primary cart__checkout-btn">
                  CHECK OUT
                </button>
              </div>
            </div>

            <p class="header__middle__cart__total">$150.00</p>
          </div>
        </div>
      </section>
      <section class="header__bottom">
        <div class="container">
          <div class="header__bottom__upper">
            <select class="header__bottom__depart" name="departments">
              <option value="All Categories">All DEPARTMENTS</option>
            </select>
            <nav class="main-nav">
              <ul class="main-nav__links">
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
          <div class="header__bottom__lower collapsible">
            <div class="collapsible__header">
              <i class="fa fa-arrow-circle-left collapsible__icon"></i>
            </div>
            <nav class="header__bottom__lower__nav collapsible__content">
              <ul class="header__bottom__lower__nav__links">
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
