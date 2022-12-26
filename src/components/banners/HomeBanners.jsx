import banner_1 from "../../assets/images/banner-1-h2.jpg";
import banner_2 from "../../assets/images/banner-2-h2.jpg";
import { Link } from "react-router-dom";
//!=====================================================
const Banners = () => {
    return (
        <section className="banners">
            <div className="container">
                <div className="row">
                    <div className="banner">
                        <Link to="/">
                            <img src={banner_1} alt="shop banner" className="img-fluid" />
                        </Link>
                    </div>
                    <div className="banner">
                        <Link to="/">
                            <img src={banner_2} alt="shop banner" className="img-fluid" />
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Banners;