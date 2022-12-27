import { useState } from "react";
//? Icons
import {FaShoppingCart, FaEye, FaLongArrowAltRight} from "react-icons/fa";
//? React Router DOM
import { Link, useNavigate } from "react-router-dom";
//? Import Swiper ===============
import { Swiper, SwiperSlide } from 'swiper/react';
import {Navigation} from "swiper";
import 'swiper/css';
import 'swiper/css/navigation';
//? Actions Creator Functions And React Redux
import { ADD_PRODUCT_TO_CART } from "../../RTk/slices/cartSlice";
import { useDispatch } from "react-redux";
//!====================================================================
const ProductSlider = ({product, path}) => {
    const {
        id,
        image,
        description: desc,
        title,
        price,
        discount,
        quantityAvailable,
    } = product;

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [addedToCart, setAddedToCart] = useState(false);

    // Variables
    let availableLable;
    let priceAfterDiscount;
    let percentageDiscount;
    let lableBg;

    // quantityAvailable
    if (quantityAvailable === 0) {
        availableLable = "sold out";
        lableBg = {backgroundColor: "#ff2424"};

    } else if (quantityAvailable > 0) {
        availableLable ="available";
        lableBg = {backgroundColor: "#00c900"};
    };

    // Discount Logic
    if (discount) {
        priceAfterDiscount = parseFloat(price - (price * discount)).toFixed(2);
        percentageDiscount = `%${discount * 100} off`;
    };

    // Handle Add Product To Cart
    const handleAddProductToCart = (product) => {
        dispatch(ADD_PRODUCT_TO_CART(product));

        // Product Added To Cart
        setAddedToCart(true);
    };

    // View Cart
    const viewCart = () => {
        // navigate To Cart Page
        navigate("/cart");
    };

    return (
        <div className="product-card">
            <Link to={`/product/${path}/${id}`} className="image">
                <img src={image}
                    alt={title} className="card-img"
                />
            </Link>

            <div className="card-content">
                <Link to={`/product/${path}/${id}`}>
                    <h4 className="title">{title}</h4>
                </Link>
                <p className="text-muted">{desc}</p>

                <div className="card-footer">
                    <div className="top">
                        <div className="price">
                            <span className={`price-text ${discount && "old"}`}>
                                ${price}
                            </span>
                            {
                                priceAfterDiscount &&
                                <span className="price-text">${priceAfterDiscount}</span>
                            }
                        </div>
                        {
                        addedToCart ?
                            <button className="view_cart card_btn"
                                onClick={viewCart}
                            >
                                <FaLongArrowAltRight color="#fff" />
                                <span className="tooltip">View Cart</span>
                            </button>
                            :
                            <button className="addToCart_btn card_btn"
                                onClick={() => handleAddProductToCart(product)}
                            >
                                <FaShoppingCart color="#fff" />
                                <span className="tooltip">Add To Cart</span>
                            </button>
                        }
                    </div>

                    <div className="preview">
                        <Link to={`/product/${path}/${id}`}
                            className="preview-link"
                        >
                            <FaEye />
                            <span>view</span>
                        </Link>
                    </div>
                </div>
            </div>

            {availableLable && <span className="lable" style={lableBg}>{availableLable}</span>}
            {percentageDiscount && <span className="lable">{percentageDiscount}</span>}
        </div>
    )
};

export default ProductSlider;




// return (
//     <Swiper
//         grabCursor={true}
//         className="cardSlider"
//         modules={[Navigation]}
//         navigation
//         breakpoints= {{
//             0: {
//                 slidesPerView: 1,
//                 spaceBetween: 0,
//             },
//             450: {
//                 slidesPerView: 2,
//                 spaceBetween: 0,
//             },
//             768: {
//                 slidesPerView: 3,
//                 spaceBetween: 0,
//             },
//             1100: {
//                 slidesPerView: 5,
//                 spaceBetween: 0,
//             },
//         }}

//         style={{padding: "20px 15px"}}
//     >

//         {products.map(product => {
//             const {
//                 id,
//                 image,
//                 description: desc,
//                 title,
//                 price,
//                 discount,
//                 quantityAvailable,
//                 addedToCart
//             } = product;

//             let availableLable;
//             let priceAfterDiscount;
//             let percentageDiscount;
//             let lableBg;

//             if (quantityAvailable === 0) {
//                 availableLable = "sold out";
//                 lableBg = {backgroundColor: "#ff2424"};

//             } else if (quantityAvailable > 0) {
//                 availableLable ="available";
//                 lableBg = {backgroundColor: "#00c900"};
//             };

//             // Discount Logic
//             if (discount) {
//                 priceAfterDiscount = parseFloat(price - (price * discount)).toFixed(2);
//                 percentageDiscount = `%${discount * 100} off`;
//             };

//             return (
//                 <SwiperSlide key={id}>
//                     <div className="product-card">
//                         <div className="image">
//                             <img src={image}
//                                 alt={title} className="card-img"
//                             />
//                         </div>

//                         <div className="card-content">
//                             <h4 className="title">{title}</h4>
//                             <p className="text-muted">{desc}</p>

//                             <div className="card-footer">
//                                 <div className="top">
//                                     <div className="price">
//                                         <span className={`price-text ${discount && "old"}`}>
//                                             ${price}
//                                         </span>
//                                         {
//                                             priceAfterDiscount &&
//                                             <span className="price-text">${priceAfterDiscount}</span>
//                                         }
//                                     </div>
//                                     {
//                                     addedToCart ?
//                                         <button className="view_cart card_btn"
//                                             onClick={viewCart}
//                                         >
//                                             <FaLongArrowAltRight color="#fff" />
//                                             <span className="tooltip">View Cart</span>
//                                         </button>
//                                         :
//                                         <button className="addToCart_btn card_btn"
//                                             onClick={() => handleAddProductToCart(product)}
//                                         >
//                                             <FaShoppingCart color="#fff" />
//                                             <span className="tooltip">Add To Cart</span>
//                                         </button>
//                                     }
//                                 </div>

//                                 <div className="preview">
//                                     <Link to={`/product/${path}/${id}`}
//                                         className="preview-link"
//                                         >
//                                         <FaEye />
//                                         <span>view</span>
//                                     </Link>
//                                 </div>
//                             </div>
//                         </div>

//                         {availableLable && <span className="lable" style={lableBg}>{availableLable}</span>}
//                         {percentageDiscount && <span className="lable">{percentageDiscount}</span>}
//                     </div>
//                 </SwiperSlide>
//             )
//         })}
//     </Swiper>
// );