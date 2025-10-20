import React from "react";
import { Link } from "react-router-dom";
import { MdHome } from "react-icons/md";
import { BiLogInCircle } from "react-icons/bi";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";

const NotFound = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      <h1 className="text-6xl font-bold mb-4 text-red-600">Error 404</h1>
      <p className="text-2xl mb-6 text-red-600 font-bold">
        Oops! Page Not Found.
      </p>
      <div className="flex flex-col justify-center gap-3">
        <Link
          to="/"
          className="group inline-flex items-center gap-1 text-blue-600 hover:underline"
          replace
        >
          <MdHome className="size-6" />
          Go back to Home
          <FaArrowUpRightFromSquare className="size-4 hidden group-hover:inline" />
        </Link>
        <Link
          to="/"
          className="group inline-flex items-center gap-1 text-blue-600 hover:underline"
          replace
        >
          <BiLogInCircle className="size-6" />
          Go to Login
          <FaArrowUpRightFromSquare className="size-4 hidden group-hover:inline" />
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
