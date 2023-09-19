import {MdOutlineMailOutline} from "react-icons/md"
import {BsTelephone} from "react-icons/bs"
import {BiMapAlt} from "react-icons/bi"
import { LocationInformationPropsType } from "../types"


const LocationInformation = ({title, address, number, email, url}: LocationInformationPropsType) => {
    const footerIcon = "text-2xl text-main"
  return (
    
            <div>
              <h6 className='text-main pb-4'>{title}</h6>
              <div className='rounded-3xl bg-secondary p-8 mb-4'>
                <div className="flex gap-5 pb-5">
                  <span  className={footerIcon}><BiMapAlt /></span>
                  <p className="font-semibold">{address}</p>
                </div>
                
                <div className="flex gap-5 pb-5">
                  <span className={footerIcon}>
                    <BsTelephone />
                  </span>
                 
                  <p className="font-semibold text-main">+{number}</p>
                </div>

                <div className="flex gap-5">
                  <span className={footerIcon}>
                    <MdOutlineMailOutline />
                  </span>
                  <p className="font-semibold">{email }</p>
                </div>
              </div>

              <div className='rounded-3xl overflow-hidden'>
                <iframe src={url} width="100%" height="300"   loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
              </div>
            </div>
  )
}

export default LocationInformation