//? React Router DOM
import { Link } from "react-router-dom";
//? Contact Page Components
import {
    PagesRouting,
    LocationMap,
    ContactInfo,
    AboutUs

} from "../components";
//!=======================================================
const Contact = () => {
    return (
        <>
            <PagesRouting>
                <li className="nav_item">
                    <Link to="/" className="nav_link">
                        home
                    </Link>
                </li>

                <li className="nav_item">
                    <span >
                        contact us
                    </span>
                </li>
            </PagesRouting>
            <LocationMap />
            <ContactInfo />
            {/* <AboutUs /> */}
        </>
    );
};

export default Contact;