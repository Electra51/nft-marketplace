import React from "react";
import HeroPart from "./HeroPart/HeroPart";
import ThirdPart from "./ThirdPart/ThirdPart";
import FeaturedCollectionPart from "./FeaturedCollectionPart/FeaturedCollectionPart";
import CreateSellPart from "./CreateSellPart/CreateSellPart";
import DiscoverMorePart from "./DiscoverMorePart/DiscoverMorePart";
import SecondPartofHome from "./SecondPart/SecondPartofHome";

const Home = () => {
  return (
    <div>
      <HeroPart />
      <SecondPartofHome />
      {/* <ThirdPart /> */}
      {/* <FeaturedCollectionPart /> */}
      {/* <CreateSellPart /> */}
      {/* <DiscoverMorePart /> */}
    </div>
  );
};

export default Home;
