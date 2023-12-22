import React, { useState } from "react";
import marketPlace from "../../assets/marketplace.jpg";
import { data } from "../../components/common/data";
import Card from "../HomePage/DiscoverMorePart/Card";
import { MdFilterList } from "react-icons/md";
import Pagination from "../../components/common/Pagination";
import CommonBanner from "../../components/common/CommonBanner";
import HelmetComponent from "../../components/common/HelmetComponent";

const Marketplace = () => {
  const [page, setPage] = useState(0);
  return (
    <div>
      <HelmetComponent title={"NFTERS | Marketplace"} />
      <CommonBanner
        title={" NFT MarketPlace"}
        description={
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Non,lobortis in in tortor lectus iaculis Nibh purus integer elementum in."
        }
        resourseBanner={marketPlace}
      />

      <div className="max-w-[820px] lg:max-w-[1200px] mx-auto mt-14 lg:mt-32 flex flex-col md:flex-row lg:flex-row justify-between items-center">
        <Pagination length={data?.length} page={page} setPage={setPage} />
        <div className="flex justify-center items-center gap-1 rounded-[100px] bg-[#DCDCDC] bg-opacity-20 text-[#371C87] w-[155px] h-[44px]">
          <MdFilterList className="text-xl" />
          <select
            id="Filter"
            name="Filter"
            className="text-[14px] font-medium bg-[#DCDCDC] bg-opacity-20 "
          >
            <option value="all">All Filters</option>
            <option value="4">Less Than 4</option>
            <option value="3">More Than 4</option>
            <option value="2">Less Than 3</option>
          </select>
        </div>
      </div>
      <div className="max-w-[820px] lg:max-w-[1200px] mx-auto my-[30px] overflow-x-hidden">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-2 justify-items-center items-center lg:gap-7">
          {data?.slice(8 * page, 8 * (page + 1)).map((e, i) => {
            return <Card item={e} key={i} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default Marketplace;
