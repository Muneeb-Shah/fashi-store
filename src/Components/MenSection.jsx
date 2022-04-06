const MenSection = () => {
  return (
    <section class="men">
      <div class="container">
        <div class="gender-card">
          <div class="gender-card__content">
            <h2>Men's</h2>
            <a href="">Discover More</a>
          </div>
        </div>
        <div class="item-slider">
          <ul class="item-slider__nav">
            <li>
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
            </li>
          </ul>
          <i class="prev-btn-men fa fa-arrow-left"></i>
          <i class="next-btn-men fa fa-arrow-right"></i>
          <div class="item-slider__items js-items-men products-slider-men"></div>
        </div>
      </div>
    </section>
  );
};

export default MenSection;
