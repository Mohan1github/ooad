import React from "react";

function Navbar(props) {
  return (
    <div className="bg-white w-full h-30 shadow-md fixed top-0 z-50">
  <div className="container mx-auto px-6 flex justify-between items-center h-full">
    {/* Logo Section */}
   
    <div className="text-2xl font-bold text-gray-800 hover:text-blue-600 transition duration-300 cursor-pointer">
      LOGO
    </div>
    
    {/* Navigation Items */}
    <div className="flex items-center space-x-6">
      {props.navItem}
    </div>
  </div>
</div>

  );
}

export default Navbar;
