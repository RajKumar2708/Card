import React from "react";
import logo1 from "../assets/logo1.png"; 
import logo2 from "../assets/logo2.png";
import logo3 from "../assets/logo3.png";
import logo4 from "../assets/logo4.png";
import logo5 from "../assets/logo5.png";

const Marquee = () => {
  return (
    <div className="overflow-hidden w-full py-4">
        <div className="w-[100%] flex justify-center">
        <h1 className="text-md text-gray-600">Trusted by Fortune 500 Companies</h1>
        </div>
      <div className="flex space-x-8 min-w-full animate-marquee gap-8" style={{ animation: "scroll 50s linear infinite" }}>
        {[logo1, logo2, logo3, logo4, logo5, logo1, logo2, logo3, logo4, logo5].map((logo, index) => (
          <img key={index} src={logo} alt={`Logo ${index + 1}`} className="w-32 h-32 object-contain" />
        ))}
      </div>

      <style>
        {`
          @keyframes scroll {
            from { transform: translateX(100%); }
            to { transform: translateX(-100%); }
          }
        `}
      </style>
    </div>
  );
};

export default Marquee;


