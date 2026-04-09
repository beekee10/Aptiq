import { useState } from "react";
import { AdminContext } from "./AdminContext";
import axios from "axios";
import { toast } from "react-toastify";

const AdminContextProvider = (props) => {

    const [Atoken, setAtoken] = useState(localStorage.getItem("Atoken")? localStorage.getItem("Atoken") : '')
    const backendUrl = import.meta.env.VITE_BACKEND_URL
    //console.log(localStorage.getItem("Atoken"))

    const [doctors,setDoctors] = useState([])   // this array we will store all the doctors

    
    // this will give list of all the doctors
    const getAllDoctors = async () => {
      try{

        const {data} = await axios.post(backendUrl+'/api/admin/all-doctors',{},{headers : {Authorization: `Bearer ${Atoken}`}})

        if(data.success){
          setDoctors(data.doctors)
          //console.log(data.doctors)
        }
        else{
          toast.error(data.message)
        }

      }catch(error){
          toast.error(error.message)
      }
    }


    // this is used to change availabilityof doctorss
    const changeAvailability = async (docId) => {
      try{
        const {data} = await axios.post(backendUrl + '/api/admin/change-availability',{docId},{headers: {Authorization : `Bearer ${Atoken}` }})

        if(data.success){
          toast.success(data.message)
          getAllDoctors()
        }
        else{
          toast.error(data.message)
        }

      }catch(error){
        toast.error(error.message)
      }

    }



  const value = {
    Atoken,setAtoken,
    backendUrl,
    doctors , getAllDoctors,
    changeAvailability
  };

  return (
    <AdminContext.Provider value={value}>
      {props.children}
    </AdminContext.Provider>
  );
};

export default AdminContextProvider;