import React from "react";
import Logo from "./../../assets/images/logo/BrainFlix-logo.svg";
import ProfileImage from "./../../assets/images/Mohan-muruge.jpg";
import "./Navigation.scss";



function Navigation(){
    return(
        <section className="nav">
            <div className="nav__logo-container">
                <img src={Logo} className="nav__logo" alt="brainflix logo" />
            </div>
            <input type="text" className="nav__input" name="search" placeholder="Search" />
            <img className="nav__profile-image" src={ProfileImage} alt="profile" />
            <button className="nav__search-button" type="button">UPLOAD</button>
        </section>
    );
}

export default Navigation;