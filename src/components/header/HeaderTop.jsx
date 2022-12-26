import OurLogo from "../OurLogo";
import SearchProductArea from "./SearchProductArea";
import HeaderBtns from "./HeaderBtns";
//!=============================================================
const HeaderTop = ({openMenu}) => {
    return (
        <div className="header_top_wrapper">
            <div className="container">
                <div className="header_top_content">
                    <OurLogo color="#333E48" />
                    <SearchProductArea />
                    <HeaderBtns openMenu={openMenu} />
                </div>
            </div>
        </div>
    );
};

export default HeaderTop;