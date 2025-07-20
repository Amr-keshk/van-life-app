import React from 'react'
import { useOutletContext } from 'react-router-dom'

const VanPricing = () => {
  const van = useOutletContext();
  return (
    <div>${van.price}/day</div>
  )
}

export default VanPricing