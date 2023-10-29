import {Link} from "react-router-dom";
import Logo from "./../../assets/images/logo/BrainFlix-logo.svg";
import ProfileImage from "./../../assets/images/Mohan-muruge.jpg";
import "./Header.scss";



function Header(){
    return(
        <div className="header">
            <nav className="header__container">
                <Link className="header__logo-link" to="/">
                    <img src={Logo} className="header__logo" alt="brainflix logo" />
                </Link>
                <input type="text" className="header__input" name="search" placeholder="Search" /> 
                <img className="header__profile-image" src={ProfileImage} alt="profile" />
                <Link className="header__upload-link" to="/videoupload">
                    <button className="header__upload-button" type="button">UPLOAD</button>
                </Link>
            </nav>
        </div>
    );
}

export default Header;