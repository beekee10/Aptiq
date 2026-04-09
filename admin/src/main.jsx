import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import AppContextProvider from './context/app/AppContextProvider'
import AdminContextProvider from './context/admin/AdminContextProvider.jsx'
import DoctorContextProvider from './context/doctor/DoctorContextProvider.jsx'

createRoot(document.getElementById('root')).render(
 <BrowserRouter>
    <AdminContextProvider>
      <DoctorContextProvider>
        <AppContextProvider>
          <App/>
        </AppContextProvider>
      </DoctorContextProvider>
    </AdminContextProvider>
 </BrowserRouter>
)
