import React from 'react'
import { Link } from 'react-router-dom'
import './Farmerheader.css'

function Farmerheader() {
  return (
    <nav className='header'>
           <h1 className = 'htag'>Welcome to Crop System </h1>

 {/* Links */}
 <div className='links'>
                {/* 1st Link */}
                <Link to="/add" className="header_link">
                    <div className='header_option'>
                        <span className='headerLine_One'>Add Crop </span>
                        {/* <span className='headerLine_Two'>Logout</span> */}
                    </div>
                </Link>


                 {/* 1st Link */}
                 <Link to="/farmer" className="header_link">
                    <div className='header_option'>
                        <span className='headerLine_One'>Crop List </span>
                    </div>
                </Link>
    </div>
    </nav>
  )
}

export default Farmerheader