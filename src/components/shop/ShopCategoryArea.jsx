//? Components
import ShopTopBar from "./ShopTopBar";
import ShopProducts from "./ShopProducts";
//!===========================================================
const ShopCategoryArea = () => {
    return (
        <section className="shop_category_area">
            <div className="container">
                <ShopTopBar />
                <ShopProducts />
            </div>
        </section>
    );
}

export default ShopCategoryArea;