import { useSelector } from "react-redux";
import { toast } from "react-toastify";
//? Cart Values
import {
    selectCartSubTotal,
    selectShippingPrice,
    selectTotalCartPrice

} from "../../RTk/slices/cartSlice";

//? Action Craetor functions + Redux
import { useDispatch } from "react-redux";
import { CLEAR_CART } from "../../RTk/slices/cartSlice";
//!=============================================================
const CartFooter = () => {
    const cartSubTotal = useSelector(selectCartSubTotal);
    const shippingPrice = useSelector(selectShippingPrice);
    const cartTotalPrice = useSelector(selectTotalCartPrice);

    const dispatch = useDispatch();

    // Handle Clear Cart
    const handleClearCart = () => {
        if (window.confirm("are you sure you want clear cart?")) {
            dispatch(CLEAR_CART());

            toast.success(("your cart is cleared"), {
                position: "top-left",
                autoClose: "3000",
                theme: "colored"
            })
        };

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        })
    };

    return (
        <div className="cart_footer">
            <div className="clear_cart">
                <button type="button"
                    className="clear_btn"
                    onClick={handleClearCart}
                >
                    claer cart
                </button>
            </div>

            <div className="cart_totals">
                <h3 className="custom-title">
                    <span>cart totals</span>
                </h3>

                <table className="cart_totals_table">
                    <tbody>
                        <tr>
                            <th>Subtotal</th>
                            <td>${cartSubTotal}</td>
                        </tr>
                        <tr>
                            <th>Shipping</th>
                            <td>${shippingPrice}</td>
                        </tr>
                        <tr>
                            <th>total</th>
                            <td>${cartTotalPrice}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default CartFooter;