import React from "react";
import woman from "../../../assets/woman.png";
import img1 from "../../../assets/1.png";
import img2 from "../../../assets/2.png";
import img3 from "../../../assets/3.png";
import manPic from "../../../assets/man.png";

const CreateSellPart = () => {
  return (
    <div className="mt-[40px] lg:mt-[102px] grid grid-cols-1 lg:grid-cols-2 gap-[40px] h-[606px] max-w-[1200px] mx-auto mb-10">
      <div className="relative hidden lg:flex md:flex">
        <div className="relative left-2">
          <img
            src={img1}
            alt=""
            className="md:w-[282px] lg:w-[300px] h-[300px] rounded-[12px]"
          />
          <img
            src={manPic}
            alt=""
            className="w-[80px] h-[80px] absolute md:bottom-[-40.25px] lg:bottom-[266.75px] md:left-[240px] left-[248px]"
          />
        </div>
        <div className="absolute right-[20rem] lg:right-[280px] bottom-[116px] lg:bottom-10">
          <img
            src={img3}
            alt=""
            className="lg:w-[192px] h-[214px] rounded-[12px]"
          />
          <img
            src={woman}
            alt=""
            className="w-[80px] h-[80px] absolute -bottom-7 left-[148px]"
          />
        </div>
        <div className="absolute md:right-[10.75rem] lg:right-[-1.25rem] md:top-[80px] lg:top-0 mt-[138px]">
          <img
            src={img2}
            alt=""
            className="md:w-[300px] lg:w-[240px] md:h-[194px] lg:h-[265px] rounded-[12px]"
          />
          <img
            src={woman}
            alt=""
            className="w-[71px] h-[71px] absolute -bottom-5 md:left-[255px] lg:left-[200px]"
          />
        </div>
      </div>
      <div className="ml-0 lg:ml-[20px]">
        <h1 className="font-bold text-[28px] text-center lg:text-start lg:text-[32px] w-[320px] mt-[77px] lg:mt-[136px] mx-auto lg:mx-0">
          Create and sell your NFTs
        </h1>
        <p className="text-[18px] font-normal text-[#636363] mt-[40px] text-center lg:text-start">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Facilisi ac
          phasellus placerat a pellentesque tellus sed egestas. Et tristique
          dictum sit tristique sed non. Lacinia lorem id consectetur pretium
          diam ut. Pellentesque eu sit blandit fringilla risus faucibus.
        </p>
        <button className="flex justify-center items-center lg:justify-start mx-auto lg:mx-0">
          <h3 className="text-xl w-[212px] h-[65px] bg-[#3D00B7] rounded-full mt-8 text-white flex justify-center items-center cursor-pointer hover:shadow-md shadow-violet-900 hover:bg-gradient-to-r from-indigo-600 via-purple-600 to-violet-500">
            Sign Up Now
          </h3>
        </button>
      </div>
    </div>
  );
};

export default CreateSellPart;
