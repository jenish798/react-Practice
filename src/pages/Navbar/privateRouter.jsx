import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate, Outlet } from 'react-router-dom';

const PrivateRouter = () => {
    const user = useSelector((state)=>state.userInfo.user);

    if(!user){
        return <Navigate to="/login"/>
    }
  return (
    <Outlet/>
  )
}

export default PrivateRouter