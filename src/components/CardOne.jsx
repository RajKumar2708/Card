import React from 'react'
import woman1 from '../assets/woman1.png'
import ctn1 from '../assets/Crd1Cnt2.png'
import img1 from '../assets/Crdoneimg.png'
import btn from '../assets/arrow-tr.png'
import girl1 from '../assets/girl1.png'

const CardOne = () => {
    return (
        <div className=' h-[90vh] w-[100%] flex p-6 lg:w-[75%] lg:flex-row relative md:w-screen'>
            <div className='w-[50%] h-[100%] flex flex-col '>
                <div className='w-[100%] h-[50%] flex flex-col gap-4'>
                    <h1 className='text-7xl'>Keep Learning on Track</h1>
                    <p className='text-md text-gray-600'>Gain access to expertly crafted programs developed by industry-leading teachers. Elevate your skills with structured, high-impact learning designed for success.</p>
                    <button className='p-3 rounded-tl-md rounded-tr-md rounded-bl-md bg-[#a247fd] w-[20%]'>Get Started</button>
                </div>
                <div className='w-[100%] h-[50%] flex gap-4'>
                    <div className='w-[50%] h-[100%] flex items-center justify-end'>
                        <div className='w-[85%] h-[55%] rounded-md pl-16 pt-4 bg-[#eeeeef] flex flex-col relative'>
                            <div className='w-[100%] h-[50%]'>
                                <h1 className='text-lg '>Best <span className='text-[#a247fd]'>Certified </span>Teacher WorldWide</h1>
                            </div>
                            <div className='w-[100%] h-[50%]'>
                                <h1 className='text-2xl text-[#a247fd]'>210+</h1>
                                <p className='text-sm'>Experts already joined us</p>
                            </div>
                            <img className='absolute right-43 bottom-0 h-[100%]' src={woman1}></img>
                        </div>
                    </div>
                    <div className='w-[50%] h-[100%] flex items-center relative'>
                        <img src={ctn1}></img>
                        <img src={img1} className='absolute left-0 top-15'></img>
                        <div className='absolute bottom-23 w-[80%] px-2'>
                            <p className='text-sm'>Intercative & Engaging Online Classes - Learn Anytime, Anywhere!</p>
                        </div>
                        <button className='p-2 absolute bg-[#eeeeef] rounded-md top-17 right-15'><img src={btn}></img></button>
                    </div>
                </div>
            </div>
            
            <div className='w-[50%] h-[100%] flex flex-col gap-4 pt-4 relative'>
                <div className='w-[60%] bg-[#a247fd] h-[27%] rounded-lg ml-auto'></div>
                <div className='w-[50%] bg-[#a247fd] h-[27%] rounded-lg'></div>
                <div className='w-[100%] bg-[#a247fd] h-[27%] rounded-lg'></div>
                <img src={girl1} className='absolute bottom-20'></img>
            </div>
        </div>
        
    )
}

export default CardOne