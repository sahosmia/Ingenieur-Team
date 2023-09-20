import {GrFacebookOption} from "react-icons/gr"
import {AiOutlineInstagram} from "react-icons/ai"
import {BiLogoTiktok} from "react-icons/bi"
import { CiLocationOn } from "react-icons/ci"
import { Link } from "react-router-dom"

const Header = () => {
  return (
    <div className=" absolute top-0 left-0 right-0">
    <div className='py-2 bg-black text-white'>
        <div className="container flex ">
          

          <div className='flex items-center gap-5'>
            <img className='block' src="/images/works/darklogo.png" alt="" />
            <span className='text-gray-400 text-xs w-44'>TÜV SÜD AUTO PARTNER IN NEUSS</span>

            <div className='border border-gray-600 h-6'></div>

            <div className='flex items-center gap-2'>
              <span className='text-xl'>
                <CiLocationOn/>
              </span>
              <span className='w-36 text-xs'>Heinrich-Pesch-Str.5a 50739 Köln</span>
            </div>
            <div className='border border-gray-600 h-6 '></div>
            <span className="text-xs">Mon-Fri, 9:00-19:00</span>
            <div className='border border-gray-600 h-6'></div>
             <ul className='flex gap-3 '>
                <li><a className='w-8 h-8 border  flex items-center justify-center rounded-full textbaseg' href=""><GrFacebookOption/></a></li>
                <li><a className='w-8 h-8 border flex items-center justify-center rounded-full text-base' href=""><BiLogoTiktok/></a></li>
                <li><a className='w-8 h-8 border flex items-center justify-center rounded-full text-base' href=""><AiOutlineInstagram/></a></li>
              </ul>
          </div>
      </div>
      </div>
    <div className="py-5">
      <div className="container flex justify-between">
          <ul className=' flex  h-auto py-2  top-0 left-60    transition-all duration-300  gap-6 '>
            <li className=''>
              <Link to="/" className='text-gray-800 hover:text-main py-2 block font-medium'>Home</Link>
            </li>
            <li className=''>
              <Link to="/services" className='text-gray-800 hover:text-main py-2 block font-medium'>Service</Link>
            </li>
            <li className=''>
              <Link to="/about" className='text-gray-800 hover:text-main py-2 block font-medium'>About </Link>
            </li>
            <li className=''>
              <Link to="/career" className='text-gray-800 hover:text-main py-2 block font-medium'>Career </Link>
            </li>
            <li className=''>
              <Link to="/contact" className='text-gray-800 hover:text-main py-2 block font-medium'>Contact</Link>
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