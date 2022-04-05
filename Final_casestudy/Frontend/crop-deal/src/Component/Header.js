import React from 'react'
import { Link } from 'react-router-dom'
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket'
import './Header.css'
import {useStateValue} from './StateProvider'
import { useHistory } from 'react-router-dom'
import { Spa } from '@material-ui/icons'

function Header() {

    const [{ basket }] = useStateValue();

    console.log(basket);

    const Logout = () => { if (typeof window !== "undefined") { localStorage.removeItem("jwt"); history("/") } };

    const history = useHistory();

    return (
        <nav className='header'>
           <h1 className = 'htag'>Welcome to Crop System </h1>


           

            {/* <div className='search'>
                <input type="text" className='searchInput' placeholder='What would you like to buy today?'/>
                <SearchIcon className='searchIcon' />
            </div> */}

            {/* Links */}
            <div className='links'>
                {/* 1st Link */}
                {/* <Link to="/login" className="header_link">
                    <div className='header_option'>
                        
                        <span className='headerLine_One'>Login </span> 
                        <span className='headerLine_Two'>Sign In</span>
                    </div>
                </Link> */}

                {/* 2nd Link */}
                <Link to="/orders" className="header_link">
                    <div className='header_option'>
                        <span className='headerLine_One'>Your</span>
                        <span className='headerLine_Two'>Orders</span>
                    </div>
                </Link>

                {/* 3rd link */}
                <Link to="/checkout" className='header_link'>
                    <div className='header_Basket'>
                        {/* Basket Icon */}
                        <ShoppingBasketIcon />
                        {/* Number of items in the Basket */}
                        <span className='headerLine_Two BasketCount'>{basket.length}</span>
                    </div>
                </Link>
                <Link to="/">
                <div className='logout'>
                        {localStorage.getItem("jwt") && (<ul class="navbar-nav  mb-2 mb-lg-0"> <li className="nav-item">
                            <h6 onClick={Logout} style={{ color: "white" }}>Logout</h6></li></ul>)}
                </div>
                </Link>
            </div>
        </nav>
    )
}

export default Header
