import React from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'
const Navbar = () => {
  return (
    <nav className="navbar">
        <div className="logo">EmTech.</div>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/inform">inform</Link></li>
        <li><Link to="/admin">Admin</Link></li>
      </ul>
    </nav>
  )
}
export default Navbar