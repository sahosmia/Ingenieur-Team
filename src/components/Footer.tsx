import {GrFacebookOption} from "react-icons/gr"
import {AiOutlineInstagram} from "react-icons/ai"
import {MdOutlineMailOutline} from "react-icons/md"
import {BsTelephone} from "react-icons/bs"
import {BiLogoTiktok, BiMapAlt} from "react-icons/bi"
const Footer = () => {
  const footerIcon = "text-2xl text-main"
  return (
    <>
      <div className='bg-footer rounded-t-xl'>
        <div className="container">
          {/* top  */}
          <div className='flex py-20 border-b border-gray-500'>

            <div className='w-4/12'>
              <img src="/images/works/darklogo.png" alt="logo" />
              <p className='w-48 pt-10 text-white text-opacity-50'>TÜV SÜD AUTO PARTNER
                IN NEUSS</p>
              <button className='primary-btn mt-10'>Appointment</button>
            </div>

            <div className='w-2/12'>
              <h3 className="text-xl font-bold mb-4 md:mb-6 text-white">Company</h3>
              <ul className="">
            
                <li className="mb-2"><a className='capitalize hover:text-main transition-all text-white text-opacity-70 py-2 inline-block ' href="#">Service</a></li>
                <li className="mb-2"><a className='capitalize hover:text-main transition-all text-white text-opacity-70 py-2 inline-block ' href="#">Prices</a></li>
                <li className="mb-2"><a className='capitalize hover:text-main transition-all text-white text-opacity-70 py-2 inline-block ' href="#">Locations</a></li>
                <li className="mb-2"><a className='capitalize hover:text-main transition-all text-white text-opacity-70 py-2 inline-block ' href="#">Contact</a></li>
        
            
            </ul>
            </div>
            <div className='w-2/12'>
              <h3 className="text-xl font-bold mb-4 md:mb-6 text-white">Legal</h3>
              <ul className="">
            
                <li className="mb-2"><a className='capitalize hover:text-main transition-all text-white text-opacity-70 py-2 inline-block ' href="#">Imprint</a></li>
                <li className="mb-2"><a className='capitalize hover:text-main transition-all text-white text-opacity-70 py-2 inline-block ' href="#">Data Protection</a></li>
               
        
            
            </ul>
            </div>
           
            <div className='w-4/12'>            
              <div className='flex flex-col gap-8 pb-3'>

                <div className="flex gap-10">
                  <span className={footerIcon}><BiMapAlt /></span>
                  <p className="text-white text-opacity-50">72/54 Link Road, Radison Area, Singapur</p>
                </div>
                
                <div className="flex gap-10">
                  <span className={footerIcon}>
                    <BsTelephone />
                  </span>
                  <ul className="text-white text-opacity-50">
                    <li>+8801952827301</li>
                    <li>+8801952827301</li>
                  </ul>
                </div>

                <div className="flex gap-10">
                  <span className={footerIcon}>
                    <MdOutlineMailOutline />
                  </span>
                  <p className="text-white text-opacity-50">sahosmia.webdv@gmail.com</p>
                </div>
                
              </div>
            </div>
          </div>

          {/* bottom  */}
          <div className='flex justify-between items-center py-5'>
            <div><p className='text-white text-opacity-50 font-medium'>© ST-Ingenieurteam 2023</p></div>
            <div>
              <ul className='flex gap-3 text-white'>
                <li><a className='w-8 h-8 border flex items-center justify-center rounded-full text-lg' href=""><GrFacebookOption/></a></li>
                <li><a className='w-8 h-8 border flex items-center justify-center rounded-full text-lg' href=""><BiLogoTiktok/></a></li>
                <li><a className='w-8 h-8 border flex items-center justify-center rounded-full text-lg' href=""><AiOutlineInstagram/></a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Footer