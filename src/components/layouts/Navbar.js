import React, { useState } from "react";
import { MdOutlineClose, MdOutlineMenu } from "react-icons/md";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const MenuLink = ({ to, label }) => (
    <li>
      <NavLink to={to} className="text-[16px]">
        {label}
      </NavLink>
    </li>
  );

  const menus = (
    <>
      <MenuLink
        to="/market_place"
        onClick={() => setOpen(false)}
        label="Marketplace"
      />
      <MenuLink
        to="/resource"
        onClick={() => setOpen(false)}
        label="Resource"
      />
      <MenuLink to="/about" onClick={() => setOpen(false)} label="About" />
    </>
  );

  const items = (
    <>
      <input
        type="text"
        placeholder="Type here"
        className="input input-bordered input-[#EFEFEF] w-full max-w-[300px] h-[50px] rounded-full"
      />
      <p className="tracking-[0.1] h-[50px] font-bold text-[14px] text-white bg-themeColor border-themeColor border-[2px] rounded-[60px] flex justify-center items-center px-[40px] py-[18px]">
        Upload
      </p>
      <p className="font-bold text-[14px] text-themeColor tracking-[0.1]  border-themeColor border-[2px] rounded-[60px] px-[20px] whitespace-nowrap py-[18px] h-[50px] flex justify-center items-center">
        Connect Wallet
      </p>
    </>
  );

  const Navigation = ({ isMobile }) => (
    <nav className={`hidden lg:flex ${isMobile ? "flex-col" : "items-center"}`}>
      <ul className="flex justify-normal items-center gap-[47px] ml-[34px] text-black">
        {menus}
      </ul>
    </nav>
  );

  const MobileNavigation = () => (
    <div className="absolute top-0 right-0 h-[100vh] w-full flex-col bg-gray-500">
      <MdOutlineClose
        className="text-xl mt-1 absolute top-5 right-2"
        onClick={() => setOpen(false)}
      />
      <ul className="py-16 px-10 flex flex-col gap-7 justify-center item-center">
        {menus}
        <div className="flex flex-col navbar-end mt-8 gap-[20px]">{items}</div>
      </ul>
    </div>
  );

  return (
    <div className="h-[98px] border-b border-[#EFEFEF] relative">
      <div className="navbar max-w-[1200px] mx-auto mt-0 lg:mt-[29px] bg-base-100 flex justify-normal gap-[70px]">
        <div className="flex justify-normal items-center">
          <div className="flex justify-normal items-end divide-x divide-[#F4F4F4]">
            <h1 className="text-[24px] text-themeColor mr-[31px]">NFTERS</h1>
            <Navigation isMobile={false} />
          </div>
          <MdOutlineMenu
            className="flex lg:hidden text-2xl mt-0.5 absolute top-4.5 right-2"
            onClick={() => setOpen(!open)}
          />
        </div>
        <div className="hidden lg:flex navbar-end gap-[20px]">{items}</div>
      </div>
      {open && <MobileNavigation />}
    </div>
  );
};

export default Navbar;
