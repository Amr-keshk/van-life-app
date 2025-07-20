import React from 'react'
import { Outlet, NavLink } from 'react-router-dom'
const HostLayout = () => {
  return (
    <div className='bg-orange-50'>
      <ul className='flex items-center px-6 gap-6'>
        <li className='capitalize font-medium text-xl hover-header'><NavLink end to=".">dashboard</NavLink></li>
        <li className='capitalize font-medium text-xl hover-header'><NavLink to="income">income</NavLink></li>
        <li className='capitalize font-medium text-xl hover-header'><NavLink to="hostvans">vans</NavLink></li>
        <li className='capitalize font-medium text-xl hover-header'><NavLink to="reviews">reviews</NavLink></li>
      </ul>
      <Outlet />
    </div>
  )
}

export default HostLayout