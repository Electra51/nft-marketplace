import React from "react";
import HeroPart from "./HeroPart/HeroPart";
import ThirdPart from "./ThirdPart/ThirdPart";
import FeaturedCollectionPart from "./FeaturedCollectionPart/FeaturedCollectionPart";
import CreateSellPart from "./CreateSellPart/CreateSellPart";
import DiscoverMorePart from "./DiscoverMorePart/DiscoverMorePart";
import SecondPartofHome from "./SecondPart/SecondPartofHome";
import HelmetComponent from "../../components/common/HelmetComponent";

const Home = () => {
  return (
    <div>
      <HelmetComponent title={"NFTERS | Home"} />
      <HeroPart />
      <SecondPartofHome />
      <ThirdPart />
      <FeaturedCollectionPart />
      <CreateSellPart />
      <DiscoverMorePart />
    </div>
  );
};

export default Home;
