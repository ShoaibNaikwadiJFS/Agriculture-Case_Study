import React from 'react'
import { Link } from 'react-router-dom'
import Footer from '../Component/Footer'
import './Home.css'


function Defaultpage() {
  return (
      <>
    <nav className='header1'>
           <h1 className = 'htag10'>Welcome to Crop System </h1>
           
           {/* Links */}
            <div className='links'>
                {/* 1st Link */}
                <Link to="/login" className="header_link167">
                    <div className='separation'>
                        <span className='separation1' >Login </span>
                        <span className='separation2'>Sign In</span>
                    </div>
                </Link>
                </div>  
     </nav>
     <div>
           <img 
        className='home_image2'
        src="https://wallpaperaccess.com/full/4293117.jpg"
        alt=""
        />
    </div>
    <div className='footer10'>
      <Footer/>
      </div>
      </>
                )
}
export default Defaultpage