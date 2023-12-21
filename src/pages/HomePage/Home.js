import React from "react";
import HeroPart from "./HeroPart/HeroPart";
import SecondPart from "./SecondPart/SecondPart";
import ThirdPart from "./ThirdPart/ThirdPart";
import FeaturedCollectionPart from "./FeaturedCollectionPart/FeaturedCollectionPart";
import CreateSellPart from "./CreateSellPart/CreateSellPart";

const Home = () => {
  return (
    <div>
      <HeroPart />
      <SecondPart />
      <ThirdPart />
      <FeaturedCollectionPart />
      <CreateSellPart />
    </div>
  );
};

export default Home;
