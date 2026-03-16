import React from 'react'
import { Link } from 'react-router-dom'
const NotFoundPage = () => {
  return (
    <div className='flex flex-col gap-2'> 404 Page Not Found! 
        <Link to = '/'>
        Back to Home Page
        </Link>
        <a href='/'> Home </a>
    </div>
  )
}

export default NotFoundPage