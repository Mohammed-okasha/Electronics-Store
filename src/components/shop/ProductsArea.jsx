//? Hooks
import {useState, useEffect } from "react";
//? Components
import ProductCard from "../products/ProductCard";
import Loader from "../loader/Loader";
import NotFound from "./NotFound";
//? Loading Gif
import LoadingGif from "../../assets/images/loading-1.gif";
//? Firebase Databaae
import { dbRef } from "../../firebase/config";
import { child, get } from "firebase/database";
//? Redux + Redux Toolkit
import {
    GET_SHOP_PRODUCTS,
    SET_ACTIVE_LOADING,
    REMOVE_ACTIVE_LOADING,
    selectShopProducts,
    selectIsLoading,
    selectListLayout,
    selectProductsCategory

} from "../../RTk/slices/shopSlice";
import { useDispatch, useSelector } from "react-redux";
//!===========================================================
const ProductsArea = () => {
    const shopProducts = useSelector(selectShopProducts);
    const isLoading = useSelector(selectIsLoading);
    const isListLayout = useSelector(selectListLayout);
    const category = useSelector(selectProductsCategory);
    const dispatch = useDispatch();

    useEffect(() => {
        // Update isLoading Value
        dispatch(SET_ACTIVE_LOADING());
        const data = [];

        get(child(dbRef, "products/newArrivals"))

        .then((snapshot) => {
            // Reset isLoading Value
            dispatch(REMOVE_ACTIVE_LOADING());

            if (snapshot.exists()) {
                snapshot.forEach((snapshotChild) => {
                    const key = snapshotChild.key;
                    // Push snapshotChild To Data Array
                    data.push({...snapshotChild.val(), id: key});
                })

                dispatch(GET_SHOP_PRODUCTS({
                    data: data,
                    category: "newArrivals"
                }));

            } else {
                console.log("No Data Avilabe");
            }
        })

        .catch((error) => {
            // Reset isLoading Value
            dispatch(REMOVE_ACTIVE_LOADING());
            console.log(error);
        })

    }, []);

    return (
        <div className="products_area">
            <div className={`row ${isListLayout ? "list_layout" : ""}`}>
                {
                    isLoading ?
                    <Loader LoadingGif={LoadingGif} />
                    :
                    shopProducts.length === 0 ?
                    <NotFound />
                    :
                    shopProducts.map((product, index) => {
                        product = {...product, addedToCart: false};
                        return (
                            <ProductCard key={index} product={product}
                                path={category}
                            />
                        );
                    })
                }
            </div>
        </div>
    );
};

export default ProductsArea;