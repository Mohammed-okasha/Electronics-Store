//* imports
import { Routes, Route, Outlet } from "react-router-dom";
//* Import Pages
import HomePage from "./pages/HomePage";
import ProductsPage from "./pages/ProductsPage";
import CartPage from "./pages/CartPage";
import ProductDetails from "./pages/ProductDetails";
// import 

function App() {
  return (
    <Routes>
        <Route path="/" element={<HomePage />} />

        <Route path="products"
            element={
              <>
                <Outlet />
              </>
            }
          >

          <Route path="" element={<ProductsPage />} />
          <Route path=":productId" element={<ProductDetails />} />
        </Route >

        <Route path="cart" element={<CartPage />} />
    </Routes>
  );
}

export default App;
