import React from "react";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="border-t border-[#ECECEC]">
      <div className="flex flex-col lg:flex-row justify-start items-center lg:items-start gap-[100px] max-w-[1200px] mx-auto pt-[79px] ">
        <div className="flex flex-col justify-center items-center lg:block">
          <h1 className="text-[24px] text-black">NFTERS</h1>
          <h3 className="text-[#565656] text-[14px] mt-[27px] w-[333px] text-center lg:text-start">
            The world’s first and largest digital marketplace for crypto
            collectibles and non-fungible tokens (NFTs). Buy, sell, and discover
            exclusive digital items.
          </h3>
          <div className="flex justify-normal items-center gap-4 mt-[32px]">
            <div className="h-9 w-9 rounded-full bg-[#3B5998] flex justify-center items-center">
              <FaFacebookF className="text-white text-2xl" />
            </div>
            <div className="h-9 w-9 rounded-full bg-[#55acee] flex justify-center items-center">
              <FaTwitter className="text-white text-2xl" />
            </div>
            <div className="h-9 w-9 rounded-full bg-[#267ab9] flex justify-center items-center">
              <FaLinkedinIn className="text-white text-2xl" />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 -mt-3 lg:mt-0 lg:flex gap-[50px] lg:gap-[80px]">
          <div className=" text-center lg:text-start">
            <p className="font-bold text-[18px] text-black mt-1">
              Market Place
            </p>
            <div className="leading-[30px] mt-[27px]">
              <p className="font-medium text-[14px] text-[#3D3D3D]">All NFTs</p>
              <p className="font-medium text-[14px] text-[#3D3D3D]">New</p>
              <p className="font-medium text-[14px] text-[#3D3D3D]">Art</p>
              <p className="font-medium text-[14px] text-[#3D3D3D]">Sports</p>
              <p className="font-medium text-[14px] text-[#3D3D3D]">Utility</p>
              <p className="font-medium text-[14px] text-[#3D3D3D]">Music</p>
              <p className="font-medium text-[14px] text-[#3D3D3D]">
                Domain Name
              </p>
            </div>
          </div>
          <div className="text-center lg:text-start">
            <p className="font-bold text-[18px] text-black mt-1">My Account</p>
            <div className="leading-[30px] mt-[27px]">
              <p className="font-medium text-[14px] text-[#3D3D3D]">Profile</p>
              <p className="font-medium text-[14px] text-[#3D3D3D]">Favorite</p>
              <p className="font-medium text-[14px] text-[#3D3D3D]">
                My Collections
              </p>
              <p className="font-medium text-[14px] text-[#3D3D3D]">Settings</p>
            </div>
          </div>
          <div className="w-[364px] sm:col-span-2 sm:mx-auto">
            {" "}
            <p className="font-bold text-[18px] text-black mt-1 text-center lg:text-start">
              Stay in the loop
            </p>
            <p className="font-normal text-[14px] mt-[27px] text-[#3D3D3D] w-[364px] tracking-[0.3] lg:text-start text-center">
              Join our mailing list to stay in the loop with our newest feature
              releases, NFT drops, and tips and tricks for navigating NFTs.
            </p>
            <div className="relative">
              <input
                type="text"
                placeholder="Enter your email address.."
                className="input input-bordered input-[#F1F1F1] w-full max-w-[364px] mt-6 rounded-full h-[60px]"
              />
              <p className="absolute top-8 right-2 h-[46px] w-[149px] flex justify-center items-center bg-[#2639ED] rounded-full text-white text-[12px] font-normal">
                Subscibe Now
              </p>
            </div>
          </div>
        </div>
      </div>

      <h3 className="text-[#A4A4A4] text-[14px] mt-[29px] lg:mt-[69px] border-t border-[#F4F4F4] pt-[15px] pb-6 text-center max-w-[1200px] mx-auto">
        Copyright © 2023 safayet
      </h3>
    </div>
  );
};

export default Footer;
