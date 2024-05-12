import React from "react";

const LatestJewelry = () => {
  return (
    <div>
      {" "}
      <div>
        <h2 className="text-[#002D69] my-8 text-3xl font-bold text-left  uppercase">
          our latest jewelry
        </h2>

        <div className="lg:grid-cols-3 grid md:grid-cols-2 grid-cols-1  gap-5 ">
          <div>
            <img
              src={require("../Assets/Item 6.png")}
              alt=""
              className="md:h-[400px] h-[300px] md:w-[400px]  w-full"
            />
          </div>
          <div>
            <img
              src={require("../Assets/Item 7.png")}
              alt=""
              className="md:h-[400px] h-[300px] md:w-[400px]  w-full"
            />
          </div>
          <div>
            <img
              src={require("../Assets/Item 8.png")}
              alt=""
              className="md:h-[400px] h-[300px] md:w-[400px]  w-full"
            />
          </div>

        </div>



          <button className="bg-[#002D69] hover:bg-[#1A3F6F] text-white font-bold py-2 px-6 rounded hover:bg-transparent  hover:text-[#002D69] hover:border-[#002D69] border transition duration-700 ease-in-out flex justify-center items-center m-auto my-12">
            View Gallery
          </button>
      </div>
    </div>
  );
};

export default LatestJewelry;
