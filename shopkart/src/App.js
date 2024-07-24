import React from 'react';
import './App.css';
import './Product.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Layout from './component/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import OurStore from './pages/OurStore';
import Blog from './pages/Blog';
import CompareProduct from './pages/CompareProduct';
import Wishlist from './pages/Wishlist';
import Login from './pages/Login';
import Signup from './pages/Signup';
import ForgotPassword from './pages/ForgotPassword';
import ResetPassword from './pages/ResetPassword';
import SinglePost from './pages/SinglePost';
import Disclaimer from './pages/Disclaimer';
import TermsAndConditions from './pages/TermsAndConditions';
import ShippingPolicy from './pages/ShippingPolicy';
import RefundPolicy from './pages/RefundPolicy';
import PrivacyPolicy from './pages/PrivacyPolicy';
import Faqs from './pages/Faqs';
import SingleProduct from './pages/SingleProduct';
import Cart from './pages/Cart';
import Checkout from './pages/Checkout';
import AddToCart from './pages/AddToCart';
// import Header from './component/Header';
function App() {
  return (
    <>
    
      <BrowserRouter>
      {/* <Header/> */}
        <Routes>
          <Route path='/' element={<Layout />}>
            <Route index element={<Home />}></Route>
            <Route exact path="about-us" element={<About />}></Route>
            <Route exact path="product" element={<OurStore />}></Route>
            <Route exact path="product/:id" element={<SingleProduct />}></Route>
            <Route exact path="add-to-cart" element={<AddToCart />}></Route>
            <Route exact path="cart" element={<Cart />}></Route>
            <Route exact path="checkout" element={<Checkout />}></Route>
            <Route exact path="our-blog" element={<Blog />}></Route>
            <Route exact path="our-blog/:id" element={<SinglePost />}></Route>
            <Route exact path="contact-us" element={<Contact />}></Route>
            <Route exact path="compare-product" element={<CompareProduct />}></Route>
            <Route exact path="wishlist" element={<Wishlist />}></Route>
            <Route exact path="login" element={<Login />}></Route>
            <Route exact path="register" element={<Signup />}></Route>
            <Route exact path="forgot-password" element={<ForgotPassword />}></Route>
            <Route exact path="reset-password" element={<ResetPassword />}></Route>
            <Route exact path="privacy-policy" element={<PrivacyPolicy />}></Route>
            <Route exact path="refund-policy" element={<RefundPolicy />}></Route>
            <Route exact path="shipping-policy" element={<ShippingPolicy />}></Route>
            <Route exact path="terms-conditions" element={<TermsAndConditions />}></Route>
            <Route exact path="disclaimer" element={<Disclaimer />}></Route>
            <Route exact path="faq" element={<Faqs/>}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
