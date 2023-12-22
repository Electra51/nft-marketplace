import React, { useEffect, useState } from "react";
import { MdFilterList } from "react-icons/md";
import Card from "./Card";
import { data } from "../../../components/common/data";
import { Link } from "react-router-dom";

const DiscoverMorePart = () => {
  const [toggleState, setToggleState] = useState(1);
  const toggleTab = (index) => {
    setToggleState(index);
  };

  const [filteredServices, setFilteredServices] = useState(data);
  const [ratingFilter, setRatingFilter] = useState("all");

  //filter functionality
  useEffect(() => {
    const filtered = data?.filter((service) => {
      let matchesRating;
      if (ratingFilter === "all") {
        matchesRating = true;
      } else if (ratingFilter === "4") {
        matchesRating = service?.num <= 4;
      } else if (ratingFilter === "3") {
        matchesRating = service?.num > 4;
      } else if (ratingFilter === "2") {
        matchesRating = service?.num < 3;
      }

      return matchesRating;
    });
    setFilteredServices(filtered);
  }, [data, ratingFilter]);

  //filter handle function
  const handleRatingFilterChange = (e) => {
    const selectedRating = e.target.value;
    setRatingFilter(selectedRating);
  };

  const Art = filteredServices?.filter((item) => item.type === "Art");
  const Celebrities = filteredServices?.filter(
    (item) => item.type === "Celebrities"
  );
  const Gaming = filteredServices?.filter((item) => item.type === "Gaming");
  const Sport = filteredServices?.filter((item) => item.type === "Sport");
  const Music = filteredServices?.filter((item) => item.type === "Music");
  const Crypto = filteredServices?.filter((item) => item.type === "Crypto");

  const renderFilteredServices = (filteredItems) => {
    if (filteredItems && filteredItems.length > 0) {
      return (
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-7 my-7 justify-items-center">
          {filteredItems.map((item, index) => (
            <Card item={item} key={index} />
          ))}
        </div>
      );
    } else {
      return (
        <p className="text-red-500 text-xl flex flex-col justify-center items-center my-20 gap-4">
          No products available for the selected rating or search.
        </p>
      );
    }
  };

  return (
    <div className="md:mt-[167px] lg:mt-[82px] bg-[#D9E0EC] bg-opacity-20">
      <div className="max-w-[1200px] mx-auto">
        <h1 className="text-[20px] text-center lg:text-start lg:text-[34px] font-bold pt-[64px]">
          Discover more NFTs
        </h1>
        <div className="mt-9 h-[44px]">
          <div className="flex flex-col lg:flex-row justify-center lg:justify-between items-start">
            <div className="hidden md:flex md:mx-auto lg:mx-0 lg:flex justify-center items-center gap-5">
              <p
                className={
                  toggleState == 1
                    ? "bg-[#3D00B7] text-white text-[14px] font-medium px-5 py-[10px] rounded-[100px] cursor-pointer hover:shadow-md shadow-violet-900 hover:bg-gradient-to-r from-indigo-600 via-purple-600 to-violet-500"
                    : " bg-[#DCDCDC] bg-opacity-20 text-[14px] font-medium px-5 py-[10px] rounded-[100px] cursor-pointer hover:shadow-md shadow-violet-900 hover:bg-gradient-to-r from-indigo-600 via-purple-600 to-violet-500 hover:text-white"
                }
                onClick={() => toggleTab(1)}
              >
                All Categories
              </p>
              <p
                className={
                  toggleState == 2
                    ? "bg-[#3D00B7] text-white text-[14px] font-medium px-5 py-[10px] rounded-[100px] cursor-pointer hover:shadow-md shadow-violet-900 hover:bg-gradient-to-r from-indigo-600 via-purple-600 to-violet-500"
                    : "bg-[#DCDCDC] bg-opacity-20 text-[14px] font-medium px-5 py-[10px] rounded-[100px] cursor-pointer hover:shadow-md shadow-violet-900 hover:bg-gradient-to-r from-indigo-600 via-purple-600 to-violet-500 hover:text-white"
                }
                onClick={() => toggleTab(2)}
              >
                Art
              </p>
              <p
                className={
                  toggleState == 3
                    ? "bg-[#3D00B7] text-white text-[14px] font-medium px-5 py-[10px] rounded-[100px] cursor-pointer hover:shadow-md shadow-violet-900 hover:bg-gradient-to-r from-indigo-600 via-purple-600 to-violet-500 hover:text-white"
                    : "bg-[#DCDCDC] bg-opacity-20 text-[14px] font-medium px-5 py-[10px] rounded-[100px] cursor-pointer hover:shadow-md shadow-violet-900 hover:bg-gradient-to-r from-indigo-600 via-purple-600 to-violet-500 hover:text-white"
                }
                onClick={() => toggleTab(3)}
              >
                Celebrities
              </p>
              <p
                className={
                  toggleState == 4
                    ? "bg-[#3D00B7] text-white text-[14px] font-medium px-5 py-[10px] rounded-[100px] cursor-pointer hover:shadow-md shadow-violet-900 hover:bg-gradient-to-r from-indigo-600 via-purple-600 to-violet-500 hover:text-white"
                    : "bg-[#DCDCDC] bg-opacity-20 text-[14px] font-medium px-5 py-[10px] rounded-[100px] cursor-pointer hover:shadow-md shadow-violet-900 hover:bg-gradient-to-r from-indigo-600 via-purple-600 to-violet-500 hover:text-white"
                }
                onClick={() => toggleTab(4)}
              >
                Gaming
              </p>
              <p
                className={
                  toggleState == 5
                    ? "bg-[#3D00B7] text-white text-[14px] font-medium px-5 py-[10px] rounded-[100px] cursor-pointer hover:shadow-md shadow-violet-900 hover:bg-gradient-to-r from-indigo-600 via-purple-600 to-violet-500 hover:text-white"
                    : "bg-[#DCDCDC] bg-opacity-20 text-[14px] font-medium px-5 py-[10px] rounded-[100px] cursor-pointer hover:shadow-md shadow-violet-900 hover:bg-gradient-to-r from-indigo-600 via-purple-600 to-violet-500 hover:text-white"
                }
                onClick={() => toggleTab(5)}
              >
                Sport
              </p>
              <p
                className={
                  toggleState == 6
                    ? "bg-[#3D00B7] text-white text-[14px] font-medium px-5 py-[10px] rounded-[100px] cursor-pointer hover:shadow-md shadow-violet-900 hover:bg-gradient-to-r from-indigo-600 via-purple-600 to-violet-500 hover:text-white"
                    : "bg-[#DCDCDC] bg-opacity-20 text-[14px] font-medium px-5 py-[10px] rounded-[100px] cursor-pointer hover:shadow-md shadow-violet-900 hover:bg-gradient-to-r from-indigo-600 via-purple-600 to-violet-500 hover:text-white"
                }
                onClick={() => toggleTab(6)}
              >
                Music
              </p>
              <p
                className={
                  toggleState == 7
                    ? "bg-[#3D00B7] text-white text-[14px] font-medium px-5 py-[10px] rounded-[100px] cursor-pointer hover:shadow-md shadow-violet-900 hover:bg-gradient-to-r from-indigo-600 via-purple-600 to-violet-500 hover:text-white"
                    : "bg-[#DCDCDC] bg-opacity-20 text-[14px] font-medium px-5 py-[10px] rounded-[100px] cursor-pointer hover:shadow-md shadow-violet-900 hover:bg-gradient-to-r from-indigo-600 via-purple-600 to-violet-500 hover:text-white"
                }
                onClick={() => toggleTab(7)}
              >
                Crypto
              </p>
            </div>
            <div className="mx-auto md:mt-[30px] lg:mt-0 lg:mx-0 ">
              <div className="flex justify-center items-center gap-1 rounded-[100px] bg-[#DCDCDC] bg-opacity-20 text-[#371C87] w-[135px] h-[44px]">
                <MdFilterList className="text-xl" />
                <select
                  id="ratingFilter"
                  name="ratingFilter"
                  value={ratingFilter}
                  onChange={handleRatingFilterChange}
                  className="text-[14px] font-medium bg-[#DCDCDC] bg-opacity-20 "
                >
                  <option value="all">All Filters</option>
                  <option value="4">Less Than 4</option>
                  <option value="3">More Than 4</option>
                  <option value="2">Less Than 3</option>
                </select>
              </div>
            </div>
          </div>
        </div>

        <div className="md:mt-[90px] lg:mt-0">
          {toggleState === 1 && renderFilteredServices(filteredServices)}
          {toggleState === 2 && renderFilteredServices(Art)}
          {toggleState === 3 && renderFilteredServices(Celebrities)}
          {toggleState === 4 && renderFilteredServices(Gaming)}
          {toggleState === 5 && renderFilteredServices(Sport)}
          {toggleState === 6 && renderFilteredServices(Music)}
          {toggleState === 7 && renderFilteredServices(Crypto)}

          <Link
            to="/market_place"
            className="py-[30px] flex justify-center items-center"
          >
            <button>
              <p className="h-[66px] w-[179px] rounded-[50px] text-[#3D00B7] border border-[#3D00B7] text-xl text-medium flex justify-center items-center cursor-pointer hover:shadow-md shadow-violet-900 hover:bg-gradient-to-r from-indigo-600 via-purple-600 to-violet-500 hover:text-white">
                More NFTs
              </p>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default DiscoverMorePart;
