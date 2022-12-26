import { Link } from "react-router-dom";

const FooterLinks = ({ title, links }) => {
    return (
        <div className="col">
            <h5 className="title">
                {title}
            </h5>

            <ul className="nav_links">
                {links.map((link, index) => {
                    return (
                        <li key={index} className="nav_item">
                            <Link to="#" className="nav_link">
                                {link}
                            </Link>
                        </li>
                    );
                })}
            </ul>
        </div>
    );
};

export default FooterLinks