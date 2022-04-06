import { useState, useEffect } from "react";
import axios from "axios";

const Banner = () => {
  return (
    <section class="banner">
      <div class="container">
        <div class="banner-content">
          <div class="banner-content__men banner-content__item">
            <div class="outline"></div>
            <p class="banner-content__desc">Men's</p>
          </div>
          <div class="banner-content__women banner-content__item">
            <div class="outline"></div>
            <p class="banner-content__desc">Women's</p>
          </div>
          <div class="banner-content__kids banner-content__item">
            <div class="outline"></div>
            <p class="banner-content__desc">Kid's</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
