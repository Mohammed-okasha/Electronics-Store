//? Components
import SidebarArea from "./SidebarArea";
import ProductsArea from "./ProductsArea";
//!===========================================================
const ShopProducts = () => {
    return (
        <div className="shop_products_content">
            <SidebarArea />
            <ProductsArea/>
        </div>
    )
}

export default ShopProducts;