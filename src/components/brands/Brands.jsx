import { useState } from "react";
import { brandsList } from "../../assets/data/brands";
import BrandItem from "./BrandItem";
//!=================================================================
const Brands = () => {
    const [brands, setBrands] = useState(brandsList);

    return (
        <section className="brands">
            <div className="container">
                <div className="row">
                    <BrandItem brands={brands} />
                </div>
            </div>
        </section>
    );
};

export default Brands;