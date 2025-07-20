import React from 'react'
import { NavLink } from 'react-router-dom'
const Header = () => {
  return (
    <div className='py-10 px-6 bg-orange-50'>
      <ul className='flex items-center gap-4'>
        <li className='mr-auto hover-header'><NavLink className='font-black text-4xl uppercase' to="/">#vanlife</NavLink></li>
        <li className='hover-header'><NavLink to="host" className='capitalize text-slate-700 text-xl font-medium' >host</NavLink></li>
        <li className='hover-header'><NavLink to="about" className='capitalize text-slate-700 text-xl font-medium' >about</NavLink></li>
        <li className='hover-header'><NavLink to="vans" className='capitalize text-slate-700 text-xl font-medium' >vans</NavLink></li>
      </ul>
    </div>
  )
}

export default Header