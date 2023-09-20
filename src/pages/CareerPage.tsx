import { CareerItem, PageBanner } from "../data/components"


const CareerPage = () => {
  return (
     <>
     <PageBanner title='Our career opportunities' content='Looking for new opportunities? Let’s check out our new vacancies.'/>
      <div className='py-28'>
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <CareerItem location="Germany, Berlin" designation="Chief mechanic" status="Full-time" company="ST Ingenieurteam" />
            <CareerItem location="Germany, Berlin" designation="Chief mechanic" status="Full-time" company="ST Ingenieurteam" />
            <CareerItem location="Germany, Berlin" designation="Chief mechanic" status="Full-time" company="ST Ingenieurteam" />
            <CareerItem location="Germany, Berlin" designation="Chief mechanic" status="Full-time" company="ST Ingenieurteam" />
          </div>
        </div>
      </div>
    </>
  )
}

export default CareerPage