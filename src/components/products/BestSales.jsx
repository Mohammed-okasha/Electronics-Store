//? Hooks
import { useState, useEffect } from "react";
//? Redux Toolkit
import { selectProductsPaths } from "../../RTk/slices/apiPath-slice";
import { useSelector } from "react-redux";
//? Components
import Loader from "../loader/Loader";
import ProductSlider from "./ProductSlider";
//? Loading Gif
import LoadingGif from "../../assets/images/loading-1.gif";
//? Firebase
import { get, child } from "firebase/database";
import { dbRef } from "../../firebase/config";
//? Import Swiper ===============
import { Swiper, SwiperSlide } from 'swiper/react';
import {Navigation} from "swiper";
import 'swiper/css';
import 'swiper/css/navigation';
//!================================================================
const BestSales = () => {

    const [products, setProducts] = useState([]);

    const {bestSales} = useSelector(selectProductsPaths);

    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        // Set isLoading > true
        setIsLoading(true);

        get(child(dbRef, `products/${bestSales}`))

        .then((snapShot) => {
            // Set isLoading > false
            setIsLoading(false);
            const data = [];

            if (snapShot.exists()) {

                //* Looping On snapShot
                snapShot.forEach(snapShotChild => {
                    const key = snapShotChild.key;
                    const child = {...snapShotChild.val(), id: key, path: bestSales};

                    //* Push Child To Data []
                    data.push(child);
                });

                // Set data To products
                setProducts(data);

            } else {
                console.log("No Data Avilable");
            }
            
        })

        .catch(error => {
            // Set isLoading > false
            setIsLoading(false);
            console.log(error);
        });
    }, [])

    return (
        <section className="products bestSales">
            <div className="container" style={{padding: "0"}}>
                <div className="sec-title">
                    <h2>bset sales</h2>
                </div>
                <div className="row">
                    {isLoading && <Loader LoadingGif={LoadingGif} />}

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
                                        path={bestSales}
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

export default BestSales;