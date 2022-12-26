import aboutImg_1 from "../../assets/images/about_img1.jpg";
import aboutImg_2 from "../../assets/images/about_img2.jpg";
//!==================================================
const ImagesWrapper = () => {
    return (
        <div className="images_wrapper">
            <div className="image">
                <img src={aboutImg_1} alt="about-img" />
            </div>
            <div className="image">
                <img src={aboutImg_2} alt="about-img" />
            </div>
        </div>
    );
};

export default ImagesWrapper;