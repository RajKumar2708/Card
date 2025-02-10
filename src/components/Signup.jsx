import React from 'react';
import signupig from "../assets/Signup.png";

const Signup = () => {
  return (
    <div className='w-full flex flex-col p-6 lg:w-[75%] md:my-10 md:flex-row items-center md:items-start'>
      <div className='w-full md:w-1/2 h-60 md:h-auto flex justify-center md:justify-start p-4'>
        <div className="relative w-full max-w-sm">
          <img
            src={signupig}
            alt="Custom Design"
            className="w-full h-full object-cover rounded-lg"
          />
          <div className="absolute bottom-0 right-0">
            <button className="px-6 py-3 w-32 h-18 rounded-2xl bg-[#d05ffa] text-white text-sm md:text-base">
              <h2 className='text-start leading-tight'>Send<br />Request</h2>
            </button>
          </div>
        </div>
      </div>

      <div className='w-full md:w-1/2 flex flex-col gap-6 p-4 text-center md:text-left'>
        <h2 className='text-3xl md:text-4xl font-semibold'>Sign up for a free trial lesson</h2>
        <p className='text-sm text-gray-700'>Expand your horizon with the power of online learning.</p>
        <input placeholder='Your name' className='border-b border-gray-700 w-full md:w-2/3 p-2 outline-none' />
        <input placeholder='Email Address' className='border-b border-gray-700 w-full md:w-2/3 p-2 outline-none' />
        <input placeholder='Enter Course' className='border-b border-gray-700 w-full md:w-2/3 p-2 outline-none' />
      </div>
    </div>
  );
};

export default Signup;
