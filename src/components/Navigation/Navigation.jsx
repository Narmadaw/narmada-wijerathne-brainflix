import {Link} from "react-router-dom";
import Logo from "./../../assets/images/logo/BrainFlix-logo.svg";
import ProfileImage from "./../../assets/images/Mohan-muruge.jpg";
import "./Navigation.scss";



function Navigation(){
    return(
        <section className="nav">
            <nav className="nav__logo-container">
            <Link to="/">
            <div >
                <img src={Logo} className="nav__logo" alt="brainflix logo" />
            </div>
            </Link>
            <input type="text" className="nav__input" name="search" placeholder="Search" />
            <img className="nav__profile-image" src={ProfileImage} alt="profile" />
            
            <Link to="/videoupload"><button className="nav__search-button" type="button">UPLOAD</button></Link>
            </nav>
        </section>
    );
}

export default Navigation;