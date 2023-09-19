import { Link } from 'react-router-dom'

const Service = () => {
  return (
    <div className='py-20'>
       <h1 className='section-header text-center pb-10'>
          Our Service
        </h1>
      <div className="container grid grid-cols-1 md:grid-cols-2 gap-10 pt-10">
        <div className='rounded-3xl overflow-hidden bg-secondary'>
          <img className='w-full' src="/images/services/one.png" alt="" />
          <div className='p-8'>
            <h4 className='pb-5'>Change acceptances</h4>
            <p className='pb-5 text-gray-600'>Special wheels, spoilers, or would it rather be a chassis change? Our test engineers assess and document the changes for you in accordance with the regulations.</p>

            <button className='primary-btn'>Learn More</button>
          </div>
        </div>
        <div className='rounded-3xl overflow-hidden bg-secondary'>
          <img className='w-full' src="/images/services/two.png" alt="" />
          <div className='p-8'>
            <h4 className='pb-5'>Change acceptances</h4>
            <p className='pb-5 text-gray-600'>Special wheels, spoilers, or would it rather be a chassis change? Our test engineers assess and document the changes for you in accordance with the regulations.</p>

            <button className='primary-btn'>Learn More</button>
          </div>
        </div>
        <div className='rounded-3xl overflow-hidden bg-secondary'>
          <img className='w-full' src="/images/services/three.png" alt="" />
          <div className='p-8'>
            <h4 className='pb-5'>Change acceptances</h4>
            <p className='pb-5 text-gray-600'>Special wheels, spoilers, or would it rather be a chassis change? Our test engineers assess and document the changes for you in accordance with the regulations.</p>

            <button className='primary-btn'>Learn More</button>
          </div>
        </div>
        <div className='rounded-3xl overflow-hidden bg-secondary'>
          <img className='w-full' src="/images/services/four.png" alt="" />
          <div className='p-8'>
            <h4 className='pb-5'>Change acceptances</h4>
            <p className='pb-5 text-gray-600'>Special wheels, spoilers, or would it rather be a chassis change? Our test engineers assess and document the changes for you in accordance with the regulations.</p>

            <button className='primary-btn'>Learn More</button>
          </div>
        </div>
      </div>
      <div className='text-center pt-20' > 
        
      <Link className='text-main' to="#">Go to the services page </Link>
</div>

    </div>
  )
}

export default Service