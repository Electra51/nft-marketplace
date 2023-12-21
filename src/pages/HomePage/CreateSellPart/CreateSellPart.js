import React from 'react'
import woman from "../../../assets/woman.png";
import img1 from "../../../assets/1.png";
import img2 from "../../../assets/2.png";
import img3 from "../../../assets/3.png";
import manPic from "../../../assets/man.png"
const CreateSellPart = () => {
    return (
        <div className='mt-[102px] grid grid-cols-2 gap-[40px] h-[606px] max-w-[1200px] mx-auto mb-10'>
            <div className='relative'>
                <div className='relative'>
                    <img src={img1} alt='' className='w-[300px] h-[300px] rounded-[12px]' />
                    <img src={manPic} alt='' className='w-[80px] h-[80px] absolute -bottom-7 left-[248px]' />
                </div>
                <div className='absolute right-[280px] bottom-10'>
                    <img src={img3} alt='' className='w-[192px] h-[214px] rounded-[12px]' />
                    <img src={woman} alt='' className='w-[80px] h-[80px] absolute -bottom-7 left-[148px]' />
                </div>
                <div className='absolute -right-1 top-0 mt-[138px]'>
                    <img src={img2} alt='' className='w-[240px] h-[265px] rounded-[12px]' />
                    <img src={woman} alt='' className='w-[71px] h-[71px] absolute -bottom-5 left-[200px]' />
                </div>
            </div>
            <div className='ml-[20px]'>
                <h1 className='font-bold text-[32px] text-black w-[320px] mt-[136px]'>Create and sell your NFTs</h1>
                <p className='text-[18px] font-normal text-[#636363] mt-[40px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Facilisi ac phasellus placerat a pellentesque tellus sed egestas. Et tristique dictum sit tristique sed non. Lacinia lorem id consectetur pretium diam ut. Pellentesque eu sit blandit fringilla risus faucibus.</p>
                <h3 className='text-xl w-[212px] h-[65px] bg-[#3D00B7] rounded-full mt-8 text-white flex justify-center items-center'>Sign Up Now</h3>
            </div>

        </div>
    )
}

export default CreateSellPart