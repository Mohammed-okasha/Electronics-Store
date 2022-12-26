//? React Icons
import { FaUser, FaShoppingBag, FaSearch } from "react-icons/fa";
//? React Router DOM
import { Link } from "react-router-dom";
//? Components
import ShowOnSignIn from "../auth/ShowOnSignIn";
import ShowOnSignOut from "../auth/ShowOnSignOut";
//? Redux + Redux Toolkit
import { useSelector } from "react-redux";
import { selectUserName } from "../../RTk/slices/userAuth-slice";
import { selectTotalCartItems } from "../../RTk/slices/cartSlice";
//!=================================================================
const HeaderMobile = () => {
    const userName = useSelector(selectUserName);
    const totalCartItems = useSelector(selectTotalCartItems);

    return (
        <div className="header_mobile">
            <div className="action_btns">
                <div className="action_item">
                    <button to="#" className="btn serach">
                        <FaSearch />
                    </button>
                </div>
                <div className="action_item">
                    <Link to="/account" className="btn user">
                        <ShowOnSignOut>
                            <FaUser />
                        </ShowOnSignOut>
                        <ShowOnSignIn>
                            <span>{String(userName).substring(0, 1)}</span>
                        </ShowOnSignIn>
                    </Link>
                </div>
                <div className="action_item">
                    <Link to="/cart" className="btn cart">
                        <FaShoppingBag />
                        <span className="total_cart_items">{totalCartItems}</span>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default HeaderMobile;