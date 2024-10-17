import React, { useState } from 'react';
import toast from 'react-hot-toast'
import { useNavigate } from 'react-router-dom';
import axios from "axios"
const SignIn = () => {

    const navigate = useNavigate();


    const [email ,setEmail] = useState("")
    const [password,setPassword] = useState("")


  const handleSubmit = async(e) => {
        e.preventDefault();
        const res = await axios.post(
            `${process.env.REACT_APP_API_URL}/user/login`,
           {
               
                email,
                password,
              },
            
          );


          if(res){toast.success("user created successfully!");
            navigate("/")
          }
          else{
            toast.error("Something went wrong!")
          }
}

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
        <h2 className="text-2xl font-bold text-center mb-8">Sign In</h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              name="email"
              value={email}
              onChange={(e)=>setEmail(e.target.value)}
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
              placeholder="you@example.com"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Password
            </label>
            <input
              type="password"
              name="password"
              value={password}
              onChange={(e)=>setPassword(e.target.value)}
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
              placeholder="••••••••"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md shadow-lg hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          >
            Sign In
          </button>
          <button
            type="submit"
            className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md shadow-lg hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            onClick={()=>navigate("/user/signup")}
          >
            Sign up
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignIn;
