import { assets } from '../assets/assets'

const Contact = () => {

  
 

  return (
    <div className='mb-80'>
      <h1 className="text-3xl font-semibold text-center mx-auto mb-10">CONTACT US</h1>
      <div className=" flex flex-col sm:flex-row items-center justify-center gap-4 ">
                <img className="w-full sm:max-w-96 rounded-lg mx-20 border  border-gray-300"
                    src={assets.contact_image} alt="" />
                <div className='flex-1  rounded-lg p-8 py-7 bg-white mx-2 sm:mx-0 -mt-20 sm:mt-0'>
                    
                    <div className="bg-white rounded-lg shadow p-8 max-w-4xl mx-auto">

  <div className="flex flex-col sm:flex-row justify-between gap-8 text-slate-600">
    
    <div className="flex-1">
      <h3 className="text-lg font-semibold mb-2 text-slate-700">
        Office Address
      </h3>
      <p>
        Aptiq Healthcare Pvt. Ltd.<br />
        123 Wellness Street<br />
        Suite 456<br />
        New York, NY 10001<br />
        United States
      </p>
    </div>

    <div className="flex-1">
      <h3 className="text-lg font-semibold mb-2 text-slate-700">
        Phone
      </h3>
      <p>
        +1 (123) 456-7890<br />
        Mon - Fri, 9:00 AM - 6:00 PM
      </p>
    </div>

    <div className="flex-1">
      <h3 className="text-lg font-semibold mb-2 text-slate-700">
        Email
      </h3>
      <p>
        support@aptiq.com<br />
        careers@aptiq.com
      </p>
    </div>

  </div>
</div>
                </div>
            </div>
    </div>
  )
}

export default Contact
