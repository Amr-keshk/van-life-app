import React from 'react'
import { useOutletContext } from 'react-router-dom'

const VanPhoto = () => {
  const van = useOutletContext();

  return (
    <div>
      <img src={van.imageUrl} alt={`photo of ${van.name}`} />
    </div>
  )
}

export default VanPhoto