import React from 'react'
import { Link, useLoaderData } from 'react-router-dom';
import { getHostVans } from '../../../api';

export async function loader() {
  return await getHostVans();
}

const HostVans = () => {
  const vans = useLoaderData();

  const vansHTML = vans.map((van, i) => {
    return (
      <Link to={`${van.id}`}>
        <div key={i} className='flex items-center gap-4 p-4 not rounded-md bg-orange-50'>
          <img className='w-20 rounded-md' src={van.imageUrl} alt={van.name} />
          <div className='mr-auto'>
            <p className='font-bold text-xl'>{van.name}</p>
            <p>${van.price}/day</p>
          </div>
          <button className='capitalize font-medium'>edit</button>
        </div>
      </Link>
    )
  })
  return (
    <div>
      <div className='bg-orange-100 px-6'>
        <h6 className='py-8 capitalize font-bold text-2xl '>your listed vans</h6>

        <div className='flex flex-col gap-4 pb-10'>
          {vansHTML}

        </div>

      </div>
    </div>
  )
}

export default HostVans