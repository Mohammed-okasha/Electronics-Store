//? Header Components
import HeaderDesktop from "./HeaderDesktop";
import HeaderMobile from "./HeaderMobile";
//? Hooks
import { useEffect, useState } from "react";
//? Firbase
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../../firebase/config";
//? Actions Creator + Redux Toolkit
import { SET_ACTIVE_USER, REMOVE_USER_ACTIVE } from "../../RTk/slices/userAuth-slice";
import { GET_CART_VALUES } from "../../RTk/slices/cartSlice";
import { selectCartItems } from "../../RTk/slices/cartSlice";
import { useDispatch, useSelector } from "react-redux";
//!==========================================================
const Header = () => {
    // Display User Name State
    const [displyUserName, setDisplyUserName] = useState("");
    // Access To Cartitems
    const cartItems = useSelector(selectCartItems);
    const dispatch = useDispatch();

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {

            if (user) {
                if (user.displayName === null) {
                    const u1 = user.email.slice(0, -10);
                    const userName = u1.charAt(0).toUpperCase().concat(u1.slice(1));

                    // Set userName To displyUserName State
                    setDisplyUserName(userName);

                } else {
                    // Reset displyUserName State
                    setDisplyUserName(user.displayName);
                };

                // dispatch SET_ACTIVE_USER Action
                dispatch(SET_ACTIVE_USER({
                    userName: user.displayName ? user.displayName : displyUserName,
                    userEmail: user.email,
                    userId: user.uid
                }))

            } else {
                dispatch(REMOVE_USER_ACTIVE());
            }
        });

    }, [displyUserName]);

    useEffect(() => {
        dispatch(GET_CART_VALUES());
    }, [cartItems]);
//!=====================================================
    return (
        <header id="header">
            <HeaderDesktop />
            <HeaderMobile />
        </header>
    );
};

export default Header;