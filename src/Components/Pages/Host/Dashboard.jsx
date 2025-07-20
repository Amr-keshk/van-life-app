import React from 'react'
import { Link, useLoaderData } from 'react-router-dom'
import { getHostVans } from '../../../api';
export async function loader() {
  return await getHostVans();
}
const Dashboard = () => {
  const vans = useLoaderData();  

  const vansHTML = vans.map((van, i) => {
    return (
      <div key={i} className='flex items-center gap-4 p-4 not rounded-md bg-orange-50'>
        <img className='w-20 rounded-md' src={van.imageUrl} alt={van.name} />
        <div className='mr-auto'>
          <p className='font-bold text-xl'>{van.name}</p>
          <p>${van.price}/day</p>
        </div>
        <button className='capitalize font-medium'>edit</button>
      </div>
    )
  })
  return (
    <div className=''>
      <div className='px-6 py-8 bg-orange-200 mt-8'>
        <h4 className='capitalize font-bold text-4xl '>welcome!</h4>
        <h5 className='font-medium capitalize text-slate-800 my-3'>income last <u>30 days</u></h5>
        <h4 className='font-black text-4xl'>$2,260</h4>
      </div>

      <div className='px-6 py-8 flex items-center justify-between bg-orange-300'>
        <h5 className='font-bold text-xl capitalize '>review score 5.0/5</h5>
        <button className='capitalize font-medium'>details</button>
      </div>

      <div className='bg-orange-100 px-6'>
        <div className=' py-8 flex items-center justify-between'>
          <h6 className='capitalize font-bold text-2xl '>your listed vans</h6>
          <Link to="hostvans" className='capitalize font-medium '>view all</Link>
        </div>

        <div className='flex flex-col gap-4 pb-10'>
          {vansHTML}

        </div>

      </div>
    </div>
  )
}

export default Dashboard