import React from "react";
import { FaEthereum } from "react-icons/fa";
import LeftPartofThirdPart from "./LeftPartofThirdPart";
import { thirdPartRightData } from "../../../components/common/data";
import { thirdPartMiddleData } from "../../../components/common/data";

const ThirdPart = () => {
  return (
    <div className="mt-[20px] md:mt-[78px] lg:mt-[134px] md:max-w-[960px] lg:max-w-[1200px] mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
        <LeftPartofThirdPart />
        <div className="relative">
          <div className="block lg:flex md:justify-center lg:justify-start md:mt-5 lg:mt-0">
            <div className="hidden md:flex lg:hidden absolute md:left-24 lg:left-52 top-0  h-0.5 w-[623px] bg-[#ECECEC]" />
            <div className="flex flex-row justify-center items-center lg:justify-start lg:items-start md:flex-row lg:flex-col gap-3 md:gap-[48px] lg:gap-[58px]">
              {thirdPartMiddleData?.map((e, i) => {
                return (
                  <div className="flex flex-col">
                    <p className="font-bold text-[16px] md:text-[19px] lg:text-[20px]">
                      {e.name}
                    </p>
                    <div className="flex flex-col md:flex-row lg:flex-row justify-center lg:justify-start items-center gap-2 mt-0 lg:mt-2">
                      <img
                        src={e.manImg}
                        alt=""
                        className="h-[34px] w-[34px]"
                      />
                      <div className="flex flex-row justify-normal items-center gap-2">
                        <div className="flex justify-center items-center gap-[5px] w-[60px] md:w-[80px] lg:w-[80px] md:h-[32px] h-[20px] lg:h-[32px] text-[#00AC4F] border border-[#00AC4F] rounded-[5px] lg:rounded-md">
                          <FaEthereum className="text-[10px] md:text-[14px] lg:text-[14px] text-[#00AC4F]" />
                          <p className="font-bold text-[9px] md:text-[12px] lg:text-[12px] whitespace-nowrap">
                            {e.eth}
                          </p>
                        </div>
                        <p className="text-[11px] md:text-[14px] lg:text-[14px] text-[#757575] whitespace-nowrap">
                          {e.num} of 8
                        </p>
                      </div>
                    </div>
                    <button className="flex justify-center md:justify-start lg:justify-start lg:items-start items-center">
                      {" "}
                      <h3 className="text-[14px] bg-[#3D00B7] text-white flex justify-center items-center h-[30px] lg:h-[45px] w-[89px] lg:w-[113px] rounded-full mt-2 lg:mt-4 whitespace-nowrap">
                        Place a bid
                      </h3>
                    </button>
                  </div>
                );
              })}
            </div>

            <div className="absolute right-[2rem] md:right-[4rem] lg:right-2">
              <h1 className="text-xl mt-14 lg:mt-0">Top Collections over</h1>
              <p className="text-[#3D00B7] mt-2">Last 7 Days</p>
              <div className="divide-y divide-[#F0F0F0] grid lg:grid-cols-1 lg:gap-0 md:gap-5 md:grid-cols-2">
                {thirdPartRightData?.map((e, i) => {
                  return (
                    <div className="flex justify-center items-center gap-[26px] py-[16px]">
                      <p className="font-bold text-2xl">{e.id}</p>
                      <div className="flex justify-center items-center gap-[25px]">
                        {e?.imgIcon ? (
                          <div className="relative">
                            {" "}
                            <img
                              src={e.manImg}
                              alt=""
                              className="w-[60px] h-[60px]"
                            />
                            <img
                              src={e.imgIcon}
                              alt=""
                              className="w-[26px] absolute -top-1 -right-1"
                            />
                          </div>
                        ) : (
                          <img
                            src={e.manImg}
                            alt=""
                            className="w-[60px] h-[60px]"
                          />
                        )}
                        <div>
                          <p className="text-[16px] font-medium">{e.name}</p>
                          <div className="flex justify-start items-center gap-[6px]">
                            <FaEthereum className="text-[24px]" />
                            <p className="text-[14px] text-[#636363] fomt-semibold">
                              {e.num}
                            </p>
                          </div>
                        </div>
                      </div>
                      {e.color ? (
                        <p className="text-[20px] font-semibold text-red-500">
                          {e.percents}
                        </p>
                      ) : (
                        <p className="text-[20px] font-semibold text-[#14C8B0]">
                          {e.percents}
                        </p>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
          <div className="hidden lg:flex absolute left-52 top-0  w-0.5 h-[523px] bg-[#ECECEC]" />
        </div>
      </div>
    </div>
  );
};

export default ThirdPart;
