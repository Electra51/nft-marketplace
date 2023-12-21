import React from "react";
import LeftPartofThirdPart from "./LeftPartofThirdPart";
import manPic from "../../../assets/manPic.png";
import ethereumGreen from "../../../assets/ethereumGreen.png";
import img1 from "../../../assets/ThirtPartImage/1.png";
import img2 from "../../../assets/ThirtPartImage/2.png";
import img3 from "../../../assets/ThirtPartImage/3.png";
import img4 from "../../../assets/ThirtPartImage/4.png";
import img5 from "../../../assets/ThirtPartImage/5.png";
import badgeImg from "../../../assets/ThirtPartImage/Vector (1).png";
import ethereumBlack from "../../../assets/ethereumBlack.png";
const ThirdPart = () => {
  const data = [
    {
      id: "1",
      name: "The Futr Abstr",
      manImg: manPic,
      imgIcon: ethereumGreen,
      eth: "0.25 ETH",
      num: 1,
    },
    {
      id: "3",
      name: "The Futr Abstr",
      manImg: manPic,
      imgIcon: ethereumGreen,
      eth: "0.45 ETH",
      num: 4,
    },
    {
      id: "3",
      name: "The Futr Abstr",
      manImg: manPic,
      imgIcon: ethereumGreen,
      eth: "1.25 ETH",
      num: 2,
    },
  ];
  const rightData = [
    {
      id: "1",
      name: "CryptoFunks",
      manImg: img1,
      imgIcon: badgeImg,
      percents: "+26.52%",
      num: "19, 769.39",
    },
    {
      id: "2",
      name: "Cryptix",
      manImg: img2,

      percents: "+10.52%",
      num: "2,769.39",
    },
    {
      id: "3",
      name: "Frensware",
      manImg: img3,

      percents: "+2.52%",
      num: "9,232.39",
    },
    {
      id: "4",
      name: "PunkArt",
      manImg: img4,
      imgIcon: badgeImg,
      percents: "+1.52%",
      num: "3,769.39",
    },
    {
      id: "5",
      name: "Art Crypto",
      manImg: img5,

      percents: "+2.52%",
      num: "10,769.39",
    },
  ];
  return (
    <div className="mt-[134px] max-w-[1200px] mx-auto">
      <div className="grid grid-cols-2 gap-5">
        <LeftPartofThirdPart />
        <div className="relative">
          <div className="flex">
            <div className="flex flex-col gap-[58px]">
              {data?.map((e, i) => {
                return (
                  <div className="flex flex-col">
                    <p className="text-black font-bold text-[20px]">{e.name}</p>
                    <div className="flex justify-start items-center gap-2 mt-2">
                      <img
                        src={e.manImg}
                        alt=""
                        className="h-[34px] w-[34px]"
                      />
                      <div className="flex justify-center items-center gap-[5px] w-[80px] h-[32px] text-[#00AC4F] border border-[#00AC4F] rounded-md">
                        <img
                          src={e.imgIcon}
                          alt=""
                          className="h-[22px] w-[13px]"
                        />
                        <p className="font-bold text-[12px] whitespace-nowrap">
                          {e.eth}
                        </p>
                      </div>
                      <p className="text-[14px] text-[#757575] whitespace-nowrap">
                        {e.num} of 8
                      </p>
                    </div>
                    <h3 className="text-[14px] bg-[#3D00B7] text-white px-5 py-[14px] h-[45px] w-[113px] rounded-full mt-4">
                      Place a bid
                    </h3>
                  </div>
                );
              })}
            </div>

            <div className="absolute right-2">
              <h1 className="text-xl text-black">Top Collections over</h1>
              <p className="text-[#3D00B7] mt-2">Last 7 Days</p>
              <div className="divide-y divide-[#F0F0F0]">
                {rightData?.map((e, i) => {
                  return (
                    <div className="flex justify-center items-center gap-[26px] text-black py-[16px]">
                      <p className="font-bold text-2xl">{e.id}</p>
                      <div className="flex justify-center items-center gap-[25px]">
                        <img
                          src={e.manImg}
                          alt=""
                          className="w-[60px] h-[60px]"
                        />
                        <div>
                          <p className="text-[16px] font-medium">CryptoFunks</p>
                          <div className="flex justify-start items-center gap-[6px]">
                            <img
                              src={ethereumBlack}
                              alt=""
                              className="w-[14px] h-[24px]"
                            />
                            <p className="text-[14px] text-[#636363] fomt-semibold">
                              {e.num}
                            </p>
                          </div>
                        </div>
                      </div>
                      <p className="text-[20px] font-semibold text-[#14C8B0]">
                        {e.percents}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
          <div className="absolute left-52 top-0  w-0.5 h-[523px] bg-[#ECECEC]" />
        </div>
      </div>
    </div>
  );
};

export default ThirdPart;
