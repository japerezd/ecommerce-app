import React from 'react'
import { Link } from 'react-router-dom'
import {FaShoppingCart} from 'react-icons/fa';

export const Navbar = () => {
    return (
        <nav className="navbar">
            <Link to="/">
                E-commerce App
            </Link>

            <Link to="/cart">
                <FaShoppingCart />
            </Link>
        </nav>
    )
}
