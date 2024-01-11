import React from 'react'
import './nav.css'
import { Link } from 'react-router-dom'

const Nav = () => {
  return (
    <nav>
      <ul>
        <li><Link className='link' to="/">Hjem</Link></li>
        <li><Link className='link' to="/advokaterne">Advokaterne</Link></li>
        <li><Link className='link' to="/om">Om LeoLov</Link></li>
        <li><Link className='link' to="/kontakt">Kontakt</Link></li>
      </ul>
      <span className="logo">Leo<span>-Lov</span></span>
    </nav>
  )
}

export default Nav