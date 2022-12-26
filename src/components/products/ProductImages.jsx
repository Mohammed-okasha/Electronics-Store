import { useState } from "react";
//!====================================================================
const ProductImages = ({ productImages, title, handleMainImage }) => {
    const [index, setIndex] = useState(0);

    const setActiveImg = (index) => {
        // Update index Value
        setIndex(index);
    };

    return (
        <div className="small_images">
            {productImages.map((img, imgIndex) => {
                return (
                    <div key={imgIndex}
                        className={`image ${imgIndex === index ? "active" : ""}`}
                        onClick={() => {
                            handleMainImage(img);
                            setActiveImg(imgIndex);
                        }}
                    >
                        <img src={img} alt={title} />
                    </div>
                );
            })}
        </div>
    );
};

export default ProductImages