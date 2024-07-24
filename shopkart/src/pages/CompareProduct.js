import React from 'react';
import Breadcrumb from '../component/Breadcrumb';
import Meta from '../component/Meta';
import {BiRupee} from 'react-icons/bi';
import Color from '../component/Color';
const CompareProduct = () => {
  return (
    <>
     <Meta title={"Compare Product"} />
     <Breadcrumb title="Compare Product" />
     <div className="compare-product-wrapper home-wrapper-2 py-2">
        <div class="container-xxl">
            <div class="row">
                <div class="col-3">
                    <div className="compare-product-card position-relative">
                        <img src="images/cross.svg" alt="cross" className="position-absolute cross img-fluid"/>
                        <div className="product-card-image">
                            <img src="images/watch.jpg" alt="watch" />
                        </div>
                        <div className="compare-product-details">
                            <h5 className="title">Titan Sonata Smart watch with bluetooth Speakers</h5>
                            <h6 className="price d-flex">
                                <BiRupee className="mb-0" style={{"fontSize":"20px","color": "#1c1c1b"}}/>500.00 <strike className="d-flex">
                                <BiRupee className="mb-0" style={{"fontSize":"20px","color": "#1c1c1b"}}/>699.00</strike></h6>
                                <div>
                                    <div className="product-details">
                                        <h5>Brand:</h5>
                                        <p>Titan</p>
                                    </div>
                                    <div className="product-details">
                                        <h5>Type:</h5>
                                        <p>Watch</p>
                                    </div>
                                    <div className="product-details">
                                        <h5>SKU:</h5>
                                        <p>65840</p>
                                    </div>
                                    <div className="product-details">
                                        <h5>Availability:</h5>
                                        <p>In Stocks</p>
                                    </div>
                                    <div className="product-details">
                                        <h5>Color:</h5>
                                        <Color />
                                    </div>
                                    <div className="product-details">
                                        <h5>Size:</h5>
                                        <div className="d-flex gap-10">
                                            <p>S</p>
                                            <p>M</p>
                                            <p>XL</p>
                                        </div>
                                    </div>
                                </div>
                        </div>
                    </div>
                </div>
                <div class="col-3">
                    <div className="compare-product-card position-relative">
                        <img src="images/cross.svg" alt="cross" className="position-absolute cross img-fluid"/>
                        <div className="product-card-image">
                            <img src="images/camera.jpg" alt="Camera" />
                        </div>
                        <div className="compare-product-details">
                            <h5 className="title">Titan Sonata Smart watch with bluetooth Speakers</h5>
                            <h6 className="price d-flex">
                                <BiRupee className="mb-0" style={{"fontSize":"20px","color": "#1c1c1b"}}/>500.00 <strike className="d-flex">
                                <BiRupee className="mb-0" style={{"fontSize":"20px","color": "#1c1c1b"}}/>699.00</strike></h6>
                                <div>
                                    <div className="product-details">
                                        <h5>Brand:</h5>
                                        <p>Sony</p>
                                    </div>
                                    <div className="product-details">
                                        <h5>Type:</h5>
                                        <p>Camera</p>
                                    </div>
                                    <div className="product-details">
                                        <h5>SKU:</h5>
                                        <p>65840</p>
                                    </div>
                                    <div className="product-details">
                                        <h5>Availability:</h5>
                                        <p>In Stocks</p>
                                    </div>
                                    <div className="product-details">
                                        <h5>Color:</h5>
                                        <Color />
                                    </div>
                                    <div className="product-details">
                                        <h5>Size:</h5>
                                        <div className="d-flex gap-10">
                                            <p>S</p>
                                            <p>M</p>
                                            <p>XL</p>
                                        </div>
                                    </div>
                                </div>
                        </div>
                    </div>
                </div>
                <div class="col-3">
                    <div className="compare-product-card position-relative">
                        <img src="images/cross.svg" alt="cross" className="position-absolute cross img-fluid"/>
                        <div className="product-card-image">
                            <img src="images/watch-1.webp" alt="watch" />
                        </div>
                        <div className="compare-product-details">
                            <h5 className="title">Titan Sonata Smart watch with bluetooth Speakers</h5>
                            <h6 className="price d-flex">
                                <BiRupee className="mb-0" style={{"fontSize":"20px","color": "#1c1c1b"}}/>500.00 <strike className="d-flex">
                                <BiRupee className="mb-0" style={{"fontSize":"20px","color": "#1c1c1b"}}/>699.00</strike></h6>
                                <div>
                                    <div className="product-details">
                                        <h5>Brand:</h5>
                                        <p>Titan</p>
                                    </div>
                                    <div className="product-details">
                                        <h5>Type:</h5>
                                        <p>Watch</p>
                                    </div>
                                    <div className="product-details">
                                        <h5>SKU:</h5>
                                        <p>65840</p>
                                    </div>
                                    <div className="product-details">
                                        <h5>Availability:</h5>
                                        <p>In Stocks</p>
                                    </div>
                                    <div className="product-details">
                                        <h5>Color:</h5>
                                        <Color />
                                    </div>
                                    <div className="product-details">
                                        <h5>Size:</h5>
                                        <div className="d-flex gap-10">
                                            <p>S</p>
                                            <p>M</p>
                                            <p>XL</p>
                                        </div>
                                    </div>
                                </div>
                        </div>
                    </div>
                </div>
                <div class="col-3">
                    <div className="compare-product-card position-relative">
                        <img src="images/cross.svg" alt="cross" className="position-absolute cross img-fluid"/>
                        <div className="product-card-image">
                            <img src="images/watch-011.jpg" alt="watch" />
                        </div>
                        <div className="compare-product-details">
                            <h5 className="title">Titan Sonata Smart watch with bluetooth Speakers</h5>
                            <h6 className="price d-flex">
                                <BiRupee className="mb-0" style={{"fontSize":"20px","color": "#1c1c1b"}}/>500.00 <strike className="d-flex">
                                <BiRupee className="mb-0" style={{"fontSize":"20px","color": "#1c1c1b"}}/>699.00</strike></h6>
                                <div>
                                    <div className="product-details">
                                        <h5>Brand:</h5>
                                        <p>Titan</p>
                                    </div>
                                    <div className="product-details">
                                        <h5>Type:</h5>
                                        <p>Watch</p>
                                    </div>
                                    <div className="product-details">
                                        <h5>SKU:</h5>
                                        <p>65840</p>
                                    </div>
                                    <div className="product-details">
                                        <h5>Availability:</h5>
                                        <p>In Stocks</p>
                                    </div>
                                    <div className="product-details">
                                        <h5>Color:</h5>
                                        <Color />
                                    </div>
                                    <div className="product-details">
                                        <h5>Size:</h5>
                                        <div className="d-flex gap-10">
                                            <p>S</p>
                                            <p>M</p>
                                            <p>XL</p>
                                        </div>
                                    </div>
                                </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
     </div>
    </>
  );
}

export default CompareProduct
