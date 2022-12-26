import { testimonials } from "../../assets/data/testimonials";
//? React Icons
import { FaQuoteRight } from "react-icons/fa";
//? Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
//?  Swiper modules
import { Pagination } from 'swiper';
import 'swiper/css/pagination';
//? Swiper styles
import 'swiper/css';
//!==============================================================
const TestimonialsItems = () => {
    return (
        <div className="testimonials_items_wrapper">
            <Swiper
                grabCursor={true}
                modules={[Pagination]}
                pagination={{clickable: true}}
                breakpoints= {{
                    0: {
                        slidesPerView: 1,
                        spaceBetween: 0,
                    },
                    600: {
                        slidesPerView: 2,
                        spaceBetween: 20,
                    },
                    768: {
                        slidesPerView: 2,
                        spaceBetween: 30,
                    },
                    1100: {
                        slidesPerView: 3,
                        spaceBetween: 25,
                    },
                }}
            >
                {testimonials.map((item, index) => {
                    const {title, content, rateing, client} = item;

                    return (
                        <SwiperSlide key={index} style={{paddingBottom: "60px"}}>
                            <div className="testimonial_item">
                                <div className="title">
                                    <h4>{title}</h4>
                                    <FaQuoteRight fontSize="1.25rem" />
                                </div>

                                <ul className="rating">
                                    {rateing.map((star, index) => {
                                        return (
                                            <li className="star" key={index}>
                                                {star}
                                            </li>
                                        );
                                    })}
                                </ul>

                                <p className="text-muted"
                                    style={{margin: "15px 0"}}
                                >
                                    {content}
                                </p>

                                <div className="client">
                                    <img src={client.image} alt="client" className="client_img" />
                                    <div className="client_info">
                                        <strong>{client.name}</strong>
                                        <span>{client.job}</span>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    );
                })}
            </Swiper>
        </div>
    );
};

export default TestimonialsItems;