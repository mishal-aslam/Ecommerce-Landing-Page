import React from "react";
import Wrapper from "./Wrapper";

const Testimonials = () => {
  return (
    <Wrapper>

    <div>
      {" "}
      <div>
        <h2 className="text-[#002D69] my-8 text-3xl font-bold text-left  uppercase">
          Customer reviews
        </h2>

        <div className="lg:grid-cols-3 grid md:grid-cols-2 grid-cols-1  gap-5 ">
          <div>
            <img
              src={require("../Assets/Customer Review.png")}
              alt=""
              className="md:h-[206px] h-[200px] md:w-[392px]  w-full hover:scale-125 transition duration-300 ease-in-out"
            />
          </div>
          <div>
            <img
              src={require("../Assets/Customer Review3.png")}
              alt=""
              className="md:h-[206px] h-[200px] md:w-[392px]  w-full  scale-125 hover:scale-100 transition duration-300 ease-in-out"
            />
          </div>
          <div>
            <img
              src={require("../Assets/Customer Review2.png")}
              alt=""
              className="md:h-[206px] h-[200px] md:w-[392px]  w-full hover:scale-125 transition duration-300 ease-in-out"
            />
          </div>
        </div>
      </div>
    </div>
    </Wrapper>

  );
};

export default Testimonials;
