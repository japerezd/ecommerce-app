import React from 'react'
import { Link } from 'react-router-dom'

export const Navbar = () => {
    return (
        <nav className="navbar">
            <Link to="/">
                E-commerce App
            </Link>

            <Link to="/cart">
                Cart
            </Link>
        </nav>
    )
}
