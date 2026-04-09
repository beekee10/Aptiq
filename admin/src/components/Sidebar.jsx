import React, { useContext } from "react";
import { AdminContext } from "../context/admin/AdminContext";
import { NavLink } from "react-router-dom";
import { assets } from "../assets/assets";

const Sidebar = () => {
  const { Atoken } = useContext(AdminContext);

  if (!Atoken) return null;

  return (
<nav className="bg-white shadow-md border-r border-gray-200 w-[250px] min-h-screen py-6 px-4">
      

      {/* Main Menu */}
      <ul className="mt-6 space-y-2">
        <li>
          <NavLink
            to="/admin-dashboard"
            className={({ isActive }) =>
                `flex items-center gap-3 px-4 py-2 rounded transition-all ${
                  isActive
                    ? "bg-blue-100 text-blue-600"
                    : "text-slate-800 hover:bg-gray-100"
                }`
              } 
            >
            <img src={assets.home_icon} alt="home" className="w-5" />
            <span>Dashboard</span>
          </NavLink>
        </li>
      </ul>

      {/* Management Section */}
      <div className="mt-6">
        <h6 className="text-blue-600 text-[15px] font-semibold px-4">
          Management
        </h6>

        <ul className="space-y-2 mt-3">
          <li>
            <NavLink
              to="/add-doctor"
              className={({ isActive }) =>
                `flex items-center gap-3 px-4 py-2 rounded transition-all ${
                  isActive
                    ? "bg-blue-100 text-blue-600"
                    : "text-slate-800 hover:bg-gray-100"
                }`
              }
            >
              <img src={assets.add_icon} alt="add" className="w-5" />
              <span>Add Doctor</span>
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/all-appointments"
              className={({ isActive }) =>
                `flex items-center gap-3 px-4 py-2 rounded transition-all ${
                  isActive
                    ? "bg-blue-100 text-blue-600"
                    : "text-slate-800 hover:bg-gray-100"
                }`
              }
        >
              <img src={assets.appointment_icon} alt="appointments" className="w-5" />
              <span>All Appointments</span>
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/doctor-list"
              className={({ isActive }) =>
                `flex items-center gap-3 px-4 py-2 rounded transition-all ${
                  isActive
                    ? "bg-blue-100 text-blue-600"
                    : "text-slate-800 hover:bg-gray-100"
                }`
              }
        >
              <img src={assets.doctor_icon} alt="doctors" className="w-5" />
              <span>Doctor List</span>
            </NavLink>
          </li>
        </ul>
      </div>

    </nav>
  );
};

export default Sidebar;