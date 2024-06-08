import React from 'react'
import logo from '../images/logo.svg'
import '../styles/Navbar.css'

const Navbar = () => {
  return (
    <div className='navbar m-0 p-0 justify-content-center'>
        <div className="w-100 p-0">
            <ul className='list-unstyled d-flex'>
                <li>CONTACT</li>
                <li>PROJECTS</li>
                <li>PRODUCTS</li>
                <li>CAREERS</li>
                <img className='ms-auto img-fluid' src={logo} alt="" srcset="" />
            </ul>
        </div>
    </div>
  )
}

export default Navbar