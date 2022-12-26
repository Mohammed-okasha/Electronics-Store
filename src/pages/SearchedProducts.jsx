//? Hooks
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
//? Redux And Redux Toolkit

//? Firebase Database
import { dbRef } from "../firebase/config";
import { get, child } from "firebase/database";
//? Components
import { PagesRouting } from "../components";
import ProductCard from "../components/products/ProductCard";
import Loader from "../components/loader/Loader";
//? Loading Gif
import LoadingGif from "../assets/images/loading-1.gif";
//!=================================================================
const SearchedProducts = () => {
    const params = useParams();
    const {category} = params;
    const [searchedProducts, setSearchedProducts] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        // Set isLoading > true
        setIsLoading(!isLoading);

        // Get Products Data From Database
        get(child(dbRef, `products/${category}`))

        .then((snapShot) => {
            // Set isLoading > false
            setIsLoading(false);
            const data = [];

            if (snapShot.exists()) {
                //* Looping On snapShot
                snapShot.forEach(snapShotChild => {
                    const key = snapShotChild.key;
                    const child = {
                        ...snapShotChild.val(),
                        id: key,
                        path: category
                    };

                    //* Push Child To Data []
                    data.push(child);
                });

                // Set data To searchedProducts
                setSearchedProducts(data);

            } else {
                console.log("No Data Avilable");
            };
        })

        .catch(error => {
            // Set isLoading > false
            setIsLoading(false);
            console.log(error);
        });

    }, [])

    return (
        <>
            <PagesRouting>
                <ul class="nav_links">
                    <li class="nav_item">
                        <a class="nav_link" href="/">home</a>
                    </li>
                    <li class="nav_item">
                        <span class="text">products</span>
                    </li>
                    <li class="nav_item">
                        <span class="text">{category}</span>
                    </li>
                </ul>
            </PagesRouting>

            <section className="searched_products">
                <div className="container">
                    <div className="row">
                        {
                            isLoading ?
                            <Loader LoadingGif={LoadingGif} />
                            :
                            searchedProducts.map((product) => {
                                return (
                                    <ProductCard key={product.id}
                                        product={product} path={product.path}
                                    />
                                );
                            })
                        }
                    </div>
                </div>
            </section>
        </>

    );
};

export default SearchedProducts;