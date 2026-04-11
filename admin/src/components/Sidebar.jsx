import React, { useContext } from "react";
import { AdminContext } from "../context/admin/AdminContext";
import { NavLink } from "react-router-dom";
import { assets } from "../assets/assets";
import { DoctorContext } from "../context/doctor/DoctorContext";

const Sidebar = () => {
  const { Atoken } = useContext(AdminContext)
  const { dToken } = useContext(DoctorContext)

  return (
    <div>
      {/* ADMIN sidebar */}

      {Atoken && (
        <nav className="bg-white shadow-md border-r border-gray-200 w-[250px] min-h-screen py-6 px-4">

          {/* Menu */}
          <ul className="space-y-3">

            <li>
              <NavLink
                to="/admin-dashboard"
                className={({ isActive }) =>
                  `flex items-center gap-3 px-4 py-3 rounded-lg text-base transition ${
                    isActive
                      ? "bg-blue-100 text-blue-600"
                      : "text-slate-800 hover:bg-gray-100"
                  }`
                }
              >
                <img src={assets.home_icon} alt="" className="w-5" />
                <span>Dashboard</span>
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/add-doctor"
                className={({ isActive }) =>
                  `flex items-center gap-3 px-4 py-3 rounded-lg text-base transition ${
                    isActive
                      ? "bg-blue-100 text-blue-600"
                      : "text-slate-800 hover:bg-gray-100"
                  }`
                }
              >
                <img src={assets.add_icon} alt="" className="w-5" />
                <span>Add Doctor</span>
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/all-appointments"
                className={({ isActive }) =>
                  `flex items-center gap-3 px-4 py-3 rounded-lg text-base transition ${
                    isActive
                      ? "bg-blue-100 text-blue-600"
                      : "text-slate-800 hover:bg-gray-100"
                  }`
                }
              >
                <img src={assets.appointment_icon} alt="" className="w-5" />
                <span>All Appointments</span>
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/doctor-list"
                className={({ isActive }) =>
                  `flex items-center gap-3 px-4 py-3 rounded-lg text-base transition ${
                    isActive
                      ? "bg-blue-100 text-blue-600"
                      : "text-slate-800 hover:bg-gray-100"
                  }`
                }
              >
                <img src={assets.doctor_icon} alt="" className="w-5" />
                <span>Doctor List</span>
              </NavLink>
            </li>

          </ul>

        </nav>
      )}


{/* DOCTORS sidebar */}

{dToken && (
        <nav className="bg-white shadow-md border-r border-gray-200 w-[250px] min-h-screen py-6 px-4">

          {/* Menu */}
          <ul className="space-y-3">

            <li>
              <NavLink
                to="/doctor-dashboard"
                className={({ isActive }) =>
                  `flex items-center gap-3 px-4 py-3 rounded-lg text-base transition ${
                    isActive
                      ? "bg-blue-100 text-blue-600"
                      : "text-slate-800 hover:bg-gray-100"
                  }`
                }
              >
                <img src={assets.home_icon} alt="" className="w-5" />
                <span>Dashboard</span>
              </NavLink>
            </li>


            <li>
              <NavLink
                to="/doctor-appointments"
                className={({ isActive }) =>
                  `flex items-center gap-3 px-4 py-3 rounded-lg text-base transition ${
                    isActive
                      ? "bg-blue-100 text-blue-600"
                      : "text-slate-800 hover:bg-gray-100"
                  }`
                }
              >
                <img src={assets.appointment_icon} alt="" className="w-5" />
                <span>All Appointments</span>
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/doctor-profile"
                className={({ isActive }) =>
                  `flex items-center gap-3 px-4 py-3 rounded-lg text-base transition ${
                    isActive
                      ? "bg-blue-100 text-blue-600"
                      : "text-slate-800 hover:bg-gray-100"
                  }`
                }
              >
                <img src={assets.doctor_icon} alt="" className="w-5" />
                <span>Profile</span>
              </NavLink>
            </li>

          </ul>

        </nav>
      )}
    </div>
  );
};

export default Sidebar;