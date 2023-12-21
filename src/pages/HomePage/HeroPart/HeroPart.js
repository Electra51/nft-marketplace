import React from "react";
import img1 from "../../../assets/3.png";
import img2 from "../../../assets/2.png"
import img3 from "../../../assets/1.png";
import ethereum from "../../../assets/ethereum 2.png"
import manPic from "../../../assets/manPic.png"
const HeroPart = () => {
  return (
    <div className="pt-[57px] max-w-[1200px] mx-auto h-[440px] grid grid-cols-2 relative">
      <div>
        <h2 className="text-[40px] text-black">
          Discover, and collect Digital Art NFTs{" "}
        </h2>
        <p className="text-[#565656] text-xl mt-[22px]">
          Digital marketplace for crypto collectibles and non-fungible tokens
          (NFTs). Buy, Sell, and discover exclusive digital assets.
        </p>
        <h3 className="bg-[#3D00B7] font-normal text-xl px-[40px] py-[20px] h-[65px] w-[209px] flex justify-center items-center text-white rounded-[60px] mt-[41px] cursor-pointer">
          Explore Now
        </h3>
        <div className="text-black flex justify-start items-center gap-[23px] mt-[30px]">
          {" "}
          <div>
            <h2 className="text-[40px] font-medium">
              98<span className="font-normal">k+</span>
            </h2>
            <p className="text-xl text-[#565656] -mt-3">Artwork</p>
          </div>{" "}
          <div>
            <h2 className="text-[40px] font-medium">
              12<span className="font-normal">k+</span>
            </h2>
            <p className="text-xl text-[#565656] -mt-3">Auction</p>
          </div>{" "}
          <div>
            <h2 className="text-[40px] font-medium">
              15<span className="font-normal">k+</span>
            </h2>
            <p className="text-xl text-[#565656] -mt-3">Artist</p>
          </div>
        </div>
      </div>
      <div className="">
        <div className="w-[310px] h-[341px] absolute top-[105px] right-[90px]">
          <img src={img1} alt="" />
        </div>
        <div className="w-[356px] h-[391px] absolute top-[80px] right-[120px]">
          <img src={img2} alt="" />
        </div>
        <div className="w-[400px] h-[440px] absolute top-[60px] right-[155px]">
          <img src={img3} alt="" />
          <div className="w-[348px] h-[74px] bg-white bg-opacity-30 absolute bottom-6 left-[26px] rounded-[12px]">
            <p className="font-bold text-[28px] absolute bottom-[350px] left-[6px] text-white">Abstr Gradient NFT</p>
            <div className="absolute bottom-[312px] left-[6px]">
              <div className="flex justify-normal items-center gap-[14px] text-white">
                <img src={manPic} alt="" className="w-[32px] h-[32px]" />
                <p className="font-bold text-[20px]">Arkhan17</p>
              </div>
            </div>
            <div className="px-[25px] py-[14px] grid grid-cols-2 gap-[100px] text-white">
              <div>
                <p className="text-[12px] pb-[6px] font-medium">Current Bid</p>
                <div className="flex justify-normal items-center gap-1">
                  <img src={ethereum} alt="" className="h-[22px] w-[13px]" />
                  <p className="font-bold text-[16px]">0.25 ETH</p>
                </div>
              </div>
              <div>
                <p className="text-[12px] pb-[6px] font-medium">Ends in</p>
                <div className="flex justify-normal items-center gap-1">
                  <p className="font-bold text-[16px]">12<span>h</span></p>
                  <p className="font-bold text-[16px]">43<span>m</span></p>
                  <p className="font-bold text-[16px]">42<span>s</span></p>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default HeroPart;
