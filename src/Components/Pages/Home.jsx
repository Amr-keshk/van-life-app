import React from 'react'

const Home = () => {
  return (
    <div className='relative  bg-home  h-96 flex items-center justify-center'>
      <div className='w-full h-full bg-black opacity-60 absolute'></div>
      <div className='p-10 z-10'>
        <h1 className='font-bold text-4xl text-slate-100'>You got the travel plans, we got the travel vans.</h1>
        <p className='py-8 text-slate-100 capitalize font-medium text-lg'>Lorem ipsum dolor elit. Ipsam ducimus maiores perspiciatis consequatur doloremque magnam neque officia reiciendis atque quos.</p>
        <button className='bg-orange-400 rounded-md w-full text-slate-100 text-xl font-medium py-4 capitalize'>find your vans</button>
      </div>
    </div>
  )
}

export default Home