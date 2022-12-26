import { useState } from "react";
import { Link } from "react-router-dom";
import { slidersData } from "../assets/data/slider-data";
//? Icons
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { useEffect } from "react";
//!================================================================
const Slider = () => {
    const [sliders, setSliders] = useState(slidersData);
    const [slidersCount, setSlidersCount] = useState(sliders.length);

    const [index, setIndex] = useState(0);

    // Next Slider
    const nextSlider = () => {
        // increase index Vlaue By One
        setIndex(index + 1);

        if (index >= slidersCount - 1) {
            // Set index Vlaue > 0
            setIndex(0);
        };
    };

    // Prev Slider
    const prevSlider = () => {
        // Decrease index Vlaue By One
        setIndex(index - 1);

        if (index <= 0) {
            setIndex(slidersCount - 1);
        };
    };

    // Auto Slider
    const autoSlider = () => {
        // increase index Vlaue By One
        setIndex(index + 1);

        if (index >= slidersCount - 1) {
            // Set index Vlaue > 0
            setIndex(0);
        };
    };

    useEffect(() => {
        let sliderInterval = setInterval(autoSlider, 4000);

        return () => clearInterval(sliderInterval);
    }, [index])

    return (
        <section id="sliders">
            {sliders.map((slider, sliderIndex) => {
                const {text, title, offer, image} = slider;

                let position = "next";

                if (sliderIndex === index) {
                    position = "active";
                };

                if (sliderIndex === index - 1 || (
                    index === 0 && sliderIndex === slidersCount - 1
                )) {
                    position = "prev";
                };

                return (
                    <div className={`slider ${position}`} key={sliderIndex}>
                        <div className="container">
                            <div className="row">
                                <div className="slider-content">
                                    <div>
                                        <span className="text">{text}</span>
                                        <h1 className="title">{title}</h1>
                                        <p className="desc text-muted">{offer}</p>
                                    </div>
                                    <Link to="/shop" className="shop">shop now</Link>
                                </div>
                                <div className="slider-img">
                                    <img src={image} alt="slider-img" />
                                </div>
                            </div>
                        </div>
                    </div>
                );
            })}

            {/* Control Btns */}
            <div className="control-btns">
                <button className="btn prev" onClick={prevSlider}>
                    <FaChevronLeft fontSize={20} />
                </button>
                <button className="btn next"
                    onClick={nextSlider}
                >
                    <FaChevronRight fontSize={20} />
                </button>
            </div>
        </section>
    );
};

export default Slider;