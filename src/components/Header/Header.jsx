import React from 'react'
import s from './Header.module.css'
import { NavLink } from 'react-router-dom'

const Header = () => {
  return (
    <div className={s.head}>
        <nav>
            <ul>
                <li><NavLink to="/starwars">Starwras</NavLink></li>
                <li><NavLink to="/weather">Weather</NavLink></li>
                <li><NavLink to="/pokemon">Pokemon</NavLink></li>
            </ul>
        </nav>
    </div>
  )
}

export default Header

