import { useContext, useEffect } from "react"
import { AdminContext } from "../../context/admin/AdminContext" 

const DoctorsList = () => {

    const { doctors, Atoken, getAllDoctors, changeAvailability } = useContext(AdminContext)

    useEffect(()=>{
        if(Atoken){
            getAllDoctors()
        }
    },[Atoken])     // if there is token then only call getAllDoctors which will give all doctors list

    return (
      <div className='w-full grid grid-cols-5 gap-4 pt-5 gap-y-6 px-3 sm:px-0 mb-10'>
        {doctors && doctors.map((item)=>(
            <div key={item._id}  className='border border-blue-200 rounded-xl overflow-hidden cursor-pointer '>
                 <img className='bg-blue-50' src={`${item.image}`} alt="" />
                 <div className='p-4'>
                    <p className='text-gray-900 text-lg font-medium'>{`${item.name}`}</p>
                    <p className='text-gray-800 text-md'>{`${item.speciality}`}</p>
                    <div className='flex items-center gap-2 text-md text-center text-gray-500'>
                       <input onChange={()=>changeAvailability(item._id)} type="checkbox" checked={item.available}/>
                       <p>Available</p>
                    </div>
                </div>
            </div>
        ))}
      </div>
    
    )
}

export default DoctorsList