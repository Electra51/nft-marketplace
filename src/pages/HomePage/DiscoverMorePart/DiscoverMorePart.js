import React, { useEffect, useState } from 'react'
import { MdFilterList } from "react-icons/md";
import Card from './Card';
import { data } from "../../../components/common/data";

const DiscoverMorePart = () => {
    const [toggleState, setToggleState] = useState(1);
    const toggleTab = (index) => {
        setToggleState(index);
    };

    const [filteredServices, setFilteredServices] = useState(data);
    const [ratingFilter, setRatingFilter] = useState("all");

    useEffect(() => {
        const filtered = data?.filter((service) => {
            let matchesRating;
            if (ratingFilter === "all") {
                matchesRating = true; // Show all services if "All" is selected
            } else if (ratingFilter === "4") {
                matchesRating = service?.rating <= 4; // Less than or equal to 4 for "Less Than 4"
            } else if (ratingFilter === "3") {
                matchesRating = service?.rating > 4; // Greater than 4 for "More Than 4"
            } else if (ratingFilter === "2") {
                matchesRating = service?.rating < 3; // Greater than 3 for "More Than 3"
            }

            return matchesRating;
        });
        setFilteredServices(filtered);
    }, [data, ratingFilter]);



    const handleRatingFilterChange = (e) => {
        const selectedRating = e.target.value;
        setRatingFilter(selectedRating);
    };

    const Art = filteredServices?.filter((item) => item.type === "Art");
    const Celebrities = filteredServices?.filter((item) => item.type === "Celebrities");
    const Gaming = filteredServices?.filter(
        (item) => item.type === "Gaming"
    );
    const Sport = filteredServices?.filter((item) => item.type === "Sport");
    const Music = filteredServices?.filter((item) => item.type === "Music");
    const Crypto = filteredServices?.filter(
        (item) => item.type === "Crypto"
    );

    return (
        <div className='mt-[82px] bg-[#D9E0EC] bg-opacity-20'>
            <div className='max-w-[1200px] mx-auto'>
                <h1 className='text-[34px] font-bold pt-[64px] text-black'>Discover more NFTs</h1>
                <div className='mt-9 h-[44px]'>
                    <div className="flex justify-between items-start">
                        <div className="flex justify-center items-center gap-5">
                            <p
                                className={
                                    toggleState == 1
                                        ? "bg-[#3D00B7] text-white text-[14px] font-medium px-5 py-[10px] rounded-[100px] cursor-pointer"
                                        : "text-black bg-[#DCDCDC] bg-opacity-20 text-[14px] font-medium px-5 py-[10px] rounded-[100px] cursor-pointer"
                                }
                                onClick={() => toggleTab(1)}
                            >
                                All Categories
                            </p>
                            <p
                                className={
                                    toggleState == 2
                                        ? "bg-[#3D00B7] text-white text-[14px] font-medium px-5 py-[10px] rounded-[100px] cursor-pointer"
                                        : "text-black bg-[#DCDCDC] bg-opacity-20 text-[14px] font-medium px-5 py-[10px] rounded-[100px] cursor-pointer"
                                }
                                onClick={() => toggleTab(2)}
                            >
                                Art
                            </p>
                            <p
                                className={
                                    toggleState == 3
                                        ? "bg-[#3D00B7] text-white text-[14px] font-medium px-5 py-[10px] rounded-[100px] cursor-pointer"
                                        : "text-black bg-[#DCDCDC] bg-opacity-20 text-[14px] font-medium px-5 py-[10px] rounded-[100px] cursor-pointer"
                                }
                                onClick={() => toggleTab(3)}
                            >
                                Celebrities
                            </p>
                            <p
                                className={
                                    toggleState == 4
                                        ? "bg-[#3D00B7] text-white text-[14px] font-medium px-5 py-[10px] rounded-[100px] cursor-pointer"
                                        : "text-black bg-[#DCDCDC] bg-opacity-20 text-[14px] font-medium px-5 py-[10px] rounded-[100px] cursor-pointer"
                                }
                                onClick={() => toggleTab(4)}
                            >
                                Gaming
                            </p>
                            <p
                                className={
                                    toggleState == 5
                                        ? "bg-[#3D00B7] text-white text-[14px] font-medium px-5 py-[10px] rounded-[100px] cursor-pointer"
                                        : "text-black bg-[#DCDCDC] bg-opacity-20 text-[14px] font-medium px-5 py-[10px] rounded-[100px] cursor-pointer"
                                }
                                onClick={() => toggleTab(5)}
                            >
                                Sport
                            </p>
                            <p
                                className={
                                    toggleState == 6
                                        ? "bg-[#3D00B7] text-white text-[14px] font-medium px-5 py-[10px] rounded-[100px] cursor-pointer"
                                        : "text-black bg-[#DCDCDC] bg-opacity-20 text-[14px] font-medium px-5 py-[10px] rounded-[100px] cursor-pointer"
                                }
                                onClick={() => toggleTab(6)}
                            >
                                Music
                            </p>
                            <p
                                className={
                                    toggleState == 7
                                        ? "bg-[#3D00B7] text-white text-[14px] font-medium px-5 py-[10px] rounded-[100px] cursor-pointer"
                                        : "text-black bg-[#DCDCDC] bg-opacity-20 text-[14px] font-medium px-5 py-[10px] rounded-[100px] cursor-pointer"
                                }
                                onClick={() => toggleTab(7)}
                            >
                                Crypto
                            </p>
                        </div>
                        <div>


                            <div className="flex justify-center items-center gap-1 rounded-[100px] bg-[#DCDCDC] bg-opacity-20 text-[#371C87] w-[135px] h-[44px]">

                                <MdFilterList className='text-xl' />
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






                <div className={toggleState == 1 ? "text-gray-900" : "hidden"}>
                    {" "}
                    {filteredServices && filteredServices.length > 0 ? (
                        <div className="grid grid-cols-4 gap-7 my-7 justify-items-center">
                            {filteredServices?.map((e, i) => (
                                <Card item={e} key={i} />
                            ))}
                        </div>
                    ) : (
                        <p className="text-red-500 text-xl flex flex-col justify-center items-center my-20  gap-4">
                            {/* <RxShadowNone /> */}
                            No products available for the selected rating or search.
                        </p>
                    )}
                </div>
                <div className={toggleState == 2 ? "text-gray-900" : "hidden"}>
                    {filteredServices && filteredServices.length > 0 ? (
                        <div className="grid grid-cols-4 gap-7 my-7 justify-items-center">
                            {Art?.map((e, i) => (
                                <Card item={e} key={i} />
                            ))}
                        </div>
                    ) : (
                        <p className="text-red-500 text-xl flex flex-col justify-center items-center my-20  gap-4">
                            {/* <RxShadowNone /> */}
                            No products available for the selected rating or search.
                        </p>
                    )}
                </div>
                <div
                    className={
                        toggleState == 3
                            ? "bg-blue-gray-500 text-gray-900 px-2 py-1 rounded"
                            : "hidden"
                    }
                >
                    {" "}
                    {filteredServices && filteredServices.length > 0 ? (
                        <div className="grid grid-cols-4 gap-7 my-7 justify-items-center">
                            {Celebrities?.map((e, i) => (
                                <Card item={e} key={i} />
                            ))}
                        </div>
                    ) : (
                        <p className="text-red-500 text-xl flex flex-col justify-center items-center my-20  gap-4">
                            {/* <RxShadowNone /> */}
                            No products available for the selected rating or search.
                        </p>
                    )}
                </div>
                <div
                    className={
                        toggleState == 4
                            ? "bg-blue-gray-500 text-gray-900 px-2 py-1 rounded"
                            : "hidden"
                    }
                >
                    {" "}
                    {filteredServices && filteredServices.length > 0 ? (
                        <div className="grid grid-cols-4 gap-7 my-7 justify-items-center">
                            {Gaming?.map((e, i) => (
                                <Card item={e} key={i} />
                            ))}
                        </div>
                    ) : (
                        <p className="text-red-500 text-xl flex flex-col justify-center items-center my-20  gap-4">
                            {/* <RxShadowNone /> */}
                            No products available for the selected rating or search.
                        </p>
                    )}
                </div>
                <div
                    className={
                        toggleState == 5
                            ? "bg-blue-gray-500 text-gray-900 px-2 py-1 rounded"
                            : "hidden"
                    }
                >
                    {" "}
                    {filteredServices && filteredServices.length > 0 ? (
                        <div className="grid grid-cols-4 gap-7 my-7 justify-items-center">
                            {Sport?.map((e, i) => (
                                <Card item={e} key={i} />
                            ))}
                        </div>
                    ) : (
                        <p className="text-red-500 text-xl flex flex-col justify-center items-center my-20  gap-4">
                            {/* <RxShadowNone /> */}
                            No products available for the selected rating or search.
                        </p>
                    )}
                </div>
                <div
                    className={
                        toggleState == 6
                            ? "bg-blue-gray-500 text-gray-900 px-2 py-1 rounded"
                            : "hidden"
                    }
                >
                    {" "}
                    {filteredServices && filteredServices.length > 0 ? (
                        <div className="grid grid-cols-4 gap-7 my-7 justify-items-center">
                            {Music?.map((e, i) => (
                                <Card item={e} key={i} />
                            ))}
                        </div>
                    ) : (
                        <p className="text-red-500 text-xl flex flex-col justify-center items-center my-20  gap-4">
                            {/* <RxShadowNone /> */}
                            No products available for the selected rating or search.
                        </p>
                    )}
                </div>
                <div
                    className={
                        toggleState == 7
                            ? "bg-blue-gray-500 text-gray-900 px-2 py-1 rounded"
                            : "hidden"
                    }
                >
                    {" "}
                    {filteredServices && filteredServices.length > 0 ? (
                        <div className="grid grid-cols-4 gap-7 my-7 justify-items-center">
                            {Crypto?.map((e, i) => (
                                <Card item={e} key={i} />
                            ))}
                        </div>
                    ) : (
                        <p className="text-red-500 text-xl flex flex-col justify-center items-center my-20  gap-4">
                            {/* <RxShadowNone /> */}
                            No products available for the selected rating or search.
                        </p>
                    )}
                </div>
                <div className='py-[30px] flex justify-center items-center'>
                    <p className='h-[66px] w-[179px] rounded-[50px] text-[#3D00B7] border border-[#3D00B7] text-xl text-medium flex justify-center items-center'>
                        More NFTs
                    </p>
                </div>
            </div>
        </div>
    )
}

export default DiscoverMorePart