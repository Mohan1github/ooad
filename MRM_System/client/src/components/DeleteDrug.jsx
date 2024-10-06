import React, { useState } from "react";
import { MdDeleteForever } from "react-icons/md";
import Popup from "reactjs-popup";
import Axios from "axios";
import { toast } from "react-hot-toast";

function DeleteDrug(props) {
  const [showPopup, setShowPopup] = useState(false);
  const [listOfDrug, setListOfDrug] = useState([]);

  const handleDelete = async (id) => {
    Axios.delete(
      `${process.env.REACT_APP_API_URL}/delete/${id}`
    ).then((res) => {
      // Update the list of drugs after successful deletion
      setListOfDrug(listOfDrug.filter((drug) => drug.id !== id));
      toast.success("Successfully Deleted drug!");
    });
  };
  return (
    // <div>
    //   <MdDeleteForever
    //     onClick={() => setShowPopup(true)}
    //     className="text-red-600 text-2xl cursor-pointer"
    //   />
    //   <Popup
    //     position="right center"
    //     open={showPopup}
    //     onClose={() => setShowPopup(false)}
    //   >
    //     <div className=" bg-black w-screen items-center flex flex-col h-screen bg-opacity-40">
    //       <div className=" bg-white w-[30rem] p-5 items-center m-auto">
    //         <p className=" font-bold text-2xl text-center">Are you sure ?</p>
    //         <p className=" text-center my-8">
    //           This item will be permanently deleted
    //         </p>
    //         <div className="flex gap-3">
    //           <button
    //             onClick={() => setShowPopup(false)}
    //             className="bg-gray-400 w-full text-black text-xl h-[4rem]"
    //           >
    //             Cancel
    //           </button>
    //           <button
    //             onClick={() => handleDelete(props.id)}
    //             className="bg-red-500 w-full text-white text-xl h-[4rem]"
    //           >
    //             Delete
    //           </button>
    //         </div>
    //       </div>
    //     </div>
    //   </Popup>
    // </div>



    <div>
  <MdDeleteForever
    onClick={() => setShowPopup(true)}
    className="text-red-500 text-2xl cursor-pointer hover:text-red-700 transition duration-200"
  />
  <Popup
    position="center"
    open={showPopup}
    onClose={() => setShowPopup(false)}
  >
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
      <div className="bg-white rounded-lg shadow-lg w-full max-w-md p-6">
        <p className="font-bold text-2xl text-center text-gray-800">
          Are you sure?
        </p>
        <p className="text-center my-4 text-gray-600">
          This item will be permanently deleted.
        </p>
        <div className="flex justify-between mt-6">
          <button
            onClick={() => setShowPopup(false)}
            className="w-full px-4 py-2 text-lg bg-gray-300 text-gray-700 rounded-md hover:bg-gray-400 transition duration-200"
          >
            Cancel
          </button>
          <button
            onClick={() => handleDelete(props.id)}
            className="w-full ml-3 px-4 py-2 text-lg bg-red-500 text-white rounded-md hover:bg-red-600 transition duration-200"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  </Popup>
</div>

  );
}

export default DeleteDrug;
