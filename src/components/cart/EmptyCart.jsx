import { FaShoppingBag } from "react-icons/fa";
import { Link } from "react-router-dom";
//!=============================================================
const EmptyCart = () => {
    return (
        <div className="empty_cart">
            <FaShoppingBag fontSize="4rem" color="#146CDA" />
            <h4>your cart is currently empty</h4>
                <Link to="/">
                    <button className="return_btn">
                    continue shopping
                    </button>
                </Link>
        </div>
    );
}

export default EmptyCart;