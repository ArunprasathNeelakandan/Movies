import { FaInstagram } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa";
import { IoLogoTwitter } from "react-icons/io";
import { FaYoutube } from "react-icons/fa";
import './index.css'

const Footer = () => {
    return (
        <div className="footer">
            <div className="footer-icon-section">
                <FaGoogle />
                <IoLogoTwitter />
                <FaInstagram />
                <FaYoutube />
            </div>
            <p>Contact Us</p>
        </div>
    )
}

export default Footer