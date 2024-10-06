import React, { useEffect, useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import jwtDecode from 'jwt-decode'
import {useNavigate} from "react-router-dom";

function AddDrug({ isOpen, onClose }) {


  const navigate = useNavigate();
  const [drugname, setDrugname] = useState("");
  const [manufacturer, setManufacturer] = useState("");
  const [supplier, setSupplier] = useState("");
  const [ndc, setNDC] = useState("");
  const [exDate, setExDate] = useState("");
  const [quantity, setQuantity] = useState("");
  const [price, setPrice] = useState("");
  const [drugdatapy, setDrugdatapy] = useState([]);


  const [user, setUser] = useState({});

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      const decodedToken = jwtDecode(token);
      setUser(decodedToken);
    }
  }, []);

  const addToList = () => {
    if (drugname.length === 0) {
      toast.error("Select drug name");
      return;
    } else if (
      manufacturer.length === 0 ||
      supplier.length === 0 ||
      ndc.length === 0 ||
      exDate.length === 0 ||
      quantity.length === 0 ||
      price.length === 0
    ) {
      toast.error("All fields are required!");
      return;
    }
    try {
      axios.post(`${process.env.REACT_APP_API_URL}/insert`, {
        drugname,
        manufacturer,
        supplier,
        ndc,
        exDate,
        quantity,
        price,
        pharmacy: user.email
      });
      toast.success("Successfully Added drug!");
      navigate("/pd");
    } catch (err) {
      toast.error(err);
    }
  };

  useEffect(() => {
    axios.get(`https://blog-apis-blue.vercel.app/products`).then((res) => {
      setDrugdatapy(res.data);
    });
  }, []);

  return (
    // <div className={`fixed inset-0 ${isOpen ? "" : "hidden"}`}>
    //   <div className="flex items-center place-content-center h-screen bg-black bg-opacity-50">
    //     <div>
    //       <div className="p-10 bg-white w-[60rem]">
    //         <div className="flex mb-10">
    //           <p className="font-bold text-2xl">Add new drug</p>
    //         </div>
    //         <div className="gap-y-[2rem] gap-x-[2rem] grid-cols-2 grid">
    //           <div className="flex flex-col gap-3">
    //             <label>Drug name</label>
    //             <select
    //               id="drug"
    //               name="drug"
    //               onChange={(e) => {
    //                 setDrugname(e.target.value);
    //               }}
    //               className="border-black border h-[50px] text-xl px-5 placeholder:text-black focus:border-none"
    //             >
    //               <option value="" selected="true" disabled>
    //                 Select drug name
    //               </option>
    //               {drugdatapy.map((drugpy, index) => {
    //                 return (
    //                   <option key={index} value={drugpy.drug_item}>
    //                     {drugpy.drug_item}
    //                   </option>
    //                 );
    //               })}
    //             </select>
    //           </div>
    //           <div className="flex flex-col gap-3">
    //             <label>Manufacturer</label>
    //             <input
    //               placeholder="Manufacturer"
    //               type="text"
    //               onChange={(e) => {
    //                 setManufacturer(e.target.value);
    //               }}
    //               className="border-black border h-[50px] text-xl px-5 placeholder:text-black focus:border-none"
    //               required
    //             />
    //           </div>
    //           <div className="flex flex-col gap-3">
    //             <label>Supplier</label>
    //             <input
    //               type="text"
    //               placeholder="Supplier"
    //               onChange={(e) => {
    //                 setSupplier(e.target.value);
    //               }}
    //               className="border-black border h-[50px] text-xl px-5 placeholder:text-black focus:border-none"
    //               required
    //             />
    //           </div>
    //           <div className="flex flex-col gap-3">
    //             <label>National drug code</label>
    //             <input
    //               type="text"
    //               placeholder="NDC"
    //               onChange={(e) => {
    //                 setNDC(e.target.value);
    //               }}
    //               className="border-black border h-[50px] text-xl px-5 placeholder:text-black focus:border-none"
    //               required
    //             />
    //           </div>
    //           <div className="flex flex-col gap-3">
    //             <label>Expiration date</label>
    //             <input
    //               type="date"
    //               placeholder="Select Expiration date"
    //               onChange={(e) => {
    //                 setExDate(e.target.value);
    //               }}
    //               className="border-black border h-[50px] text-xl px-5 placeholder:text-black focus:border-none"
    //               required
    //             />
    //           </div>
    //           <div className="flex flex-col gap-3">
    //             <label>Quantity on hand</label>
    //             <input
    //               type="number"
    //               placeholder="Quantity on hand"
    //               onChange={(e) => {
    //                 setQuantity(e.target.value);
    //               }}
    //               className="border-black border h-[50px] text-xl px-5 placeholder:text-black focus:border-none"
    //               required
    //             />
    //           </div>
    //           <div className="flex flex-col gap-3">
    //             <label>Unit price</label>
    //             <input
    //               type="number"
    //               placeholder="Unit price"
    //               onChange={(e) => {
    //                 setPrice(e.target.value);
    //               }}
    //               className="border-black border h-[50px] text-xl px-5 placeholder:text-black focus:border-none"
    //               required
    //             />
    //           </div>
    //         </div>
    //         <div className="flex w-full mt-10 gap-[2rem]">
    //           <button
    //             onClick={() => onClose()}
    //             type="reset"
    //             className="bg-gray-200 w-full text-black text-xl h-[4rem] "
    //           >
    //             Cancel
    //           </button>
    //           <button
    //             onClick={addToList}
    //             className="bg-gray-400 w-full text-black text-xl h-[4rem]"
    //           >
    //             Save
    //           </button>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </div>




    <div className={`fixed inset-0 ${isOpen ? "" : "hidden"}`}>
  <div className="flex items-center justify-center h-screen bg-black bg-opacity-50">
    <div className="bg-white rounded-lg shadow-lg w-[60rem] p-10">
      <h2 className="font-bold text-2xl mb-6">Add New Drug</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {/* Drug Name */}
        <div className="flex flex-col gap-1">
          <label className="text-gray-600 font-medium">Drug Name</label>
          <select
            id="drug"
            name="drug"
            onChange={(e) => setDrugname(e.target.value)}
            className="border border-gray-300 rounded-md h-[50px] text-xl px-5 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200"
          >
            <option value="" selected disabled>
              Select drug name
            </option>
            {drugdatapy.map((drugpy, index) => (
              <option key={index} value={drugpy.drug_item}>
                {drugpy.drug_item}
              </option>
            ))}
          </select>
        </div>
        
        {/* Manufacturer */}
        <div className="flex flex-col gap-1">
          <label className="text-gray-600 font-medium">Manufacturer</label>
          <input
            type="text"
            placeholder="Manufacturer"
            onChange={(e) => setManufacturer(e.target.value)}
            className="border border-gray-300 rounded-md h-[50px] text-xl px-5 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200"
            required
          />
        </div>

        {/* Supplier */}
        <div className="flex flex-col gap-1">
          <label className="text-gray-600 font-medium">Supplier</label>
          <input
            type="text"
            placeholder="Supplier"
            onChange={(e) => setSupplier(e.target.value)}
            className="border border-gray-300 rounded-md h-[50px] text-xl px-5 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200"
            required
          />
        </div>

        {/* National Drug Code */}
        <div className="flex flex-col gap-1">
          <label className="text-gray-600 font-medium">National Drug Code</label>
          <input
            type="text"
            placeholder="NDC"
            onChange={(e) => setNDC(e.target.value)}
            className="border border-gray-300 rounded-md h-[50px] text-xl px-5 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200"
            required
          />
        </div>

        {/* Expiration Date */}
        <div className="flex flex-col gap-1">
          <label className="text-gray-600 font-medium">Expiration Date</label>
          <input
            type="date"
            onChange={(e) => setExDate(e.target.value)}
            className="border border-gray-300 rounded-md h-[50px] text-xl px-5 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200"
            required
          />
        </div>

        {/* Quantity on Hand */}
        <div className="flex flex-col gap-1">
          <label className="text-gray-600 font-medium">Quantity on Hand</label>
          <input
            type="number"
            placeholder="Quantity on hand"
            onChange={(e) => setQuantity(e.target.value)}
            className="border border-gray-300 rounded-md h-[50px] text-xl px-5 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200"
            required
          />
        </div>

        {/* Unit Price */}
        <div className="flex flex-col gap-1">
          <label className="text-gray-600 font-medium">Unit Price</label>
          <input
            type="number"
            placeholder="Unit price"
            onChange={(e) => setPrice(e.target.value)}
            className="border border-gray-300 rounded-md h-[50px] text-xl px-5 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200"
            required
          />
        </div>
      </div>

      <div className="flex w-full mt-10 gap-4">
        <button
          onClick={onClose}
          type="reset"
          className="bg-gray-200 w-full text-black text-xl h-[4rem] rounded-md shadow transition duration-200 hover:bg-gray-300"
        >
          Cancel
        </button>
        <button
          onClick={addToList}
          className="bg-blue-600 w-full text-white text-xl h-[4rem] rounded-md shadow transition duration-200 hover:bg-blue-700"
        >
          Save
        </button>
      </div>
    </div>
  </div>
</div>

  );
}

export default AddDrug;
