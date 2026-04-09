import React, { useContext } from 'react'
import { AdminContext } from '../context/admin/AdminContext'
import { assets } from '../assets/assets'
import { useNavigate } from 'react-router-dom'

const Navbar = () => {
    const { Atoken, setAtoken } = useContext(AdminContext)

    const navigate = useNavigate()

    const handleLogout = () => {
        navigate('/')  // this will send to home page
        Atoken &&  setAtoken('')
        Atoken && localStorage.removeItem('Atoken')
    }

    return (
        <nav className="flex items-center justify-between px-6 md:px-16 lg:px-24 py-4 border-b border-gray-300 bg-white">

            {/* Left Side: Logo + Admin */}
            <div className="flex items-center gap-3">
                <img src={assets.admin_logo} alt="admin logo" className="h-8" />
                
                <p className="text-md font-medium border border-gray-500 px-3 py-1 rounded-full">
                    {Atoken ? 'Admin' : 'Doctor'}
                </p>
            </div>

            {/* Right Side: Logout */}
            <button 
                onClick={handleLogout} 
                className="cursor-pointer px-6 py-2 bg-indigo-500 hover:bg-indigo-600 transition text-white rounded-full"
            >
                Logout
            </button>

        </nav>
    )
}

export default Navbar