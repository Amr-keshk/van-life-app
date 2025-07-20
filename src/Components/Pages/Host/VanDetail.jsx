import React from 'react'
import { useOutletContext } from 'react-router-dom'
const VanDetail = () => {
  const van = useOutletContext()
  return (
    <div>{van.description}</div>
  )
}

export default VanDetail