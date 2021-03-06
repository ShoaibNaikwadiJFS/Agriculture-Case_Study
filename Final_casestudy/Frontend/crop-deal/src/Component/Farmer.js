import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './Farmer.css'

class Farmer extends Component {
    render() {
        return (
            <div className='farmer'>
                {/* logo */}
                <Link to="/farmer">
                    {/* <img className='farmer_logo' src='https://wallpapercave.com/wp/wp2916542.jpg' alt='Something went wrong'></img> */}
                    <h1>Crop Deal</h1>
                </Link>
                {/* adding cropdetails */}
                <Link  to="/add">
                    <div className='header_option'>
                        <span className='headerLine_Two'>Add Crops</span>
                    </div>
                </Link>

                {/* <Link  to="/profile">
                    <div className='header_option'>
                        <span className='headerLine_Two'>Profile</span>
                    </div>
                </Link> */}
            </div>
        )
    }
}

export default Farmer
