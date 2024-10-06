import React, { useState } from "react";
import Popup from "reactjs-popup";
import { MdLogout } from "react-icons/md";
import { toast } from "react-hot-toast";

function LogOut() {
  const [showPopup, setShowPopup] = useState(false);

  const handleLogout = () => {
    localStorage.removeItem("token");
    setTimeout(() => {
        window.location.href = "/";
      }, 2000);
    
    toast.success("Successfully logged out");
  };

  return (
    <div>
      {/* <li
        onClick={() => setShowPopup(true)}
        className="cursor-pointer flex p-2 items-center gap-3"
      >
        <MdLogout /> <p>Logout</p>
      </li>

      <Popup
        position="right center"
        open={showPopup}
        onClose={() => setShowPopup(false)}
      >
        <div className=" bg-black w-screen items-center flex flex-col h-screen bg-opacity-40">
          <div className=" bg-white w-[30rem] p-5 items-center m-auto">
            <p className=" font-bold text-2xl text-center">Are you sure?</p>
            <p className=" text-center my-8">
              Are you sure want to sign out?
            </p>
            <div className="flex gap-3">
              <button
                onClick={() => setShowPopup(false)}
                className="bg-gray-400 w-full text-black text-xl h-[4rem]"
              >
                Cancel
              </button>
              <button
                onClick={handleLogout}
                className="bg-red-500 w-full text-white text-xl h-[4rem]"
              >
                Sign Out
              </button>
            </div>
          </div>
        </div>
      </Popup> */}






<li
  onClick={() => setShowPopup(true)}
  className="cursor-pointer flex items-center gap-3 p-2 hover:bg-gray-100 rounded transition duration-200"
>
  <MdLogout className="text-gray-700" />
  <p className="text-gray-700 hover:text-red-500 transition duration-200">Logout</p>
</li>

<Popup
  position="center"
  open={showPopup}
  onClose={() => setShowPopup(false)}
  closeOnDocumentClick
>
  <div className="fixed inset-0 bg-black bg-opacity-40 flex justify-center items-center z-50">
    <div className="bg-white w-full max-w-lg p-6 rounded-lg shadow-lg">
      <p className="text-2xl font-semibold text-gray-800 text-center mb-4">Are you sure?</p>
      <p className="text-center text-gray-600 mb-8">Do you really want to log out?</p>
      
      <div className="flex justify-between gap-4">
        <button
          onClick={() => setShowPopup(false)}
          className="w-full py-3 bg-gray-200 hover:bg-gray-300 text-gray-800 font-semibold rounded-lg transition duration-200"
        >
          Cancel
        </button>
        <button
          onClick={handleLogout}
          className="w-full py-3 bg-red-500 hover:bg-red-600 text-white font-semibold rounded-lg transition duration-200"
        >
          Sign Out
        </button>
      </div>
    </div>
  </div>
</Popup>

    </div>
  );
}

export default LogOut;
