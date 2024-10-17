import React from 'react'
import axios from "axios"
import { useState } from 'react'
import toast from 'react-hot-toast'
import { useNavigate } from "react-router-dom";
function Adminregister() {

  const navigate = useNavigate();
    const [name ,setName] = useState("")
    const [password,setPassword] = useState("")
    const [email ,setEmail] = useState("")
    const handleRegister = async() => {
      try{
       const res = await axios
        .post(`${process.env.REACT_APP_API_URL}/admin/register`, {
          name,
          email,
          password,
        })

        if(res){toast.success("Admin register successfully!")
          navigate("/admin-login");
        }
        else{
          toast.error("Somthing went wrong!")
        }
      }
      catch(err){
        console.log(err);
      }
       
          
      };
  return (
    <div>
         <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">
                 Admin  Register
                </h1>
                <div className="space-y-6 max-w-md mx-auto">
  <input
    type="text"
    placeholder="Name"
    value={name}
    onChange={(e) => setName(e.target.value)}
    className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm text-gray-900 focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition duration-300 ease-in-out"
  />

  <input
    type="email"
    placeholder="Email"
    value={email}
    onChange={(e) => setEmail(e.target.value)}
    className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm text-gray-900 focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition duration-300 ease-in-out"
  />

  <input
    type="password"
    placeholder="Password"
    value={password}
    onChange={(e) => setPassword(e.target.value)}
    className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm text-gray-900 focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition duration-300 ease-in-out"
  />

  <button
    onClick={handleRegister}
    className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 transition duration-300 ease-in-out"
  >
    Register
  </button>
</div>

    </div>
  )
}

export default Adminregister