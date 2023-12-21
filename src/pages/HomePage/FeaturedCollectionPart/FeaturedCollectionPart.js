import React from "react";
import featureImage1 from "../../../assets/featureImage/1.png";
import featureImage2 from "../../../assets/featureImage/6.png";
import featureImage3 from "../../../assets/featureImage/5.png";

const FeaturedCollectionPart = () => {
  return (
    <div className="mt-[151px] max-w-[1200px] mx-auto h-[619px]">
      <h1 className="text-[28px] text-black font-bold pt-[64px] pb-[55px]">
        Collection Featured NFTs
      </h1>

      <div>
        <div className="w-[379px] h-[366px] flex justify-normal items-center gap-[9px]">
          <div className="w-[265px] h-[272px]">
            <img
              src={featureImage1}
              alt=""
              className="h-full w-full object-fill"
            />
          </div>
          <div className="flex flex-col gap-2">
            <div className="w-[104px] h-[85px]">
              <img
                src={featureImage2}
                alt=""
                className="w-full h-full object-fill"
              />
            </div>
            <div className="w-[104px] h-[85px]">
              <img
                src={featureImage2}
                alt=""
                className="w-full h-full object-fill"
              />
            </div>
            <div className="w-[104px] h-[85px]">
              <img
                src={featureImage3}
                alt=""
                className="w-full h-full object-fill"
              />
            </div>
          </div>
        </div>
        <div className="mt-[29px]">
          <p className="text-black font-bold text-[20px]">Amazing Collection</p>
          <div></div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedCollectionPart;
