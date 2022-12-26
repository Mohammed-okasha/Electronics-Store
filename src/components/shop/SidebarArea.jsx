//? Hooks
import { useState } from "react";
//? React Icons
import { FaAngleDown } from "react-icons/fa";
//? Redux Toolkit + Product Pathes
import { selectProductsPaths } from "../../RTk/slices/apiPath-slice";
import {
    SORT_PRODUCTS,
    SET_ACTIVE_LOADING,
    REMOVE_ACTIVE_LOADING

} from "../../RTk/slices/shopSlice";
import { useSelector, useDispatch } from "react-redux";
//? Firebase Databaae
import { dbRef } from "../../firebase/config";
import { child, get } from "firebase/database";
//!===========================================================
const SidebarArea = () => {
    const [index, setIndex] = useState(0);
    const [isDropdownClose, setIsDropdownClose] = useState(false);
    const dispatch = useDispatch();

    // Get Products categories
    const categories = ["default sorting", ...Object.values(useSelector(selectProductsPaths))];

    // set Active Category
    const setActiveCategory = (catIndex) => {
        setIndex(prevIndex => prevIndex = catIndex);
    };

    // toggle dropdown
    const toggleDropdown = () => {
        setIsDropdownClose(!isDropdownClose);
    };

    // Sort Products
    const sortProducts = (cat) => {
        if (cat === "default sorting") {
            cat = "newArrivals";
        };

        // Update isLoading Vlaue
        dispatch(SET_ACTIVE_LOADING());

        const data = [];

        get(child(dbRef, `products/${cat}`))

        .then((snapshot) => {
            // Reset isLoading Vlaue
            dispatch(REMOVE_ACTIVE_LOADING());

            if (snapshot.exists()) {
                snapshot.forEach(snapshotChild => {
                    const key = snapshotChild.key;

                    data.push({...snapshotChild.val(), id :key})
                })

                // dispatch SORT_PRODUCTS Action
                dispatch(SORT_PRODUCTS({
                    data: data,
                    category: cat
                }));

            } else {
                console.log("No Data Avilabe");
            }
        })

        .catch((error) => {
            // Reset isLoading Vlaue
            dispatch(REMOVE_ACTIVE_LOADING());
            console.log(error);
        })
    };

    return (
        <div className="sidebar_area">
            <aside className="sort_by_category">
                <div className="toggle_categories">
                    <button className="toggle_btn"
                        onClick={toggleDropdown}
                    >
                        <span className="text">category</span>
                        <span className={`icon ${isDropdownClose ? "rotate" : ""}`}>
                            <FaAngleDown />
                        </span>
                    </button>
                </div>

                <ul
                    className={
                        `dropdwon_categories_list ${
                            isDropdownClose ? "close_dropdwon" : ""
                        }`
                    }
                >
                    {categories.map((cat, catIndex) => {
                        return (
                            <li key={catIndex}
                                className={`dropdwon_item ${catIndex === index ? "active" : ""}`}
                                onClick={() => {
                                    sortProducts(cat);
                                    setActiveCategory(catIndex);
                                }}
                            >
                                {cat}
                            </li>
                        )
                    })}
                </ul>
            </aside>
        </div>
    );
};

export default SidebarArea;