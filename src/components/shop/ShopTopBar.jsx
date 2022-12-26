//? React Icons
import { FaTh, FaList, FaSearch } from "react-icons/fa";
//? Hooks
import { useState } from "react";
//? Redux + Redux Toolkit
import {
    SEARCH_PRODUCTS,
    SET_ACTIVE_LOADING,
    REMOVE_ACTIVE_LOADING,
    LIST_LAYOUT,
    selectProductsCategory,
    selectListLayout

} from "../../RTk/slices/shopSlice";
import { useDispatch, useSelector } from "react-redux";
//? Firebase Databse
import { child, get } from "firebase/database";
import { dbRef } from "../../firebase/config";
//!===========================================================
const ShopTopBar = () => {
    const [searchValue, setSearchValue] = useState("");
    const category = useSelector(selectProductsCategory);
    const isListLayout = useSelector(selectListLayout);

    const dispatch = useDispatch();

    // Get Input Value
    const getInputvalue = (e) => {
        const inputValue = e.target.value.toLowerCase().trim();
        // Update setSearchValue Value
        setSearchValue(inputValue);

        handleSearchForProducts(inputValue);
    };

    // Handle Search For Products
    const handleSearchForProducts = (value) => {
        const data = [];

        // SET_ACTIVE_LOADING
        dispatch(SET_ACTIVE_LOADING());

        get(child(dbRef, `products/${category}`))

        .then((snapshot) => {
            // REMOVE_ACTIVE_LOADING
            dispatch(REMOVE_ACTIVE_LOADING());

            if (snapshot.exists()) {

                snapshot.forEach(snapshotChild => {
                    const key = snapshotChild.key;

                    data.push({...snapshotChild.val(), id : key});
                })

                // searchResults Array
                const searchResults = data.filter(item => item.title.toLowerCase().includes(value));
                dispatch(SEARCH_PRODUCTS(searchResults));
            };
        })

        .catch(error => {
            console.log(error.message);
            // REMOVE_ACTIVE_LOADING
            dispatch(REMOVE_ACTIVE_LOADING());
        });
    };

    // List Layout
    const listLayout = () => {
        dispatch(LIST_LAYOUT(true));
    };

    // Grid Layout
    const gridLayout = () => {
        dispatch(LIST_LAYOUT(false));
    };

    return (
        <div className="shop_top_bar">
            <div className="display_btns">
                <button className={`${isListLayout ? "btn" : "btn active"}`}
                    onClick={gridLayout}
                >
                    <FaTh />
                </button>
                <button className={`${isListLayout ? "btn active" : "btn"}`}
                    onClick={listLayout}
                >
                    <FaList />
                </button>
            </div>

            <div className="search_products">
                <input type="search"
                    placeholder="Search Products"
                    value={searchValue}
                    onChange={getInputvalue}
                />
                <span className="icon">
                    <FaSearch />
                </span>
            </div>
        </div>
    );
};

export default ShopTopBar;