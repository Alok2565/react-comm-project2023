import React from 'react'
import { Link, NavLink } from 'react-router-dom'

const NavBar = () => {
  return (
    <>
      <div className="container-xxl">
        <div className="row">
            <div className="col-9">
                <div className="menu-bottom d-flex align-items-center gap-30">
                    <div>
                        <div className="dropdown">
                            
                        <button class="btn btn-secondary dropdown-toggle bg-transparent border-0 gap-15 d-flex" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                            <img src="images/menu.svg" alt="menu-icons"/><span className="me-5">Shop Segments</span>
                        </button>
                        <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                            <li><Link className="dropdown-item text-white" to="">Action</Link></li>
                            <li><Link className="dropdown-item text-white" to="">Another action</Link></li>
                            <li><Link className="dropdown-item text-white" to="">Something else here</Link></li>
                        </ul>
                        </div>
                    </div>
                    <div className="menu-links">
                        <div className="d-flex align-items-center gap-15">
                            <NavLink to="/">Home</NavLink>
                            <NavLink to="/about-us">About Us</NavLink>
                            <NavLink to="product">Our Store</NavLink>
                            <NavLink to="/">Best Seller</NavLink>
                            <NavLink to="/">Mobiles</NavLink>
                            <NavLink to="/">Fashion</NavLink>
                            <NavLink to="/our-blog">Blog</NavLink>
                            <NavLink to="/contact-us">Contact Us</NavLink>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-3">
                <div className="menu-content d-flex align-items-center ga-15">
                    <div className="menu-content-item">
                        <p className="mb-0 text-end text-white mt-1">Shopping Easy to buy the Items</p>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </>
  )
}

export default NavBar
