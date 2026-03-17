/** @format */

import React, { useState } from "react";
import { Link, Outlet } from "react-router-dom";

const MainLayout = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isUserOpen, setIsUserOpen] = useState(false);

  // Close menus when a link is clicked
  const closeMenus = () => {
    setIsMenuOpen(false);
    setIsUserOpen(false);
  };

  return (
    <>
      <nav className='bg-neutral-primary fixed w-full z-20 top-0 start-0 border-b border-default'>
        <div className='max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4'>
          {/* Logo - Using Link */}
          <Link
            to='/'
            className='flex items-center space-x-3 rtl:space-x-reverse'
            onClick={closeMenus}>
            <img
              src='https://flowbite.com/docs/images/logo.svg'
              className='h-7'
              alt='Flowbite Logo'
            />
            <span className='self-center text-xl text-heading font-semibold whitespace-nowrap'>
              Flowbite
            </span>
          </Link>

          <div className='flex items-center md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse relative'>
            {/* User Button */}
            <button
              onClick={() => setIsUserOpen(!isUserOpen)}
              type='button'
              className='flex text-sm bg-neutral-primary rounded-full focus:ring-4 focus:ring-neutral-tertiary transition-transform active:scale-95'>
              <span className='sr-only'>Open user menu</span>
              <img
                className='w-8 h-8 rounded-full border border-default'
                src='https://flowbite.com/docs/images/people/profile-picture-5.jpg'
                alt='user'
              />
            </button>

            {/* User Dropdown */}
            {isUserOpen && (
              <div className='z-50 absolute right-0 top-full mt-2 bg-neutral-primary-medium border border-default-medium rounded-base shadow-lg w-44 animate-in fade-in zoom-in duration-100'>
                <div className='px-4 py-3 text-sm border-b border-default'>
                  <span className='block text-heading font-medium'>
                    Joseph McFall
                  </span>
                  <span className='block text-body truncate'>
                    name@flowbite.com
                  </span>
                </div>
                <ul className='p-2 text-sm text-body font-medium'>
                  <li>
                    <Link
                      to='/user' // Changed from '#' to your actual user list route
                      onClick={closeMenus}
                      className='block p-2 hover:bg-neutral-tertiary-medium hover:text-heading rounded'>
                      User List
                    </Link>
                  </li>
                  <li>
                    <button
                      onClick={() => {
                        console.log("Sign out");
                        closeMenus();
                      }}
                      className='block w-full text-left p-2 hover:bg-neutral-tertiary-medium hover:text-heading rounded'>
                      Sign out
                    </button>
                  </li>
                </ul>
              </div>
            )}

            {/* Mobile Toggle */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className='inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-body rounded-base md:hidden hover:bg-neutral-secondary-soft hover:text-heading focus:ring-2 focus:ring-neutral-tertiary'>
              <svg
                className='w-6 h-6'
                fill='none'
                stroke='currentColor'
                viewBox='0 0 24 24'>
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth='2'
                  d='M4 6h16M4 12h16M4 18h16'
                />
              </svg>
            </button>
          </div>

          {/* Links */}
          <div
            className={`${isMenuOpen ? "block" : "hidden"} items-center justify-between w-full md:flex md:w-auto md:order-1`}>
            <ul className='font-medium flex flex-col p-4 md:p-0 mt-4 border border-default rounded-base bg-neutral-secondary-soft md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-neutral-primary'>
              <li>
                <Link
                  to='/'
                  onClick={closeMenus}
                  className='block py-2 px-3 text-fg-brand font-bold md:p-0'>
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to='/about'
                  onClick={closeMenus}
                  className='block py-2 px-3 text-heading rounded hover:bg-neutral-tertiary md:hover:bg-transparent md:hover:text-fg-brand md:p-0'>
                  About
                </Link>
              </li>
              <li>
                <Link
                  to='/user' // Link to your Users list page
                  onClick={closeMenus}
                  className='block py-2 px-3 text-heading rounded hover:bg-neutral-tertiary md:hover:bg-transparent md:hover:text-fg-brand md:p-0'>
                  Users
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Added responsive padding-top to account for fixed navbar height */}
      <main className='pt-24 min-h-screen bg-neutral-primary-medium'>
        <Outlet />
      </main>
    </>
  );
};

export default MainLayout;
