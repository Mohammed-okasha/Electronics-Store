//? React Router DOM
import { Link } from "react-router-dom";
//? About Page Components
import { 
    PagesRouting,
    AboutUs,
    OurAdvantages,
    AboutUsVideo,
    Testimonials,
    OurTeam

} from "../components";
//!=======================================================
const About = () => {
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
                        about us
                    </span>
                </li>
            </PagesRouting>
            <AboutUs />
            <OurAdvantages />
            <AboutUsVideo />
            <Testimonials />
            <OurTeam />
        </>
    );
};

export default About;