//? Components
import ProductSlider from "./ProductSlider";
import Loader from "../loader/Loader";
import loadingImg from "../../assets/images/loading-1.gif";
//?====== Hooks
import { useState, useEffect } from "react";
//?======= Redux Toolkit
import { useSelector } from "react-redux";
import { selectProductsPaths } from "../../RTk/slices/apiPath-slice";
//?======== Firebase
import { dbRef } from "../../firebase/config";
import { get, child } from "firebase/database";

//!================================================================
const SmartPhones = () => {
    // Get ProductsPaths
    const productsPaths = useSelector(selectProductsPaths);

    const [smartPhones, setSmartPhones] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    // Get Smart Phones Products
    const getSmartPhones = () => {

        setIsLoading(true);

        get(child(dbRef, `products/${productsPaths.smartPhones}`))

        .then((Snapshot) => {
            const data = [];

            setIsLoading(false);

            if (Snapshot.exists()) {
                Snapshot.forEach(SnapshotChild => {
                    const key = SnapshotChild.key;
                    const product = {...SnapshotChild.val(), id: key};

                    // Push Product To Data
                    data.push(product);
                })

                // Set Data To smartPhones
                setSmartPhones(data);

            } else {
                console.log("No Data Avilable");
            };
        })

        .catch((erorr => {
            setIsLoading(false);
            console.log("Promise Rejcted", erorr.message);
        }))
    };

    useState(() => {
        getSmartPhones();
    }, []);

    return (
        <>
            {
                isLoading ?
                <Loader LoadingGif={loadingImg} />
                :
                <ProductCard products={smartPhones} path={productsPaths.smartPhones} />
            }
        </>
    );
};

export default SmartPhones;