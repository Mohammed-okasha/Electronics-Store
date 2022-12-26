//? Hooks
import { useEffect } from "react";
//? Firebase
import { child, onValue } from "firebase/database";
import { dbRef} from "../firebase/config";
//? Components
import {
    Slider,
    Services,
    Trending,
    BestSales,
    Countdown,
    NewArrivals,
    ShopCategories,
    HomeBanners,
    GridBanners,
    Brands
} from "../components";
//? Redux Toolkit + Actions
import { Get_Api_Path } from "../RTk/slices/apiPath-slice";
import { useDispatch } from "react-redux";
//!=====================================================================
const Home = () => {

    const dispatch = useDispatch();

    useEffect(() => {
        onValue(child(dbRef, "products"), (snapShopt) => {
            if (snapShopt.exists()) {
                // Products Paths
                const productsPaths = {};

                snapShopt.forEach(snapShoptChild => {
                    // Get Products Path
                    const pathName = snapShoptChild.key;

                    // Add pathName As a key To paths
                    productsPaths[pathName] = snapShoptChild.key;
                });

                dispatch(Get_Api_Path(productsPaths));

            } else {
                console.log("No Data Avilable");
            };
        })

    }, [])

    return (
        <>
            <Slider />
            <Services />
            <ShopCategories />
            <HomeBanners />
            <Trending />
            <NewArrivals />
            <Countdown />
            <BestSales />
            <GridBanners />
            <Brands />
        </>
    );
};

export default Home;