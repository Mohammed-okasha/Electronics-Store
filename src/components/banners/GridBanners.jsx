import { useState } from "react";
import { Link } from "react-router-dom";
import { bannersLsit } from "../../assets/data/banners";
import BannersCategories from "./BannersCategories";
//!======================================================
const GridBanners = () => {
    const [banners, setBanners] = useState(() => bannersLsit);

    return (
        <section className="grid_home_banners">
            <div className="container">
                <div className="row">

                    <Link className="featured_category">
                        <div to="/cart" className="cat-title">
                            <h4>smartphones</h4>
                        </div>
                    </Link>

                    <BannersCategories bannersList={banners} />
                </div>
            </div>
        </section>
    );
};

export default GridBanners;