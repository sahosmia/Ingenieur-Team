import {  PageBanner, ServiceItem } from "../data/components"
import {BsFillCalendarCheckFill} from "react-icons/bs"
import {FaLocationDot} from "react-icons/fa6"
import {FaToolbox} from "react-icons/fa"
import { services } from "../data/dummy"
const ServicePage = () => {
  return (
     <>
      <PageBanner title='Our Services'>
        <div className="bg-white  p-5 rounded-xl ">
          <form action="" className="w-full flex justify-between items-center">
            <div className="flex gap-20">

              
              <div className="flex items-center ">
                <div className="text-gray-400"><FaLocationDot /></div>
                <div className="flex flex-col items-start">
                  <label htmlFor="" className="font-semibold px-5">Location</label>
                  <select name="" id="" className="appearance-none underline text-main  mt-1 px-5   w-full leading-tight focus:outline-none focus:shadow-outline block text-sm">
                    <option  value="">Change</option>
                    <option  value="">Change</option>
                    <option  value="">Change</option>
                  </select>
                </div>
              </div>
              
              <div className="flex items-center ">
                <div className="text-gray-400 "><BsFillCalendarCheckFill /></div>
                <div className="flex flex-col items-start">
                  <label htmlFor="" className="font-semibold px-5">Date</label>
                  <input type="date" className="appearance-none underline text-main  mt-1 px-5   w-full leading-tight focus:outline-none focus:shadow-outline block text-sm"/>
                    
                </div>
              </div>

              <div className="flex items-center ">
                <div className="text-gray-400"><FaToolbox /></div>
                <div className="flex flex-col items-start">
                  <label htmlFor="" className="font-semibold px-5">Service</label>
                  <select name="" id="" className="appearance-none underline text-main  mt-1 px-5   leading-tight focus:outline-none focus:shadow-outline block text-sm">
                    <option  value="">Home Delivary</option>
                    <option  value="">Decoration</option>
                    <option  value="">Change</option>
                  </select>
                </div>
              </div>


            </div>
            <div><button className="primary-btn">Book an Appointment</button></div>
          </form>
        </div>
      </PageBanner>

      <div className='py-28'> 
        <div className="container grid grid-cols-1 md:grid-cols-2  gap-12">
          {services.map((service, index) => (
            
          <ServiceItem key={index} icon={service.icon} title={service.title} content={service.content} bg={service.bg} />
          ))}
        </div>
      </div>
      
    </>
  )
}

export default ServicePage