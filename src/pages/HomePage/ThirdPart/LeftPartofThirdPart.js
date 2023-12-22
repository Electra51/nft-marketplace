import React, { useState } from "react";
import manPic from "../../../assets/manPic.png";
import { FaEthereum } from "react-icons/fa";
import { productImage } from "../../../components/common/data";

const LeftPartofThirdPart = () => {
  const [wordData, setWordData] = useState(productImage[0]);
  const [val, setVal] = useState(0);

  const handleClick = (index) => {
    setVal(index);
    const wordSlider = productImage[index];
    setWordData(wordSlider);
  };

  const filteredProductImages = productImage?.slice(1);
  return (
    <div className="flex flex-col-reverse md:flex-row-reverse lg:flex-row-reverse justify-center lg:justify-start items-center md:gap-[30px] gap-0 lg:gap-[53px]">
      <div className="flex flex-row md:flex-col lg:flex-col gap-4 md:gap-3 lg:gap-[41px] mt-6 md:mt-0">
        {filteredProductImages.map((data, i) => (
          <div
            className="h-[80px] md:h-[110px] lg:h-[147px] w-[100px] md:w-[140px] lg:w-[147px]"
            key={i}
          >
            <img
              className={`${
                wordData?.id === data?.id ? "clicked" : ""
              } object-fit object-center w-full h-full`}
              src={data?.img}
              onClick={() => handleClick(i + 2)}
            />
          </div>
        ))}
      </div>
      <div className="w-[320px] md:w-[444px] lg:w-[400px] lg:h-[523px] mt-20 md:mt-0 lg:mt-0">
        <div className="h-[300px] lg:h-[424px] rounded-[24px]">
          <img
            src={wordData?.img}
            className="w-full h-full rounded-[24px] object-cover object-center"
          />
        </div>
        <div className="flex justify-normal items-start gap-[60px] md:gap-[170px] lg:gap-[112px]">
          <div className="mt-[18px] lg:mt-[32px] flex justify-normal items-center gap-[10px]">
            <img
              src={manPic}
              alt=""
              className="h-[35px] lg:h-[48px] w-[35px] lg:w-[48px]"
            />
            <div className=" whitespace-nowrap">
              <p className="font-bold text-[16px] lg:text-[20px]">
                The Futr Abstr
              </p>
              <p className="text-[#363639] text-[13px] lg:text-[14px]">
                10 in the stock
              </p>
            </div>
          </div>{" "}
          <div className="mt-[18px] lg:mt-[32px] flex justify-normal items-center gap-[10px]">
            <div className=" whitespace-nowrap">
              <p className="text-[#3A3A3A] font-medium text-[12px]">
                Highest Bid
              </p>
              <div className="flex justify-normal items-center gap-1 mt-[6px]">
                <FaEthereum className="text-[22px] text-[#3A3A3A]" />
                <p className="font-bold text-[13px] lg:text-[16px] text-[#3A3A3A]">
                  0.25 ETH
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeftPartofThirdPart;
