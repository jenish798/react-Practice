import React from 'react'
import { useParams } from 'react-router-dom'

const UserProfile = () => {
    const {userId} = useParams();
  return (
    <div>
        <h1>User Profile</h1>
        <p>Showing profile for User ID:{userId}</p>
    </div>
  )
}

export default UserProfile