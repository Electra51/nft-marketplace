import React from 'react'
import img1 from "../../assets/discoverMoreImage/4.jpg"
const About = () => {
    return (
        <div className='max-w-[1200px] mx-auto'>
            <h1 className='font-bold text-xl text-black mt-[30px]'>
                Direct Teams.
            </h1>
            <h1 className='font-bold text-xl text-black'>For Your Dadicated Dreams</h1>
            <div className='relative'>
                <div className='w-[1200px] h-[500px] rounded-xl my-[30px]'><img src={img1} alt="" className='w-full h-full object-cover rounded-xl' /></div>
                <div className='absolute -bottom-[120px] left-8 w-[600px] h-[280px] border border-[#F4F4F4] rounded-2xl px-6 py-5 bg-gray-300'>
                    <h2 className='text-xl text-black'>Why We Do This</h2>
                    <p className='text-[#565656] text-[16px] mt-5'>NFTs are virtual tokens that represent ownership of something inherently distinct and scarce, whether it be a physical or digital item, such as artwork, a soundtrack, a collectible, an in-game item or real estate. Unlike regular cryptocurrencies like bitcoin or fiat money like the U.S.</p>
                    <h3 className="bg-[#3D00B7] font-normal text-xl px-[40px] py-[20px] h-[55px] w-[190px] flex justify-center items-center text-white rounded-[60px] mt-7 cursor-pointer whitespace-nowrap">
                        Explore More
                    </h3>
                </div>
            </div>
            <div className='flex  justify-start items-center'>
                <p className='mt-40 text-2xl text-black font-bold w-[500px]'>Create, Sell well & Collect your Wonderful NFTs at NFTERS Very Fast</p>
                <div className='mt-40 w-[600px] h-[240px] border border-[#F4F4F4] rounded-2xl px-6 py-5 bg-gray-100 ml-auto'>
                    <h2 className='text-xl text-black'>Helping You</h2> <h2 className='text-xl text-black'>Grow In Every Stage.</h2>
                    <p className='text-[#565656] text-[16px] mt-5'>NFTs are virtual tokens that represent ownership of something inherently distinct and scarce, whether it be a physical or digital item, such as artwork, a soundtrack, a collectible, an in-game item or real estate. Unlike regular cryptocurrencies like bitcoin or fiat money like the U.S. item, such as artwork, a soundtrack, a collectible.</p>

                </div></div>
        </div>
    )
}

export default About