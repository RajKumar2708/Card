import React from 'react';
import { GoArrowRight } from "react-icons/go";
import ftr1 from '../assets/Ftr1.png';
import ftr2 from '../assets/Ftr2.png';
import ftr3 from '../assets/Ftr3.png';
import blckbtn from '../assets/blackarrow.png';

const Explore = () => {
    return (<div className='w-full flex flex-col p-6 pb-16 lg:w-[75%] lg:min-h-[90%] md:my-10'>

            <div className='w-full flex flex-wrap md:flex-nowrap'>
                <div className='w-full md:w-1/2'>
                    <h1 className='text-4xl'>Grow your Skills</h1>
                    <h1 className='text-4xl'>Learn with us from</h1>
                    <h1 className='text-4xl'>Anywhere</h1>
                </div>
                <div className='w-full md:w-1/2 flex flex-col gap-2'>
                    <p className='flex gap-2 items-center text-lg'>
                        Explore Now <GoArrowRight />
                    </p>
                    <hr className='w-[120px] border-black' />
                    <p className='text-md text-gray-500'>
                        Unlock your potential with expert-led online education. Our interactive and flexible courses empower you to learn at your own pace, anytime and anywhere, ensuring a seamless and engaging learning experience.
                    </p>
                </div>
            </div>

            {/* Cards Section */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
                <div className="relative w-full h-[300px] ">
                    <img src={ftr1} className="w-full h-full object-cover rounded-lg" />
                    <button className="absolute top-0 right-0">
                        <img src={blckbtn} className="p-4 rounded-full bg-[#fff69f]" />
                    </button>
                    <div className="absolute flex flex-col gap-12 w-[70%] top-8 left-4">
                        <h1 className="text-2xl">Flexibility</h1>
                        <p className="text-sm text-gray-500">
                            Gain access to expertly crafted programs developed by industry-leading teachers. Elevate your skills with structured, high-impact learning designed for success.
                        </p>
                    </div>
                </div>

                <div className="relative w-full h-[300px]">
                    <img src={ftr2} className="w-full h-full object-cover rounded-lg" />
                    <button className="absolute bottom-0 right-0">
                        <img src={blckbtn} className="p-4 rounded-full bg-[rgba(164,254,167,255)]" />
                    </button>
                    <div className="absolute flex flex-col gap-12 w-[70%] top-8 left-4">
                        <p className="text-sm text-gray-500">
                            Students can access courses and programs offered by institutions from around the world, regardless of their physical location.
                        </p>
                        <h1 className="text-2xl">Accessibility</h1>
                    </div>
                </div>

                <div className="relative w-full h-[300px]">
                    <img src={ftr3} className="w-full h-full object-cover rounded-lg" />
                    <button className="absolute top-0 right-0">
                        <img src={blckbtn} className="p-4 rounded-full bg-[#e4d0fe]" />
                    </button>
                    <div className="absolute flex flex-col gap-12 w-[70%] top-8 left-4">
                        <h1 className="text-2xl">Interactive Learning</h1>
                        <p className="text-sm text-gray-500">
                            These can include discussion forums, virtual classrooms, videoconferences, multimedia resources, and interactive assessments.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Explore;
