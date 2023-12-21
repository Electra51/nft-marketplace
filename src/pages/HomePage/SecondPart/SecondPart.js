import React from "react";
import img1 from "../../../assets/card-tick-1 1.png";
import img2 from "../../../assets/chart-square 2.png";
const SecondPart = () => {
  return (
    <div className="mt-[122px] h-[326px] bg-[#D9E0EC] bg-opacity-20">
      <div className="max-w-[1200px] mx-auto grid grid-cols-3 gap-[86px] py-[110px]">
        <h1 className="text-[28px] w-[398px] text-black">
          The amazing NFT art of the world here
        </h1>
        <div className="flex justify-normal items-start gap-[56px] col-span-2">
          <div className="flex justify-normal items-start gap-[15px]">
            <img src={img1} alt="" width={36} />
            <div>
              <p className="tex-[20px] font-bold">Fast Transaction</p>
              <p className="text-[14px] text-[#696969] mt-[12px]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
                etiam viverra tellus imperdiet.
              </p>
            </div>
          </div>
          <div className="flex justify-normal items-start gap-[15px]">
            <img src={img2} alt="" width={36} />
            <div>
              <p className="tex-[20px] font-bold">Growth Transaction</p>
              <p className="text-[14px] text-[#696969] mt-[12px]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
                etiam viverra tellus imperdiet.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SecondPart;
