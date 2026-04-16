import React, { useEffect, useContext } from 'react'
import { AdminContext } from '../../context/admin/AdminContext'
import { assets } from '../../assets/assets.js'
import { AppContext } from '../../context/app/AppContext'

const Dashboard = () => {
    
    const { Atoken, getDashData, cancelAppointment, dashData } = useContext(AdminContext)
    const { slotDateFormat } = useContext(AppContext)

    useEffect(() => {
        if (Atoken) {
            getDashData()
        }
    }, [Atoken])

    return dashData && (
        <div className='p-8 bg-gray-50 min-h-screen'>

            {/* Header */}
            <h1 className='text-3xl font-bold text-gray-800 mb-8'>
                Dashboard
            </h1>

            {/* Stats */}
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'>

                <div className='flex items-center gap-4 bg-white p-6 rounded-xl border shadow-sm hover:shadow-md transition'>
                    <img className='w-16' src={assets.doctor_icon} alt="" />
                    <div>
                        <p className='text-3xl font-bold text-gray-700'>
                            {dashData.doctors}
                        </p>
                        <p className='text-gray-500 text-base'>
                            Doctors
                        </p>
                    </div>
                </div>

                <div className='flex items-center gap-4 bg-white p-6 rounded-xl border shadow-sm hover:shadow-md transition'>
                    <img className='w-16' src={assets.appointments_icon} alt="" />
                    <div>
                        <p className='text-3xl font-bold text-gray-700'>
                            {dashData.appointments}
                        </p>
                        <p className='text-gray-500 text-base'>
                            Appointments
                        </p>
                    </div>
                </div>

                <div className='flex items-center gap-4 bg-white p-6 rounded-xl border shadow-sm hover:shadow-md transition'>
                    <img className='w-16' src={assets.patients_icon} alt="" />
                    <div>
                        <p className='text-3xl font-bold text-gray-700'>
                            {dashData.patients}
                        </p>
                        <p className='text-gray-500 text-base'>
                            Patients
                        </p>
                    </div>
                </div>

            </div>

            {/* Latest Bookings */}
            <div className='mt-10 bg-white rounded-xl border shadow-sm'>

                <div className='flex items-center gap-3 px-6 py-5 border-b'>
                    <img className='w-6' src={assets.list_icon} alt="" />
                    <p className='text-xl font-semibold text-gray-700'>
                        Latest Bookings
                    </p>
                </div>

                <div>
                    {
                        dashData.latestAppointments.map((item, index) => (
                            <div 
                                key={index}
                                className='flex items-center gap-4 px-6 py-5 border-b last:border-none hover:bg-gray-50 transition'
                            >
                                <img 
                                    className='w-12 h-12 rounded-full object-cover'
                                    src={item.docData.image} 
                                    alt="" 
                                />

                                <div className='flex-1'>
                                    <p className='text-lg font-semibold text-gray-800'>
                                        {item.docData.name}
                                    </p>
                                    <p className='text-gray-500 text-base'>
                                        {slotDateFormat(item.slotDate)}
                                    </p>
                                </div>

                                {
                                    item.cancelled ? 
                                    <span className='text-red-500 text-sm font-semibold'>
                                        Cancelled
                                    </span>
                                    : item.isCompleted 
                                        ? <p className="text-green-500 text-sm font-semibold" >Completed</p>
                                        : <img
                                            onClick={() => cancelAppointment(item._id)}
                                            className='w-8 cursor-pointer hover:scale-110 transition'
                                            src={assets.cancel_icon}
                                            alt=""
                                         />
                                }
                            </div>
                        ))
                    }
                </div>
            </div>

        </div>
    )
}

export default Dashboard