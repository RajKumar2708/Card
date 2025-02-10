import React from "react";

const Footer = () => {
  return (
    <footer className="bg-[#0B1727] w-screen text-white py-10">
      <div className="max-w-[90vw] mx-auto px-6">
        <div className="grid grid-cols-4 gap-6">
          <div>
            <h3 className="font-semibold text-lg mb-3">Product</h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li><a href="#">Changelog</a></li>
              <li><a href="#">Customer Stories</a></li>
              <li><a href="#">Security</a></li>
              <li><a href="#">Pricing</a></li>
              <li><a href="#">Solutions</a></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-lg mb-3">Product</h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li><a href="#">Changelog</a></li>
              <li><a href="#">Customer Stories</a></li>
              <li><a href="#">Security</a></li>
              <li><a href="#">Pricing</a></li>
              <li><a href="#">Solutions</a></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-lg mb-3">Product</h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li><a href="#">Changelog</a></li>
              <li><a href="#">Customer Stories</a></li>
              <li><a href="#">Security</a></li>
              <li><a href="#">Pricing</a></li>
              <li><a href="#">Solutions</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-3">Product</h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li><a href="#">Changelog</a></li>
              <li><a href="#">Customer Stories</a></li>
              <li><a href="#">Security</a></li>
              <li><a href="#">Pricing</a></li>
              <li><a href="#">Solutions</a></li>
            </ul>
          </div>
        </div>
        <hr className="border-gray-600 my-6" />
        <div className="flex justify-between items-center text-gray-400 text-sm">
          <span className="font-semibold">Logo</span>
          <span>© 2025 Sethu LTD. All rights reserved.</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;