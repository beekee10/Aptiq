import React, { useContext, useEffect, useState } from 'react'
import { DoctorContext } from '../../context/doctor/DoctorContext'
import { AppContext } from '../../context/app/AppContext'
import axios from 'axios'
import { toast } from 'react-toastify'

const DoctorProfile = () => {

    const {
        dToken,
        profileData,
        setProfileData,
        getProfileData,
        backendUrl
    } = useContext(DoctorContext)

    const { currency } = useContext(AppContext)

    const [isEdit, setIsEdit] = useState(false)

    useEffect(() => {
        if (dToken) {
            getProfileData()
        }
    }, [dToken])

    const updateProfile = async () => {
        try {
            const updateData = {
                address: profileData.address,
                fees: profileData.fees,
                available: profileData.available
            }

            const { data } = await axios.post(
                backendUrl + '/api/doctor/update-profile',
                updateData,
                { headers: { dtoken: dToken } }
            )

            if (data.success) {
                toast.success(data.message)
                setIsEdit(false)
                getProfileData()
            } else {
                toast.error(data.message)
            }

        } catch (error) {
            toast.error(error.message)
            console.log(error)
        }
    }

    return profileData && (
        <div className='flex flex-col gap-4 m-5'>

            {/* Image */}
            <img
                className='bg-primary/80 w-full sm:max-w-64 rounded-lg'
                src={profileData.image}
                alt=""
            />

            {/* Profile Card */}
            <div className='flex-1 border border-stone-100 rounded-lg p-8 py-7 bg-white'>

                {/* Name */}
                <p className='text-3xl font-medium text-gray-700'>
                    {profileData.name}
                </p>

                {/* Degree + Specialty */}
                <div className='flex items-center gap-2 mt-1 text-gray-600'>
                    <p>{profileData.degree} - {profileData.speciality}</p>
                    <button className='py-0.5 px-2 border text-xs rounded-full'>
                        {profileData.experience}
                    </button>
                </div>

                {/* About */}
                <div>
                    <p className='text-sm font-medium text-neutral-800 mt-3'>
                        About:
                    </p>
                    <p className='text-sm text-gray-600 mt-1'>
                        {profileData.about}
                    </p>
                </div>

                {/* Fees */}
                <p className='text-gray-600 font-medium mt-4'>
                    Appointment fee:{' '}
                    <span className='text-gray-800'>
                        {currency}{' '}
                        {isEdit ? (
                            <input
                                type="number"
                                disabled={!isEdit}
                                value={profileData.fees}
                                onChange={(e) =>
                                    setProfileData(prev => ({
                                        ...prev,
                                        fees: e.target.value
                                    }))
                                }
                            />
                        ) : (
                            profileData.fees
                        )}
                    </span>
                </p>

                {/* Address */}
                <div className='flex gap-2 py-2'>
                    <p>Address:</p>
                    <p className='text-sm'>

                        {isEdit ? (
                            <input
                                type="text"
                                disabled={!isEdit}
                                value={profileData.address.line1}
                                onChange={(e) =>
                                    setProfileData(prev => ({
                                        ...prev,
                                        address: {
                                            ...prev.address,
                                            line1: e.target.value
                                        }
                                    }))
                                }
                            />
                        ) : (
                            profileData.address.line1
                        )}

                        <br />

                        {isEdit ? (
                            <input
                                type="text"
                                disabled={!isEdit}
                                value={profileData.address.line2}
                                onChange={(e) =>
                                    setProfileData(prev => ({
                                        ...prev,
                                        address: {
                                            ...prev.address,
                                            line2: e.target.value
                                        }
                                    }))
                                }
                            />
                        ) : (
                            profileData.address.line2
                        )}

                    </p>
                </div>

                {/* Availability */}
                <div className='flex gap-2 pt-2 items-center'>
                    <input
                        type="checkbox"
                        checked={profileData.available}
                        disabled={!isEdit}
                        onChange={(e) =>
                            setProfileData(prev => ({
                                ...prev,
                                available: e.target.checked
                            }))
                        }
                    />
                    <label>Available</label>
                </div>

                {/* Button */}
                {isEdit ? (
                    <button
                        onClick={updateProfile}
                        className='px-4 py-1 border border-primary text-sm rounded-full mt-5 hover:bg-primary hover:text-blue-800 transition-all'
                    >
                        Save
                    </button>
                ) : (
                    <button
                        onClick={() => setIsEdit(true)}
                        className='px-4 py-1 border border-primary text-sm rounded-full mt-5 hover:bg-primary hover:text-blue-700 transition-all'
                    >
                        Edit
                    </button>
                )}

            </div>
        </div>
    )
}

export default DoctorProfile
