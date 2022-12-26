import { ourTeam } from "../../assets/data/ourTeam";
import { Link } from "react-router-dom";
//? Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
//?  Swiper modules
import { Pagination } from 'swiper';
import 'swiper/css/pagination';
//? Swiper styles
import 'swiper/css';
//!========================================================
const TeamMembers = () => {

    return (
        <div className="team_members_wrapper">
            <Swiper
                grabCursor={true}
                modules={[Pagination]}
                pagination={{clickable: true}}
                autoplay={{
                    delay: 4000,
                    disableOnInteraction: true
                }}
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
                        spaceBetween: 20,
                    },
                    1100: {
                        slidesPerView: 3,
                        spaceBetween: 25,
                    },
                }}
            >
                {ourTeam.map((member, index) => {
                    const {image, socialIcons, name, jop} = member;

                    return (
                        <SwiperSlide key={index} style={{paddingBottom: "60px"}}>
                            <div className="team_member">
                                <div className="top_content">
                                    <img src={image} alt="member" />
                                    <div className="social_links">
                                        <ul>
                                            {socialIcons.map((icon, index) => {
                                                return (
                                                    <li className="social_item" key={index}>
                                                        <Link to="#">
                                                            {icon}
                                                        </Link>
                                                    </li>
                                                );
                                            })}
                                        </ul>
                                    </div>
                                </div>

                                <div className="bottom_content">
                                    <strong>{name}</strong>
                                    <span>{jop}</span>
                                </div>
                            </div>
                        </SwiperSlide>
                    );
                })}
            </Swiper>
        </div>
    );
};

export default TeamMembers;