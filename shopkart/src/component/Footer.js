import React from 'react';
import { Link } from 'react-router-dom';
import {BsFacebook,BsTwitter,BsLinkedin,BsInstagram,BsYoutube} from 'react-icons/bs';
const Footer = () => {
  return (
    <>
      <footer className="py-4">
        <div className="container-xxl">
          <div className="row align-items-center">
            <div className="col-5">
              <div className="footer-top-data d-flex gap-30 align-items-center">
                <img src="/images/newsletter.png" alt="news letter"/>
                <h4 className="mb-0 text-white">Sign Up for the News Letter</h4>
              </div>
            </div>
            <div className="col-7">
            <div className="input-group">
                            <input type="text" className="form-control py-1 border-0" placeholder="Your Email Address" aria-label="Your Email Address" aria-describedby="basic-addon2"/>
                            <span className="input-group-text subscriber p-2" id="basic-addon2">
                                Subscriber
                            </span>
                        </div>
            </div>
          </div>
        </div>
      </footer>
      <footer className="py-3">
        <div className="container-xxl">
          <div className="row">
            <div className="col-4">
              <h5 className="mb-4 text-white">Contact Us</h5>
              <div className="py-2 mb-1">
                <address className="text-white fs-6"> New Ashok Nagar,<br />
                  New Delhi, India ,<br />PineCode : 110096 <br/>  
                </address>
                <a className="text-white mt-3 mb-1" href="tel:+91 8882165414">+91-8882165414</a><br />
                <a className="text-white mt-2 mb-0" href="MailTo:web.aloksingh8190@gmail.com">web.aloksingh8190@gmail.com</a>
                <div className="social_icons d-flex align-items-center gap-15 mt-4">
                  <a className="text-white" href="https://facebook.com" target="_blank" rel="noreferrer">
                    <BsFacebook className="fs-5" />
                  </a>
                  <a className="text-white" href="https://twitter.com" target="_blank" rel="noreferrer">
                    <BsTwitter className="fs-5" />
                  </a>
                  <a className="text-white" href="https://linkedin.com" target="_blank" rel="noreferrer">
                    <BsLinkedin className="fs-5" />
                  </a>
                  <a className="text-white" href="https://instagram.com" target="_blank" rel="noreferrer">
                    <BsInstagram className="fs-5"/>
                  </a>
                  <a className="text-white" href="https://youtube.com" target="_blank" rel="noreferrer">
                    <BsYoutube className="fs-5" />
                  </a>
                </div>
              </div>
            </div>
            <div className="col-3">
              <h5 className="mb-4 text-white">Information</h5>
              <div className="footer-links d-flex flex-column">
                <Link className="text-white py-2 mb-1"to="/privacy-policy" >Privacy Policy</Link>
                <Link className="text-white py-2 mb-1" to="/refund-policy">Refunds Policy</Link>
                <Link className="text-white py-2 mb-1" to="/shipping-policy">Shipping Policy</Link>
                <Link className="text-white py-2 mb-1" to="/terms-conditions">Terms & Conditions</Link>
                <Link className="text-white py-2 mb-1" to="/our-blog">Blogs</Link>
              </div>
            </div>
            <div className="col-3">
              <h5 className="mb-4 text-white">Account</h5>
              <div className="footer-links d-flex flex-column">
                <Link className="text-white py-2">Search</Link>
                <Link className="text-white py-2 mb-1" to="/about-us">About us</Link>
                <Link className="text-white py-2 mb-1" to="/faq">Faq's</Link>
                <Link className="text-white py-2 mb-1" to="/contact-us">Contact Us</Link>
                <Link className="text-white py-2 mb-1" to="/disclaimer">Disclaimer</Link>
              </div>
            </div>
            <div className="col-2">
              <h5 className="mb-4 text-white">Quick Links</h5>
              <div className="footer-links d-flex flex-column">
                <Link className="text-white py-2 mb-1">Accessories</Link>
                <Link className="text-white py-2 mb-1">Laptops</Link>
                <Link className="text-white py-2 mb-1">Headphones</Link>
                <Link className="text-white py-2 mb-1">Smart Watches</Link>
                <Link className="text-white py-2 mb-1">Tablets</Link>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <footer className="py-4">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <p className="text-center mb-0 text-white">&Copy: {new Date().getFullYear()}; Powered by Shopkart</p>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer
