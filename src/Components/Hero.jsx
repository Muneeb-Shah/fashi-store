import React from "react";
import { Link } from "react-router-dom";
import Fade from "react-reveal/Fade";

const Hero = () => {
  return (
    <section id="hero" class="hero">
      <div class="container hero__container">
        <Fade bottom>
          <div class="hero__content">
            <p
              class="hero__content__category"
              data-aos="fade-up"
              data-aos-duration="600"
            >
              BAG.KIDS
            </p>
            <h1
              class="hero__content__heading"
              data-aos="fade-up"
              data-aos-duration="1200"
            >
              Black friday
            </h1>
            <p
              class="hero__content__desc description"
              data-aos="fade-up"
              data-aos-duration="1900"
            >
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Reiciendis exercitationem in blanditiis nemo vel deleniti?
            </p>
            <Link to="/products">
              <button
                class="btn-primary"
                data-aos="fade-up"
                data-aos-duration="2200"
              >
                SHOP NOW
              </button>
            </Link>
          </div>
        </Fade>
      </div>
      <div class="badge rotate-90-cw">
        <div class="badge__content">
          <p>SALE 50%</p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
