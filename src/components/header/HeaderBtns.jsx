import { Link } from "react-router-dom";
//? icons
import { FaUser, FaShoppingBag } from "react-icons/fa";
//? react-redux
import { useSelector } from "react-redux";
//? Redux Toolkit
import { selectUserName } from "../../RTk/slices/userAuth-slice";
import { selectTotalCartItems } from "../../RTk/slices/cartSlice";
//? Components
import ShowOnSignIn from "../auth/ShowOnSignIn";
import ShowOnSignOut from "../auth/ShowOnSignOut";
//!======================================================
const HeaderBtns = ({openMenu, isOpen}) => {
    const userName = useSelector(selectUserName);
    const totalCartItems = useSelector(selectTotalCartItems);

    return (
        <div className="header-btns">
            <div className="desktop_btns">
                <Link to="/account"
                    className="btn user_name"
                >
                    <ShowOnSignOut>
                        <FaUser fontSize={12} color="#fff" />
                    </ShowOnSignOut>
                    <ShowOnSignIn>
                        <span>{String(userName).substring(0, 1)}</span>
                    </ShowOnSignIn>
                </Link>

                <Link to="/cart"
                    className="btn cart"
                >
                    <FaShoppingBag fontSize={12} color="#fff" />
                    <span className="total_cart_items">{totalCartItems}</span>
                </Link>
            </div>

            <button
                className={`toggle ${isOpen ? "open" : ""}`}
                onClick={openMenu}
            >
                <span className="bars-icon"></span>
            </button>
        </div>
    );
};

export default HeaderBtns;