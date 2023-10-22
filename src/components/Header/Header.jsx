import React from "react";
import Logo from "./../../assets/images/logo/BrainFlix-logo.svg";
import SearchIcon from "./../../assets/images/icons/search.svg";
import "./Header.scss";



function Header(){
    return(
        <div className="header">
            <div className="header__logo-container">
                <img src={Logo} className="header__logo" alt="brainflix logo" />
            </div>
            
            <form className="search-form">

            <div className="search-form__wrapper">
                <label className="search-form__label">
                    <img src={SearchIcon} alt="search icon, a doggo in this example" />
                </label>
                <input className="search-form__input" id="search-form__input" type="text" placeholder="search terms"/>
            </div>

            <input type="button" value="search"/>
            </form>
        </div>
     
    );
}

export default Header;