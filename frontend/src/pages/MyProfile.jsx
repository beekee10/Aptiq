import React, { useContext, useState } from 'react'
import { AppContext } from '../context/AppContext.jsx'
import {assets} from '../assets/assets.js'
import axios from 'axios'
import { toast } from 'react-toastify'

const MyProfile = () => {

  const { userData, setUserData, token, loadUserProfileData, backendUrl } = useContext(AppContext)
 
  const [isEdit, setIsEdit] = useState(false)
  const [image,setImage] = useState(false)

  const updateUserProfileData = async () => {

    try{

      const formData = new FormData()

      formData.append('name',userData.name)
      formData.append('phone',userData.phone)
      formData.append('address',JSON.stringify(userData.address))
      formData.append('gender',userData.gender)
      formData.append('dob',userData.dob)

      image && formData.append('image',image)

      const {data} = await axios.post( backendUrl + '/api/user/update-profile', formData, {headers : {token}} )

      if(data.success){
        toast.success(data.message)
        await loadUserProfileData()
        setIsEdit(false)       
        setImage(false)             
      }
      else{
        toast.error(data.message)
      }


    }catch(error){
      console.log(error)
      toast.error(error.message)
    }
  }

  if (!userData) {
    return (
      <div className="max-w-lg text-sm text-neutral-500">
        {token ? 'Loading profile…' : 'Please log in to view your profile.'}
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-100 py-10 mb-80">

      <div className="max-w-3xl mx-auto bg-white p-8 rounded-lg shadow">

        {/* Profile Image + Name */}
        <div className="flex flex-col items-center">
          
          {
            isEdit
            ? <label htmlFor="image">
              <div className='inline-block relative cursor-pointer'>
                <img key={image ? image.name : userData.image} className='w-36 rounded opacity-75' src={image ? URL.createObjectURL(image):userData.image} />
                <img className='w-10 absolute bottom-12 right-12' src={image ? '' : assets.upload_icon} alt=''/>
              </div>
              <input onChange={(e)=>setImage(e.target.files[0])} type="file" id='image' hidden />
            </label>
            : <img className='w-36 rounded' src={userData.image} alt='' />
          }

          {
            isEdit ? (
              <input
                className="bg-gray-50 text-2xl font-medium mt-3 text-center border p-2 rounded"
                type="text"
                value={userData.name}
                onChange={e => setUserData(prev => ({ ...prev, name: e.target.value }))}
              />
            ) : (
              <p className="text-2xl font-semibold mt-3">{userData.name}</p>
            )
          }
        </div>

        {/* Contact Information */}
        <div className="mt-10">
          <h3 className="text-lg font-semibold border-b pb-2">
            Contact Information
          </h3>

          <div className="mt-4 space-y-4 text-neutral-700">

            <div>
              <p className="text-sm text-gray-500">Email</p>
              <p className="text-blue-500">{userData.email}</p>
            </div>

            <div>
              <p className="text-sm text-gray-500">Phone</p>
              {
                isEdit ? (
                  <input
                    className="w-full border p-2 rounded mt-1 bg-gray-100"
                    type="text"
                    value={userData.phone}
                    onChange={e => setUserData(prev => ({ ...prev, phone: e.target.value }))}
                  />
                ) : (
                  <p className="text-blue-400">{userData.phone}</p>
                )
              }
            </div>

            <div>
              <p className="text-sm text-gray-500">Address</p>
              {
                isEdit ? (
                  <p>
                    <input
                      className="w-full border p-2 rounded mt-1 bg-gray-50"
                      value={userData.address.line1}
                      onChange={(e) => setUserData(prev => ({ ...prev, address: { ...prev.address, line1: e.target.value } }))}
                      type="text"
                    />
                    <br />
                    <input
                      className="w-full border p-2 rounded mt-1 bg-gray-50"
                      value={userData.address.line2}
                      onChange={(e) => setUserData(prev => ({ ...prev, address: { ...prev.address, line2: e.target.value } }))}
                      type="text"
                    />
                  </p>
                ) : (
                  <p className="text-gray-500">
                    {userData.address.line1}
                    <br />
                    {userData.address.line2}
                  </p>
                )
              }
            </div>

          </div>
        </div>

        {/* Basic Information */}
        <div className="mt-10">
          <h3 className="text-lg font-semibold border-b pb-2">
            Basic Information
          </h3>

          <div className="mt-4 space-y-4 text-neutral-700">

            <div>
              <p className="text-sm text-gray-500">Gender</p>
              {
                isEdit ? (
                  <select
                    className="w-full border p-2 rounded mt-1 bg-gray-100"
                    value={userData.gender}
                    onChange={(e) => setUserData(prev => ({ ...prev, gender: e.target.value }))}
                  >
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                  </select>
                ) : (
                  <p className="text-gray-400">{userData.gender}</p>
                )
              }
            </div>

            <div>
              <p className="text-sm text-gray-500">Birthday</p>
              {
                isEdit ? (
                  <input
                    className="w-full border p-2 rounded mt-1 bg-gray-100"
                    type="date"
                    value={userData.dob}
                    onChange={(e) => setUserData(prev => ({ ...prev, dob: e.target.value }))}
                  />
                ) : (
                  <p className="text-gray-400">{userData.dob}</p>
                )
              }
            </div>

          </div>
        </div>

        {/* Buttons */}
        <div className="flex justify-end gap-4 mt-8">
          {
            isEdit ? (
              <button 
                className="px-4 py-2 bg-indigo-600 text-white rounded"
                onClick={updateUserProfileData}
              >
                Save information
              </button>
            ) : (
              <button
                className="px-4 py-2 border border-indigo-600 text-indigo-600 rounded"
                onClick={() => setIsEdit(true)}
              >
                Edit
              </button>
            )
          }
        </div>

      </div>
    </div>
  )
}

export default MyProfile