import { useEffect, useContext } from "react"
import { AdminContext } from "../../context/admin/AdminContext"
import { AppContext } from "../../context/app/AppContext"
import { assets } from "../../assets/assets";

const AllAppointments = () => {

    const { Atoken, appointments, getAllAppointments, cancelAppointment } = useContext(AdminContext)
    const { calculateAge, slotDateFormat, currency } = useContext(AppContext)

    useEffect(() => {
        if (Atoken) {
            getAllAppointments()
        }
    }, [Atoken])

    return (
        <div className='p-8 bg-gray-50 min-h-screen'>

            {/* Header */}
            <h1 className='text-3xl font-bold text-gray-800 mb-8'>
                All Appointments
            </h1>

            <div className='bg-white border rounded-xl shadow-sm overflow-hidden'>

                {/* Table Header */}
                <div className='hidden sm:grid grid-cols-[0.5fr_3fr_1fr_3fr_3fr_1fr_1fr] px-6 py-5 bg-gray-100 text-gray-700 font-semibold text-lg'>
                    <p>#</p>
                    <p>Patient</p>
                    <p>Age</p>
                    <p>Date & Time</p>
                    <p>Doctor</p>
                    <p>Fees</p>
                    <p>Actions</p>
                </div>

                {/* Table Body (NO SCROLL) */}
                <div>

                    {appointments.map((item, index) => (
                        <div
                            key={index}
                            className='grid grid-cols-1 sm:grid-cols-[0.5fr_3fr_1fr_3fr_3fr_1fr_1fr] items-center gap-4 px-6 py-5 border-b last:border-none hover:bg-gray-50 transition'
                        >

                            {/* Index */}
                            <p className='hidden sm:block text-base font-medium text-gray-700'>
                                {index + 1}
                            </p>

                            {/* Patient */}
                            <div className='flex items-center gap-4'>
                                <img
                                    className='w-12 h-12 rounded-full object-cover border'
                                    src={item.userData.image}
                                    alt=""
                                />
                                <p className='text-lg font-semibold text-gray-800'>
                                    {item.userData.name}
                                </p>
                            </div>

                            {/* Age */}
                            <p className='hidden sm:block text-base text-gray-600'>
                                {calculateAge(item.userData.dob)}
                            </p>

                            {/* Date & Time */}
                            <p className='text-base text-gray-600'>
                                {slotDateFormat(item.slotDate)}, {item.slotTime}
                            </p>

                            {/* Doctor */}
                            <div className='flex items-center gap-4'>
                                <img
                                    className='w-12 h-12 rounded-full object-cover bg-gray-200'
                                    src={item.docData.image}
                                    alt=""
                                />
                                <p className='text-lg font-semibold text-gray-800'>
                                    {item.docData.name}
                                </p>
                            </div>

                            {/* Fees */}
                            <p className='text-lg font-semibold text-gray-700'>
                                {currency}{item.amount}
                            </p>

                            {/* Action */}
                            {
                                item.cancelled ? (
                                    <span className='text-red-500 text-sm font-semibold'>
                                        Cancelled
                                    </span>
                                ) : (
                                    <img
                                        onClick={() => cancelAppointment(item._id)}
                                        className='w-8 cursor-pointer hover:scale-110 transition'
                                        src={assets.cancel_icon}
                                        alt=""
                                    />
                                )
                            }

                        </div>
                    ))}

                </div>
            </div>
        </div>
    )
}

export default AllAppointments