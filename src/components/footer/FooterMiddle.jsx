import { footerItems } from "../../assets/data/footerItems";
import FooterLinks from "./FooterLinks";
//!=========================================================
const FooterMiddle = () => {
    return (
        <div className="footer_middle">
            <div className="container">
                <div className="row">
                    {footerItems.map((item, index) => {
                        const { title, links } = item;

                        return (
                            <FooterLinks key={index} title={title} links={links} />
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

export default FooterMiddle;