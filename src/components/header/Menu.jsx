//? Hooks
import { useState } from "react";
//? React Router DOM
import { Link } from "react-router-dom";
//? React Icons
import { FaTimes } from "react-icons/fa";
//!===========================================================
const Menu = ({ isOpen, openMenu, closeMenu }) => {

    return (
        <div className="menu-container">
            <nav className={`nav ${isOpen ? "open" : ""}`}>
                <button
                    className="close_navbar"
                    onClick={closeMenu}
                >
                    <FaTimes fontSize={"1.25rem"} />
                </button>

                <ul className="menu">
                    <li className="menu-item">
                        <Link to="/" className="menu-link active">
                            home
                        </Link>
                    </li>
                    <li className="menu-item">
                        <Link to="/shop" className="menu-link">
                            shop
                        </Link>
                    </li>
                    <li className="menu-item">
                        <Link to="/about" className="menu-link">
                            about us
                        </Link>
                    </li>
                    <li className="menu-item">
                        <Link to="/contact" className="menu-link">
                            contact us
                        </Link>
                    </li>
                </ul>
            </nav>

            <button
                onClick={openMenu}
                className={`toggle ${isOpen ? "open": ""}`}
            >
                <span className="bars-icon"></span>
            </button>
        </div>
    );
};

export default Menu;