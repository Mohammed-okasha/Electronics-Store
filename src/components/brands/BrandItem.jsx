//*? Swiper *********
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from "swiper";
import 'swiper/css';
import 'swiper/css/navigation';
//!===========================================================
const BrandItem = ({brands}) => {
    return (
        <Swiper
            grabCursor={true}
            className="brandSlider"
            modules={[Navigation]}
            navigation
            // autoplay={{
            //     delay: 4000,
            //     disableOnInteraction: false
            // }}
            breakpoints= {{
                0: {
                    slidesPerView: 1,
                    spaceBetween: 0,
                },
                500: {
                    slidesPerView: 2,
                    spaceBetween: 0,
                },
                768: {
                    slidesPerView: 3,
                    spaceBetween: 0,
                },
                1100: {
                    slidesPerView: 5,
                    spaceBetween: 0,
                },
            }}
        >
            {brands.map((brand, index) => {
                return (
                    <SwiperSlide key={index}>
                        <div className="brand-item">
                            <img src={brand.logo}
                                alt="brand logo"
                                className="logo"
                            />
                        </div>
                    </SwiperSlide>
                );
            })}
        </Swiper>
    );
};

export default BrandItem;