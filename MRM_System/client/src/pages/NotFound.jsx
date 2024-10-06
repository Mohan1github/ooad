import React from "react";
import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div className="h-screen flex flex-col justify-center items-center bg-gray-900">
  <div className="text-center space-y-6">
    <h1 className="text-white font-extrabold text-6xl sm:text-8xl md:text-9xl">404</h1>
    <p className="text-white text-xl md:text-2xl font-semibold">
      Page Not Found!
    </p>
    <p className="text-gray-400 text-lg md:text-xl">
      Sorry about that! Please visit our homepage to get where you need to go.
    </p>
    <Link
      to="/"
      className="inline-block mt-8 bg-blue-600 text-white font-medium text-lg md:text-xl rounded-lg px-6 py-3 hover:bg-blue-700 transition-all duration-300 focus:ring-4 focus:ring-blue-300"
    >
      Go To Home
    </Link>
  </div>
</div>

  );
}

export default NotFound