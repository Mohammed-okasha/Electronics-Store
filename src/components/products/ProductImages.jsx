import { useState, useContext } from "react";
import { mainImageContext } from "../../pages/ProductDetails";
//!====================================================================
const ProductImages = ({ productImages, title }) => {
    const [index, setIndex] = useState(0);
    const setMainImage = useContext(mainImageContext);

    const setActiveImg = (img, index) => {
        // Update index Value
        setIndex(index);
        setMainImage(img);
    };

    return (
        <div className="small_images">
            {productImages.map((img, imgIndex) => {
                return (
                    <div key={imgIndex}
                        className={`image ${imgIndex === index ? "active" : ""}`}
                        onClick={() => setActiveImg(img, imgIndex)}
                    >
                        <img src={img} alt={title} />
                    </div>
                );
            })}
        </div>
    );
};

export default ProductImages