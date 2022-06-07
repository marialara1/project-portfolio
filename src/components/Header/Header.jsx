import React from 'react';
import { Link } from "react-router-dom";
// import menu from './menu-stars.png';
import './Header.css';

function Header () {
    return <Link to={`/`}>  
    <div className='header__container'>
        
        <header  className="header-container">

            <a   className="header-title__container" href=""> 
                <span className="header-title__name">María Lara UX-Developer</span> 
            </a>
                    <nav className="header-title__menu">(menu)</nav> 
            {/* <a  className="header-menu" href="">
                <img src={menu} alt="" />
            </a> */}

        </header>

        {/* <hr className='hr-header' /> */}
    </div>
 </Link>

}

export default Header;