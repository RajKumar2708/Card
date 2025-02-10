import React from "react";

const CardTwo = () => {
  return (
    <div className="py-12 text-center w-[75%]">
      <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
        Unlock Your Potential - Join Our Learning Community Today!
      </h2>
      <p className="text-gray-600 mt-2">
        Start Your Learning Journey with Us and Transform Your Future!
      </p>

      <div className="mt-6 flex justify-center space-x-4">
        <button className="border border-gray-400 px-6 py-2 rounded-lg text-gray-700 ">
          Learn more
        </button>
        <button className="bg-purple-500 text-white px-6 py-2 rounded-lg ">
          Start for free
        </button>
      </div>
    </div>
  );
};

export default CardTwo;