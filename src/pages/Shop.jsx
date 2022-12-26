import { Link } from "react-router-dom";
//? Components
import { PagesRouting } from "../components";
import ShopCategoryArea from "../components/shop/ShopCategoryArea";
//!=========================================================
const Shop = () => {
    return (
        <>
            <PagesRouting>
                <li className="nav_item">
                    <Link to="/" className="nav_link">
                        home
                    </Link>
                </li>
                <li className="nav_item">
                    <span>
                        shop
                    </span>
                </li>
            </PagesRouting>
            <ShopCategoryArea />
        </>
    );
};

export default Shop;