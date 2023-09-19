const Contact = () => {
  return (

       

        <div className="bg-secondary rounded-3xl py-16">
           <h1 className='section-header text-center py-10'>
          Contact us
        </h1>
          <form action="" className=' w-1/2 m-auto'>
          <div className='flex flex-col my-7'>
            <label className='font-semibold text-sm text-black text-opacity-70' htmlFor="">First name</label>
            <input type="text" placeholder='First Name' className='appearance-none border mt-2  rounded-xl w-full p-5 text-gray-700 leading-tight focus:outline-none focus:shadow-outline block' />
          </div>
          <div className='flex flex-col my-7'>
            <label className='font-semibold text-sm text-black text-opacity-70' htmlFor="">Last name</label>
            <input type="text" placeholder='Last Name' className='appearance-none border mt-2  rounded-xl w-full p-5 text-gray-700 leading-tight focus:outline-none focus:shadow-outline block' />
          </div>
          <div className='flex flex-col my-7'>
            <label className='font-semibold text-sm text-black text-opacity-70' htmlFor="">Location</label>
           
            <select name="" id="" className='appearance-none border mt-2  rounded-xl w-full p-5 text-gray-700 leading-tight focus:outline-none focus:shadow-outline block'>
              <option value="">Choose location</option>
            </select>
          </div>
          <div className='flex flex-col my-7'>
            <label className='font-semibold text-sm text-black text-opacity-70' htmlFor="">Service</label>
           
            <select name="" id="" className='appearance-none border mt-2  rounded-xl w-full p-5 text-gray-700 leading-tight focus:outline-none focus:shadow-outline block'>
              <option value="">Choose service</option>
              <option value="">Choose service</option>
              <option value="">Choose service</option>
            </select>
          </div>
        

          <div className='my-7'>
            <button className='bg-main text-white font-medium py-4 rounded-xl capitalize block w-full'>Submit</button>
          </div>

          <p className='text-sm pb-10'>If you have a technical question, please always provide us with your contact details - even if you are already our customer. In order to quickly forward your request to the right place, as well as for any questions, it is very helpful for us to provide us with your place of residence and your telephone number. Thank you.</p>
        </form>
        </div>


  )
}

export default Contact