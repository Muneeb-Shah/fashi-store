import Hero from "./Hero";
import Banner from "./Banner";
import Deal from "./Deal";
import ImageGrid from "./ImageGrid";
import Blog from "./Blog";
import Brands from "./Brands";
import { Fragment } from "react";

const Main = () => {
  return (
    <Fragment>
      <Hero />
      <Banner />
      <Deal />
      <ImageGrid />
      <Blog />
      <Brands />
    </Fragment>
  );
};

export default Main;
