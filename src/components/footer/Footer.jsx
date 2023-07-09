import {
    FaFacebookF,
    FaInstagram,
    FaTwitter,
    FaLinkedin,
} from "react-icons/fa";

import "./style.scss";
import ContentWrapper from "../contentWrapper/contentWrapper";
import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <footer className="footer">
            <ContentWrapper>
                <ul className="menuItems">
                    <li className="menuItem">Terms Of Use</li>
                    <li className="menuItem">Privacy-Policy</li>
                    <li className="menuItem">About</li>
                    <li className="menuItem">Blog</li>
                    <li className="menuItem">FAQ</li>
                </ul>
                <div className="infoText">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur.
                </div>
                <div className="socialIcons">
                    <span className="icon">
                        <FaFacebookF />
                    </span>
                    <span className="icon">
                    <a href="https://instagram.com/theadityasrivastav_?igshid=MzNlNGNkZWQ4Mg==" target="_blank" rel="noopener noreferrer" style={{textDecoration:"none",color:"inherit"}}><FaInstagram /></a>
                    </span>
                    <span className="icon">
                        <a href="http://google.com" target="_blank" rel="noopener noreferrer" style={{textDecoration:"none",color:"inherit"}}><FaTwitter /></a>
                    </span>
                    <span className="icon">
                    <a href="https://www.linkedin.com/in/aditya-raj-9b2165227/" target="_blank" rel="noopener noreferrer" style={{textDecoration:"none",color:"inherit"}}><FaLinkedin /></a>
                    </span>
                </div>
            </ContentWrapper>
        </footer>
    );
};

export default Footer;