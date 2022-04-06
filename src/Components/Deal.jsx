const Deal = () => {
  return (
    <section id="deal" class="deal">
      <div class="container">
        <div class="deal__content">
          <div class="section-heading">
            <h2 class="section-heading__heading">Deal Of The Week</h2>
          </div>
          <div class="deal__desc">
            <p class="description">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam,
              autem natus. Corrupti facere exercitationem ex accusantium? In!
            </p>
            <div class="price-w-desc">
              <p class="price-primary">$35.00</p>
              <span class="description">/HandBag</span>
            </div>
          </div>
          <div class="timer">
            <div class="timer__item">
              <span class="timer__item__val">27</span>
              <p class="timer__item__desc description">DAYS</p>
            </div>
            <div class="timer__item">
              <span class="timer__item__val">27</span>
              <p class="timer__item__desc description">DAYS</p>
            </div>
            <div class="timer__item">
              <span class="timer__item__val">27</span>
              <p class="timer__item__desc description">DAYS</p>
            </div>
            <div class="timer__item">
              <span class="timer__item__val">27</span>
              <p class="timer__item__desc description">DAYS</p>
            </div>
          </div>
          <button class="btn-primary">SHOP NOW</button>
        </div>
      </div>
    </section>
  );
};

export default Deal;
