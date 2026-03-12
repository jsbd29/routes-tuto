/** @format */

import React from "react";
import { Outlet,Link } from "react-router-dom";

const Users = () => {
  const userList = [
    {
      id: 1,
      name: "Shy",
    },
    {
      id: 2,
      name: "Tobi",
    },
    {
      id: 3,
      name: "Angela",
    },
  ];
  return (
    <>
      <div>
        <h1>Users List</h1>
        {userList.map((user) =>( 
          <p key={user.id}>
            <Link to={`/users/${user.id}`}>{user.name}</Link>
          </p>
        ))}
        <hr />
        <Outlet />
      </div>
    </>
  );
};

export default Users;
