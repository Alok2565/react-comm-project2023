import React from 'react';
import Breadcrumb from '../component/Breadcrumb';
import Meta from '../component/Meta';
import {BiRupee} from 'react-icons/bi';
import watch from '../images/watch.jpg';
import headphone from '../images/headphone.jpg'
import {AiFillDelete} from 'react-icons/ai';
import { Link } from 'react-router-dom';
const Cart = () => {
  return (
    <>
    <Meta title={"Cart"}/>
    <Breadcrumb title="Cart"/>
      <section className="cart-wrapper home-wrapper-2 py-5">
        <div className="container-xxl">
            <div className="row">
                <div className="col-12">
                    <div className="cart-header py-3 d-flex justify-content-between align-items-center">
                        <h4 className="cart-col-1">Product</h4>
                        <h4 className="cart-col-2">Price</h4>
                        <h4 className="cart-col-3">Quantity</h4>
                        <h4 className="cart-col-4">Total</h4>
                    </div>
                    <div className="cart-data py-3 d-flex mb-2 justify-content-between align-items-center">
                        <div className="cart-col-1 gap-15 d-flex align-items-center">
                            <div className="w-25">
                                <img src={watch} className="img-fluid" alt="product" />
                            </div>
                            <div className="w-75">
                                <h5 className="title">Product silk Cotton</h5>
                                <p className="color">Color : red</p>
                                <p className="size">Size : M</p>
                            </div>
                        </div>
                        <div className="cart-col-2">
                            <h5 className="price"><BiRupee className="mt-0" /><span style={{"fontSize":"17px"}}>500.00</span></h5>
                        </div>
                        <div className="cart-col-3 d-flex flex-row align-items-center gap-15">
                            <div>
                                <input className="form-control" type="number" name="" min={1} max={10} id="" style={{"width":"70px"}}/>
                            </div>
                            <div className="delete-product"><AiFillDelete className="text-dark" /></div>
                        </div>
                        <div className="cart-col-4">
                        <h5 className="price"><BiRupee className="mt-0" /><span style={{"fontSize":"17px"}}>500.00</span></h5>
                        </div>
                    </div>
                    <div className="cart-data py-3 d-flex mb-2 justify-content-between align-items-center">
                        <div className="cart-col-1 gap-15 d-flex align-items-center">
                            <div className="w-25">
                                <img src={headphone} className="img-fluid" alt="product" />
                            </div>
                            <div className="w-75">
                                <h5 className="title">Product silk Cotton</h5>
                                <p className="color">Color : red</p>
                                <p className="size">Size : M</p>
                            </div>
                        </div>
                        <div className="cart-col-2">
                            <h5 className="price"><BiRupee className="mt-0" /><span style={{"fontSize":"17px"}}>500.00</span></h5>
                        </div>
                        <div className="cart-col-3 d-flex flex-row align-items-center gap-15">
                            <div>
                                <input className="form-control" type="number" name="" min={1} max={10} id="" style={{"width":"70px"}}/>
                            </div>
                            <div className="delete-product"><AiFillDelete className="text-dark" /></div>
                        </div>
                        <div className="cart-col-4">
                        <h5 className="price"><BiRupee className="mt-0" /><span style={{"fontSize":"17px"}}>500.00</span></h5>
                        </div>
                    </div>
                </div>
                <div className="col-12 mt-3">
                    <div className="d-flex justify-content-between align-items-baseline">
                        <button className="button border-0">
                            <Link to="/product" className="p-2 px-3 text-white" style={{"fontSize":"16px"}}>Continue To Shopping</Link>
                        </button>
                    
                    <div className=" d-flex flex-column align-items-end">
                        <h5 className="mb-0">SubTotal: <BiRupee className="mt-0" /><span style={{"fontSize":"16px"}}>1000.00</span></h5>
                        <p>Taxes and shipping calculated at checkout</p>
                        <button className="button border-0">
                            <Link to="/checkout" className="p-2 px-4 text-white" style={{"fontSize":"16px"}}>Checkout</Link>
                        </button>
                    </div>
                    </div> 
                </div>
            </div>
        </div>
      </section>
    </>
  )
}

export default Cart
