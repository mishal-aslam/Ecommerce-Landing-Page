import React from 'react'

const OurCommitment = () => {
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 mt-8'>
        {/* left side  */}
        <div className='bg-[#002D69]  text-white place-content-center py-12'>
            <h2 className='text-3xl font-bold text-left px-20 uppercase'>Hand Crafted fine pieces.</h2>
            <p className='text-base mt-8 text-left px-20'>We also firmly believed that our customers deserved more <br />choices, straightforward information and legendary service.</p>

        </div>
        {/* right side  */}
        <div>
        <img
            src={require("../Assets/Image1.png")}
            alt=""
            className="md:h-[430px] h-[300px] md w-full "
          />
        </div>
    </div>
  )
}

export default OurCommitment