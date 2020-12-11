import React from 'react';
import { NavLink } from 'react-router-dom';


function Nav() {

    
    return (
        <nav className="main-nav">
            <ul>
            <li><NavLink to='/birthday%20cake'>Bday Cake</NavLink></li>
            <li><NavLink to='/coffee%20Cake'>Coffee Cake</NavLink></li>
            <li><NavLink to='/ice%20cream'>Ice Cream</NavLink></li>
            </ul>
      </nav>
    )
}

export default Nav
