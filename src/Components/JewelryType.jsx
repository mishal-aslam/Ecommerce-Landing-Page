import React from "react";

const JewelryType = () => {
  return (
    <div>
      <h2 className="text-black text-2xl font-semibold text-left ">
        SHOP BY JEWELRY TYPE
      </h2>

      <div className="lg:grid-cols-5 grid md:grid-cols-3 grid-cols-1  gap-5 ml-12">
        <div>
          <img
            src={require("../Assets/Item 1.png")}
            alt=""
            className="h-[200px] md:w-[200px] w-full "
          />
          <h2 className="text-center font-semibold lg:text-lg mt-4 mr-9">EARRINGS</h2>
        </div>
        <div>
          <img
            src={require("../Assets/Item 2.png")}
            alt=""
            className="h-[200px] md:w-[200px] w-full "
          />
        <h2 className="text-center font-semibold lg:text-lg mt-4 mr-9">NECKLACES</h2>
        </div>
        <div>
          <img
            src={require("../Assets/Item 3.png")}
            alt=""
            className="h-[200px] md:w-[200px] w-full "
          />
            <h2 className="text-center font-semibold lg:text-lg mt-4 mr-9">BRACELETS</h2>
        </div>
        <div>
          <img
            src={require("../Assets/Item 4.png")}
            alt=""
            className="h-[200px] md:w-[200px] w-full "
          />
           <h2 className="text-center font-semibold lg:text-lg mt-4 mr-9">ALL RINGS</h2>
        </div>
        <div>
          <img
            src={require("../Assets/Item 5.png")}
            alt=""
            className="h-[200px] md:w-[200px] w-full "
          />
            <h2 className="text-center font-semibold lg:text-lg mt-4 mr-9">ENGAGEMENT RINGS</h2>
        </div>
        </div>
      
    </div>
  );
};

export default JewelryType;
