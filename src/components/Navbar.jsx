/** @format */

import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <nav className='bg-blue-300 border-b-4'>
        <div className='mx-auto max-w-7xl px-2 sm:px-6 lg:px-8'>
          {/* Removed 'top-4' to keep it centered in the nav; added items-center */}
          <div className='relative flex h-16 justify-end items-center gap-5'>
            <Link to='/'>
              <button className='bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-md text-blue-100'>
                Home
              </button>
            </Link>
            <Link to='/user'>
              <button className='bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-md text-blue-100'>
                Contact
              </button>
            </Link>
          </div>
        </div>
      </nav>{" "}
      {/* Corrected closing tag */}
    </>
  );
};

export default Navbar;
