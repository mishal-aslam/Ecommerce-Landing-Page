import React from "react";

const Subscribe = () => {
  return (
    <div className="grid md:grid-cols-2 grid-cols-1  md:px-56  px-12">
      {/* left side  */}
      <div className="shadow-lg shadow-black/50" >
        <img
          src={require("../Assets/Rectangle 31.png")}
          className="md:h-[401px] h-[200px]  md:w-[463px] w-full "
          alt=""
        />
      </div>
      {/* right side  */}
      <div className="bg-white place-content-center shadow-lg shadow-black/50 md:h-[401px] h-[200px]  md:w-[463px] w-full ">
        <h2 className="text-[#002D69] md:my-8 my-2 text-3xl font-bold text-center   uppercase ">
          Stay in touch?
        </h2>
        <p className='text-base md:mt-8 mt-2 text-center md:px-20 px-2 text-[#343434]'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloribus impedit quo ipsa? A culpa deserunt dolorem!</p>
        <button className="uppercase bg-[#002D69] hover:bg-[#1A3F6F] text-white font-bold py-2 px-6 rounded hover:bg-transparent  hover:text-[#002D69] hover:border-[#002D69] border transition duration-700 ease-in-out flex justify-center items-center m-auto md:my-8 my-3">
            Subscribe
          </button>
      </div>
    </div>
  );
};

export default Subscribe;
