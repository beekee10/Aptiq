import React, { useContext } from 'react'
import Login from './pages/Login'
import { ToastContainer } from 'react-toastify'
import { AdminContext } from './context/admin/AdminContext'
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'
import { Routes, Route } from 'react-router-dom'
import Dashboard from './pages/admin/Dashboard'
import AddDoctor from './pages/admin/AddDoctor'
import Appointments from './pages/admin/Appointments'
import DoctorsList from './pages/admin/DoctorsList'

const App = () => {
  const { Atoken } = useContext(AdminContext)

  return Atoken ? (
    <div>
      <ToastContainer />
      <Navbar />
      {/* Main Layout */}
      <div className="flex">
        <Sidebar />

        {/* Page Content */}
        <div className="flex-1 p-6">
          <Routes>
            <Route path='/' element={<></>} />
            <Route path='/admin-dashboard' element={<Dashboard />} />
            <Route path='/add-doctor' element={<AddDoctor />} />
            <Route path='/all-appointments' element={<Appointments />} />
            <Route path='/doctor-list' element={<DoctorsList />} />
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
