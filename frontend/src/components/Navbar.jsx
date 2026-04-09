import React, { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import logo2 from '../assets/logo2.png'
import { useNavigate } from 'react-router-dom'
import {assets} from '../assets/assets'
import { AppContext } from '../context/AppContext'

const Navbar = () => {
  const navigate=useNavigate(); // navigate is use to send to other page(here clicking on create account button will send to signup page)

  const {token,setToken,userData} =useContext(AppContext)

  const logout = () => {
    setToken(false)
    localStorage.removeItem('token')
  }

  return (
    <div className='flex items-center justify-between text-md py-4 mb-5 border-b border-b-gray-400'>
      <img onClick={()=>{navigate('/')}} className='w-50  cursor-pointer' src={logo2}  alt='logo'/>
      <ul className='hidden md:flex items-start gap-5 font-medium text-xl'>
        <li>
          <NavLink  to='/'end >
          {({isActive})=>(
            <>
              <span>HOME</span>

              {isActive && (
                <div className='h-1 w-full bg-[#5e6eff] mt-1'>
                </div>
              )}
            </>
          )}
          </NavLink>
        </li>
        <li>
          <NavLink to='/doctors'>
            {({isActive})=>(
              <>
                <span>ALL DOCTORS</span>

                {isActive && (
                  <div className='h-1 w-full bg-[#5e6eff] mt-1'>
                </div>
                )}
              </>
            )}
          </NavLink>
        </li>
        <li>
          <NavLink to='/about'>
            {({isActive})=>(
              <>
                <span>ABOUT</span>

                {isActive && (
                  <div className='h-1 w-full bg-[#5e6eff] mt-1'>
                </div>
                )}
              </>
            )}
          </NavLink>
        </li>
        <li>
          <NavLink to='/contact'>
            {({isActive})=>(
              <>
                <span>CONTACT</span>

                {isActive && (
                  <div className='h-1 w-full bg-[#5e6eff] mt-1'>
                </div>
                )}
              </>
            )}
          </NavLink>
        </li>
      </ul>
      <div>
        {token && userData
        ?  /* if token is true then show profile */
         <div className='flex items-center gap-2 cursor-pointer group relative'>
            <img className='w-10 rounded-full' src={userData.image} alt='profile pic' />
            <img src={assets.dropdown_icon} alt="" />
            <div className='absolute top-0 right-0 pt-19 hidden group-hover:block'>
                <div className='bg-gray-100 min-w-48 rounded flex flex-col gap-4 p-4'>
                  <p onClick={()=>navigate('my-profile')} className='hover:text-black cursor-pointer'>My Profile</p>
                  <p onClick={()=>navigate('my-appointments')} className='hover:text-black cursor-pointer'>My Appointments</p>
                  <p onClick={logout} className='hover:text-black cursor-pointer'>Logout</p> 
                </div>
            </div>
          </div>
        :  /* if FALSe then create account */
         <button onClick={function(){
            navigate('/login')
            }} className=' bg-[#5e6eff] text-white px-5 py-2 rounded-full'>
            Create Account
          </button>
        }
      </div>
      
    </div>
  )
}

export default Navbar
