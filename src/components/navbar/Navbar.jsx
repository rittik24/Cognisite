import React from 'react'
import "./navbar.css"
import { Link } from "react-router-dom"
const Navbar = () => {
  return (
    <div className='navbar'>         
            
            <Link style={{color:"yellow", textDecoration:"none"}} to="/">SignUp</Link>
            <Link style={{color:"yellow", textDecoration:"none"}} to="/login">Login</Link>
            <Link style={{color:"yellow", textDecoration:"none"}} to="/todo">Todo</Link>
        </div>
  )
}
export default Navbar