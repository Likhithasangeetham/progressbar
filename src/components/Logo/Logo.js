import React from "react";
import logo2 from './logo2.png';
import './Logo.css';

const Logo = () => {
    return(
        <div className="ma5 center">
            <img className='' style={{width: '45px', height: '45px'}} src={logo2} alt='logo'/>
            <span className="mt3 f4">Eden</span>
        </div>
    )
}

export default Logo;