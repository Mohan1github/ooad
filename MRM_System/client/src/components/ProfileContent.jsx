import jwtDecode from "jwt-decode";
import React, { useEffect, useState } from "react";
import {useNavigate} from "react-router-dom"
function ProfileContent() {
  const [pname, setPname] = useState();
  const [user, setUser] = useState({});
    const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      const decodedToken = jwtDecode(token);
      setUser(decodedToken);
    }
  }, []);

  return (
    // <div className="w-full max-w-[60rem] m-auto h-full text-black overflow-y-scroll">
    //   <form action="">
    //     <div className="mx-20 ">
    //       <div className="flex mb-10">
    //         <p className="font-bold text-2xl">Pharmacy Information</p>
    //       </div>
    //       <div className="gap-y-[2rem] gap-x-[2rem] grid-cols-2 grid">
    //         <div className="flex flex-col gap-3">
    //           <label>Pharmacy's name</label>
    //           <input
    //             type="text"
    //             onChange={(e) => {
    //               setPname(e.target.value);
    //             }}
    //             className="border-black border h-[50px] text-xl p-5 placeholder:text-black focus:border-none"
    //             required
    //           />
    //         </div>
    //         <div className="flex flex-col gap-3">
    //           <label>Address</label>
    //           <input
    //             type="text"
    //             onChange={(e) => {
    //               setPname(e.target.value);
    //             }}
    //             className="border-black border h-[50px] text-xl p-5 placeholder:text-black focus:border-none"
    //             required
    //           />
    //         </div>
    //         <div className="flex flex-col gap-3">
    //           <label>Phone number</label>
    //           <input
    //             type="text"
    //             onChange={(e) => {
    //               setPname(e.target.value);
    //             }}
    //             className="border-black border h-[50px] text-xl p-5 placeholder:text-black focus:border-none"
    //             required
    //           />
    //         </div>
    //         <div className="flex flex-col gap-3">
    //           <label>Email</label>
    //           <input
    //             type="text"
    //             onChange={(e) => {
    //               setPname(e.target.value);
    //             }}
    //             className="border-black border h-[50px] text-xl p-5 placeholder:text-black focus:border-none"
    //             required
    //           />
    //         </div>
    //         <div className="flex flex-col gap-3">
    //           <label>Website</label>
    //           <input
    //             type="text"
    //             onChange={(e) => {
    //               setPname(e.target.value);
    //             }}
    //             className="border-black border h-[50px] text-xl p-5 placeholder:text-black focus:border-none"
    //             required
    //           />
    //         </div>
    //         <div className="flex flex-col gap-3">
    //           <label>Operating hours</label>
    //           <input
    //             type="text"
    //             onChange={(e) => {
    //               setPname(e.target.value);
    //             }}
    //             className="border-black border h-[50px] text-xl p-5 placeholder:text-black focus:border-none"
    //             required
    //           />
    //         </div>
    //         <div className="flex flex-col gap-3">
    //           <label>Pharmacy license</label>
    //           <input
    //             type="text"
    //             onChange={(e) => {
    //               setPname(e.target.value);
    //             }}
    //             className="border-black border h-[50px] text-xl p-5 placeholder:text-black focus:border-none"
    //             required
    //           />
    //         </div>
    //       </div>
    //     </div>
    //     <div className="mx-20 mt-10">
    //       <div className="flex mb-10">
    //         <p className="font-bold text-2xl">Owner Information</p>
    //       </div>
    //       <div className="gap-y-[2rem] gap-x-[2rem] grid-cols-2 grid">
    //         <div className="flex flex-col gap-3">
    //           <label>Name</label>
    //           <input
    //             type="text"
    //             onChange={(e) => {
    //               setPname(e.target.value);
    //             }}
    //             className="border-black border h-[50px] text-xl p-5 placeholder:text-black focus:border-none"
    //             required
    //           />
    //         </div>
    //         <div className="flex flex-col gap-3">
    //           <label>Address</label>
    //           <input
    //             type="text"
    //             onChange={(e) => {
    //               setPname(e.target.value);
    //             }}
    //             className="border-black border h-[50px] text-xl p-5 placeholder:text-black focus:border-none"
    //             required
    //           />
    //         </div>
    //         <div className="flex flex-col gap-3">
    //           <label>Owner phone number</label>
    //           <input
    //             type="text"
    //             onChange={(e) => {
    //               setPname(e.target.value);
    //             }}
    //             className="border-black border h-[50px] text-xl p-5 placeholder:text-black focus:border-none"
    //             required
    //           />
    //         </div>
    //         <div className="flex flex-col gap-3">
    //           <label>Owner email</label>
    //           <input
    //             type="text"
    //             onChange={(e) => {
    //               setPname(e.target.value);
    //             }}
    //             className="border-black border h-[50px] text-xl p-5 placeholder:text-black focus:border-none"
    //             required
    //           />
    //         </div>
    //         <div className="flex flex-col gap-3">
    //           <label>Owner NIC</label>
    //           <input
    //             type="text"
    //             onChange={(e) => {
    //               setPname(e.target.value);
    //             }}
    //             className="border-black border h-[50px] text-xl p-5 placeholder:text-black focus:border-none"
    //             required
    //           />
    //         </div>
    //       </div>
    //     </div>
    //     <div className="flex mx-20 gap-x-[2rem] my-[2rem]">
    //       <button
    //         type="reset"
    //         className="bg-gray-200 w-full text-black text-xl h-[4rem] "
    //       >
    //         Cancel
    //       </button>
    //       <button
    //         type="submit"
    //         className="bg-gray-400 w-full text-black text-xl h-[4rem] "
    //       >
    //         Save
    //       </button>
    //     </div>
    //   </form>
    // </div>





    <div className="w-full max-w-5xl mx-auto h-full text-black overflow-y-auto bg-white p-10 shadow-md rounded-lg mt-20">
  <form>
    {/* Pharmacy Information Section */}
    <div className="mb-12">
      <div className="mb-6">
        <h2 className="text-3xl font-semibold text-gray-800">Pharmacy Information</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="flex flex-col">
          <label className="text-lg text-gray-600">Pharmacy's Name</label>
          <input
            type="text"
            onChange={(e) => setPname(e.target.value)}
            className="border border-gray-300 rounded-lg h-12 px-4 text-lg focus:ring-2 focus:ring-blue-500"
            placeholder="Enter pharmacy name"
            required
          />
        </div>
        <div className="flex flex-col">
          <label className="text-lg text-gray-600">Address</label>
          <input
            type="text"
            onChange={(e) => setPname(e.target.value)}
            className="border border-gray-300 rounded-lg h-12 px-4 text-lg focus:ring-2 focus:ring-blue-500"
            placeholder="Enter address"
            required
          />
        </div>
        <div className="flex flex-col">
          <label className="text-lg text-gray-600">Phone Number</label>
          <input
            type="text"
            onChange={(e) => setPname(e.target.value)}
            className="border border-gray-300 rounded-lg h-12 px-4 text-lg focus:ring-2 focus:ring-blue-500"
            placeholder="Enter phone number"
            required
          />
        </div>
        <div className="flex flex-col">
          <label className="text-lg text-gray-600">Email</label>
          <input
            type="email"
            onChange={(e) => setPname(e.target.value)}
            className="border border-gray-300 rounded-lg h-12 px-4 text-lg focus:ring-2 focus:ring-blue-500"
            placeholder="Enter email"
            required
          />
        </div>
        <div className="flex flex-col">
          <label className="text-lg text-gray-600">Website</label>
          <input
            type="text"
            onChange={(e) => setPname(e.target.value)}
            className="border border-gray-300 rounded-lg h-12 px-4 text-lg focus:ring-2 focus:ring-blue-500"
            placeholder="Enter website"
            required
          />
        </div>
        <div className="flex flex-col">
          <label className="text-lg text-gray-600">Operating Hours</label>
          <input
            type="text"
            onChange={(e) => setPname(e.target.value)}
            className="border border-gray-300 rounded-lg h-12 px-4 text-lg focus:ring-2 focus:ring-blue-500"
            placeholder="Enter operating hours"
            required
          />
        </div>
        <div className="flex flex-col">
          <label className="text-lg text-gray-600">Pharmacy License</label>
          <input
            type="text"
            onChange={(e) => setPname(e.target.value)}
            className="border border-gray-300 rounded-lg h-12 px-4 text-lg focus:ring-2 focus:ring-blue-500"
            placeholder="Enter license number"
            required
          />
        </div>
      </div>
    </div>

    {/* Owner Information Section */}
    <div className="mb-12">
      <div className="mb-6">
        <h2 className="text-3xl font-semibold text-gray-800">Owner Information</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="flex flex-col">
          <label className="text-lg text-gray-600">Name</label>
          <input
            type="text"
            onChange={(e) => setPname(e.target.value)}
            className="border border-gray-300 rounded-lg h-12 px-4 text-lg focus:ring-2 focus:ring-blue-500"
            placeholder="Enter owner's name"
            required
          />
        </div>
        <div className="flex flex-col">
          <label className="text-lg text-gray-600">Address</label>
          <input
            type="text"
            onChange={(e) => setPname(e.target.value)}
            className="border border-gray-300 rounded-lg h-12 px-4 text-lg focus:ring-2 focus:ring-blue-500"
            placeholder="Enter owner's address"
            required
          />
        </div>
        <div className="flex flex-col">
          <label className="text-lg text-gray-600">Owner Phone Number</label>
          <input
            type="text"
            onChange={(e) => setPname(e.target.value)}
            className="border border-gray-300 rounded-lg h-12 px-4 text-lg focus:ring-2 focus:ring-blue-500"
            placeholder="Enter owner's phone number"
            required
          />
        </div>
        <div className="flex flex-col">
          <label className="text-lg text-gray-600">Owner Email</label>
          <input
            type="email"
            onChange={(e) => setPname(e.target.value)}
            className="border border-gray-300 rounded-lg h-12 px-4 text-lg focus:ring-2 focus:ring-blue-500"
            placeholder="Enter owner's email"
            required
          />
        </div>
        <div className="flex flex-col">
          <label className="text-lg text-gray-600">Owner NIC</label>
          <input
            type="text"
            onChange={(e) => setPname(e.target.value)}
            className="border border-gray-300 rounded-lg h-12 px-4 text-lg focus:ring-2 focus:ring-blue-500"
            placeholder="Enter NIC number"
            required
          />
        </div>
      </div>
    </div>

    {/* Buttons */}
    <div className="flex gap-6 mt-8">
      <button
        type="reset"
        className="w-full bg-gray-200 text-gray-700 text-lg font-medium py-3 rounded-lg hover:bg-gray-300 transition-all"
      >
        Cancel
      </button>
      <button
        type="submit"
        className="w-full bg-blue-600 text-white text-lg font-medium py-3 rounded-lg hover:bg-blue-700 transition-all"
      >
        Save
      </button>
      <button
        type="submit"
        className="w-full bg-blue-600 text-white text-lg font-medium py-3 rounded-lg hover:bg-blue-700 transition-all"
        onClick={()=>navigate("pd")}
      >
        Inventory
      </button>
    </div>
  </form>
</div>

  );
}

export default ProfileContent;
