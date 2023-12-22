import React from "react";
import dotImage from "../../assets/Dot.png";

const CommonBanner = ({ title, description, resourseBanner }) => {
  return (
    <div
      className="hero h-[260px] bg-fixed"
      style={{
        backgroundImage: `url(${resourseBanner})`,
      }}
    >
      <div className="hero-overlay bg-opacity-10"></div>
      <div className="absolute left-[2rem] lg:left-[353px] top-[163px] lg:top-48">
        <h2 className="font-medium text-[25px] lg:text-[40px] text-start">
          {title}
        </h2>
        <p className="text-[14px] lg:text-[18px] font-normal text-paragraphColor w-[340px] lg:w-[500px] mt-1">
          {description}
        </p>
      </div>
      {/* dot-image */}
      <div className="absolute lg:top-[180px] top-44 right-9 lg:right-[400px]">
        <img
          src={dotImage}
          alt="white-dot-image"
          className="animate-pulse rotate-[130deg] lg:rotate-45"
        />
      </div>
    </div>
  );
};

export default CommonBanner;
