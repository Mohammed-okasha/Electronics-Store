//? React Icons
import { FaSearch } from "react-icons/fa";
//!==================================================
const NotFound = () => {
    return (
        <div className="notFound_msg">
            <span className="icon">
                <FaSearch size="3rem" color="#146CDA" />
            </span>

            <h2 className="notFound_title">
                no products found
            </h2>
        </div>
    );
};

export default NotFound;