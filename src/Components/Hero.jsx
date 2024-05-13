import React from 'react'
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from 'embla-carousel-autoplay'

const Hero = () => {
    const [emblaRef] = useEmblaCarousel({ loop: false }, [Autoplay()])

  return (
    <div className="overflow-hidden" ref={emblaRef}>
      <div className="flex">
      <div className="flex flex-grow-0 flex-shrink-0 w-full min-w-0">
          <img
            src={require("../Assets/image2.0.jpg")}
            alt=""
            className="md:h-[520px] h-auto w-full"
          />
        </div>
        <div className="flex flex-grow-0 flex-shrink-0 w-full min-w-0">
          <img
            src={require("../Assets/Hjk.png")}
            alt=""
            className="md:h-[520px] h-auto w-full"
          />
        </div>
     
        <div className="flex flex-grow-0 flex-shrink-0 w-full min-w-0">
          <img
            src={require("../Assets/image3.0.webp")}
            alt=""
            className="md:h-[520px] h-auto w-full"
          />
        </div>
      </div>
    </div>

    //     <div>
    // <img
    //   src={require("../Assets/Hjk.png")}
    //   alt=""
    //   className="md:h-[520px] h-auto w-full"
    // />
    //   </div>
  );
};

export default Hero;
