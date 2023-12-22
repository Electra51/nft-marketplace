import React from "react";
import { MdArrowBack } from "react-icons/md";
import HelmetComponent from "../../components/common/HelmetComponent";

const ErrorPage = () => {
  return (
    <div className="flex flex-col justify-center items-center mt-40">
      <HelmetComponent title={"NFTERS | Not-Found"} />
      <h1 className="text-[160px] font-black text-[#3D00B7]">404</h1>
      <p className="text-3xl">Page Not Found</p>
      <button className="border rounded-[5px] px-3 py-1 flex justify-center items-center gap-1 bg-[#3D00B7] text-white hover:bg-slate-600 hover:text-white mt-8 text-xl">
        <MdArrowBack />
        <p>Back to home</p>
      </button>
    </div>
  );
};

export default ErrorPage;
