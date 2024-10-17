import React, { useState } from "react";
import { toast } from "react-hot-toast";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
function Signin() {

  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function loginUser(event) {
    event.preventDefault();

    const response = await fetch(
      `${process.env.REACT_APP_API_URL}/pharmacies/login`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          password,
        }),
      }
    );

    const data = await response.json();
    if (data.user) {
      localStorage.setItem("token", data.user);
      setTimeout(() => {
        window.location.href = "/pd";
      }, 2000);
      toast.success("Login successful");
    } else {
      toast.error("Please check your username and password");
    }
  }

  return (
    <>
      {/* <div className="bg-white fixed w-full h-20 flex">
        <div className="container m-auto justify-between flex">
          <div className="font-bold text-xl">LOGO</div>
          <Link className=" text-blue-700" to="/">
            Home
          </Link>
        </div>
      </div>
      <div className="flex items-center place-content-center h-screen">
        <form onSubmit={loginUser} className="flex flex-col w-[30rem] gap-5">
          <input
            type="text"
            placeholder="Email"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            className="border-black border h-[4rem] text-xl p-5 placeholder:text-black focus:border-none"
          />
          <input
            type="password"
            placeholder="Password"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            className="border-black border h-[4rem] text-xl p-5 placeholder:text-black focus:border-none"
          />
          <div className="">
            Not a member?{" "}
            <Link
              className="cursor-pointer text-blue-700"
              to="/pharmacy-register"
            >
              Sign up
            </Link>
          </div>
          <button
            type="submit"
            className="bg-black text-white text-xl h-[4rem]"
          >
            Sign In
          </button>
        </form>
      </div> */}





<div className="bg-white fixed w-full h-20 flex shadow-md z-10">
  <div className="container m-auto flex justify-between items-center px-6">
    <div className="font-bold text-2xl text-gray-900">LOGO</div>
    <Link className="text-blue-600 font-medium hover:text-blue-800 transition-colors" to="/">
      Home
    </Link>
  </div>
</div>

<div className="flex items-center justify-center min-h-screen bg-gray-50 ">
  <form 
    onSubmit={loginUser} 
    className="bg-white shadow-lg rounded-lg p-8 w-full max-w-md flex flex-col gap-5 mt-10"
  >
    <h2 className="text-2xl font-semibold text-center text-gray-700 mb-6">Sign In</h2>

    <input
      type="text"
      placeholder="Email"
      onChange={(e) => setEmail(e.target.value)}
      className="border border-gray-300 rounded-lg h-12 px-4 text-lg text-gray-700 placeholder-gray-400 focus:border-blue-500 focus:outline-none"
      required
    />
    
    <input
      type="password"
      placeholder="Password"
      onChange={(e) => setPassword(e.target.value)}
      className="border border-gray-300 rounded-lg h-12 px-4 text-lg text-gray-700 placeholder-gray-400 focus:border-blue-500 focus:outline-none"
      required
    />

    <div className="text-gray-600 text-center">
      Not a member?{" "}
      <Link className="text-blue-600 hover:text-blue-800 transition-colors" to="/pharmacy-register">
        Sign up
      </Link>
    </div>

    <button
      type="submit"
      className="bg-blue-600 text-white rounded-lg text-lg h-12 w-full hover:bg-blue-700 transition-colors"
    >
      Sign In
    </button>
    <button
      type="submit"
      className="bg-blue-600 text-white rounded-lg text-lg h-12 w-full hover:bg-blue-700 transition-colors"
      onClick={()=>navigate("/admin-login")}
    >
      Admin Sign In
    </button>
    <button
      type="submit"
      className="bg-blue-600 text-white rounded-lg text-lg h-12 w-full hover:bg-blue-700 transition-colors"
      onClick={()=>navigate("/user/login")}
    >
      User Sign In
    </button>
   
  </form>
</div>

    </>
  );
}

export default Signin;



