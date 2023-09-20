import { CareerItemPropsType } from '../types'
import { CiLocationOn } from "react-icons/ci"

const CareerItem = ({location, designation, status, company}: CareerItemPropsType ) => {
  return (
    <div className='bg-secondary rounded-3xl p-8 h-80 flex flex-col justify-between'>

      <div>
        <div className='flex justify-between items-center pb-3'>
          <div className='flex gap-3 items-center text-main font-medium'>
            <CiLocationOn /> <span>{location}</span>
          </div>
          <span className='py-2 px-4 bg-green-200 text-green-800 rounded-lg'>{status}</span>
        </div>
        <h3 className='text-typhografy capitalize'>{designation}</h3>
      </div>

      <div className=''>
        <h4 className='pb-2'>{company}</h4>
        <span className='text-gray-400'>19 hours ago</span>
      </div>
    </div>
  )
}

export default CareerItem