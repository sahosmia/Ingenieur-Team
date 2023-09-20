import { Link } from 'react-router-dom'
import { ServiceItemPropsType } from '../types'

const ServiceItem = ({ icon, title, content, bg }: ServiceItemPropsType) => {
  return (
    <div className='bg-secondary rounded-3xl p-8  '>
      <span className={`text-2xl text-white flex justify-center items-center w-12 h-12 rounded-full ${bg} mb-8`}>
         {icon}
      </span>
      
      <h4 className='text-typhografy pb-5'>{title}</h4>
      <p className='w-80 text-slate-400 pb-10'>{content}</p>
    
      <Link className='text-main font-medium' to="#">Learn more</Link>
    </div>
  )
}

export default ServiceItem