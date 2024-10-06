import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const verification = false;
  const [cpassword, setCPassword] = useState("");
  const [pname, setpname] = useState("");
  const [address, setAddress] = useState("");
  const [number, setNumber] = useState(0);
  const [license, setLicense] = useState(0);
  const [errormsg, setErrormsg] = useState("");
  const navigate = useNavigate();

  async function registerUser(event) {
    event.preventDefault();

    if (email.length === 0) {
      setErrormsg("Email can't be empty");
      return;
    } else if (pname.length === 0) {
      setErrormsg("Name can't be empty");
      return;
    } else if (password !== cpassword) {
      setErrormsg("Passwords don't match");
      return;
    } else {
      setErrormsg("");
    }

    const response = await fetch(
      `${process.env.REACT_APP_API_URL}/pharmacies/register`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          pname,
          email,
          password,
          address,
          number,
          license,
          verification,
        }),
      }
    );

    const data = await response.json();

    if (data.status === "ok") {
      navigate("/pharmacy-login");
    }
  }

  return (
    <>
    

<div className="bg-white fixed w-full h-20 flex shadow-md z-10 " >
  <div className="container m-auto flex justify-between items-center px-4">
    <div className="font-bold text-2xl text-gray-900">LOGO</div>
    <Link className="text-blue-600 font-medium hover:text-blue-800" to="/">
      Home
    </Link>
  </div>
</div>

<div className="flex items-center justify-center min-h-screen bg-gray-50">
  <div className="bg-white shadow-lg rounded-lg p-8 max-w-lg w-full mt-20">
    {errormsg && <div className="text-red-500 mb-4">{errormsg}</div>}
    <h2 className="text-2xl font-semibold text-center mb-6 text-gray-700">Create an Account</h2>
    
    <input
      type="text"
      placeholder="Pharmacy Name"
      onChange={(e) => setpname(e.target.value)}
      className="border border-gray-300 rounded-lg h-12 px-4 text-lg mb-4 w-full focus:border-blue-500 focus:outline-none"
      required
    />
    
    <input
      type="email"
      placeholder="Email"
      onChange={(e) => setEmail(e.target.value)}
      className="border border-gray-300 rounded-lg h-12 px-4 text-lg mb-4 w-full focus:border-blue-500 focus:outline-none"
      required
    />
    
    <input
      type="text"
      placeholder="Address"
      onChange={(e) => setAddress(e.target.value)}
      className="border border-gray-300 rounded-lg h-12 px-4 text-lg mb-4 w-full focus:border-blue-500 focus:outline-none"
      required
    />
    
    <input
      type="number"
      placeholder="Phone Number"
      onChange={(e) => setNumber(e.target.value)}
      className="border border-gray-300 rounded-lg h-12 px-4 text-lg mb-4 w-full focus:border-blue-500 focus:outline-none"
      required
    />
    
    <input
      type="number"
      placeholder="Pharmacy License Number"
      onChange={(e) => setLicense(e.target.value)}
      className="border border-gray-300 rounded-lg h-12 px-4 text-lg mb-4 w-full focus:border-blue-500 focus:outline-none"
      required
    />
    
    <input
      type="password"
      placeholder="Password"
      onChange={(e) => setPassword(e.target.value)}
      className="border border-gray-300 rounded-lg h-12 px-4 text-lg mb-4 w-full focus:border-blue-500 focus:outline-none"
      required
    />
    
    <input
      type="password"
      placeholder="Confirm Password"
      onChange={(e) => setCPassword(e.target.value)}
      className="border border-gray-300 rounded-lg h-12 px-4 text-lg mb-4 w-full focus:border-blue-500 focus:outline-none"
      required
    />
    
    <div className="flex items-center mb-4">
      <input type="checkbox" className="h-5 w-5 text-blue-600 rounded border-gray-300 focus:ring-2 focus:ring-blue-500" />
      <p className="ml-2 text-gray-600 text-sm">I agree to the <span className="text-blue-600 cursor-pointer">Terms of Service</span> and <span className="text-blue-600 cursor-pointer">Privacy Policy</span>.</p>
    </div>
    
    <button
      onClick={registerUser}
      type="submit"
      className="bg-blue-600 text-white rounded-lg text-lg h-12 w-full hover:bg-blue-700 transition-colors"
    >
      Sign Up
    </button>
    
    <div className="text-center mt-6 text-gray-600">
      Already have an account?{" "}
      <Link className="text-blue-600 hover:text-blue-800" to="/pharmacy-login">
        Sign in
      </Link>
    </div>
  </div>
</div>

    </>
  );
}

export default Signup;
