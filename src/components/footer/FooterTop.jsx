import { Link } from "react-router-dom";
//? React Icons
import { 
    FaFacebookF,
    FaTwitter,
    FaInstagram,
    FaPinterest,
    FaEnvelope
} from "react-icons/fa";
//!===========================================================
const FooterTop = () => {
    return (
        <div className="footer_top">
            <div className="container">
                <div className="row">
                    <h3 className="widget_title">
                        sign up to newsletter
                    </h3>

                    <div className="newsletter">
                        <input type="email" name="user email"
                            placeholder="Your Email Address"
                            required
                        />

                        <button type="submit" className="submit">
                            <FaEnvelope fontSize="1rem" color="#fff" />
                        </button>
                    </div>

                    <div className="social">
                        <h4>
                            follow us on:
                        </h4>
                        <ul className="links">
                            <li className="link_item">
                                <Link to="#">
                                    <FaFacebookF />
                                </Link>
                            </li>
                            <li className="link_item">
                                <Link to="#">
                                    <FaTwitter />
                                </Link>
                            </li>
                            <li className="link_item">
                                <Link to="#">
                                    <FaInstagram />
                                </Link>
                            </li>
                            <li className="link_item">
                                <Link to="#">
                                    <FaPinterest />
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default FooterTop;