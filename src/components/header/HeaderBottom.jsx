//? Hooks
import { useState } from "react";
//? React Router DOM
import { Link } from "react-router-dom";
//? React Icons
import { FaTimes } from "react-icons/fa";
//!======================================================
const HeaderBottom = ({closeMenu, isOpen}) => {
    const menuLinks = [
        {title: "home", to: "/"},
        {title: "shop", to: "/shop"},
        {title: "about us", to: "/about"},
        {title: "contact us", to: "/contact"}
    ];

    const [index, setIndex] = useState(0);

    // Set Active Link
    const setActiveLink = (linkIndex) => {
        setIndex(linkIndex);
    };

    return (
        <div className={`header_bottom_wrapper ${isOpen ? "open_menu" : ""}`}>
            <div className="container">
                <nav className="nav_menu">
                    <ul className="nav_menu_items">
                        {menuLinks.map((link, linkIndex) => {
                            const {title, to} = link;

                            const activeLink = linkIndex === index ? "active" : "";

                            return (
                                <li className={`menu_item ${activeLink}`} key={linkIndex}>
                                    <Link to={to} className="menu_link"
                                        onClick={() => setActiveLink(linkIndex)}
                                    >
                                        {title}
                                    </Link>
                                </li>
                            );
                        })}
                    </ul>
                </nav>
            </div>

            <button
                    className="close_menu"
                    onClick={closeMenu}
            >
                <FaTimes fontSize={"18px"} />
            </button>
        </div>
    );
};

export default HeaderBottom;