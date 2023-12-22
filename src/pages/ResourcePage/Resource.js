import React from "react";
import resourseBanner from "../../assets/resourseBanner.jpg";
import { FiPhoneCall } from "react-icons/fi";
import { IoLocationOutline } from "react-icons/io5";
import { FaFacebookF, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import CommonBanner from "../../components/common/CommonBanner";

const Resource = () => {
  return (
    <div>
      {/* banner */}
      <CommonBanner
        title={" Resource"}
        description={
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Non,lobortis in in tortor lectus iaculis Nibh purus integer elementum in."
        }
        resourseBanner={resourseBanner}
      />
      {/* 2nd part of resource pages */}
      <div className="my-[80px] max-w-[700px] lg:max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        {/* contact form */}
        <div className="mx-auto max-w-xl bg-white">
          <form className="space-y-4 mx-3">
            <input
              type="text"
              placeholder="Name"
              className="w-full rounded-[100px] py-3 px-4 bg-gray-100 text-sm outline-[#494CB7]"
            />
            <input
              type="email"
              placeholder="Email"
              className="w-full rounded-[100px] py-3 px-4 bg-gray-100 text-sm outline-[#494CB7]"
            />
            <input
              type="text"
              placeholder="Subject"
              className="w-full rounded-[100px] py-3 px-4 bg-gray-100 text-sm outline-[#494CB7]"
            />
            <textarea
              placeholder="Message"
              rows="6"
              className="w-full rounded-[25px] px-4 bg-gray-100 text-sm pt-3 outline-[#494CB7]"></textarea>
            <button
              type="button"
              className="text-white bg-[#494CB7] hover:bg-[#383956] font-semibold rounded-[100px] text-sm px-4 py-3 w-full hover:shadow-md shadow-violet-900 hover:bg-gradient-to-r from-indigo-600 via-purple-600 to-violet-500">
              Send
            </button>
          </form>
        </div>
        {/* contact info */}
        <div className="mx-3 lg:mx-0 md:mx-0">
          <h2 className="text-[22px] lg:text-[24px] text-center lg:text-start md:text-start font-medium mb-5">
            Contact for more
          </h2>
          <p className="text-[19px] lg:text-2xl text-center lg:text-start md:text-start font-bold">
            Need any help just give a touch
          </p>
          <p className="text-[18px] font-normal text-paragraphColor w-[370px] lg:w-[500px] mt-1 text-center lg:text-start md:text-start break-words">
            If you have any inquiries or require assistance, feel free to
            contact our committed support team. They will provide you with
            prompt and helpful assistance.
          </p>
          <div className="mt-9 flex justify-center md:justify-normal lg:justify-normal items-center gap-3 text-[18px] font-normal text-paragraphColor ">
            <FiPhoneCall /> +9803 4674 736872
          </div>
          <div className="mt-2 flex justify-center md:justify-normal lg:justify-normal items-center gap-2 text-[18px] font-normal text-paragraphColor">
            <IoLocationOutline /> <p>France, 23/45 road, h-34</p>
          </div>
          <div className="flex justify-center md:justify-normal lg:justify-normal items-center gap-4 mt-3">
            <div className="relative group">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-indigo-600 to-violet-500 rounded-full blur opacity-25 group-hover:opacity-100 transition duration-800 group-hover:duration-200"></div>
              <div className="h-9 w-9 bg-[#3B5998] flex justify-center items-center  hover:shadow-md shadow-indigo-900 cursor-pointer relative ring-1 ring-gray-900/5 rounded-full leading-none items-top space-x-6">
                <FaFacebookF className="text-white text-2xl" />
              </div>
            </div>
            <div className="relative group">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-indigo-600 to-violet-500 rounded-full blur opacity-25 group-hover:opacity-100 transition duration-800 group-hover:duration-200"></div>
              <div className="h-9 w-9 bg-[#55acee] flex justify-center items-center  hover:shadow-md shadow-indigo-900 cursor-pointer relative ring-1 ring-gray-900/5 rounded-full leading-none items-top space-x-6">
                <FaTwitter className="text-white text-2xl" />
              </div>
            </div>
            <div className="relative group">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-indigo-600 to-violet-500 rounded-full blur opacity-25 group-hover:opacity-100 transition duration-800 group-hover:duration-200"></div>
              <div className="h-9 w-9 bg-[#267ab9] flex justify-center items-center  hover:shadow-md shadow-indigo-900 cursor-pointer relative ring-1 ring-gray-900/5 rounded-full leading-none items-top space-x-6">
                <FaLinkedinIn className="text-white text-2xl" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resource;
