import React, { useContext } from 'react'
import Login from './pages/Login'
import { ToastContainer } from 'react-toastify'
import { AdminContext } from './context/admin/AdminContext'
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'
import { Routes, Route } from 'react-router-dom'
import Dashboard from './pages/admin/Dashboard'
import AddDoctor from './pages/admin/AddDoctor'
import AllAppointments from './pages/admin/AllAppointments'
import DoctorsList from './pages/admin/DoctorsList'
import { DoctorContext } from './context/doctor/DoctorContext'
import DoctorDashboard from './pages/doctor/DoctorDashboard'
import DoctorAppointment from './pages/doctor/DoctorAppointments'
import DoctorProfile from './pages/doctor/DoctorProfile'

const App = () => {
  const { Atoken } = useContext(AdminContext)
  const {dToken} = useContext(DoctorContext)

  return Atoken || dToken ? (
    <div>
      <ToastContainer />
      <Navbar />
      {/* Main Layout */}
      <div className="flex">
        <Sidebar />

        <div className="flex-1 p-6">
          <Routes>
            {/* Admin Route */}
            <Route path='/' element={<></>} />
            <Route path='/admin-dashboard' element={<Dashboard />} />
            <Route path='/add-doctor' element={<AddDoctor />} />
            <Route path='/all-appointments' element={<AllAppointments />} />
            <Route path='/doctor-list' element={<DoctorsList />} />
            
            {/* Doctor Route */}
            <Route path='/doctor-dashboard' element={<DoctorDashboard/>} />
            <Route path='/doctor-appointments' element={<DoctorAppointment/>} />
            <Route path='/doctor-profile' element={<DoctorProfile/>} />
          </Routes>
        </div>
      </div>  
    </div>
  ) : (
    <div>
      <Login />
      <ToastContainer />
    </div>
  )
}

export default App
