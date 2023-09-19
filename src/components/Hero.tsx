import React from 'react'

const Hero = () => {
  return (
    <div className='pt-40 bg-secondary ' >
    <div className='pt-40 bg-opacity-70 bg-hero-pattern bg-no-repeat bg-right pb-40' >
      <div className='container'>
        <h1 className='font-semibold max-w-xl text-[64px] leading-[6rem] pb-16'>Engineering office in <span className='text-main'>Cologne</span></h1>

        <button className='primary-btn mb-10'>Book an Appointment</button>

        <span className='text-slate-400 block'>Find us on Google map:</span>

        <div className='flex items-center py-4 gap-2'>
        <div className='w-10 h-10 flex justify-center items-center border rounded bg-white'>
          <img  src="/images/map.png" alt="" />
        </div>
        <h5 className='text-gray-700'>Google Map</h5>
        </div>
      <div></div>
      </div>
    </div>
    </div>
  )
}

export default Hero