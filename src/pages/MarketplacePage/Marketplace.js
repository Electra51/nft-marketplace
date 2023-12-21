import React, { useState } from "react";
import marketPlace from "../../assets/marketplace.jpg";
import { data } from "../../components/common/data"
import Card from "../HomePage/DiscoverMorePart/Card";
import { MdFilterList } from "react-icons/md";
import Pagination from "../../components/common/Pagination";
const Marketplace = () => {
  const [page, setPage] = useState(0);
  return (
    <div>
      <div
        className="hero h-[360px] bg-fixed"
        style={{
          backgroundImage: `url(${marketPlace})`,
        }}
      >
        <div className="hero-overlay bg-opacity-40"></div>
        <h2 className="font-medium text-[40px] text-white text-start absolute left-[353px] top-48">NFT MarketPlace</h2>
      </div>
      <div className="max-w-[1200px] mx-auto mt-32 flex justify-between items-center">
        <Pagination
          length={data?.length}
          page={page}
          setPage={setPage}
        />
        <div className="flex justify-center items-center gap-1 rounded-[100px] bg-[#DCDCDC] bg-opacity-20 text-[#371C87] w-[155px] h-[44px]">

          <MdFilterList className='text-xl' />
          <select
            id="ratingFilter"
            name="ratingFilter"
            // value={ratingFilter}
            // onChange={handleRatingFilterChange}
            className="text-[14px] font-medium bg-[#DCDCDC] bg-opacity-20 "
          >
            <option value="all">All Filters</option>
            <option value="4">Less Than 4</option>
            <option value="3">More Than 4</option>
            <option value="2">Less Than 3</option>
          </select>
        </div>
      </div>
      <div className="max-w-[1200px] mx-auto my-[30px]">
        <div className="grid grid-cols-4 gap-7">
          {
            data?.slice(8 * page, 8 * (page + 1)).map((e, i) => {
              return <Card item={e} key={i} />
            })
          }

        </div>
      </div>
    </div>
  )
};

export default Marketplace;
