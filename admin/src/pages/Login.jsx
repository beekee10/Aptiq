import React, { useContext } from 'react'
import { AdminContext } from '../context/admin/AdminContext';
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';
import { DoctorContext } from '../context/doctor/DoctorContext';
import { useNavigate } from 'react-router-dom';

const Login = () => {

    const [role, setRole] = React.useState("admin");
    const [email, setEmail] = React.useState("");
    const [password, setPassword] = React.useState("");

    const {setAtoken ,backendUrl} = useContext(AdminContext)
    const {setDtoken} = useContext(DoctorContext)

    const navigate = useNavigate()

    const handleSubmit = async (event) => {
        event.preventDefault();

        // we will call API
       try{

            if(role === 'admin'){

                const {data} = await axios.post(backendUrl + '/api/admin/login', {email,password})  // we are sending {login and password} to the login page in the backend server.and we will recieve the response as data.
                
                if(data.success){   // this means our login info was correct and we can have token with help of data.token
                    localStorage.setItem("Atoken", data.token)
                    setAtoken(data.token)

                    navigate('/admin-dashboard')
                }
                else{  
                    // if logn info is Incoreect we will show it with help of 'toastify'
                    toast.error(data.message);

                }
            }
            else{

                const {data} = await axios.post(backendUrl + '/api/doctor/login', {email,password})
                
                if(data.success){   
                    localStorage.setItem("dToken", data.token)
                    setDtoken(data.token)

                    navigate('/doctor-dashboard')
                }
                else{
                    toast.error(data.message)
                }
            }
        
       }
       catch(error){
        console.log(error)
       }  
    }

    return (
        <form onSubmit={handleSubmit}
            className="flex flex-col gap-4 m-auto items-start p-8 py-12 w-80 sm:w-88 text-gray-500 rounded-lg shadow-xl border border-gray-200 bg-white"
        >

            {/* Heading */}
            <p className="text-2xl font-medium m-auto">
                <span className="text-indigo-500">
                    {role === "admin" ? "Admin" : "Doctor"}
                </span> Login
            </p>

            {/* Email */}
            <div className="w-full">
                <p>Email</p>
                <input
                    onChange={(e) => setEmail(e.target.value)}
                    value={email}
                    placeholder="type email"
                    className="border border-gray-200 rounded w-full p-2 mt-1 outline-indigo-500"
                    type="email"
                    required
                />
            </div>

            {/* Password */}
            <div className="w-full">
                <p>Password</p>
                <input
                    onChange={(e) => setPassword(e.target.value)}
                    value={password}
                    placeholder="type password"
                    className="border border-gray-200 rounded w-full p-2 mt-1 outline-indigo-500"
                    type="password"
                    required
                />
            </div>

            

            {/* Submit Button */}
            <button
                type="submit"
                className="bg-indigo-500 hover:bg-indigo-600 transition-all text-white w-full py-2 rounded-md cursor-pointer"
            >
                Login as {role === "admin" ? "Admin" : "Doctor"}
            </button>

            {/* Switch Role Link */}
            {role === "admin" ? (
                <p>
                    Doctor Login?{" "}
                    <span
                        onClick={() => setRole("doctor")}
                        className="text-indigo-500 cursor-pointer"
                    >
                        click here
                    </span>
                </p>
            ) : (
                <p>
                    Admin Login?{" "}
                    <span
                        onClick={() => setRole("admin")}
                        className="text-indigo-500 cursor-pointer"
                    >
                        click here
                    </span>
                </p>
            )}

        </form>
    );
}

export default Login;
