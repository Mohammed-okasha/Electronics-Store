//? React Router DOM
import { Link } from "react-router-dom";
//? React Icon
import { FaTrash, FaPlus, FaMinus } from "react-icons/fa";
//? Action creator Functions + Redux Tool kit
import { useDispatch } from "react-redux";

import {
    REMOVE_PRODUCT_FROM_CART,
    INCREASE_PRODUCT_QUANTITY,
    DECREASE_PRODUCT_QUANTITY

} from "../../RTk/slices/cartSlice";
//!============================================================
const CartTable = ({ cartItems }) => {
    const dispatch = useDispatch();

    // Remove Product From Cart
    const handleRemoveProduct = (product) => {
        if (window.confirm(`are you sure you want remove ${product.title}?`)) {
            dispatch(REMOVE_PRODUCT_FROM_CART(product));
        }
    };

    // increase Product quantity
    const increaseProductQuantity = (product) => {
        dispatch(INCREASE_PRODUCT_QUANTITY(product));
    }

    // decrease Product quantity
    const decreaseProductQuantity = (product) => {
        dispatch(DECREASE_PRODUCT_QUANTITY(product));
    }
//===============================================================
    return (
        <>
            <div className="cart_table">
                <table className="table">
                    <thead>
                        <tr>
                            <th></th>
                            <th></th>
                            <th>product</th>
                            <th className="text-center">price</th>
                            <th className="text-center">Quantity</th>
                            <th className="text-center">Subtotal</th>
                        </tr>
                    </thead>

                    <tbody>
                        {cartItems.map(item => {
                            const {id, image, title, price, quantity, path} = item;

                            return (
                                <tr key={id} className="product">
                                    <td className="remove_product">
                                        <button type="button" className="remove_btn"
                                            onClick={() => handleRemoveProduct(item)}
                                        >
                                            <FaTrash fontSize="16px" />
                                        </button>
                                    </td>

                                    <td className="image">
                                        <Link to={`/product/${path}/${id}`}>
                                            <img src={image} alt={title}
                                            className="product_img"
                                            />
                                        </Link>
                                    </td>

                                    <td>
                                        <Link to={`/product/${path}/${id}`} className="title">
                                            {title}
                                        </Link>
                                    </td>

                                    <td className="text-center price">${price}</td>

                                    <td>
                                        <div className="quantity">
                                            <button type="button"
                                                className="btn decrease"
                                                onClick={_ => decreaseProductQuantity(item)}
                                            >
                                                <FaMinus fontSize="10px" />
                                            </button>

                                            <input type="text" value={quantity}
                                                name="product-quantity"
                                            />

                                            <button type="button"
                                                className="btn inecrease"
                                                onClick={_ => increaseProductQuantity(item)}
                                            >
                                                <FaPlus fontSize="10px" />
                                            </button>
                                        </div>
                                    </td>

                                    <td className="text-center price">
                                        ${parseFloat(price * quantity).toFixed(2)}
                                    </td>
                                </tr>
                            );

                        })}
                    </tbody>
                </table>
            </div>
        </>
    );
};

export default CartTable;