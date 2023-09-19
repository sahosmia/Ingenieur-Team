import { Contact, LocationInformation, PageBanner } from '../data/components'

const ContactPage = () => {
  return (
    <>
     <PageBanner title='Contact & Locations' content='Get more iformation regarding our location and working hours'/>
      <div className='py-20'>
      <div className="container">
        
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 pb-20'>
            <LocationInformation title="Location #1" address="72/54 Link Road, Radison Area, Singapur" number="+8801 952 827 301"  email="sahosmiawebdev@gmail.com" url="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d116833.83187883983!2d90.33728804060519!3d23.780975728310533!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b8b087026b81%3A0x8fa563bbdd5904c2!2sDhaka!5e0!3m2!1sen!2sbd!4v1695098159788!5m2!1sen!2sbd" />
            
            <LocationInformation title="Location #1" address="72/54 Link Road, Radison Area, Singapur" number="+8801 952 827 301"  email="sahosmiawebdev@gmail.com" url="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d116833.83187883983!2d90.33728804060519!3d23.780975728310533!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b8b087026b81%3A0x8fa563bbdd5904c2!2sDhaka!5e0!3m2!1sen!2sbd!4v1695098159788!5m2!1sen!2sbd" />
            
            <LocationInformation title="Location #1" address="72/54 Link Road, Radison Area, Singapur" number="+8801 952 827 301"  email="sahosmiawebdev@gmail.com" url="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d116833.83187883983!2d90.33728804060519!3d23.780975728310533!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b8b087026b81%3A0x8fa563bbdd5904c2!2sDhaka!5e0!3m2!1sen!2sbd!4v1695098159788!5m2!1sen!2sbd" />
            

          
        </div>
              <Contact/>
          </div>
    </div>
    </>
  )
}

export default ContactPage