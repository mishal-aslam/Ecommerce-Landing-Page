/* eslint-disable jsx-a11y/anchor-is-valid */
"use client";
import React, { useState } from "react";
import { IoLockClosedSharp } from "react-icons/io5";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <nav className="flex items-center justify-between flex-wrap p-6">
        {/* logo  */}
        <div className="flex items-center flex-shrink-0 text-white mr-6 lg:mr-72">
          <h1 className="w-100 h-10 mr-2 font-extrabold text-2xl text-[#0D5EBA] ">
            Bayside fine jewelry
          </h1>
        </div>

        <div className="block lg:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="flex items-center px-3 py-2 rounded text-black-500 hover:text-black-400"
          >
            <svg
              className={`fill-current h-3 w-3 ${isOpen ? "hidden" : "block"}`}
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
            </svg>
            <svg
              className={`fill-current h-3 w-3 ${isOpen ? "block" : "hidden"}`}
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M10 8.586L2.929 1.515 1.515 2.929 8.586 10l-7.071 7.071 1.414 1.414L10 11.414l7.071 7.071 1.414-1.414L11.414 10l7.071-7.071-1.414-1.414L10 8.586z" />
            </svg>
          </button>
        </div>

        <div
          className={`w-full block flex-grow lg:flex ml-64  lg:w-auto ${
            isOpen ? "block" : "hidden"
          }`}
        >
          <div className="text-sm lg:flex-grow gap-12">
            <a
              href="#"
              className="block mt-4 lg:inline-block lg:mt-0 text-[#002D69] font-bold mr-10"
            >
              Home
            </a>
            <a
              href="#"
              className="block mt-4 lg:inline-block lg:mt-0 text-black font-bold mr-10"
            >
              Shop
            </a>
            <a
              href="#"
              className="block mt-4 lg:inline-block lg:mt-0 text-black font-bold mr-10"
            >
              Services
            </a>
            <a
              href="#"
              className="block mt-4 lg:inline-block lg:mt-0 text-black font-bold mr-10"
            >
              About
            </a>
            <a
              href="#"
              className="block mt-4 lg:inline-block lg:mt-0 text-black font-bold mr-10"
            >
              Contact
            </a>
            <a
              href="#"
              className="block mt-2 lg:inline-block lg:mt-0 text-black font-bold mr-10 text-xl"
            >
              <IoLockClosedSharp />
            </a>
          </div>
          <div></div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
