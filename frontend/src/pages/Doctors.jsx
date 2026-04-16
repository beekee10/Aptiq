import React, { useContext, useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { AppContext } from '../context/AppContext';


const Doctor = () => {
  const {doctors}=useContext(AppContext)
  const {speciality}=useParams();

  const [filterDoc, setFilterDoc] = useState([])

  const applyFilter=()=>{
    if(speciality){
      setFilterDoc(doctors.filter(doc=>doc.speciality === speciality))
    }
    else {
  setFilterDoc(doctors)
}

  }

  useEffect(() => {
  applyFilter();
}, [doctors, speciality])

  
  const navigate=useNavigate()
  

  return (
    <div className='flex flex-row'>
      <div>
      <p className='text-md'>Browse through the doctors specialist.</p>
      <div className='flex flex-col  text-md mt-8 mr-20'>
  <button className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-600 rounded transition-all cursor-pointer ${speciality === "General physician" ? "bg-gray-500 text-white" : "bg-blue-200"}`} onClick={() => speciality === "General physician" ? navigate(`/doctors`) : navigate(`/doctors/General%20physician`)}>General physician</button><br />

  <button className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-900 rounded transition-all cursor-pointer ${speciality === "Gynecologist" ? "bg-gray-500 text-white" : "bg-blue-200"}`} onClick={() => speciality === "Gynecologist" ? navigate(`/doctors`) : navigate(`/doctors/Gynecologist`)}>Gynecologist</button><br />

  <button className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-900 rounded transition-all cursor-pointer ${speciality === "Dermatologist" ? "bg-gray-500 text-white" : "bg-blue-200"}`} onClick={() => speciality === "Dermatologist" ? navigate(`/doctors`) : navigate(`/doctors/Dermatologist`)}>Dermatologist</button><br />

  <button className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-900 rounded transition-all cursor-pointer ${speciality === "Pediatricians" ? "bg-gray-500 text-white" : "bg-blue-200"}`} onClick={() => speciality === "Pediatricians" ? navigate(`/doctors`) : navigate(`/doctors/Pediatricians`)}>Pediatricians</button><br />

  <button className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-900 rounded transition-all cursor-pointer ${speciality === "Neurologist" ? "bg-gray-500 text-white" : "bg-blue-200"}`} onClick={() => speciality === "Neurologist" ? navigate(`/doctors`) : navigate(`/doctors/Neurologist`)}>Neurologist</button><br />

  <button className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-900 rounded transition-all cursor-pointer ${speciality === "Gastroenterologist" ? "bg-gray-500 text-white" : "bg-blue-200"}`} onClick={() => speciality === "Gastroenterologist" ? navigate(`/doctors`) : navigate(`/doctors/Gastroenterologist`)}>Gastroenterologist</button><br />
</div>

  </div>
      <div className='w-full grid grid-cols-5 gap-4 pt-5 gap-y-6 px-3 sm:px-0 mb-10'>
        {filterDoc.map((item)=>(
            <div key={item._id} onClick={()=>navigate(`/appointment/${item._id}`)} className='border border-blue-200 rounded-xl overflow-hidden cursor pointer hover:-translate-y-2.5 transition-all duration-400'>
                 <img className='bg-blue-50' src={`${item.image}`} alt="" />
                 <div className='p-4'>
                     <div className={'flex items-center gap-2 text-md text-center ${item.available ? text-green-500 : text-gray-500 } '}>
                      <p
                      className={`w-2 h-2 rounded-full ${
                      item.available ? 'bg-green-500' : 'bg-gray-500'
                      }`}
                      ></p>
                      <p>{item.available ? 'Available' : 'Not Available'} </p>
                </div>
                    <p className='text-gray-900 text-lg font-medium'>{`${item.name}`}</p>
                    <p className='text-gray-600 text-md'>{`${item.speciality}`}</p>
                </div>
            </div>
        ))}
      </div>
    </div>
  )
}

export default Doctor
