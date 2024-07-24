import React from 'react';
import Breadcrumb from '../component/Breadcrumb';
import Meta from '../component/Meta';
import {BiRupee} from 'react-icons/bi';
const Wishlist = () => {
  return (
    <>
      <Meta title={"Wishlist"} />
      <Breadcrumb title="Wishlist" />
      <div className="wishlist-wrapper home-wrapper py-2">
        <div className="container-xxl">
          <div className="row">
            <div className="col-3">
              <div className="wishlist-product-card position-relative">
                <img src="images/cross.svg" alt="cross" className="position-absolute cross img-fluid" />
                <div className="wishlist-card-image">
                  <img src="images/watch.jpg" alt="watch" className="img-fluid w-100" />
                </div>
                <div className="wishlist-product-details py-3 px-3">
                <h5 className="title">Titan Sonata Smart watch with bluetooth Speakers</h5>
                <h6 className="price d-flex">
                  <BiRupee className="mb-0" style={{"fontSize":"20px","color": "#1c1c1b"}}/>500.00 <strike className="d-flex">
                  <BiRupee className="mb-0" style={{"fontSize":"20px","color": "#1c1c1b"}}/>699.00</strike></h6>
                </div>
                
              </div>
            </div>
            <div className="col-3">
              <div className="wishlist-product-card position-relative">
                <img src="images/cross.svg" alt="cross" className="position-absolute cross img-fluid" />
                <div className="wishlist-card-image">
                  <img src="images/watch.jpg" alt="watch" className="img-fluid w-100" />
                </div>
                <div className="wishlist-product-details py-3 px-3">
                <h5 className="title">Titan Sonata Smart watch with bluetooth Speakers</h5>
                <h6 className="price d-flex">
                  <BiRupee className="mb-0" style={{"fontSize":"20px","color": "#1c1c1b"}}/>500.00 <strike className="d-flex">
                  <BiRupee className="mb-0" style={{"fontSize":"20px","color": "#1c1c1b"}}/>699.00</strike></h6>
                </div>
                
              </div>
            </div>
            <div className="col-3">
              <div className="wishlist-product-card position-relative">
                <img src="images/cross.svg" alt="cross" className="position-absolute cross img-fluid" />
                <div className="wishlist-card-image">
                  <img src="images/watch.jpg" alt="watch" className="img-fluid w-100" />
                </div>
                <div className="wishlist-product-details py-3 px-3">
                <h5 className="title">Titan Sonata Smart watch with bluetooth Speakers</h5>
                <h6 className="price d-flex">
                  <BiRupee className="mb-0" style={{"fontSize":"20px","color": "#1c1c1b"}}/>500.00 <strike className="d-flex">
                  <BiRupee className="mb-0" style={{"fontSize":"20px","color": "#1c1c1b"}}/>699.00</strike></h6>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </>
  )
}

export default Wishlist
