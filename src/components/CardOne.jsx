import React from 'react'
import woman1 from '../assets/woman1.png'
import ctn1 from '../assets/Crd1Cnt2.png'
import img1 from '../assets/Crdoneimg.png'
import btn from '../assets/arrow-tr.png'
import girl1 from '../assets/girl1.png'

const CardOne = () => {
    return (
        <div className='w-full h-screen flex mb-20  gap-4 lg:w-[75%]'>

            {/* Left Container */}
            <div className='w-full md:w-[80%] lg:w-[50%] h-full flex flex-col gap-6  sm:mb-10'>
                <h1 className='text-7xl'>Keep Learning on Track</h1>
                <p className='text-md text-gray-600'>
                    Gain access to expertly crafted programs developed by industry-leading teachers. Elevate your skills with structured, high-impact learning designed for success.
                </p>
                <button className='p-3 rounded-tl-md rounded-tr-md rounded-bl-md bg-[#a247fd] w-[150px] h-[40px]'>
                    <p className='text-sm text-white'>Get Started</p>
                </button>

                <div className='h-[50%]  flex items-center gap-4'>
                    <div className='w-[50%] h-[100%] flex flex-col relative  items-end lg:h-[55%] md:h-[55%]'>
                        <div className='w-[78%] h-full pl-10 bg-[#eeeeef] rounded-lg flex flex-col gap-4 items-end'>
                            <h1 className='text-lg'>Best <span className='text-[#a247fd]'>Certified</span> Teacher WorldWide</h1>
                            <div className='w-[60%] h-[50%]'>
                                <h1 className='text-2xl text-[#a247fd]'>210+</h1>
                                <p className='text-sm'>Experts already joined us</p>
                            </div>
                        </div>
                        <img className='absolute left-0 bottom-0 h-full hidden lg:flex md:flex' src={woman1} alt="Woman" />
                    </div>

                    <div className='w-[45%] h-[100%] flex items-center relative lg:w-[40%] lg:h-[55%] md:w-[40%] md:h-[55%]'>
                        <img src={ctn1} className='w-full h-full object-cover' alt="Content" />
                        <img src={img1} className='absolute w-auto h-auto left-0 top-0' alt="Overlay" />
                        <div className='absolute w-[90%] top-24 px-2 '>
                            <p className='text-sm'>Interactive & Engaging Online Classes - Learn Anytime, Anywhere!</p>
                        </div>
                        <button className='p-2 absolute bg-[#eeeeef] rounded-md top-0 right-0'>
                            <img src={btn} alt="Button" />
                        </button>
                    </div>
                </div>
            </div>

            {/* Right Container for Large Screens (Unchanged) */}
            <div className='w-[50%] h-full flex-col gap-4 pt-4 relative hidden lg:flex'>
                <div className='w-[60%] bg-[#a247fd] h-[27%] rounded-lg ml-auto'></div>
                <div className='w-[50%] bg-[#a247fd] h-[27%] rounded-lg'></div>
                <div className='w-full bg-[#a247fd] h-[27%] rounded-lg'></div>
                <img src={girl1} className='absolute bottom-26' alt="Girl" />
            </div>


        </div>
    )
}

export default CardOne;
