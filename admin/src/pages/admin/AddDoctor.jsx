import React, { useContext, useState } from "react";
import { assets } from "../../assets/assets";
import { AdminContext } from "../../context/admin/AdminContext";
import { toast } from "react-toastify";
import axios from "axios";

const AddDoctor = () => {
 
    // we will use state variable to store the data 
    const [docImg,setDocImg] = useState(false)
    const [name,setName] = useState('')
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')
    const [experience,setExperience] = useState('1 Year')       // agar option wala field hai to waha hm pahla option dalte hai 
    const [fees,setFees] = useState('')
    const [about,setAbout] = useState('')
    const [speciality,setSpeciality] = useState('General physician')
    const [degree,setDegree] = useState('')
    const [address1,setAddress1] = useState('')
    const [address2,setAddress2] = useState('')


    const { backendUrl,Atoken } = useContext(AdminContext)  // to make API call we need it

    const onSubmitHandler = async (event) => {
        event.preventDefault();

        try{

            if(!docImg){
                return toast.error("Image not selected")
            }

            // we will make a form to add all detais in that form data
            const formData =  new FormData();
            formData.append('image',docImg)
            formData.append('name',name)
            formData.append('email',email)
            formData.append('password',password)
            formData.append('experience',experience)
            formData.append('fees',Number(fees))
            formData.append('about',about)
            formData.append('speciality',speciality)
            formData.append('degree',degree)
            formData.append('address',JSON.stringify({line1:address1,line2:address2}))

            // console log formdata
            formData.forEach((value,key)=>{
                console.log(`${key} : ${value}`)
            })
            
            const {data} = await axios.post(backendUrl + '/api/admin/add-doctor',formData,{headers : {Authorization: `Bearer ${Atoken}`}})

            if(data.success){
                toast.success(data.message)

                // jab doctor add ho gaya to form ko clear kardo, taki new doctor add ho sake
                setName('')
                setDocImg(false)
                setEmail('')
                setPassword('')
                setDegree('')
                setFees('')
                setAddress1('')
                setAddress2('')
                setAbout('')

            }
            else{
                
                toast.error(data.message)
            }

        }catch(error){
            console.log(error)
            toast.error("Something went wrong")
        }
    }

  return (
    <div className="w-full min-h-screen bg-gray-50 flex justify-center items-start p-4 sm:p-6">
      
      <div className="w-full max-w-5xl bg-white rounded-2xl shadow-lg p-6 sm:p-8">

        {/* Title */}
        <h2 className="text-2xl font-semibold text-gray-800 mb-6">
          Add Doctor
        </h2>

        <form onSubmit={onSubmitHandler} className="space-y-6">

          {/* Image Upload */}
        <div className="flex flex-col sm:flex-row sm:items-center gap-4">
            <div className="w-24 h-24 rounded-full border border-gray-300 overflow-hidden flex items-center justify-center bg-gray-100">
                <label htmlFor="doc-img">
                <img
                src={docImg ? URL.createObjectURL(docImg) : assets.upload_area}
                alt="preview"
                className="w-full h-full object-cover"
                />
                </label>
                <input
                onChange={(e) => setDocImg(e.target.files[0])}
                type="file"
                id="doc-img"
                hidden
                />
            </div>

            <label
            htmlFor="doc-img"
            className="cursor-pointer bg-indigo-500 hover:bg-indigo-600 text-white px-5 py-2 rounded-lg transition w-full sm:w-auto text-center"
            >
            Upload Image
            </label>
        </div>

          {/* Form Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">

            {/* Name */}
            <div>
              <p className="block text-sm font-medium text-gray-700 mb-1">
                Doctor Name
              </p>
              <input
                type="text"
                name="name"
                onChange={(e)=>setName(e.target.value)} value={name}
                placeholder="Enter doctor name" required
                className="w-full border border-gray-300 px-3 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
              />
            </div>

            {/* Email */}
            <div>
              <p   className="block text-sm font-medium text-gray-700 mb-1">
                 Doctor Email
              </p>
              <input
                type="email"
                name="email"
                onChange={(e)=>setEmail(e.target.value)} value={email}
                placeholder="Enter email address" required
                className="w-full border border-gray-300 px-3 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
              />
            </div>

            {/* Password */}
            <div>
              <p className="block text-sm font-medium text-gray-700 mb-1">
                Doctor Password
              </p>
              <input
                type="password"
                name="password"
                onChange={(e)=>setPassword(e.target.value)} value={password}
                placeholder="Enter password" required
                className="w-full border border-gray-300 px-3 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
              />
            </div>

            {/* Experience */}
            <div>
              <p className="block text-sm font-medium text-gray-700 mb-1">
                Doctor Experience
              </p>
              <select onChange={(e)=>setExperience(e.target.value)}  value={experience}  className="w-full border border-gray-300 px-3 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400">
                <option value="1 Year">1 Year</option>
                <option value="2 Year">2 Year</option>
                <option value="3 Year">3 Year</option>
                <option value="4 Year">4 Year</option>
                <option value="5 Year">5 Year</option>
                <option value="6 Year">6 Year</option>    
                <option value="7 Year">7 Year</option>
                <option value="8 Year">8 Year</option>
                <option value="9 Year">9 Year</option>
                <option value="10 Year">10 Year</option>            
              </select>
            </div>

            {/* Fees */}
            <div>
              <p className="block text-sm font-medium text-gray-700 mb-1">
                Fees
              </p>
              <input
                type="number"
                name="fees"
                onChange={(e)=>setFees(e.target.value)} value={fees}
                placeholder=" fees" required
                className="w-full border border-gray-300 px-3 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
              />
            </div>

            {/* Speciality */}
            <div>
              <p className="block text-sm font-medium text-gray-700 mb-1">
                Speciality
              </p>
              <select  onChange={(e)=>setSpeciality(e.target.value)}  value={speciality}  className="w-full border border-gray-300 px-3 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400">
                <option value="General physician">General physician</option>
                <option value="Gynecologist">Gynecologist</option>
                <option value="Dermatologist">Dermatologist</option>
                <option value="Pediatricians">Pediatricians</option>
                <option value="Neurologist">Neurologist</option>
                <option value="Gastroenterologist">Gastroenterologist</option>
              </select>
            </div>

            {/* Degree */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Degree
              </label>
              <input
                type="text"
                name="degree"
                onChange={(e)=>setDegree(e.target.value)} value={degree}
                placeholder="e.g. MBBS, MD" required
                className="w-full border border-gray-300 px-3 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
              />
            </div>

            {/* Address */}
            <div className="md:col-span-2">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Address
              </label>
              <input
                type="text"
                name="address 1"
                onChange={(e)=>setAddress1(e.target.value)} value={address1}
                placeholder="Enter Line 1"
                className="w-full border border-gray-300 px-3 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
              />
              <input
                type="text"
                name="address 2"
                onChange={(e)=>setAddress2(e.target.value)} value={address2}
                placeholder="Enter Line 2"
                className="w-full border border-gray-300 px-3 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
              />
            </div>

            {/* About */}
            <div className="md:col-span-2">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                About Doctor
              </label>
              <textarea
                name="about"
                rows="4"
                onChange={(e)=>setAbout(e.target.value)} value={about}
                placeholder="Write about doctor..."
                className="w-full border border-gray-300 px-3 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
              ></textarea>
            </div>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            
            className="w-full sm:w-auto bg-indigo-500 hover:bg-indigo-600 text-white px-8 py-2 rounded-lg shadow-md transition"
          >
            Add Doctor
          </button>

        </form>
      </div>
    </div>
  );
};

export default AddDoctor;