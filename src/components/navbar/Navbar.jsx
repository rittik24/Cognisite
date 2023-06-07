import React from 'react'
import "./navbar.css"
import { Link } from "react-router-dom"
const Navbar = () => {
  return (
    <div className='navbar'>         
            <Link to="/">Login</Link>
            <Link to="/signup">SignUp</Link>
            <Link to="/todo">Todo</Link>
        </div>
  )
}
export default Navbar