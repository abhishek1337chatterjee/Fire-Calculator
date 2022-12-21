import React from 'react'
import { Link } from 'react-router-dom'
import style from '../styles/Navbar.module.css'
export const Navbar = () => {
  return (
    <div className={style.Navbar}>
        <h1><Link to='/'>Fire Calculator</Link></h1>
        <div>
            <ul>
                <li><Link to='/'>Home</Link></li>
                <li>Login</li>
            </ul>
        </div>
    </div>
  )
}
