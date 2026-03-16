/** @format */

import React from "react";
import { useParams } from "react-router-dom";

const UserDetails = () => {
  const { id } = useParams();

  return (
    <>
      <div ClassName = 'container border-b-sky-500'>
        <h2>User Details for ID{id}</h2>
        <form>
          <input 
          type='text' 
          placeholder='Enter First Name ' 
          label='First Name' 
          />
          <input
            type='text'
            placeholder='Enter Your Last Name:'
            label='Last Name'
          />
          <input
            type='password'
            placeholder='Enter Your Password'
            label='Password'
          />
          <input
            type='password'
            placeholder='Confirm Your Password'
            label='Password'
          />
        </form>
      </div>
    </>
  );
};

export default UserDetails;
