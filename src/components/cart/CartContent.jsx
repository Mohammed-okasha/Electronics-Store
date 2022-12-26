//? Redux + Redux Toolkit
import { useSelector } from "react-redux";
import { selectCartItems } from "../../RTk/slices/cartSlice";
import { Link } from "react-router-dom";
//? Components
import CartTable from "./CartTable";
import CartFooter from "./CartFooter";
import EmptyCart from "./EmptyCart";
import PagesRouting from "../PagesRouting";
//!====================================================================
const CartContent = () => {
    const cartItems = useSelector(selectCartItems);

    return (
        <>
            <PagesRouting>
                    <li className="nav_item">
                        <Link to="/" className="nav_link">home</Link>
                    </li>
                    <li className="nav_item">
                        <span>cart</span>
                    </li>
            </PagesRouting>
            <section id="cart_content">
                <div className="container">
                    <div className="row">

                    <h1 className="custom-title">
                        <span>cart</span>
                    </h1>

                        {cartItems.length === 0 ?
                            <EmptyCart />
                            :
                            <>
                                <CartTable cartItems={cartItems} />
                                <CartFooter />
                            </>
                        }
                    </div>
                </div>
            </section>
        </>
    );
};

export default CartContent;