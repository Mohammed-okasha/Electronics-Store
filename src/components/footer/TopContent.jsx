import OurLogo from "../OurLogo";
import { Link } from "react-router-dom";
//? React Icons
import { FaHeadset, FaTruck, FaPercent } from "react-icons/fa";
//!===================================================================
const TopContent = () => {
    return (
        <div className="top_content_wrapper">
            <div className="col">
                <OurLogo />
            </div>
            <div className="col">
                <FaHeadset />
                <Link to="#">
                    <strong>01151146084</strong>
                </Link>
            </div>
            <div className="col">
                <FaTruck />
                <strong>Amounts over $100</strong>
            </div>
            <div className="col">
                <FaPercent />
                <strong>Save up to 20%</strong>
            </div>
        </div>
    );
};

export default TopContent;