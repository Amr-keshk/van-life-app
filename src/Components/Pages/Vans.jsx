import React from 'react'
import { Link, useLoaderData } from 'react-router-dom';
import { useSearchParams } from 'react-router-dom';
import { getVans } from '../../api';

export async function loader() {
  return await getVans();
}

const Vans = () => {
  const vans = useLoaderData();

  const [searchParams, setSearchParams] = useSearchParams();


  const filterType = searchParams.get("type");

  const filterdVans = filterType ? vans.filter(van => {
    return (van.type === filterType.toLowerCase())
  }) : vans
  const vansHTML = filterdVans.map((van, i) => {
    return (
      <Link to={van.id} key={i} state={{search: searchParams.toString(), type: filterType}}>
        <div>
          <img className='rounded-md ' src={van.imageUrl} alt="" />
          <div className='flex justify-between my-2'>
            <h3 className='font-medium text-xl'>{van.name}</h3>
            <div>
              <strong className='text-xl'>${van.price}</strong>
              <span className='block -mt-1'>/day</span>
            </div>
          </div>
          <button className={`py-1 px-4 text-orange-50 rounded-md font-medium capitalize bg-orange-200 ${van.type}`}>{van.type}</button>
        </div>
      </Link>
    )
  })
  return (
    <div className='px-6 py-12 bg-orange-50 '>
      <h1 className='capitalize font-bold text-xl'>explore our van options</h1>
      <ul className='flex items-center gap-4 mt-5'>
        <li><Link onClick={() => {setSearchParams({type:"simple"})}} className={`${filterType === "simple" && "simple text-orange-50" } type-button bg-orange-100`} to="?type=simple">simple</Link></li>
        <li><Link onClick={() => {setSearchParams({type:"luxury"})}} className={`${filterType === "luxury" && "luxury text-orange-50" } type-button bg-orange-100`} to="?type=luxury">luxury</Link></li>
        <li className='mr-auto'><Link onClick={() => {setSearchParams({type:"rugged"})}} className={`${filterType === "rugged" && "rugged text-orange-50" } type-button bg-orange-100`} to="?type=rugged">rugged</Link></li>
        <li><Link className='underline capitalize font-medium' to="">clear filters</Link></li>
      </ul>

      <div className='grid grid-cols-2 gap-6 mt-6'>
        {vans.length > 0 ? vansHTML : <h1 className='capitalize font-black text-4xl'>loading...</h1>}
      </div>
    </div>
  )
}

export default Vans