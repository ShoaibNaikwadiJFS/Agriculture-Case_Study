import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './Order.css'

export class Orders extends Component {
    render() {
        return (
            <div className='orders'>
                <div className='order_logo'>
                    <img className='order_image' src="https://cdn.pixabay.com/photo/2020/05/21/11/46/eet-5200425__480.jpg"
                    alt="Something went wrong."
                    /> 

                    <div className='order_heading'>
                        <h2 >Your Orders</h2>
                        <p>
                            You have no orders.
                        </p>
                        <div className='button_div'>
                            <Link to="/home">
                                <button className='button1'>Start Shopping</button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Orders
