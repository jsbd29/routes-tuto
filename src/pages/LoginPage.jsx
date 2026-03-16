import React from 'react'

const LoginPage = () => {
  return (
    <>
      <div className='container flex-wrap '>
        <h1 className='bg-blue-50 text-4xl bold'> Login Page</h1>
        <input type='text' placeholder='Enter Name' />
        <input tupe='number ' placeholder='Enter Password ' />
        <button>Login</button>
      </div>
    </>
  );
}

export default LoginPage