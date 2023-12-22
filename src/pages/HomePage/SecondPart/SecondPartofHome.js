import React from "react";
import img1 from "../../../assets/card-tick-1 1.png";
import img2 from "../../../assets/chart-square 2.png";

const SecondPartofHome = () => {
  return (
    <div className="mt-[665px] md:mt-[180px] lg:mt-[122px] h-[430px] md:h-[320px] lg:h-[326px] bg-[#D9E0EC] bg-opacity-20 overflow-x-hidden lg:overflow-x-auto">
      <div className="max-w-[1200px] mx-auto grid md:grid-cols-1 lg:grid-cols-3 gap-y-8 lg:gap-[186px] py-0 lg:py-[110px] md:justify-items-center lg:justify-items-start">
        <h1 className="text-[23px] lg:text-[28px] sm:w-[398px] sm:text-center lg:text-start md:text-center px-3 lg:px-0 pt-4 lg:pt-0">
          The amazing NFT art of the world here
        </h1>
        <div className="flex flex-col md:flex-row px-4 lg:px-0 lg:flex-row justify-center lg:justify-normal items-start gap-6 lg:gap-[56px] col-span-2">
          <div className="flex flex-col max-w-[365px] lg:max-w-[300px] lg:flex-row justify-center lg:justify-normal items-center text-center lg:text-start lg:items-start gap-1 lg:gap-[15px]">
            <img src={img1} alt="" width={36} />
            <div>
              <p className="text-[20px] font-bold">Fast Transaction</p>
              <p className="md:text-[17px] lg:text-[14px] text-paragraphColor mt-1 lg:mt-[12px] tracking-[0.02rem] leading-5">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
                etiam viverra tellus imperdiet.
              </p>
            </div>
          </div>
          <div className="flex flex-col max-w-[365px] lg:max-w-[362px] lg:flex-row justify-center lg:justify-normal items-center text-center lg:text-start lg:items-start gap-1 lg:gap-[15px]">
            <img src={img2} alt="" width={36} />
            <div>
              <p className="text-[20px] font-bold">Growth Transaction</p>
              <p className="md:text-[17px] lg:text-[14px] text-paragraphColor mt-1 lg:mt-[12px] tracking-[0.02rem] leading-5">
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

export default SecondPartofHome;
