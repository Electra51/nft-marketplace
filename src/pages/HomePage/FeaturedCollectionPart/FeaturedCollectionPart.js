import React from 'react';
import featureImage1 from "../../../assets/featureImage/1.png"
import featureImage2 from "../../../assets/featureImage/6.png"
import featureImage6 from "../../../assets/featureImage/3..png"
import featureImage9 from "../../../assets/featureImage/9.png"
import featureImage5 from "../../../assets/featureImage/2.png"
import featureImage3 from "../../../assets/featureImage/5.png"
import featureImage4 from "../../../assets/featureImage/4.png"
import featureImage7 from "../../../assets/featureImage/7.png"
import featureImage8 from "../../../assets/featureImage/8.png"
import manPic from "../../../assets/manPic.png"
const FeaturedCollectionPart = () => {
  return (
    <div className='mt-[151px] bg-[#D9E0EC] bg-opacity-20'>
      <div className='max-w-[1200px] mx-auto h-[619px]'>
        <h1 className='text-[28px] text-black font-bold pt-[64px] pb-[55px]'>Collection Featured NFTs</h1>

        <div className='flex justify-normal items-center gap-[31px] pb-[99px]'>
          <div className='w-[379px] h-[366px]'>
            <div className='flex justify-normal items-center gap-[9px]'>
              <div className='w-[265px] h-[272px]'>
                <img src={featureImage1} alt='' className='h-full w-full object-fill' />
              </div>
              <div className='flex flex-col gap-2'>
                <div className='w-[104px] h-[85px]'>
                  <img src={featureImage2} alt='' className='w-full h-full object-fill' />
                </div>
                <div className='w-[104px] h-[85px]'>
                  <img src={featureImage3} alt='' className='w-full h-full object-fill' />
                </div>
                <div className='w-[104px] h-[85px]'>
                  <img src={featureImage4} alt='' className='w-full h-full object-fill' />
                </div>
              </div>
            </div>
            <div className='mt-[29px]'>
              <p className='text-black font-bold text-[20px]'>Amazing Collection</p>
              <div className='flex justify-between items-center'>
                <div className='flex justify-normal items-center gap-[10px] mt-[10px]'>
                  <img src={manPic} alt='' className='w-[28px] h-[28px]' />
                  <p className='text-[14px] font-medium'>by Arkhan</p>
                </div>
                <p className='text-[11px] text-[#2639ED] h-[20px] w-[98px] flex justify-center items-center border border-[#2639ED] rounded-[60px] py-[7px] px-[11px]'>Total 54 Items</p>
              </div>
            </div>
          </div>
          <div className='w-[379px] h-[366px]'>
            <div className='flex justify-normal items-center gap-[9px]'>
              <div className='w-[265px] h-[272px]'>
                <img src={featureImage5} alt='' className='h-full w-full object-fill' />
              </div>
              <div className='flex flex-col gap-2'>
                <div className='w-[104px] h-[85px]'>
                  <img src={featureImage3} alt='' className='w-full h-full object-fill' />
                </div>
                <div className='w-[104px] h-[85px]'>
                  <img src={featureImage2} alt='' className='w-full h-full object-fill' />
                </div>
                <div className='w-[104px] h-[85px]'>
                  <img src={featureImage7} alt='' className='w-full h-full object-fill' />
                </div>
              </div>
            </div>
            <div className='mt-[29px]'>
              <p className='text-black font-bold text-[20px]'>Amazing Collection</p>
              <div className='flex justify-between items-center'>
                <div className='flex justify-normal items-center gap-[10px] mt-[10px]'>
                  <img src={manPic} alt='' className='w-[28px] h-[28px]' />
                  <p className='text-[14px] font-medium'>by Arkhan</p>
                </div>
                <p className='text-[11px] text-[#2639ED] h-[20px] w-[98px] flex justify-center items-center border border-[#2639ED] rounded-[60px] py-[7px] px-[11px]'>Total 54 Items</p>
              </div>
            </div>
          </div>
          <div className='w-[379px] h-[366px]'>
            <div className='flex justify-normal items-center gap-[9px]'>
              <div className='w-[265px] h-[272px]'>
                <img src={featureImage8} alt='' className='h-full w-full object-fill' />
              </div>
              <div className='flex flex-col gap-2'>
                <div className='w-[104px] h-[85px]'>
                  <img src={featureImage9} alt='' className='w-full h-full object-fill' />
                </div>
                <div className='w-[104px] h-[85px]'>
                  <img src={featureImage6} alt='' className='w-full h-full object-fill' />
                </div>
                <div className='w-[104px] h-[85px]'>
                  <img src={featureImage2} alt='' className='w-full h-full object-fill' />
                </div>
              </div>
            </div>
            <div className='mt-[29px]'>
              <p className='text-black font-bold text-[20px]'>Amazing Collection</p>
              <div className='flex justify-between items-center'>
                <div className='flex justify-normal items-center gap-[10px] mt-[10px]'>
                  <img src={manPic} alt='' className='w-[28px] h-[28px]' />
                  <p className='text-[14px] font-medium'>by Arkhan</p>
                </div>
                <p className='text-[11px] text-[#2639ED] h-[20px] w-[98px] flex justify-center items-center border border-[#2639ED] rounded-[60px] py-[7px] px-[11px]'>Total 54 Items</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FeaturedCollectionPart;