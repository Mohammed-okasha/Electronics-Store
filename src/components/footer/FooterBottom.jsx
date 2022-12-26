//? Components
import TopContent from "./TopContent";
import BottomContent from "./BottomContent";
//!=================================================
const FooterBottom = () => {
    return (
        <div className="footer_bottom">
            <div className="container">
                <TopContent />
                <BottomContent />
            </div>
        </div>
    );
};

export default FooterBottom;