import React from "react";
import Subscribe from "./Subscribe";
import { FaFacebook } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { FaPinterest } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="bg-[#B8E0EF] py-16">
      <Subscribe />

      <div className="md:flex grid-cols-2 md:grid-cols-3 justify-start mb-4 md:mt-16 mt-6 md:px-28 px-12">
        <div className="md:mr-24 mr-12 mt-7 md:mt-0">
          <h5 className="font-bold mb-2  text-2xl text-[#343434] ">Product</h5>
          <ul className="mt-6 space-y-2 text-[#53585F] font-semibold">
            <li>Privacy Policy</li>
            <li>Terms of Services</li>
            <li>FAQ</li>
          </ul>
        </div>
        <div className="md:mr-24 mr-12 mt-7 md:mt-0">
          <h5 className="font-bold mb-2  text-2xl text-[#343434]">Resources</h5>
          <ul className="mt-6 space-y-2 text-[#53585F] font-semibold">
            <li>Documentation</li>
            <li>Case Studiess</li>
          </ul>
        </div>
        <div className="mt-7 md:mt-0">
          <h5 className="font-bold mb-2  text-2xl text-[#343434]">Company</h5>
          <ul className="mt-6 space-y-2 text-[#53585F] font-semibold">
            <li>About Us</li>
            <li>Contact Us</li>
          </ul>
        </div>
      </div>


      <hr className="mt-10 mb-4 border-[#929FA8]" />

<div className="flex justify-between mt-10 md:px-28 px-12 md:flex-row flex-col">
  <p className="text-lg text-[#53585F] flex font-semibold md:w-1/2 w-full">
    <span className="text-2xl font-semibold">® </span>
    Blue Diamond jewelry <sup className="text-xs mr-2 font-bold">TM  </sup> 2021
  </p>
  <div className="flex md:justify-end justify-start md:mt-0 mt-4">
    <a href="#" className="mr-4 text-black hover:text-black hover:scale-110">
      <FaFacebook size={24} />
    </a>
    <a href="#" className="mr-4 text-black hover:text-black hover:scale-110">
      <AiFillInstagram size={24} />
    </a>
    <a href="#" className="mr-4 text-black hover:text-black hover:scale-110">
      <FaPinterest size={24} />
    </a>
    <a href="#" className="mr-4 text-black hover:text-black hover:scale-110">
      <FaGithub size={24} />
    </a>
  </div>
</div>
</div>
  );
};

export default Footer;
