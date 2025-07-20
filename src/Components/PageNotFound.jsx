import React from 'react'
import { Link } from 'react-router-dom'
const PageNotFound = () => {
  return (
    <div className='px-6 h-96 bg-orange-200 flex flex-col items-center justify-center gap-8'>
      <div className=' font-semibold text-4xl capitalize '>
        404 PageNotFound
      </div>
      <Link to="/" className='w-full h-16 bg-slate-900 text-orange-50 rounded-md flex justify-center items-center text-2xl'>Return Home</Link>
    </div>
  )
}

export default PageNotFound