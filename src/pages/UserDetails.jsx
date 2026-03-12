/** @format */

import React from "react";
import { useParams } from "react-router-dom";

const UserDetails = () => {
  const { id } = useParams();

  return (
    <>
      <div>
        <h2>User Details for ID{id}</h2>
      </div>
    </>
  );
};

export default UserDetails;
