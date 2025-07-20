import React from 'react'
import { useParams, Link, useLocation, useLoaderData } from 'react-router-dom'
import { getVans } from '../../api';

export async function loader({params}) {
  return await getVans(params.id)
}

const VansDetail = () => {

  const location = useLocation();
  const path = location.state?.search || "";
  const type = location.state?.type || "all"
  
  const van = useLoaderData()
  return (
    
    <div className='bg-orange-50 px-6 pb-10'>
      {
        van ?
        <div>
          <Link className='capitalize underline font-medium text-xl' to={`..?${path}`} relative='path'>Back to {type} vans</Link>
          <img className='rounded-md my-10' src={van.imageUrl} alt={van.type} />
          <button className={`type-button text-orange-50 ${van.type}`}>{van.type}</button>
          <h2 className='my-4 capitalize text-xl font-bold'>{van.name}</h2>
          <span><strong className='text-xl'>${van.price}</strong>/day</span>
          <p className='my-6 capitalize font-medium text-base'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aperiam aut minima voluptatum, debitis obcaecati libero? Accusamus ipsum qui unde sapiente vero tenetur laudantium dolores earum dolor. Quibusdam neque vitae adipisci ipsum ad tempore laboriosam iste, perspiciatis, laudantium natus quam id fugiat labore necessitatibus eum enim provident repellat quae architecto quod?</p>
          <button className='block bg-orange-400 text-xl font-medium capitalize text-orange-50 py-4 w-full rounded-md'>rent this van</button>
        </div>
        : <h1 className='font-black text-4xl capitalize'>loading....</h1>
      }
    </div> 
    
  )
}

export default VansDetail