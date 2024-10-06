import React, { useState } from "react";
import axios from "axios";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
function MyApp() {

  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loggedIn, setLoggedIn] = useState(false);
  const handleLogin = async() => {
    try{
   const res =  axios
      .post(`http://localhost:${process.env.REACT_APP_PORT}/admin/login`, {
        email,
        password,
      })
      if(res.status === "ok"){
      toast.success("Admin logged successfully!");
      setLoggedIn(true);
      navigate("/ad");
      }
      else{
        toast.error("Login failed")
      }
    }
     
      catch(err){ console.log(err)};
  };

  return (
    
    
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
          <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-lg">
            {loggedIn ? (
              <h1 className="text-3xl font-bold text-center text-green-600">
                You are logged in!
              </h1>
            ) : (
              <>
               
    
                <h1 className="text-3xl font-bold text-center text-gray-800 my-6">
                  Admin 
                  Login
                </h1>
                <div className="space-y-4">
                  <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                  />
                  <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                  />
                  <button
                    onClick={()=>handleLogin()}
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                  >
                    Login
                  </button>
                  {/* <button
                    onClick={()=>navigate("/admin-register")}
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                  >
                    Register as admin
                  </button> */}
                </div>
              </>
            )}
          </div>
        </div>
    
    

    
  );
}

export default MyApp;
