//? Hooks
import { useState } from "react";
import { useSelector } from "react-redux";
import { selectProductsPaths } from "../../RTk/slices/apiPath-slice";
//? React Router DOM
import { useNavigate } from "react-router-dom";
//? Icons
import { FaSearch } from "react-icons/fa";
//!=============================================================
const SearchProductArea = () => {
    const [productCat, setProductCat] = useState("all categories");
    const navigate = useNavigate();

    const ProductsPaths = [
        "all categories",
        ...Object.values(useSelector(selectProductsPaths))
    ];

    // Select Product Category
    const selectProductCategory = (e) => {
        setProductCat(e.target.value);
    };

    // Handle Submit
    const handleSubmit = (e) => {
        e.preventDefault();

        if (productCat === "all categories") {
            navigate("/shop");

        } else {
            navigate(`products/${productCat}`);
        };

        window.location.reload();
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        })
    };

    return (
        <div className="search_product_area">
            <form className="product_search_form"
                onSubmit={handleSubmit}
            >
                <div className="product_category_holder">
                    <select name="product_cat"
                        className="product_category"
                        onChange={selectProductCategory}
                    >
                        {ProductsPaths.map((path, index) => {
                            return (
                                <option key={index} value={path}>
                                    {path}
                                </option>
                            );
                        })}
                    </select>
                </div>

                <input type="search"
                    name="search-product"
                    placeholder="Search For Product"
                />

                <button type="submit"
                    className="product_search_submit"
                >
                    <FaSearch />
                </button>
            </form>
        </div>
    );
};

export default SearchProductArea;