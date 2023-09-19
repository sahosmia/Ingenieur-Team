
const map = () => {
  return (
    <div>
      <div className='flex items-center justify-center py-10 gap-2'>
        <div className='w-10 h-10 flex justify-center items-center border rounded'>
          <img  src="/images/map.png" alt="" />
        </div>
        <h5 className='text-gray-700'>Google Map</h5>
        </div>
      <div>
<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d116833.83187883983!2d90.33728804060519!3d23.780975728310533!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b8b087026b81%3A0x8fa563bbdd5904c2!2sDhaka!5e0!3m2!1sen!2sbd!4v1695098159788!5m2!1sen!2sbd" width="100%" height="350"   loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
      </div>
    </div>
  )
}

export default map