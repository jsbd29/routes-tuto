/** @format */

import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

const UserDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  // State to hold the user data
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulating a fetch request
    const fetchUser = async () => {
      try {
        setLoading(true);
        const response = await fetch(
          `https://jsonplaceholder.typicode.com/users/${id}`,
        );
        const data = await response.json();
        setUser(data);
      } catch (error) {
        console.error("Error fetching user:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchUser();
  }, [id]); // Re-run if the ID in the URL changes

  const handleContact = (e) => {
    e.preventDefault();
    alert(`Message sent to ${user?.name}`);
    navigate("/");
  };

  if (loading)
    return (
      <div className='text-center mt-20 text-brand animate-pulse'>
        Loading user profile...
      </div>
    );
  if (!user) return <div className='text-center mt-20'>User not found.</div>;

  return (
    <div className='max-w-lg mx-auto mt-10 p-8 bg-neutral-primary border border-default rounded-base shadow-lg'>
      <div className='mb-6'>
        <h2 className='text-2xl font-bold text-heading'>
          Profile: {user.name}
        </h2>
        <p className='text-body text-sm'>
          User ID: {id} • {user.email}
        </p>
      </div>

      <form onSubmit={handleContact} className='flex flex-col gap-4'>
        <div>
          <label className='block text-sm font-medium text-body mb-1'>
            Update First Name
          </label>
          <input
            type='text'
            defaultValue={user.name.split(" ")[0]}
            className='w-full p-2 border border-default rounded focus:ring-2 focus:ring-brand outline-none'
          />
        </div>

        <div>
          <label className='block text-sm font-medium text-body mb-1'>
            Company
          </label>
          <input
            type='text'
            disabled
            value={user.company?.name || "N/A"}
            className='w-full p-2 border border-default rounded bg-neutral-secondary-soft text-gray-500 cursor-not-allowed'
          />
        </div>

        <button
          type='submit'
          className='mt-4 bg-brand text-white py-2 px-4 rounded-base font-semibold hover:bg-fg-brand transition-all active:scale-95'>
          Save & Return Home
        </button>
      </form>
    </div>
  );
};

export default UserDetails;
