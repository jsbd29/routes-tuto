/** @format */

import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <nav>
        <li>
          <Link>Home</Link>
        </li>
        <li>
          <Link>Contact</Link>
        </li>
      </nav>
    </>
  );
};

export default Navbar;
