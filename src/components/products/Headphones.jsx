//? Hooks
import { useEffect, useState } from "react";
//? Components
import ProductSlider from "./ProductSlider";
//? Firbase
import { dbRef } from "../../firebase/config";
import { get, child } from "firebase/database";
//? Redux Toolkit
import { useSelector } from "react-redux";
import { selectProductsPaths } from "../../RTk/slices/apiPath-slice";
//!================================================================
const Headphones = () => {
    const [headphones, setHeadphones] = useState([]);
    const productsPaths = useSelector(selectProductsPaths);

    const getHeadphones = () => {
        get(child(dbRef, `products/${productsPaths.headphones}`))

        .then((Snapshot) => {
            const data = [];

            if(Snapshot.exists()) {
                Snapshot.forEach(Snapshot => {

                    const key = Snapshot.key;
                    const product = {...Snapshot.val(), id: key}

                    data.push(product);
                })

                setHeadphones(data);

            } else {
                console.log("No Data Avilable");
            }
        })

        .catch((erorr) => {
            console.log("Promise Rejcted", erorr.message);
        })
    };

    useEffect(() => {
        getHeadphones();
    }, [])

    return (
        <>
            <ProductSlider products={headphones} path={productsPaths.headphones} />
        </>
    );
};

export default Headphones;