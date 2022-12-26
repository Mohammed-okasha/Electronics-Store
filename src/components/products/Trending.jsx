//? Hooks
import { useEffect, useState } from "react";
//? Loading Gif
import LoadingGif from "../../assets/images/loading-1.gif";
//? Firebase
import { dbRef } from "../../firebase/config";
import { get, child } from "firebase/database";
//? Components
import Loader from "../loader/Loader";
import ProductSlider from "./ProductSlider";
//? Redux Toolkit
import { selectProductsPaths } from "../../RTk/slices/apiPath-slice";
import { useSelector } from "react-redux";
//? Import Swiper ===============
import { Swiper, SwiperSlide } from 'swiper/react';
import {Navigation} from "swiper";
import 'swiper/css';
import 'swiper/css/navigation';
//!================================================================
const Trending = () => {
    const [products, setProducts] = useState([]);
    const {trending} = useSelector(selectProductsPaths);

    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        // Set isLoading > true
        setIsLoading(true);

        // Get Products Data From Database
        get(child(dbRef, `products/${trending}`))

        .then((snapShot) => {
            // Set isLoading > false
            setIsLoading(false);
            const data = [];

            if (snapShot.exists()) {
                //* Looping On snapShot
                snapShot.forEach(snapShotChild => {
                    const key = snapShotChild.key;
                    const child = {
                        ...snapShotChild.val(),
                        id: key,
                        path: trending
                    };

                    //* Push Child To Data []
                    data.push(child);
                });

                // Set data To products
                setProducts(data);

            } else {
                console.log("No Data Avilable");
            };
        })

        .catch(error => {
            // Set isLoading > false
            setIsLoading(false);
            console.log(error);
        });

    }, [])

    return (
        <section className="products trending">
            <div className="container" style={{padding: "0"}}>
                <div className="sec-title">
                    <h2>trending products</h2>
                </div>
                <div className="row">
                    {isLoading && <Loader LoadingGif={LoadingGif}/>}

                    <Swiper
                        grabCursor={true}
                        className="cardSlider"
                        modules={[Navigation]}
                        navigation
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

                        {products.map(product => {

                            return (
                                <SwiperSlide key={product.id}>
                                    <ProductSlider
                                        product={product}
                                        path={trending}
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

export default Trending;