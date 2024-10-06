import React, { useState } from "react";

function ProfileInput(props) {
  const [pname, setPname] = useState();

  return (
    // <div className="flex flex-col gap-3">
    //   <label>{props.lable}</label>
    //   <input
    //     type="text"
    //     onChange={(e) => {
    //       setPname(e.target.value);
    //     }}
    //     className="border-black border h-[4rem] text-xl p-5 placeholder:text-black focus:border-none"
    //     {...props.rqe}
    //   />
    // </div>


    <div className="flex flex-col gap-2">
  <label className="text-gray-700 font-medium">{props.label}</label>
  <input
    type="text"
    onChange={(e) => {
      setPname(e.target.value);
    }}
    className="border border-gray-300 rounded-md h-[4rem] text-xl p-4 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200"
    placeholder={props.placeholder} // Assuming you want to set a placeholder dynamically
    {...props.rqe}
  />
</div>

  );
}

export default ProfileInput;
