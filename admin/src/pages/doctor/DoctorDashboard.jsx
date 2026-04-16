import React from "react";
import { useContext } from "react";
import { DoctorContext } from "../../context/doctor/DoctorContext";
import { useEffect } from "react";
import { assets } from "../../assets/assets.js";
import { AppContext } from "../../context/app/AppContext";

const DoctorDashboard = () => {
  const { dToken, dashData, cancelAppointment, getDashData, completeAppointment} = useContext(DoctorContext);

    const { currency, slotDateFormat} = useContext(AppContext)

  useEffect(() => {
    getDashData();
  }, [dToken]);

  return (
    <div>
      {/* Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="flex items-center gap-4 bg-white p-6 rounded-xl border shadow-sm hover:shadow-md transition">
          <img className="w-16" src={assets.earning_icon} alt="" />
          <div>
            <p className="text-2xl font-bold text-gray-700">
              {dashData.earnings} {currency}
            </p>
            <p className="text-gray-500 text-base">Earnings</p>
          </div>
        </div>

        <div className="flex items-center gap-4 bg-white p-6 rounded-xl border shadow-sm hover:shadow-md transition">
          <img className="w-16" src={assets.appointments_icon} alt="" />
          <div>
            <p className="text-3xl font-bold text-gray-700">
              {dashData.appointments}
            </p>
            <p className="text-gray-500 text-base">Appointments</p>
          </div>
        </div>

        <div className="flex items-center gap-4 bg-white p-6 rounded-xl border shadow-sm hover:shadow-md transition">
          <img className="w-16" src={assets.patients_icon} alt="" />
          <div>
            <p className="text-3xl font-bold text-gray-700">
              {dashData.patients}
            </p>
            <p className="text-gray-500 text-base">Patients</p>
          </div>
        </div>
      </div>

      <div>
        { dashData && dashData.latestAppointments.map((item, index) => (
          <div
            key={index}
            className="flex items-center gap-4 px-6 py-5 border-b last:border-none hover:bg-gray-50 transition"
          >
            <img
              className="w-12 h-12 rounded-full object-cover"
              src={item.userData.image}
              alt=""
            />

            <div className="flex-1">
              <p className="text-lg font-semibold text-gray-800">
                {item.userData.name}
              </p>
              <p className="text-gray-500 text-base">
                {slotDateFormat(item.slotDate)}
              </p>
            </div>
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
        ))}
      </div>
    </div>
  );
};

export default DoctorDashboard;
