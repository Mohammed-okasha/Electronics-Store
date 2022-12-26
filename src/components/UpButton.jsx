import { useState, useEffect } from "react";
import {FaChevronUp} from "react-icons/fa";
//!=============================================
const UpButton = () => {
    const [isScrolling, setIsScrolling] = useState(false);

    const windowScroll = () => {
        window.addEventListener("scroll", function() {

            if (this.scrollY >= 800) {
                setIsScrolling(true);

            } else {
                setIsScrolling(false);
            }
        });
    };

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        })
    };

    useEffect(() => {
        windowScroll();

    }, [isScrolling]);

    return (
        <button className={`up ${isScrolling ? "active" : ""}`}
            onClick={scrollToTop}
        >
            <FaChevronUp color="#fff" fontSize="1rem" />
        </button>
    );
};

export default UpButton;