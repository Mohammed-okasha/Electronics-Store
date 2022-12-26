//? React Router DOM
import { Routes, Route, Outlet } from "react-router-dom";
//? Compnents
import {
  Header,
  Footer,
  UpButton,
  ScrollToTop

} from "./components";
//? Pages
import {
  Home,
  ProductDetails,
  Cart,
  Shop,
  About,
  Contact,
  Account,
  LostPassword,
  SearchedProducts

} from "./pages";

//*? React Toast
import { ToastContainer } from 'react-toastify';
//!================================================================
function App() {
  return (
    <>
      <ScrollToTop />
      <ToastContainer />
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="product/:path/:productId" element={<ProductDetails />} />
        <Route path="products/:category" element={<SearchedProducts />} />
        <Route path="cart" element={<Cart />} />
        <Route path="shop" element={<Shop />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />

        <Route path="account"
          element={
            <Outlet />
          }
        >
          <Route path="" element={<Account />} />
          <Route path="lost-password" element={<LostPassword />} />
        </Route>
      </Routes>

      <UpButton />
      <Footer />
    </>
  );
}

export default App;