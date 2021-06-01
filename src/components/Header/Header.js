import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';

const Header = () => {
    return(
        <header>
            <nav>
                <ul>
                    <li><NavLink activeClassName="active" exact to="/">Home</NavLink></li>
                    <li><NavLink activeClassName="active"  to="/products">Products</NavLink></li>
                </ul>
            </nav>
        </header>
    )
}

export default Header;