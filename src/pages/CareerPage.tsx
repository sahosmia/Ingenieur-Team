import CareerItem from "../components/CareerItem"
import PageBanner from "../components/PageBanner"

const CareerPage = () => {
  return (
     <>
     <PageBanner title='Contact & Locations' content='Get more iformation regarding our location and working hours'/>
          <div className='py-20'>
              <div className="container">
                   <CareerItem location="" designation="" status="" company="" />
             </div>
          </div>
    
    </>
  )
}

export default CareerPage