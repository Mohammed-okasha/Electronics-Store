//? React Icons
import { FaPhone, FaEnvelope, FaMap, FaClock } from "react-icons/fa";
import ContactItem from "./ContactItem";
//!=========================================================
const Ourdata = () => {
    return (
        <div className="our_data">
            <div className="title">
                <h2 className="custom-title">
                    <span>Get in touch with us</span>
                </h2>
                <p className="text-muted">
                    lorem ipsum dolor sit amet, cons ectetur adipiscing elitull am aliqu am,
                    velit rutrum dictum lobortis, turpis justo auc tor quam,
                    a auctor. Vix ut ignota deserunt partien ad, pros tale falli periculis ad,
                    idque deseruisse constituam.
                </p>
            </div>
            <p className="text-muted">
                Nam nibh purus, fermentum sit amet lorem eget, pellentesque.
                Vestibulum vestibulum urna odio, non pulvinar mauris cursus.
            </p>

            <ul className="contact_items">
                <ContactItem icon={<FaPhone />}
                    text="01151146084"
                />
                <ContactItem icon={<FaEnvelope />}
                    text="mokasha773@gmail.com"
                />
                <ContactItem icon={<FaMap />}
                    text="cairo, egypt"
                />
                <li  className="contact_item">
                    <FaClock />
                    <span className="text">
                        Monday to Friday: 9am-10pm
                        <br />
                        Saturday to Sunday: 9am-12pm
                    </span>
                </li>
            </ul>
        </div>
    );
};

export default Ourdata;