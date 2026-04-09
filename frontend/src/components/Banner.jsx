import React from 'react'
import { assets } from '../assets/assets'
import { useNavigate } from 'react-router-dom'

const Banner = () => {
    const navigate=useNavigate();

  return (
    <div className="flex flex-col md:flex-row items-center justify-around text-sm border border-gray-200 rounded-2xl m-2 mt-20 w-full bg-primary">
                
            <div className="flex flex-col text-center md:text-left items-center md:items-start pt-14 md:p-10">
                <h2 className="md:text-5xl text-5xl font-bold text-white">Book Appointment <br />
With 100+ Trusted Doctors.</h2>
        
                <div className="flex items-center gap-4 mt-6">
                    <button onClick={()=>{navigate('/login');scrollTo(0,0)}}  className="bg-indigo-100 hover:bg-indigo-600 px-7 py-2.5 text-black text-lg rounded-md active:scale-95 transition-all">
                        Create Account
                    </button>
                </div>
            </div>
        
            <img className="max-w-93.75 pt-20 md:p-0 " src={assets.appointment_img} alt="appointement" />
        </div>
  )
}

export default Banner
