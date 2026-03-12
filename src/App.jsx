/** @format */

import React from "react";
import { Route, Link, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Users from "./pages/Users";
import UserDetails from "./pages/UserDetails";

const App = () => {
  return (
    <>
      <nav style={{ display: "flex", gap: "20px" }}>
        <Link to={"/"}>Home</Link>
        <Link to={"/about"}>About</Link>
        <Link to={"/user"}>Users</Link>
      </nav>

      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/about' element={<About />}></Route>
        <Route path='/user' element={<Users />}></Route>
        <Route path=':id' element={<UserDetails />}></Route>
      </Routes>
    </>
  );
};

export default App;
