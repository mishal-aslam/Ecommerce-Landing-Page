import React from "react";
import Wrapper from "./Wrapper";

const JewelryType = () => {
  return (
    <Wrapper>

    <div className="">
      <h2 className="text-[#002D69] text-2xl font-semibold text-left  md:ml-8 ml-0 my-8">
        SHOP BY JEWELRY TYPE
      </h2>

      <div className="lg:grid-cols-5 grid md:grid-cols-3 grid-cols-1  gap-5 md:ml-8 ml-0 text-[#002D69]">
        <div>
          <img
            src={require("../Assets/Item 1.png")}
            alt=""
            className="h-[200px] md:w-[200px] w-full   hover:scale-125 transition duration-300 ease-in-out"
          />
          <h2 className="text-center font-semibold lg:text-lg mt-4 mr-9">EARRINGS</h2>
        </div>
        <div>
          <img
            src={require("../Assets/Item 2.png")}
            alt=""
            className="h-[200px] md:w-[200px] w-full   hover:scale-125 transition duration-300 ease-in-out"
          />
        <h2 className="text-center font-semibold lg:text-lg mt-4 mr-9">NECKLACES</h2>
        </div>
        <div>
          <img
            src={require("../Assets/Item 3.png")}
            alt=""
            className="h-[200px] md:w-[200px] w-full  hover:scale-125 transition duration-300 ease-in-out"
          />
            <h2 className="text-center font-semibold lg:text-lg mt-4 mr-9">BRACELETS</h2>
        </div>
        <div>
          <img
            src={require("../Assets/Item 4.png")}
            alt=""
            className="h-[200px] md:w-[200px] w-full  hover:scale-125 transition duration-300 ease-in-out"
          />
           <h2 className="text-center font-semibold lg:text-lg mt-4 mr-9">ALL RINGS</h2>
        </div>
        <div>
          <img
            src={require("../Assets/Item 5.png")}
            alt=""
            className="h-[200px] md:w-[200px] w-full  hover:scale-125 transition duration-300 ease-in-out"
          />
            <h2 className="text-center font-semibold lg:text-lg mt-4 mr-9">ENGAGEMENT RINGS</h2>
        </div>
        </div>
      
    </div>
    </Wrapper>

  );
};

export default JewelryType;
