//? Hooks
import { useState, useEffect } from "react";
//? Components
import ProductSlider from "./ProductSlider";
import Loader from "../loader/Loader";
import loadingImg from "../../assets/images/loading-1.gif";
//? Firebase
import { get, child } from "firebase/database";
import { dbRef } from "../../firebase/config";
//? Redux & Redux Toolkit
import { useSelector } from "react-redux";
import { selectProductsPaths } from "../../RTk/slices/apiPath-slice";
//? Import Swiper ===============
import { Swiper, SwiperSlide } from 'swiper/react';
import {Navigation, Autoplay} from "swiper";
import 'swiper/css';
import 'swiper/css/navigation';
//!================================================================
const NewArrivals = () => {
    const [newArrivals, setNewArrivals] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const {newArrivals: path} = useSelector(selectProductsPaths);

    useEffect(() => {
        setIsLoading(true);

        get(child(dbRef, `products/${path}`))

        .then((snapshot) => {
            setIsLoading(false);
            const data = [];

            if (snapshot.exists()) {

                snapshot.forEach(snapshotChild => {
                    const key = snapshotChild.key;
                    const product = {...snapshotChild.val(), id: key, path: path};

                    // Push product To newArrivals List
                    data.push(product);
                })

                // Set Data To newArrivals
                setNewArrivals(data);

            } else {
                console.log("No Data Avilable");
            }
        })

        .catch((error) => {
            setIsLoading(false);
            console.log(error);
        })

    }, []);

    return (
        <section className="products newArrivals">
            <div className="container" style={{padding: "0"}}>
                <div className="sec-title">
                    <h2>new arrivals</h2>
                </div>
                <div className="row">
                    {isLoading && <Loader LoadingGif={loadingImg} />}

                    <Swiper
                        grabCursor={true}
                        className="cardSlider"
                        modules={[Navigation, Autoplay]}
                        navigation
                        autoplay={{
                            delay: 3000,
                            disableOnInteraction: false
                        }}
                        breakpoints= {{
                            0: {
                                slidesPerView: 1,
                                spaceBetween: 0,
                            },
                            450: {
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

                        style={{padding: "20px 15px"}}
                    >

                        {newArrivals.map(product => {
                            return (
                                <SwiperSlide key={product.id}>
                                    <ProductSlider
                                        product={product}
                                        path={path}
                                    />
                                </SwiperSlide>
                            )
                        })}
                    </Swiper>
                </div>
            </div>
        </section>
    );
};

export default NewArrivals;