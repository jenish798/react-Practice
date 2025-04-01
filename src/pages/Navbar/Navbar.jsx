import React from 'react'
import { Link } from 'react-router-dom';
import "./Navbar.css";
import { useDispatch, useSelector } from 'react-redux';
import { removeUser } from '../../slices/userSlice';

const Navbar = () => {
    const user = useSelector((state)=>state.userInfo.user)
    const dispatch = useDispatch();
    const logout = () =>{
        dispatch(removeUser());
        Navigate("/")
    }
  return (
    <nav>
        <h1>Jenish</h1>
        <ul>
            {!user && (
            <Link to="/login">
            <li>Login</li>
            </Link>
            )}
            {user &&(
            <>
            <Link to="/settings">
            <li>Settings</li>
            </Link>
            <li onClick={logout}>Logout</li>
            </>
            )}
            
        </ul>
    </nav>
  )
}

export default Navbar
