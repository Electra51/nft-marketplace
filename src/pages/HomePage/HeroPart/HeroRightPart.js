import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-cards";
import { EffectCards } from "swiper/modules";
import { heroData } from "../../../components/common/data";
import { FaEthereum } from "react-icons/fa";

const HeroRightPart = () => {
  return (
    <div className="overflow-hidden lg:overflow-y-hidden">
      <Swiper
        effect={"cards"}
        grabCursor={true}
        modules={[EffectCards]}
        className="mySwiper">
        {heroData?.map((data, i) => {
          return (
            <SwiperSlide key={i}>
              <img
                src={data.img}
                alt=""
                className="h-full w-full object-cover"
              />
              <div className="w-[264px] lg:w-[348px] lg:h-[74px] bg-white bg-opacity-30 absolute bottom-5 left-[15px] lg:bottom-6 md:left-[13px] lg:left-[26px] rounded-[12px]">
                <p className="font-bold text-[23px] lg:text-[28px] absolute bottom-[350px] left-[6px] text-white">
                  {data.title}
                </p>
                <div className="absolute bottom-[312px] left-[6px]">
                  <div className="flex justify-normal items-center gap-[14px] text-white">
                    <img
                      src={data.manImg}
                      alt=""
                      className="w-[24px] lg:w-[32px] h-[24px] lg:h-[32px]"
                    />
                    <p className="font-bold text-[17px] lg:text-[20px]">
                      {data.userName}
                    </p>
                  </div>
                </div>
                <div className="px-[25px] py-[14px] grid grid-cols-2 gap-[65px] lg:gap-[100px] text-white">
                  <div>
                    <p className="text-[12px] pb-[6px] font-medium whitespace-nowrap">
                      Current Bid
                    </p>
                    <div className="flex justify-normal items-center gap-1">
                      <FaEthereum className="text-[22px] hover:text-indigo-500" />
                      <p className="font-bold text-[14px] whitespace-nowrap lg:text-[16px]">
                        {data.eth}
                      </p>
                    </div>
                  </div>
                  <div>
                    <p className="text-[12px] pb-[6px] font-medium">Ends in</p>
                    <div className="flex justify-normal items-center gap-1">
                      <p className="font-bold text-[14px] whitespace-nowrap lg:text-[16px]">
                        {data.time}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default HeroRightPart;
