import React from "react";
import { featuredCollection } from "../../../components/common/data";
const FeaturedCollectionPart = () => {
  return (
    <div className="mt-[600px] md:mt-[483px] lg:mt-[151px] bg-[#D9E0EC] bg-opacity-20">
      <div className="max-w-[1200px] mx-auto h-[1389px] lg:h-[619px]">
        <h1 className="text-[20px] md:text-[28px] lg:text-[28px] font-bold text-center lg:text-start pt-[64px] pb-[55px]">
          Collection Featured NFTs
        </h1>

        <div className="flex flex-col lg:flex-row justify-normal items-center gap-[31px] pb-[99px]">
          {featuredCollection?.map((featureData, i) => {
            return (
              <div className="w-[355px] lg:w-[379px] h-[366px]">
                <div className="flex justify-normal items-center gap-[9px]">
                  <div className="w-[265px] h-[272px]">
                    <img
                      src={featureData.featureImage}
                      alt=""
                      className="h-full w-full object-fill"
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    {featureData.smallImage?.map((eachImage, e) => {
                      return (
                        <div className="w-[104px] h-[85px]">
                          <img
                            src={eachImage.img1}
                            alt=""
                            className="w-full h-full object-fill"
                          />
                        </div>
                      );
                    })}
                  </div>
                </div>
                <div className="mt-[29px]">
                  <p className="font-bold text-[20px]">{featureData.title}</p>
                  <div className="flex justify-between items-center">
                    <div className="flex justify-normal items-center gap-[10px] mt-[10px]">
                      <img
                        src={featureData.manPic}
                        alt=""
                        className="w-[28px] h-[28px]"
                      />
                      <p className="text-[14px] font-medium">
                        by {featureData.created_by}
                      </p>
                    </div>
                    <p className="text-[11px] text-[#2639ED] h-[20px] w-[98px] flex justify-center items-center border border-[#2639ED] rounded-[60px] py-[7px] px-[11px]">
                      Total {featureData.item} Items
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default FeaturedCollectionPart;
