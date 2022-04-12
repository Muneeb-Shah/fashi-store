import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <section class="banner">
      <Link to="/products">
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
              <p class="banner-content__desc">All</p>
            </div>
          </div>
        </div>
      </Link>
    </section>
  );
};

export default Banner;
