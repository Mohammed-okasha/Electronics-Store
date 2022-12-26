import { useState } from "react";
//? Icons
import {FaShoppingCart, FaEye, FaLongArrowAltRight} from "react-icons/fa";
//? React Router DOM
import { Link, useNavigate } from "react-router-dom";
//? Redux + Redux Toolkit
import { ADD_PRODUCT_TO_CART } from "../../RTk/slices/cartSlice";
import { useDispatch } from "react-redux";
//!===============================================================
const ProductCard = ({product, path}) => {
    const {id, image, title, description, price} = product;
    const [addedToCart, setAddedToCart] = useState(false);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    // Handle Add Product To Cart
    const handleAddProductToCart = () => {
        dispatch(ADD_PRODUCT_TO_CART(product))

        // Product Added To Cart
        setAddedToCart(!addedToCart);
    };

    // View Cart
    const viewCart = () => {
        // navigate To Cart Page
        navigate("/cart");
    };

    return (
        <div className="product-card">
        <div className="image">
            <img src={image}
                alt={title} className="card-img"
            />
        </div>

        <div className="card-content">
            <h4 className="title">{title}</h4>
            <p className="text-muted">{description}</p>

            <div className="card-footer">
                <div className="top">
                    <div className="price">
                        <span className="price-text">
                            ${price}
                        </span>
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
    </div>
    );
};

export default ProductCard;