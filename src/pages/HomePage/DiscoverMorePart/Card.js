import React from "react";
import { FaEthereum } from "react-icons/fa";
const Card = ({ item }) => {
  return (
    <div className="w-[270px] h-[373px] bg-white border border-[#F2F2F2] rounded-[13px]">
      <div className="w-[247px] h-[222px] rounded-[13px] m-[10px] relative">
        <img
          src={item.img}
          alt=""
          className="h-full w-full object-fill rounded-[13px]"
        />
        <div className="avatar-group -space-x-4 rtl:space-x-reverse absolute -bottom-5 left-2">
          {item.manimg.map((e, i) => {
            return (
              <div className="avatar">
                <div className="w-[30px]">
                  <img src={e.img} />
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div className="mt-[21px] mx-[23px]">
        <p className="font-bold text-[19px] text-black">{item?.title}</p>
        <div className="flex justify-between items-center">
          <div className="flex justify-normal items-center gap-[5px] text-[#00AC4F]">
            <FaEthereum className="text-[15px]" />
            <p className="text-[10px] font-bold">{item?.eth}</p>
          </div>
          <p className="text-[13px] text-[#838383]">{item.num} of 321</p>
        </div>
        <hr className="text-[#F4F4F4] mt-[19px]" />
        <div className="my-[11px] flex justify-between items-center">
          <p className="text-[#5539A8] w-[97px] h-[28px] flex justify-center items-center bg-[#F5F5F5] rounded-[100px] text-[10px]">
            {item.time}
          </p>
          <p className="text-[15px] font-medium text-[#4F33A3] cursor-pointer hover:shadow-md shadow-violet-900 hover:bg-gradient-to-r from-indigo-600 via-purple-600 to-violet-500 hover:text-white hover:rounded-[100px] hover:px-3 hover:py-1">
            Place a bid
          </p>
        </div>
      </div>
    </div>
  );
};

export default Card;
