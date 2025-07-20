import React from 'react'
import { Link, NavLink, Outlet, useLoaderData } from 'react-router-dom'
import { getHostVans } from '../../../api'

export async function loader ({params}) {
  return await getHostVans(params.id);
}
const HostVansDetail = () => {
  const van = useLoaderData()

  return (
    <div className='px-6 py-10'>
      <Link to=".." relative="path" className="capitalize font-medium underline">back to all vans</Link>
      {
        van ? 
        <div className='flex items-center gap-4'>
          <img className='w-32' src={van.imageUrl} alt={`photo of ${van.name}`} />
          <div>
            <button className={`${van.type} type-button text-orange-50`}>{van.type}</button>
            <h5 className='font-bold text-xl'>{van.name}</h5>
            <span><strong>${van.price}</strong>/day</span>
          </div>
        </div>
        : <h1 className=''>loading...</h1>
      }
      <ul className='flex items-center gap-4'>
        <li><NavLink end to=".">details</NavLink></li>
        <li><NavLink to="vanpricing">pricing</NavLink></li>
        <li><NavLink to="vanphoto">photos</NavLink></li>
      </ul>

      <Outlet context={van} />
    </div>
  )
}

export default HostVansDetail