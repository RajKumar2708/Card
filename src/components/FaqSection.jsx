import React from "react";

const FaqSection = () => {
  return (
    <div className="max-w-2xl mx-auto my-10">
      <h2 className="text-2xl font-bold text-center text-gray-900">
        Frequently asked questions
      </h2>
      <p className="text-center text-gray-500">
        Everything you need to know about Sethu Institutional Trainings
      </p>

      <div className="border-b border-b-gray-300 p-4 mt-4">
        <h3 className="font-medium text-gray-800 cursor-pointer flex justify-between">
          Do I get a certificate after completing a course?
          <span className="text-gray-600 text-lg">+</span>
        </h3>
        <p className="mt-2 text-gray-600">
          Yes! Upon successful course completion, you will receive a certification from Sethu Institutional Trainings, 
          which can enhance your resume and career opportunities.
        </p>
      </div>

      <div className="border-b border-b-gray-300 p-4 mt-2">
        <h3 className="font-medium text-gray-800 cursor-pointer flex justify-between">
          Who can enroll in your programs?
          <span className="text-gray-600 text-lg">+</span>
        </h3>
      </div>

      <div className="border-b border-b-gray-300 p-4 mt-2">
        <h3 className="font-medium text-gray-800 cursor-pointer flex justify-between">
          How can I get support if I have questions during the course?
          <span className="text-gray-600 text-lg">+</span>
        </h3>
      </div>

      <div className="border-b border-b-gray-300 p-4 mt-2">
        <h3 className="font-medium text-gray-800 cursor-pointer flex justify-between">
          Are the courses self-paced or live sessions?
          <span className="text-gray-600 text-lg">+</span>
        </h3>
      </div>

      <div className="border-b border-b-gray-300 p-4 mt-2">
        <h3 className="font-medium text-gray-800 cursor-pointer flex justify-between">
          What makes Sethu Institutional Trainings different from other online training programs?
          <span className="text-gray-600 text-lg">+</span>
        </h3>
      </div>
    </div>
  );
};

export default FaqSection;