//? Firebase
import { dbRef } from "../../firebase/config";
import { get, child } from "firebase/database";
//? Redux And Redux Toolkit
import { selectProductsPaths } from "../../RTk/slices/apiPath-slice";
import { useSelector } from "react-redux";
//? Hooks
import { useState, useEffect } from "react";
//? Components
import ProductSlider from "./ProductSlider";
import Loader from "../loader/Loader";
import loadingImg from "../../assets/images/loading-1.gif";
//? Import Swiper ===============
import { Swiper, SwiperSlide } from 'swiper/react';
import {Autoplay, Navigation} from "swiper";
import 'swiper/css';
import 'swiper/css/navigation';
//!=======================================================
const RelatedProducts = () => {
    const [products, setProducts] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    // Get Related Products = bestSales
    const {bestSales} = useSelector(selectProductsPaths);

    const getRelatedProducts = () => {
        // Update isLoading State
        setIsLoading(true);

        get(child(dbRef, `products/${bestSales}`))

        .then((snapshot) => {
            setIsLoading(false);
            const data = [];

            if (snapshot.exists()) {
                snapshot.forEach(snapshotChild => {
                    const key = snapshotChild.key;
                    const product = snapshotChild.val();

                    // Push product + key To Data Arr
                    data.push({...product, id: key});
                });

                // Set data To products State
                setProducts(data);

            } else {
                console.log("No Data Avilable");
            };
        })

        .catch((error) => {
            setIsLoading(false);
            console.log(error.meassge);
        });
    };

    useEffect(() => {
        getRelatedProducts();
    }, []);

    return (
        <section className="products related">
            <div className="container" style={{padding: "0"}}>
                <div className="sec-title">
                    <h2>related products</h2>
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

export default RelatedProducts;