import { Link } from "react-router-dom";

const BannersCategories = ({bannersList}) => {
    return (
        <div className="banners_categories">
            {bannersList.map((banner, index) => {
                const {image, category, bgColor} = banner;

                return (
                    <div className="banner_cat"
                        key={index + 1}
                        style={{backgroundColor: bgColor}}
                    >
                        <Link to="#">
                            <img src={image} alt={category} className="banner_img" />
                            <div className="banner_title">
                                <h5>{category}</h5>
                            </div>
                        </Link>
                    </div>
                );
            })}
        </div>
    );
};

export default BannersCategories;