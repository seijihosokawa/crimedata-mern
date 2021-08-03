import React from 'react';
import { Link } from 'react-router-dom';


const Navbar = () => {
    return(
        <ul>
            <li>
                <Link to="docs/api"> Docs</Link>
            </li>
        </ul>
    )
}

export default Navbar;