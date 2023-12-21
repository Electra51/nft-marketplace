import React from "react";
import HeroPart from "./HeroPart/HeroPart";
import SecondPart from "./SecondPart/SecondPart";
import ThirdPart from "./ThirdPart/ThirdPart";
import FeaturedCollectionPart from "./FeaturedCollectionPart/FeaturedCollectionPart";

const Home = () => {
  return (
    <div>
      <HeroPart />
      <SecondPart />
      <ThirdPart />
      <FeaturedCollectionPart />
    </div>
  );
};

export default Home;
