import { Link } from "react-router-dom";
import catImg_1 from "../assets/images/cat-1.webp";
import catImg_2 from "../assets/images/cat-2.webp";
import catImg_3 from "../assets/images/cat-3.webp";
import catImg_4 from "../assets/images/cat-4.webp";
import catImg_5 from "../assets/images/cat-5.webp";
//!======================================================================
const ShopCategories = () => {
    return (
        <section className="categories">
            <div className="container">
                <div className="row">
                    <div to="#" className="cat">
                        <Link to="#" className="cat-img">
                            <img src={catImg_1} alt="laptops" />
                        </Link>
                        <div className="cat-text">
                            <Link to="#">
                                laptops
                            </Link>
                        </div>
                    </div>
                    <div to="#" className="cat">
                        <Link to="#">
                            <img src={catImg_2} alt="smart phones" />
                        </Link>
                        <div className="cat-text">
                            <Link to="#">
                                smart phones
                            </Link>
                        </div>
                    </div>
                    <div to="#" className="cat">
                        <Link to="#">
                            <img src={catImg_3} alt="cameras" />
                        </Link>
                        <div className="cat-text">
                            <Link to="#">
                                cameras
                            </Link>
                        </div>
                    </div>
                    <div to="#" className="cat">
                        <Link to="#">
                            <img src={catImg_4} alt="headphones" />
                        </Link>
                        <div className="cat-text">
                            <Link to="#">
                                headphones
                            </Link>
                        </div>
                    </div>
                    <div to="#" className="cat">
                        <Link to="#">
                            <img src={catImg_5} alt="television" />
                        </Link>
                        <div className="cat-text">
                            <Link to="#">
                                television
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ShopCategories;