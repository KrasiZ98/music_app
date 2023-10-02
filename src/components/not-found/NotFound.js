import React from 'react'
import { Link } from 'react-router-dom'

export const NotFound = () => {
  return (
    <div>
        <h1 style={{color: 'white'}}>Page is not found</h1>
        <p style={{color: 'white'}}>If you want to go to home page <Link to='/'>click here</Link></p>
    </div>
  )
}
