import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function UserFront() {
  const [APIData, setAPIData] = useState([]);
  const [filteredResults, setFilteredResults] = useState([]);
  const [searchInput, setSearchInput] = useState("");

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_API_URL}/user/getdrug`)
      .then((response) => {
        setAPIData(response.data);
      });
  });

  const searchItems = (searchValue) => {
    setSearchInput(searchValue);
    if (searchInput !== "") {
      const filteredData = APIData.filter((item) => {
        return Object.values(item)
          .join("")
          .toLowerCase()
          .includes(searchInput.toLowerCase());
      });
      setFilteredResults(filteredData);
    } else {
      setFilteredResults(APIData);
    }
  };

  const showall = () => {
    setSearchInput("");
  };

  return (
    <div>
     <div className="bg-white fixed w-full h-20 flex shadow-lg z-10">
  <div className="container m-auto flex justify-between items-center px-6">
  <img src="medi.jpg" alt="logo" style={{height:"3rem",width:"3rem"}}></img>
    <div className="font-bold text-2xl text-gray-900">Medical Resource</div>
    <div className="flex gap-6 items-center">
      <div 
        onClick={showall} 
        className="cursor-pointer text-gray-700 hover:text-blue-600 transition-colors"
      >
        Show all pharmacies
      </div>
      <Link
        className="border border-gray-300 text-lg px-4 py-2 rounded-lg text-gray-600 hover:bg-gray-100 hover:text-blue-600 transition-colors"
        to="/pharmacy-login"
      >
        Login
      </Link>
    </div>
  </div>
</div>

<div className="w-full pb-20 pt-40 px-6 sm:px-24 md:px-48 lg:px-64 bg-slate-50 min-h-screen text-gray-900">
  <div className="container m-auto">
    <div className="flex mb-6">
      <select
        id="drug"
        name="drug"
        className="border border-gray-300 rounded-l-lg h-14 text-lg px-4 text-gray-600 focus:border-blue-500 focus:outline-none"
      >
        <option value="">All items</option>
        {/* 
          {searchInput.length > 1
          ? filteredResults.map((drug) => (
              <option value="drug1">{drug.drugname}</option>
            ))
          : APIData.map((drug) => (
              <option value="drug1">{drug.drugname}</option>
            ))}
        */}
      </select>
      <input
        type="text"
        placeholder="Search for medicine here"
        onChange={(e) => searchItems(e.target.value)}
        className="border border-gray-300 rounded-r-lg h-14 w-full text-lg px-4 placeholder:text-gray-400 focus:border-blue-500 focus:outline-none"
        required
      />
    </div>

    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {searchInput.length > 1 ? (
        filteredResults.length > 0 ? (
          filteredResults.map((drug) => (
            <div
              key={drug._id}
              className="p-6 bg-white shadow-md rounded-lg flex flex-col gap-3"
            >
              <p className="font-semibold text-lg">Drug Name: {drug.drugname}</p>
              <p className="text-gray-600">Price: ${drug.price}</p>
              <p className="text-gray-600">Location: {drug.manufacturer}</p>
            </div>
          ))
        ) : (
          <div className="text-center col-span-full text-gray-600">
            No results found.
          </div>
        )
      ) : (
        APIData.map((drug) => (
          <Link to={`orders/${drug._id}/medicine`}>
          <div
            key={drug._id}
            className="p-6 bg-white shadow-md rounded-lg flex flex-col gap-3"
          >
            <p className="font-semibold text-lg">Medicine Name: {drug.drugname}</p>
            <p className="text-gray-600">Price: ${drug.price}</p>
            <p className="text-gray-600">Manufacturer: {drug.manufacturer}</p>
          </div>
          </Link>
        ))
      )}
    </div>

    {/* 
      {listOfDrugs.length !== 0 ? (
        listOfDrugs &&
        listOfDrugs.length > 0 &&
        listOfDrugs.map((drug, index) => (
          <div key={drug._id} className="p-6 bg-white shadow-md rounded-lg flex flex-col gap-3">
            <p className="font-semibold text-lg">Drug Name: {drug.drugname}</p>
            <p className="text-gray-600">Price: ${drug.price}</p>
            <p className="text-gray-600">Location: {drug.price}</p>
          </div>
        ))
      ) : (
        <div className="text-center text-gray-600">
          <p className="py-5">No Drugs item inserted</p>
        </div>
      )} 
    */}
  </div>
</div>

    </div>
  );
}

export default UserFront;
