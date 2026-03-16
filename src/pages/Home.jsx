import React from 'react'
import Navbar from '../components/Navbar'
import Card from '../components/Card'
const Home = () => {
  return (
    <>
      <div className=' grid  bg-gray-300'>
        <Navbar />
      </div>
      <div >
        <Card/>
      </div>
    </>
  );
}

export default Home