//? Hooks
import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
//? Firebase
import { dbRef } from "../firebase/config";
import { get, child } from "firebase/database";
//? Redux Toolkit & Actions & React Router
import { useDispatch } from "react-redux";
import { ADD_PRODUCT_TO_CART } from "../RTk/slices/cartSlice";
import { useNavigate } from "react-router-dom";
//? Componentss
import Loader from "../components/loader/Loader";
import LoadingGif from "../assets/images/loading-1.gif";
import { ProductImages, RelatedProducts } from "../components";
//? mainImageContext
export const mainImageContext = React.createContext();
//!=========================================================
const ProductDetails = () => {
    const [product, setProduct] = useState({});
    const [productImages, setProductImages] = useState([]);
    const [mainImage, setMainImage] = useState("");

    const params = useParams();
    const {path, productId} = params;

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [isLoading, setIsLoading] = useState(false);
    const [addedToCart, setAddedToCart] = useState(false);

        // Handle Add Product To Cart
    const handleAddProductToCart = () => {
        dispatch(ADD_PRODUCT_TO_CART(product));

        // Product Added To Cart
        setAddedToCart(!addedToCart);
    };

    // View Cart
    const viewCart = () => {
        // navigate To Cart Page
        navigate("/cart");
    };

    // Destruction Product Data
    const {
        smallImages,
        category: cat,
        description: desc,
        title,
        price,
        quantityAvailable,
        discount

    } = product;

    let availableLable;
    let lableBg;
    let priceAfterDiscount;
    let percentageDiscount;

    if (quantityAvailable === 0) {
        availableLable = "sold out";
        lableBg = {backgroundColor: "#ff2424"};

    } else if (quantityAvailable > 0) {
        availableLable = "available";
        lableBg = {backgroundColor: "#00c900"};
    };

    if (discount) {
        priceAfterDiscount = parseFloat(price - (price * discount)).toFixed(2);
        percentageDiscount = `%${discount * 100} off`;
    };

    useEffect(() => {
        // Set isLoading To true
        setIsLoading(true);

        get(child(dbRef, `products/${path}/${productId}`))

        .then((snapShot) => {
            // Set isLoading To false
            setIsLoading(false);

            if (snapShot.exists()) {
                const key = snapShot.key
                const data = snapShot.val();

                //* Set data To Product
                setProduct({...data, id: key, path: path});
                // Update Product Main Img
                setMainImage(data.image);

            } else {
                console.log("No Data Avilable");
            };
        })

        .catch(error => {
            // Set isLoading To false
            setIsLoading(false);
            console.log(error);
        })

    }, [path, productId]);

    useEffect(() => {
        // Update productImages Value
        if (smallImages) {
            setProductImages(Object.values(smallImages));

        } else {
            // Reset ProductImages
            setProductImages([]);
        };

    }, [smallImages]);

    return (
        <>
            <section id="product_details">
                <div className="container">
                    <div className="row">
                        {isLoading ?
                            <Loader LoadingGif={LoadingGif} />
                            :
                            <>
                                <div className="col">
                                    <div className="main_image">
                                        {isLoading ?
                                        <Loader LoadingGif={LoadingGif} />
                                        :
                                        <img src={mainImage} alt={title} />
                                        }
                                        {availableLable &&
                                            <span className="lable" style={lableBg}>
                                                {availableLable}
                                            </span>
                                        }
                                        {percentageDiscount &&
                                            <span className="lable">
                                                {percentageDiscount}
                                            </span>
                                        }
                                    </div>

                                    <mainImageContext.Provider Providervalue={setMainImage}>
                                        {productImages.length > 0 ?
                                            <ProductImages
                                                productImages={productImages}
                                                title={title}
                                            />
                                            :
                                            null
                                        }
                                    </mainImageContext.Provider>
                                </div>

                                <div className="col">
                                    <ul className="navigate">
                                        <li className="nav-item">
                                            <Link to="/" className="nav-link">home</Link>
                                        </li>
                                        <li className="nav-item">
                                            <span>{cat}</span>
                                        </li>
                                    </ul>

                                    <div className="product-info">
                                        <h2 className="title">{title}</h2>
                                        <p className="text-muted" style={{margin: "10px 0"}}>
                                            {desc}
                                        </p>
                                        <div className="price">
                                            <span className={`price-text ${discount ?"old" : ""}`}>${price}</span>
                                            {
                                                priceAfterDiscount &&
                                                <span className="price-text">${priceAfterDiscount}</span>
                                            }
                                        </div>
                                    </div>
                                    {
                                        addedToCart ?
                                        <button className="viewCart action_btn"
                                            onClick={viewCart}
                                        >
                                            view cart
                                        </button>
                                        :
                                        <button className="addToCart action_btn"
                                            onClick={handleAddProductToCart}
                                        >
                                            add to cart
                                        </button>
                                    }
                                </div>
                            </>
                        }
                    </div>
                </div>
            </section>
            <RelatedProducts />
        </>
    );
};

export default ProductDetails;