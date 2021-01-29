import React from 'react'
import { Link } from 'react-router-dom'
import {FaShoppingCart} from 'react-icons/fa';
import { ProductContext } from '../../ProductContext';

export const Navbar = () => {
    const {items} = React.useContext(ProductContext)
    return (
        <nav className="navbar">
            <Link to="/ecommerce-app">
                E-commerce App
            </Link>

            <Link to="/cart">
            <div className="totalItems">
                <span>
                    {
                        items?.products.reduce((total, prod) => total += prod.amount, 0)
                    }
                </span>
                <FaShoppingCart />
            </div>
            </Link>
        </nav>
    )
}
