import React from 'react'
import { useRouteError } from 'react-router-dom'

const Error = () => {
  const error = useRouteError();
  return (
    <div>
      <h1>{`Message: ${error.message}`}</h1>
      <h1>{`Status Text: ${error.statusText}`}</h1>
      <h1>{`Status: ${error.status}`}</h1>
    </div>
  )
}

export default Error