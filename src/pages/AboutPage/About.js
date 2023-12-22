import React from "react";
import img1 from "../../assets/discoverMoreImage/4.jpg";
import HelmetComponent from "../../components/common/HelmetComponent";
const About = () => {
  return (
    <div className="lg:max-w-[1200px] mx-auto">
      <HelmetComponent title={"NFTERS | About"} />
      <h2 className="font-medium text-[18px] md:text-[25px] ml-5 lg:text-[40px] mt-5 lg:mt-[30px]">
        Direct Teams
      </h2>
      <h2 className="font-medium text-[18px] md:text-[25px] ml-5 lg:text-[40px]">
        For Your Dadicated Dreams
      </h2>
      <div className="relative">
        <div className="w-[369px] md:w-[780px] md:h-[310px] lg:w-[1200px] lg:h-[500px] rounded-xl my-[30px] mx-auto">
          <img
            src={img1}
            alt=""
            className="w-full h-full object-cover rounded-xl"
          />
        </div>
        <div className="absolute bottom-[-175px] md:-bottom-[120px] lg:-bottom-[120px] left-[2rem] md:left-[7rem] lg:left-8 w-[331px] md:w-[600px] lg:w-[600px] h-[220px] md:h-[240px] lg:h-[280px] border border-[#F4F4F4] rounded-2xl px-3 lg:px-6 py-3 md:py-5 lg:py-5 bg-gray-300">
          <h2 className="text-[17px] md:text-xl lg:text-xl">Why We Do This</h2>
          <p className="text-paragraphColor text-[13px] md:text-[16px] lg:text-[16px] mt-1 md:mt-2 lg:mt-5">
            NFTs are virtual tokens that represent ownership of something
            inherently distinct and scarce, whether it be a physical or digital
            item, such as artwork, a soundtrack, a collectible, an in-game item
            or real estate. Unlike regular cryptocurrencies like bitcoin or fiat
            money like the U.S.
          </p>
          <button className="mt-3 lg:mt-7 cursor-pointer">
            <h3 className="bg-[#3D00B7] font-normal text-[14px] md:text-xl lg:text-xl h-[37px] md:h-[49px] lg:h-[55px] w-[150px] md:w-[190px] lg:w-[190px] flex justify-center items-center text-white rounded-[60px] whitespace-nowrap">
              Explore More
            </h3>
          </button>
        </div>
      </div>
      <div className="flex flex-col lg:flex-row justify-start items-center">
        <p className="mt-56 md:mt-40 lg:mt-40 text-xl lg:text-2xl md:text-2xl font-bold text-center lg:text-start w-[300px] lg:w-[500px] md:w-[500px]">
          Create, Sell well & Collect your Wonderful NFTs at NFTERS Very Fast
        </p>
        <div className="mt-16 lg:mt-40 w-[331px] lg:w-[600px] md:w-[600px] h-[240px] border border-[#F4F4F4] rounded-2xl px-3 lg:px-6 py-3 md:py-5 lg:py-5 bg-gray-100 mx-auto lg:ml-auto">
          <h2 className="text-[17px] md:text-xl lg:text-xl">Helping You</h2>{" "}
          <h2 className="text-[17px] md:text-xl lg:text-xl">
            Grow In Every Stage.
          </h2>
          <p className="text-paragraphColor text-[13px] md:text-[16px] lg:text-[16px] mt-1 md:mt-2 lg:mt-5">
            NFTs are virtual tokens that represent ownership of something
            inherently distinct and scarce, whether it be a physical or digital
            item, such as artwork, a soundtrack, a collectible, an in-game item
            or real estate. Unlike regular cryptocurrencies like bitcoin or fiat
            money like the U.S. item, such as artwork, a soundtrack, a
            collectible.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
