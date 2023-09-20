import { PageBanner } from "../data/components"
import { teams } from "../data/dummy"

const AboutPage = () => {
  return (
    <>
    <PageBanner title='About Us' content='Looking for new opportunities? Let’s check out our new vacancies.'/>
      <div className='py-28'>
        <div className="container">
          <div className="flex">
            <div className="flex-1">
              <h4 className="px-20">Hi, we’re INGENIEURTEAM We’re provide a professional car services across the Germany</h4>
            </div>

            <div className="flex-1 flex flex-col gap-5 text-slate-400 px-20">
              <p>Lorem ipsum dolor sit amet consectetur. Morbi amet consequat pellentesque tellus. Mattis viverra id sed pretium viverra nisl massa neque nulla. Volutpat nunc sapien faucibus consectetur integer in nulla.</p>

              <p>Ut massa sed urna sollicitudin urna et. Semper quam dui tortor interdum amet imperdiet sagittis.</p>

              <p>Ut massa sed urna sollicitudin urna et. Semper quam dui tortor interdum amet imperdiet sagittis.</p>
            </div>           
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 pt-28">

          {teams.map((team, index) => (
            
            <div key={index} >
              <img src={team.image} alt="" />
              <h4 className="pt-5 pb-2">{team.name}</h4>
              <p className="text-main">{team.designation }</p>
          </div>
            ))}
            </div>

        </div>
      </div>
    </>
  )
}

export default AboutPage