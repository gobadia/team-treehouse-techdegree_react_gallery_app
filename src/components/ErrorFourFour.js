import React from 'react'
import { Link } from 'react-router-dom';


function ErrorFourFour() {
    return (
        <li className="not-found">
            <h3>Page Not Found: 404</h3>
            <p>This page doesn't exist. Click here to head back <Link to="/">home</Link></p>
        </li>
    )
}

export default ErrorFourFour
