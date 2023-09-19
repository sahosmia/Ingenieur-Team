
const OurWork = () => {
  return (
    <div className='py-20'>
      <div className="container">
       
          <h1 className='section-header pb-10'>
          Our Work
        </h1>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>
          <div className=' relative w-full overflow-hidden'>
            <img className=' object-cover h-[500px] w-full object-center rounded-2xl' src="/images/works/1.jpeg" alt="" />
            <div className=' absolute z-10 bottom-5 left-5 w-4/5 '>
              <h6 className='text-white text-opacity-90 pb-4'>General inspections and safety</h6>
              <p className='text-white font-medium text-opacity-90'>Audi A5</p>
            </div>
          </div>
          <div className=' relative w-full overflow-hidden'>
            <img className=' object-cover h-[500px] w-full object-center rounded-2xl' src="/images/works/2.jpeg" alt="" />
            <div className=' absolute z-10 bottom-5 left-5 w-4/5 '>
              <h6 className='text-white text-opacity-90 pb-4'>General inspections and safety</h6>
              <p className='text-white font-medium text-opacity-90'>Audi A5</p>
            </div>
          </div>
          <div className=' relative w-full overflow-hidden'>
            <img className=' object-cover h-[500px] w-full object-center rounded-2xl' src="/images/works/3.jpeg" alt="" />
            <div className=' absolute z-10 bottom-5 left-5 w-4/5 '>
              <h6 className='text-white text-opacity-90 pb-4'>General inspections and safety</h6>
              <p className='text-white font-medium text-opacity-90'>Audi A5</p>
            </div>
          </div>
       </div>
      </div>
    </div>
  )
}

export default OurWork