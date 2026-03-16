/** @format */

import React from "react";
import { NavLink, Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <NavLink className=' bg-blue-300 justify-end-safe'>
        <div class='mx-auto max-w-7xl px-2 sm:px-6 lg:px-8'>
          <div class='relative flex h-16  justify-end gap-5 top-4'>
            <Link to='/'>
              <button className='bg-blue-600 rounded-md justify-center text-blue-100 '>
                Home
              </button>
            </Link>
            <Link to='/user'>
              <button className='bg-blue-600 rounded-md justify-center text-blue-100'>
                Contact
              </button>
            </Link>
          </div>
        </div>
      </NavLink>
    </>
  );
};

export default Navbar;
