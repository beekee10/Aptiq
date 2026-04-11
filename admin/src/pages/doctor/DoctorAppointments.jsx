import React, { useContext, useEffect } from 'react'
import { DoctorContext } from '../../context/doctor/DoctorContext'
import { AppContext } from '../../context/app/AppContext'
import { assets } from '../../assets/assets.js'

const DoctorAppointments = () => {

    const { dToken, appointments, getAppointments, completeAppointment, cancelAppointment } = useContext(DoctorContext)
    const { calculateAge, slotDateFormat, currency } = useContext(AppContext)

    useEffect(() => {
        if (dToken) {
            getAppointments()
        }
    }, [dToken])

    return (
        <div className='w-full max-w-7xl mx-auto p-6'>

            {/* Title */}
            <p className='mb-6 text-3xl font-semibold text-gray-800'>
                All Appointments
            </p>

            <div className='bg-white rounded-xl shadow-md border overflow-hidden'>

                {/* Table Header */}
                <div className='hidden sm:grid grid-cols-[0.5fr_2fr_1fr_1fr_2.5fr_1fr_1fr] gap-2 py-4 px-6 bg-gray-100 text-gray-700 font-semibold text-lg sticky top-0 z-10'>
                    <p>#</p>
                    <p>Patient</p>
                    <p>Payment</p>
                    <p>Age</p>
                    <p>Date & Time</p>
                    <p>Fees</p>
                    <p className='text-center'>Action</p>
                </div>

                {/* Scroll Container (Scrollbar Hidden) */}
                <div className='max-h-[70vh] overflow-y-auto scrollbar-hide'>

                    {
                        [...(appointments || [])].reverse().map((item, index) => (
                            <div 
                                key={index} 
                                className='flex flex-col sm:grid grid-cols-[0.5fr_2fr_1fr_1fr_2.5fr_1fr_1fr] gap-3 sm:gap-2 items-start sm:items-center py-4 px-6 border-b hover:bg-gray-50 transition'
                            >

                                <p className='hidden sm:block text-gray-500'>
                                    {index + 1}
                                </p>

                                {/* Patient */}
                                <div className='flex items-center gap-3'>
                                    <img 
                                        className='w-10 h-10 rounded-full object-cover border' 
                                        src={item.userData.image} 
                                        alt="" 
                                    /> 
                                    <p className='font-medium text-gray-800 text-base'>
                                        {item.userData.name}
                                    </p>
                                </div>

                                {/* Payment */}
                                <div>
                                    <p className={`text-xs px-3 py-1 rounded-full inline-block font-medium
                                        ${item.payment ? 'bg-green-100 text-green-600' : 'bg-yellow-100 text-yellow-600'}`}>
                                        {item.payment ? 'Online' : 'Cash'}
                                    </p>
                                </div>

                                {/* Age */}
                                <p className='hidden sm:block text-gray-600'>
                                    {calculateAge(item.userData.dob)}
                                </p>

                                {/* Date */}
                                <p className='text-gray-700 text-sm sm:text-base'>
                                    {slotDateFormat(item.slotDate)}, {item.slotTime}
                                </p>

                                {/* Fees */}
                                <p className='font-semibold text-gray-800'>
                                    {currency}{item.amount}
                                </p>

                                {/* Actions */}
                                <div className='flex items-center gap-2 justify-start sm:justify-center'>
                                    {
                                        item.cancelled
                                            ? <p className='text-red-500 text-sm font-medium'>Cancelled</p>
                                            : item.isCompleted
                                                ? <p className='text-green-600 text-sm font-medium'>Completed</p>
                                                : (
                                                    <>
                                                        <button 
                                                            onClick={() => cancelAppointment(item._id)}
                                                            className='p-2 bg-red-50 hover:bg-red-100 rounded-full transition'
                                                        >
                                                            <img className='w-5' src={assets.cancel_icon} alt="" />
                                                        </button>

                                                        <button 
                                                            onClick={() => completeAppointment(item._id)}
                                                            className='p-2 bg-green-50 hover:bg-green-100 rounded-full transition'
                                                        >
                                                            <img className='w-5' src={assets.tick_icon} alt="" />
                                                        </button>
                                                    </>
                                                )
                                    }
                                </div>

                            </div>
                        ))
                    }

                </div>
            </div>

            {/* Hide Scrollbar Style */}
            <style jsx>{`
                .scrollbar-hide::-webkit-scrollbar {
                    display: none;
                }
                .scrollbar-hide {
                    -ms-overflow-style: none;
                    scrollbar-width: none;
                }
            `}</style>

        </div>
    )
}

export default DoctorAppointments