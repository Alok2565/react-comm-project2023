import React, { useEffect, useState }  from 'react';
import { Link } from 'react-router-dom';
import Breadcrumb from '../component/Breadcrumb';
import Meta from '../component/Meta';
import {MdArrowForwardIos, MdOutlineArrowBack} from 'react-icons/md';
import {Country, State, City} from 'country-state-city';
import Select from "react-select";
import {BiRupee} from 'react-icons/bi';
import homeapp from '../images/homeapp.jpg';
import headphone from '../images/headphone.jpg';
const Checkout = () => { 
const [selectedCountry, setSelectedCountry] = useState(null);
const [selectedState, setSelectedState] = useState(null);
const [selectedCity, setSelectedCity] = useState(null);
useEffect(() => {
console.log(selectedCountry);
console.log(selectedCountry?.isoCode);
console.log(State?.getStatesOfCountry(selectedCountry?.isoCode));
}, [selectedCountry]);
return (
<>
<Meta title={"Checkout"}/>
<Breadcrumb title="Checkout"/>
<div className="checkout-wrapper home-wrapper-2 py-2 mb-5">
   <div className="container-xxl">
      <div className="row">
         <div className="col-7">
            <div className="checkout-left-data">
               <h3 className="website-name">ShopKart</h3>
               <nav aria-label="breadcrumb">
                  <ol className="breadcrumb">
                     <li className="breadcrumb-item">
                     <Link to="/cart" className="text-dark total-price">Cart</Link></li>
                     &nbsp;
                     <MdArrowForwardIos className="mt-1"/>
                     &nbsp;
                     <li className="breadcrumb-item total-price active" aria-current="page">
                     Information</li> &nbsp;
                     <MdArrowForwardIos className="mt-1"/>
                     &nbsp;
                     <li className="breadcrumb-item total-price active" aria-current="page">
                     Shipping</li>
                     &nbsp;
                     <MdArrowForwardIos className="mt-1"/>
                     &nbsp;
                     <li className="breadcrumb-item total-price active" aria-current="page">
                     Payment</li>
                  </ol>
               </nav>
               <h4 className="title total">Contact Information</h4>
               <p className="user-details total">ALok Singh (web.aloksingh8190@gmail.com)
               </p>
               <h4>Shipping Address</h4>
               <form action="" className=" flex-wrap justify-content-between d-flex gap-15">
               <div className="w-100">
                     <input type="text" placeholder="Use new address" className="form-control" />
                  </div>
                  <div className="w-100">
                     {/* 
                     <select name="" className="from-control form-select" id="">
                        <option value="" selected disabled>Select Country</option>
                     </select>
                     */}
                     <Select
                        options={Country.getAllCountries()}
                        getOptionLabel={(options) => {
                     return options["name"];
                     }}
                     getOptionValue={(options) => {
                     return options["name"];
                     }}
                     value={selectedCountry}
                     onChange={(item) => {
                     setSelectedCountry(item);
                     }}
                     />
                  </div>
                  <div className="flex-grow-1">
                     <input type="text" placeholder="First Name" className="form-control" />
                  </div>
                  <div className="flex-grow-1">
                     <input type="text" placeholder="Last Name" className="form-control" />
                  </div>
                  <div className="w-100">
                     <input type="text" placeholder="Address" className="form-control" />
                  </div>
                  <div className="w-100">
                     <input type="text" placeholder="House No., Apartment, etc(Optional)" className="form-control" />
                  </div>
                  <div className="flex-grow-1">
                     <Select
                        options={State?.getStatesOfCountry(selectedCountry?.isoCode)}
                        getOptionLabel={(options) => {
                     return options["name"];
                     }}
                     getOptionValue={(options) => {
                     return options["name"];
                     }}
                     value={selectedState}
                     onChange={(item) => {
                     setSelectedState(item);
                     }}
                     />
                  </div>
                  <div className="flex-grow-1">
                     <Select
                     options={City.getCitiesOfState(
                     selectedState?.countryCode,
                     selectedState?.isoCode
                     )}
                     getOptionLabel={(options) => {
                     return options["name"];
                     }}
                     getOptionValue={(options) => {
                     return options["name"];
                     }}
                     value={selectedCity}
                     onChange={(item) => {
                     setSelectedCity(item);
                     }}
                     />
                  </div>
                  <div className="flex-grow-1">
                     <input type="text" placeholder="Zip Code" className="form-control" />
                  </div>
                  <div className="w-100">
                     <div className="d-flex justify-content-between align-items-baseline">
                     <Link to="/cart" className="text-dark" style={{"color":"#1c1c1b"}}><MdOutlineArrowBack className="me-2"/>Return To Cart</Link>
                     <div className=" d-flex flex-column align-items-end">
                        <button className="button border-0">
                            <Link to="/checkout" className="p-2 px-4 text-white" style={{"fontSize":"16px"}}>Continue To Shipping</Link>
                        </button>
                    </div>
                     </div>
                  </div>
               </form>
            </div>
         </div>
         <div className="col-5">
            <div className="border-bottom py-4">
               <div className="d-flex gap-10 mb-2 align-items-center py-2">
               <div className="w-75 d-flex gap-10">
                  <div className="w-25 position-relative mt-2">
                     <span style={{"top":"-10px", right:"2px",backgroundColor:"#232f3e"}} className="badge text-white rounded-circle p-2 position-absolute">
                        1
                     </span>
                     <img className="img-fluid" src={homeapp} alt="" />
                  </div>
                  <div className="prod-shipping-title p-2">
                     <h5 className="title">sgdxhfcjm</h5>
                     <p className="total-price">S /sgdsgd</p>
                  </div>
               </div>
               <div className="flex-grow-1">
                  <h5 className="total"><BiRupee />500.00</h5>
               </div>
               </div>
               <div className="d-flex gap-10 mb-2 align-items-center py-2">
               <div className="w-75 d-flex gap-10">
                  <div className="w-25 position-relative mt-2">
                     <span style={{"top":"-10px", right:"2px", backgroundColor:"#232f3e"}} className="badge text-white rounded-circle p-2 position-absolute">
                        1
                     </span>
                     <img className="img-fluid" src={headphone} alt="" />
                  </div>
                  <div className="prod-shipping-title p-2">
                     <h5 className="title">sgdxhfcjm</h5>
                     <p className="total-price">S /sgdsgd</p>
                  </div>
               </div>
               <div className="flex-grow-1">
                  <h5 className="total"><BiRupee className="" style={{"fontSize":"17px"}}/>500.00</h5>
               </div>
               </div>
            </div>
            <div className="border-bottom py-4">
                  <div className="d-flex justify-content-between align-items-center">
                     <p className="mb-2 total">Subtotal</p>
                     <p className="mb-2 total-price"><BiRupee />1000.00</p>
                  </div> 
                  <div className="d-flex justify-content-between align-items-center">
                     <p className="mb-2 total">Shipping</p>
                     <p className="mb-2 total-price"><BiRupee />1000.00</p>
                  </div>
            </div>
            <div className="d-flex justify-content-between align-items-center border-bottom py-4">
               <h4 className="total">Total</h4>
               <h5 className="total-price mb-0"><BiRupee />1000.00</h5>
            </div> 
         </div>
      </div>
   </div>
</div>
<div>
</div>
</>
)
}
export default Checkout
