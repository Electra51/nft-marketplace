import { useState } from "react";
import { MdOutlineMenu } from "react-icons/md";
import { Link } from "react-router-dom";
import MobileNavigation from "./MobileNavigation";
import Navigation from "./Navigation";
import { FaSearch } from "react-icons/fa";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const items = (
    <>
      <div className="relative">
        <input
          type="text"
          placeholder="Search"
          className="input input-bordered input-[#EFEFEF] w-[220px] md:w-[270px] lg:w-[300px] h-[50px] rounded-full"
        />
        <FaSearch className="text-[#c5c5c5] text-xl absolute right-[-95px] md:right-6 lg:right-4 top-3.5" />
      </div>
      <p className="tracking-[0.1] h-[50px] font-bold text-[14px] text-white bg-themeColor rounded-[60px] flex justify-center items-center px-[110px] lg:px-[40px] lg:py-[18px] cursor-pointer hover:shadow-md shadow-violet-900 hover:bg-gradient-to-r from-indigo-600 via-purple-600 to-violet-500 hover:text-white">
        Upload
      </p>
      <p className="font-bold text-[14px] text-themeColor tracking-[0.1] border-themeColor border-[2px] rounded-[60px] px-[110px] lg:px-[20px] whitespace-nowrap py-[18px] h-[50px] flex justify-center items-center cursor-pointer hover:shadow-md shadow-violet-900 hover:bg-gradient-to-r from-indigo-600 via-purple-600 to-violet-500 hover:text-white">
        Connect Wallet
      </p>
    </>
  );
  return (
    <div className="h-[98px] border-b border-[#EFEFEF] relative">
      <div className="navbar max-w-[1200px] mx-auto mt-0 lg:mt-[29px] bg-base-100 flex justify-normal gap-[60px]">
        <div className="flex justify-normal items-center">
          <div className="flex justify-normal items-end divide-x divide-[#F4F4F4]">
            <Link to="/">
              <h1 className="text-[24px] text-themeColor mr-[31px]">NFTERS</h1>
            </Link>
            <Navigation isMobile={false} setOpen={setOpen} />
          </div>
          <MdOutlineMenu
            className="flex lg:hidden text-2xl mt-0.5 absolute top-4.5 right-2"
            onClick={() => setOpen(!open)}
          />
        </div>
        <div className="hidden lg:flex navbar-end gap-[20px]">{items}</div>
      </div>
      {open && <MobileNavigation setOpen={setOpen} items={items} />}
    </div>
  );
};

export default Navbar;
