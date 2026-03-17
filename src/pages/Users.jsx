/** @format */

import React from "react";
import { Link } from "react-router-dom";

const Users = () => {
  const userList = [
    { id: 1, name: "Shy" },
    { id: 2, name: "Tobi" },
    { id: 3, name: "Angela" },
  ];

  return (
    <div className='max-w-md mx-auto mt-10 p-6 bg-neutral-primary rounded-base border border-default shadow-sm'>
      <h1 className='text-2xl font-bold text-heading mb-4'>Users List</h1>
      <div className='space-y-2'>
        {userList.map((user) => (
          <p
            key={user.id}
            className='p-2 hover:bg-neutral-secondary-soft rounded transition-colors'>
            {/* MATCHING THE ROUTE: userDetails/:id */}
            <Link
              to={`/userDetails/${user.id}`}
              className='text-brand font-medium hover:text-fg-brand'>
              {user.name} (ID: {user.id})
            </Link>
          </p>
        ))}
      </div>
    </div>
  );
};

export default Users;
