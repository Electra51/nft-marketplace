import React from "react";
import HeroRightPart from "./HeroRightPart";
import { FaEthereum } from "react-icons/fa";

const HeroPart = () => {
  return (
    <div className="pt-[57px] max-w-[1200px] mx-auto h-[440px] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 relative">
      <div className="text-center px-3 lg:px-0 lg:text-start">
        <h2 className="text-[28px] lg:text-[40px] ">
          Discover, and collect Digital Art NFTs{" "}
        </h2>
        <p className="text-paragraphColor text-xl mt-[22px]">
          Digital marketplace for crypto collectibles and non-fungible tokens
          (NFTs). Buy, Sell, and discover exclusive digital assets.
        </p>
        <div className="flex justify-center items-center lg:justify-start">
          <h3 className="bg-[#3D00B7] font-normal text-xl px-[40px] py-[20px] h-[65px] w-[209px] flex justify-center items-center text-white rounded-[60px] mt-[41px] cursor-pointer hover:shadow-md shadow-violet-900 hover:bg-gradient-to-r from-indigo-600 via-purple-600 to-violet-500">
            Explore Now
          </h3>
        </div>
        <div className=" flex lg:justify-start items-center gap-[23px] mt-[30px] justify-center">
          {" "}
          <div>
            <h2 className="text-[40px] font-medium">
              98<span className="font-bold">k+</span>
            </h2>
            <p className="text-xl text-paragraphColor -mt-3">Artwork</p>
          </div>{" "}
          <div>
            <h2 className="text-[40px] font-medium">
              12<span className="font-bold">k+</span>
            </h2>
            <p className="text-xl text-paragraphColor -mt-3">Auction</p>
          </div>{" "}
          <div>
            <h2 className="text-[40px] font-medium">
              15<span className="font-bold">k+</span>
            </h2>
            <p className="text-xl text-paragraphColor -mt-3">Artist</p>
          </div>
        </div>
      </div>
      <div className="mt-10 md:mt-0 lg:mt-0">
        <HeroRightPart />
        <div className="absolute bottom-[-410px] md:bottom-[40px] lg:bottom-12 left-[20px] md:left-[410px] lg:left-[640px] z-10">
          <div className="rounded-text rotating relative">
            <svg viewBox="0 0 200 200">
              <path
                id="textPath"
                d="M 85,0 A 85,85 0 0 1 -85,0 A 85,85 0 0 1 85,0"
                transform="translate(100,100)"
                fill="none"
                strokeWidth="0"></path>
              <g fontSize="25px">
                <text textAnchor="start">
                  <textPath
                    className="coloring"
                    xlinkHref="#textPath"
                    startOffset="0%">
                    {" "}
                    . Live Auction . Live Auction{" "}
                  </textPath>
                </text>
              </g>
            </svg>
            <FaEthereum className="text-2xl absolute top-[48px] left-[50px] right-[50px]" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroPart;
