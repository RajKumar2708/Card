import React from 'react';
import Rect1 from '../assets/Rectangle1.png';
import Rect2 from '../assets/Rectangle2.png';
import points from '../assets/4Points.png';

const CardFour = () => {
  return (
    <div className='min-h-screen w-full flex flex-col gap-4 justify-center p-6 lg:w-[75%] lg:flex-row md:my-10'>
      <div className='w-full lg:w-1/2 h-auto flex flex-col  gap-4'>
        <div className='w-full h-auto flex flex-col gap-4'>
          <h1 className='text-3xl lg:text-5xl font-normal'>
            Learn anytime, anywhere with seamless action to education
          </h1>
          <p className='text-md text-gray-700'>
            Expand Your Horizons with the Power of Online Learning
          </p>
        </div>
        <div className='w-full h-auto flex pl-4'>
          <div className='relative'>
            <img
              src={Rect1}
              alt='Custom Design'
              className='w-full h-auto object-cover'
            />
            <div className='absolute bottom-0 right-0 p-4'>
              <button className='w-34 h-20 rounded-2xl bg-[#d05ffa] text-white text-sm'>
                Learn More
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className='w-full lg:w-1/2 h-auto flex flex-col gap-4'>
        <div className='w-full h-auto flex pl-8'>
          <div className='relative'>
            <img
              src={Rect2}
              alt='Custom Design'
              className='w-full h-auto object-cover'
            />
            <div className='absolute top-0 left-0'>
              <button className='w-34 h-20 p-4 rounded-2xl bg-[#fd8a6c] flex justify-center items-center text-white text-sm'>
                <h1 className='text-4xl lg:text-5xl'>2</h1>
                <p className='text-start text-xs lg:text-sm'>years experience</p>
              </button>
            </div>
          </div>
        </div>
        <div className='w-full h-auto flex flex-col gap-4 px-8'>
          <div>
            <p className='text-md text-gray-700'>
              Online education offers flexible, accessible learning from anywhere at anytime. With expert-led courses and interactive content, it allows you to acquire new skills, advance your career, and learn at your own pace.
            </p>
          </div>
          <img src={points} className='w-2/4 lg:w-2/3 h-auto' />
        </div>
      </div>
    </div>
  );
};

export default CardFour;
