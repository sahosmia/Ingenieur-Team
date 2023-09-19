import {GrFacebookOption} from "react-icons/gr"
import {AiOutlineInstagram} from "react-icons/ai"
import {BiLogoTiktok} from "react-icons/bi"
import { CiLocationOn } from "react-icons/ci"

const Header = () => {
  return (
    <div className=" absolute top-0 left-0 right-0">
    <div className='py-5'>
      <div className="container flex justify-between">
          <div className='flex items-center gap-5'>
            <img className='block' src="/images/logo.png" alt="" />
            <span className='text-main text-sm w-44'>TÜV SÜD AUTO PARTNER IN NEUSS</span>
          </div>
          <div className='flex gap-4 items-center'>

            <div className='flex items-center gap-2'>
              <span className='text-2xl'>
                <CiLocationOn/>
              </span>
              <span className='w-44'>Heinrich-Pesch-Str.5a 50739 Köln</span>
            </div>
            <div className='border h-6'></div>
            <span>Mon-Fri, 9:00-19:00</span>
            <div className='border h-6'></div>
             <ul className='flex gap-3 text-black'>
                <li><a className='w-8 h-8 border border-black flex items-center justify-center rounded-full text-lg' href=""><GrFacebookOption/></a></li>
                <li><a className='w-8 h-8 border border-black flex items-center justify-center rounded-full text-lg' href=""><BiLogoTiktok/></a></li>
                <li><a className='w-8 h-8 border border-black flex items-center justify-center rounded-full text-lg' href=""><AiOutlineInstagram/></a></li>
              </ul>
          </div>
      </div>
      </div>
    <div className="py-5">
      <div className="container flex justify-between">
          <ul className=' flex  h-auto py-2  top-0 left-60    transition-all duration-300  gap-6 '>
            <li className=''>
              <a href="#" className='text-gray-800 hover:text-main py-2 block font-medium'>Home</a>
            </li>
            <li className=''>
              <a href="#" className='text-gray-800 hover:text-main py-2 block font-medium'>Service</a>
            </li>
            <li className=''>
              <a href="#" className='text-gray-800 hover:text-main py-2 block font-medium'>Location </a>
            </li>
            <li className=''>
              <a href="#" className='text-gray-800 hover:text-main py-2 block font-medium'>Contact</a>
            </li>
          </ul>

           <div className='flex gap-4 items-center'>

            
            <span className='font-bold text-main'>+49 221 57 000 807</span>
           
            <div className='border h-6'></div>

            <div className='flex gap-2'>
              <button className="secondary-btn">Call Back</button>
              <button className="primary-btn">Book an Appointment</button>
            </div>
            
          </div>
      </div>
      </div>
    </div>
  )
}

export default Header