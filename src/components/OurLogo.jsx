//? React Router DOM
import { Link } from "react-router-dom";

const OurLogo = ({color}) => {
    return (
        <Link to="/" className="our_logo" style={{color: color}}>
            <strong>electro</strong>
            <span>.</span>
        </Link>
    );
}

export default OurLogo;