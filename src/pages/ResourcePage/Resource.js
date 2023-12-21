import React from 'react'
import resourseBanner from "../../assets/resourseBanner.jpg";
import dot from "../../assets/Dot.png"
import { FiPhoneCall } from "react-icons/fi";
import { IoLocationOutline } from "react-icons/io5";
import { FaFacebookF, FaLinkedinIn, FaTwitter } from 'react-icons/fa';
const Resource = () => {
    return (

        <div>
            <div
                className="hero h-[260px] bg-fixed"
                style={{
                    backgroundImage: `url(${resourseBanner})`,
                }}
            >
                <div className="hero-overlay bg-opacity-10"></div>
                <div className='absolute left-[353px] top-48'>
                    <h2 className="font-medium text-[40px] text-black text-start">Resource</h2>
                    <p className='text-[18px] font-normal text-[#565656] w-[500px] mt-1'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Non, lobortis in in tortor lectus iaculis Nibh purus integer elementum in.</p>
                </div>

                <div className='absolute top-[180px] right-[400px]'><img src={dot} alt='' className='animate-pulse rotate-45' /></div>
            </div>
            <div className='my-[80px] max-w-[1200px] mx-auto grid grid-cols-2 gap-20 items-center'>
                <div><div class="mx-auto max-w-xl bg-white">

                    <form class="space-y-4">
                        <input type='text' placeholder='Name'
                            class="w-full rounded-[100px] py-3 px-4 bg-gray-100 text-sm outline-[#494CB7]" />
                        <input type='email' placeholder='Email'
                            class="w-full rounded-[100px] py-3 px-4 bg-gray-100 text-sm outline-[#494CB7]" />
                        <input type='text' placeholder='Subject'
                            class="w-full rounded-[100px] py-3 px-4 bg-gray-100 text-sm outline-[#494CB7]" />
                        <textarea placeholder='Message' rows="6"
                            class="w-full rounded-[25px] px-4 bg-gray-100 text-sm pt-3 outline-[#494CB7]"></textarea>
                        <button type='button'
                            class="text-white bg-[#494CB7] hover:bg-[#383956] font-semibold rounded-[100px] text-sm px-4 py-3 w-full">Send</button>
                    </form>
                </div></div>
                <div>
                    <h2 className='text-[24px] font-medium text-black mb-5'>Contact for more</h2>
                    <p className='text-2xl text-black font-bold'>Need any help just give a touch</p>
                    <p className='text-[18px] font-normal text-[#565656] w-[500px] mt-1'>If you have any inquiries or require assistance, feel free to contact our committed support team. They will provide you with prompt and helpful assistance.</p>
                    <div className='mt-9 flex justify-normal items-center gap-3 text-[18px] font-normal text-[#565656]'>
                        <FiPhoneCall /> +9803 4674 736872
                    </div>
                    <div className='mt-2 flex justify-normal items-center gap-2 text-[18px] font-normal text-[#565656]'>
                        <IoLocationOutline /> <p>France, 23/45 road, h-34</p>
                    </div>
                    <div className="flex justify-normal items-center gap-4 mt-3">
                        <div className="h-9 w-9 rounded-full bg-[#3B5998] flex justify-center items-center">
                            <FaFacebookF className="text-white text-2xl" />
                        </div>
                        <div className="h-9 w-9 rounded-full bg-[#55acee] flex justify-center items-center">
                            <FaTwitter className="text-white text-2xl" />
                        </div>
                        <div className="h-9 w-9 rounded-full bg-[#267ab9] flex justify-center items-center">
                            <FaLinkedinIn className="text-white text-2xl" />
                        </div>
                    </div>
                </div>

            </div>
        </div>

    )
}

export default Resource;