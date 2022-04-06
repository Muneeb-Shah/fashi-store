import Banner from "./Banner";
import WomenSection from "./WomenSection";
import Deal from "./Deal";
import MenSection from "./MenSection";
import ImageGrid from "./ImageGrid";
import Blog from "./Blog";
import Brands from "./Brands";
import { Fragment } from "react";

const Main = () => {
  return (
    <Fragment>
      <Banner />
      <WomenSection />
      <MenSection />
    </Fragment>
  );
};

export default Main;
