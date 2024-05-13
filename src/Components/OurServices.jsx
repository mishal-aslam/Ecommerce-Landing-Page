import React from "react";
import Wrapper from './Wrapper'

const OurServices = () => {
  return (
    <Wrapper>

    <div>
      {" "}
      <div>
        <h2 className="text-[#002D69] my-8 text-3xl font-bold text-left  uppercase">
        Our Services
        </h2>

        <div className="lg:grid-cols-3 grid md:grid-cols-2 grid-cols-1  gap-5 ">
          <div>
            <img
              src={require("../Assets/Item 9.png")}
              alt=""
              className="md:h-[400px] h-[300px] md:w-[400px]  w-full hover:scale-105 transition duration-300 ease-in-out"
            />
            <h2 className="text-center text-2xl text-[#002D69] font-semibold uppercase mt-4 mr-4">Jewelry Repair</h2>
          </div>
          <div>
            <img
              src={require("../Assets/Item 10.png")}
              alt=""
              className="md:h-[400px] h-[300px] md:w-[400px]  w-full  hover:scale-105 transition duration-300 ease-in-out"
            />
             <h2 className="text-center text-2xl text-[#002D69] font-semibold uppercase mt-4 mr-4"> ring size </h2>
          </div>
          <div>
            <img
              src={require("../Assets/Item11.png")}
              alt=""
              className="md:h-[400px] h-[300px] md:w-[400px]  w-full hover:scale-105 transition duration-300 ease-in-out"
            />
             <h2 className="text-center text-2xl text-[#002D69] font-semibold uppercase mt-4 mr-4 ">Jewelry polishing</h2>
          </div>

        </div>



          <button className="bg-[#002D69] hover:bg-[#1A3F6F] text-white font-bold py-2 px-6 rounded hover:bg-transparent  hover:text-[#002D69] hover:border-[#002D69] border transition duration-700 ease-in-out flex justify-center items-center m-auto my-12 uppercase">
            learn more
          </button>
      </div>
    </div>
    </Wrapper>

  );
};

export default OurServices;
