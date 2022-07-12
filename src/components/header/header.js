import React from "react";
import { Link } from "react-router-dom";

import './header.css';

const Header = () => {
    return(
        <div className="header">
            <h1 className="header-title">
                <Link to="/"> StarDB </Link>
            </h1>
            <ul className="header-list">
                <li className="header-list__item">
                    <Link to="/people"> Persons </Link>
                </li>
                <li className="header-list__item">
                    <Link to="/planet" >Planets</Link>
                </li>
                <li className="header-list__item">
                    <Link to="/starship" >Starships</Link>
                </li>
            </ul>
        </div>
    )
}

export default Header;