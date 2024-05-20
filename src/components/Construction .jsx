import React from "react";
import { FaTools, FaExclamationCircle, FaHome } from "react-icons/fa";
import { Link } from "react-router-dom";

export const Construction = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <FaTools className="w-16 h-16 text-gray-500 mb-4" />
      <h1 className="text-xl font-semibold mb-2">
        This Page is Under Construction
      </h1>
      <p className="text-gray-600 mb-4">
        We are working on something awesome. Stay tuned!
      </p>
      <div className="flex space-x-4">
        <button className="btn btn-primary flex items-center">
          <Link className="flex flex-row justify-center items-center" to="/home">
            <FaHome className="w-6 h-6 mr-1" />
            Back To home
          </Link>
        </button>
        <button className="btn btn-secondary flex items-center">
          <FaExclamationCircle className="w-6 h-6 mr-1" />
          Report Issue
        </button>
      </div>
    </div>
  );
};
