import React, { useState } from "react";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import manPic from "../../../assets/manPic.png";
import ethereumGray from "../../../assets/VectorGray.png";
import ethereumGreen from "../../../assets/ethereumGreen.png";
const LeftPartofThirdPart = () => {
  const productImage = [
    {
      id: "1",
      img: "/1.png",
    },
    {
      id: "2",
      img: "/2.png",
    },
    {
      id: "3",
      img: "/3.png",
    },
    {
      id: "4",
      img: "/4.png",
    },
  ];

  const [wordData, setWordData] = useState(productImage[0]);
  const [val, setVal] = useState(0);

  const handleClick = (index) => {
    setVal(index);
    const wordSlider = productImage[index];
    setWordData(wordSlider);
  };

  const handleNext = () => {
    let index = val < productImage.length - 1 ? val + 1 : val;
    setVal(index);
    const wordSlider = productImage[index];
    setWordData(wordSlider);
  };

  const handlePrevious = () => {
    let index = val <= productImage.length - 1 && val > 0 ? val - 1 : val;
    setVal(index);
    const wordSlider = productImage[index];
    setWordData(wordSlider);
  };

  const filteredProductImages = productImage?.slice(1);
  return (
    <div className="flex flex-row-reverse justify-start gap-[53px] items-start">
      <div className="flex flex-col gap-[41px]">
        {filteredProductImages.map((data, i) => (
          <div className="h-[147px] w-[147px]" key={i}>
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

      <div className="w-[400px] h-[523px]">
        <div className="h-[424px] rounded-[24px]">
          <img
            src={wordData?.img}
            className="w-full h-full rounded-[24px] object-cover object-center"
          />
        </div>
        <div className="flex justify-normal items-start gap-[112px]">
          <div className="mt-[32px] flex justify-normal items-center gap-[10px]">
            <img src={manPic} alt="" className="h-[48px] w-[48px]" />
            <div className=" whitespace-nowrap">
              <p className="text-black font-bold text-[20px]">The Futr Abstr</p>
              <p className="text-[#363639] text-[14px]">10 in the stock</p>
            </div>
          </div>{" "}
          <div className="mt-[32px] flex justify-normal items-center gap-[10px]">
            <div className=" whitespace-nowrap">
              <p className="text-[#3A3A3A] font-medium text-[12px]">
                Highest Bid
              </p>
              <div className="flex justify-normal items-center gap-1">
                <img src={ethereumGray} alt="" className="h-[22px] w-[13px]" />
                <p className="font-bold text-[16px] text-[#3A3A3A]">0.25 ETH</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeftPartofThirdPart;
