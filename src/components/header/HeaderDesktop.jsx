//? Header Components
import HeaderTop from "./HeaderTop";
import HeaderBottom from "./HeaderBottom";
// import Menu from "./Menu";
import Ovetlay from "../Overlay";
//? Hooks
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
//!===========================================================
const HeaderDesktop = () => {
    const [isScrolling, setIsScrolling] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const { pathname } = useLocation();

    // Open Menu
    const openMenu = () => {
        setIsOpen(!isOpen);
    };
    // Close Menu
    const closeMenu = () => {
        setIsOpen(false);
    };

    const windowScroll = () => {
        window.addEventListener("scroll", function() {
            // Reset isOpen value
            setIsOpen(false);

            if (this.scrollY >= 100) {
                setIsScrolling(true);

            } else {
                setIsScrolling(false);
            };
        });
    };

    useEffect(() => {
        windowScroll();
    }, [isScrolling]);

    useEffect(() => {
        setIsOpen(false);

    }, [pathname]);

    return (
        <div className={`header_desktop ${isScrolling ? "header_fixed" : ""}`}>
            <Ovetlay isOpen={isOpen} closeMenu={closeMenu} />
            <HeaderTop openMenu={openMenu} />
            <HeaderBottom isOpen={isOpen} closeMenu={closeMenu} />
        </div>
    );
};

export default HeaderDesktop;