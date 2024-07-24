import React from 'react';
import {Link} from 'react-router-dom';
import {BsSearch} from 'react-icons/bs';
import NavBar from './NavBar';
const Header = () => {
  return (
    <>
        <header className="header-top-strip py-3">
            <div className="container-xxl">
                <div className="row">
                    <div className="col-6">
                        <p className="text-white mb-0">Free shopping for over Rs.500.00 & Free Returns</p>
                    </div>
                    <div className="col-6">
                        <p className="text-end mb-0 text-white">
                            Helpline:
                            <a className="text-white" href="tel:+91 8882165414">+91-8882165414</a>
                        </p>
                    </div>
                </div>
            </div>
        </header>
        <header className="header-upper py-3">
            <div className="container-xxl">
                <div className="row align-items-center">
                    <div className="col-2">
                        <h4 className="mb-0 text-dark"><Link className="text-white" to="/">Shop Kart</Link></h4>
                    </div>
                    <div className="col-5">
                        <div className="input-group">
                            <input type="text" className="form-control py-2" placeholder="Search Product Here ..." aria-label="Search Product Here ..." aria-describedby="basic-addon2"/>
                            <span className="input-group-text py-2" id="basic-addon2">
                                <BsSearch className="mb-0 text-dark fs-6"/>
                            </span>
                        </div>
                    </div>
                    <div className="col-5">
                        <header className="header-upper-links d-flex align-items-center justify-content-between">
                                <div>
                                    <Link className="d-flex align-items-center gap-10 text-white" to={"/compare-product"}>
                                        <img src="/images/compare.svg" alt="compare"/>
                                        <p className="mb-0" style={{fontSize:'13px'}}>Compare <br /> Products</p>
                                    </Link>
                                </div>
                                <div>
                                    <Link className="d-flex align-items-center gap-10 text-white" to={"/wishlist"}>
                                    <img src="/images/wishlist.svg" alt="wishlist"/>
                                        <p className="mb-0" style={{fontSize:'13px'}}>Favorite <br /> Products</p>
                                    </Link>
                                </div>
                                <div>
                                    <Link className="d-flex align-items-center gap-10 text-white" to={"/login"}>
                                    <img src="/images/user.svg" alt="user"/>
                                        <p className="mb-0" style={{fontSize:'13px'}}>Login <br /> My Account </p>
                                    </Link>
                                </div>
                                <div>
                                    <Link to="/cart" className="d-flex align-items-center gap-10 text-white">
                                    <img src="/images/cart.svg" alt="cart"/>
                                        <div className="d-flex flex-column gap-10">
                                            <span className="budge bg-white text-dark" style={{borderRadius: '5px', textAlign:'center', width:'40px'}}>0</span>
                                            <p className="mb-0" style={{fontSize:'13px', fontWeight:'bold'}}>Rs. 500.00</p>
                                        </div>
                                    </Link>
                                </div>
                            </header>
                        </div>
                </div>
            </div>
        </header>
        <header className="header-bottom py-2">
          <NavBar />
        </header>
        
    </>
  )
}

export default Header
