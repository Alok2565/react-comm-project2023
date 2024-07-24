import React, {useState} from 'react'
import ReactStars from 'react-rating-stars-component';
import Breadcrumb from '../component/Breadcrumb';
import Meta from '../component/Meta';
import RelatedProducts from '../component/RelatedProducts';
import ReactImageZoom from 'react-image-zoom';
import {BiRupee, BiHeart, BiGitCompare} from 'react-icons/bi';
import { Link } from 'react-router-dom';
import Color from '../component/Color';
import {BsTruck} from 'react-icons/bs';
const SingleProduct = () => {
  const props = {width: 400, height: 600, zoomWidth: 600, img: "https://images.pexels.com/photos/190819/pexels-photo-190819.jpeg"};
    const [orderedProduct] = useState(true);
    const[ grid ] = useState(3);
//    alert(grid);
  return (
    <>
      <Meta title={"Product Name"} />
      <Breadcrumb title="Product Name" />
     <div className="main-product-wrapper home-wrapper-2 py-2">
        <div className="container-xxl">
            <div className="row">
                <div className="col-6">
                  <div className="main-product-image">
                    <div>
                    <ReactImageZoom {...props} />
                    </div>
                  </div>
                  <div className="other-product-image d-flex flex-wrap gap-15">
                    <div><img src="https://thumbs.dreamstime.com/b/sports-watch-18267420.jpg" className="img-fluid" alt="watch"/></div>
                    <div><img src="https://i0.wp.com/www.smartprix.com/bytes/wp-content/uploads/2022/01/oppo-watch-free.png" className="img-fluid" alt="watch"/></div>
                    <div><img src="https://thumbs.dreamstime.com/b/sports-watch-18267420.jpg" className="img-fluid" alt="watch"/></div>
                    <div><img src="https://i0.wp.com/www.smartprix.com/bytes/wp-content/uploads/2022/01/oppo-watch-free.png" className="img-fluid" alt="watch"/></div>
                  </div>
                </div>
                <div className="col-6">
                  <div className="main-product-details">
                    <div className="border-bottom">
                      <h4 className="title">Kids Headphones Bulk 10 Pack Multi Colored for Student</h4>
                    </div>
                    <div className="border-bottom py-2">
                      <p className="price"><BiRupee className="mb-0" style={{"fontWeight":"600"}}/>999.00</p>
                      <div className="d-flex align-items-center gap-10">
                      <ReactStars count={5} size={20} value={4} edit="false" activeColor="#ffd700" />
                      <p className="mb-0 t-review">( 2 Reviews )</p>
                      </div>
                      <a className="review-btn" href="#review">Write a Review</a>
                    </div>
                    <div className="border-bottom py-2">
                      <div className="d-flex gap-10 align-items-center my-2">
                        <h4 className="product-heading">Type :</h4>
                        <p className="product-data">Watch</p>
                      </div>
                      <div className="d-flex gap-10 align-items-center my-2">
                        <h4 className="product-heading">Brand :</h4>
                        <p className="product-data">Titan</p>
                      </div>
                      <div className="d-flex gap-10 align-items-center my-2">
                        <h4 className="product-heading">Category :</h4>
                        <p className="product-data">Watch</p>
                      </div>
                      <div className="d-flex gap-10 align-items-center my-2">
                        <h4 className="product-heading">Tags :</h4>
                        <p className="product-data">Watch, Men Watch, Women Watch</p>
                      </div>
                      <div className="d-flex gap-10 align-items-center my-2">
                        <h4 className="product-heading">Availability :</h4>
                        <p className="product-data">In Stock</p>
                      </div>
                      <div className="d-flex gap-10 flex-column mt-2 mb-3">
                        <h4 className="product-heading">Size :</h4>
                        <div className="d-flex flex-wrap gap-15">
                          <span className="badge border border-1 bg-white text-dark border-secondary">S</span>
                          <span className="badge border border-1 bg-white text-dark border-secondary">M</span>
                          <span className="badge border border-1 bg-white text-dark border-secondary">XL</span>
                          <span className="badge border border-1 bg-white text-dark border-secondary">XXL</span>
                        </div>
                      </div>
                      <div className="d-flex gap-10 flex-column mt-2 mb-3">
                        <h4 className="product-heading">Color :</h4>
                        <Color />
                      </div>
                      <div className="d-flex gap-15 flex-row mt-2 mb-3">
                        <h4 className="product-heading">Quantity :</h4>
                        <div className="product-qty">
                          <input type="number" name="" min={0} max={10} className="form-control" style={{"width":"70px"}} id="" />
                        </div>
                        <div className="d-flex align-items-center gap-15 ms-5">
                          <button className="button border-0"><Link to="/cart" className="p-2 px-3 text-white">Add To Cart</Link></button>
                          <button className="button border-0"><Link to="/checkout" className="p-2 px-3 text-white">Buy it Now</Link></button> 
                        </div>
                      </div>
                      <div className="d-flex align-items-center gap-15 py-3">
                        <div><a href="void(0)"><BiGitCompare className="fs-5 me-2"/> Add to Compare</a></div>
                        <div><a href="void(0)"><BiHeart className="fs-5 me-2"/> Add to Wishlist</a></div>
                      </div>
                      <div className="d-flex gap-10 py-2 flex-column">
                        <h4 className="product-heading"><BsTruck /> Shipping & Returns :</h4>
                        <p className="product-data">Free shipping and returns Available on all order! <br />we ship all IN domestic orders within <b>5-10 business days!</b></p>
                      </div>
                      
                    </div>
                  </div>
                </div>
            </div>
        </div>
     </div>
     <div className="description-wrapper home-wrapper-2 py-2">
        <div class="container-xxl">
            <div class="row">
                <div class="col-12">
                    <div className="description-card">
                    <h4>Description</h4>
                    <div className="bg-white p-3">
                        <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam ornare tempus aliquet. Pellentesque finibus, est et iaculis suscipit, dolor nulla commodo dui, nec ultricies arcu nisl tristique eros. Morbi eros est, pulvinar eget ornare ac, ultrices eget risus. Ut lobortis pellentesque pretium. Praesent sollicitudin vestibulum iaculis. Mauris a finibus orci. Quisque ipsum nunc, efficitur sit amet blandit ut, aliquam quis dui. Phasellus interdum leo eu ipsum malesuada, et interdum diam egestas. Maecenas pretium fermentum tortor ac tincidunt. Curabitur consectetur dolor libero, at aliquam est ornare eleifend. Aliquam at finibus dolor
                        </p>
                    </div>
                    </div>
                </div>
            </div>
        </div>
     </div>
    <section className="reviews-wrapper home-wrapper-2 py-2">
        <div class="container-xxl">
            <div class="row">
                <div class="col-12">
                  <h4 id="review">Reviews</h4>
                    <div className="review-inner-wrapper">
                    <div className="review-head d-flex justify-content-between align-items-end">
                        <div>
                            <h5 className="mb-2">Customer Reviews</h5>
                            <div className="d-flex align-items-center gap-10">
                            <ReactStars count={5} size={20} value={4} edit="false" activeColor="#ffd700" />
                            <p className="mb-0">Based on 2 Reviews</p>
                            </div>
                        </div>
                        {
                            orderedProduct &&(
                                <div>
                                    <a href="/#" className="text-dark text-decoration-none">Write a Review</a>
                                </div>
                            )
                        }
                    </div>
                    <div className="review-form py-2">
                    <h5 className="mb-2">Write a Reviews</h5>
                    <form action="" className="d-flex flex-column gap-15">
                      <div><ReactStars count={5} size={20} value={4} edit="true" activeColor="#ffd700" /></div>
                      <textarea name="" id="" className="w-100 from-control rounded-3" cols="30" rows="5" placeholder="Comments"/>
                      <div className="d-flex justify-content-end gap-10">
                        <button className="button btn-secondary px-4 py-2 p-10 mb-2 border-0">Submit Review</button>
                    </div>
                    </form>
                    </div>
                    <div className="reviews mt-4">
                      <div className="review">
                      <div className="d-flex align-items-center gap-10">
                        <h6 className="mb-0">Shudhanshu</h6>
                        <ReactStars count={5} size={20} value={4} edit="false" activeColor="#ffd700" />
                      </div>
                      <p className="mt-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam ornare tempus aliquet. Pellentesque finibus, est et iaculis suscipit, dolor nulla commodo dui, nec ultricies arcu nisl tristique eros.</p>
                      </div>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
     <section className="relate-product-wrapper py-5 home-wrapper-2">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <h3 className="section-heading">Related Product</h3>
            </div>
            <RelatedProducts grid={grid}/>
            {/* <RelatedProducts />
            <RelatedProducts />
            <RelatedProducts />
            <RelatedProducts /> */}
          </div>
        </div>
      </section>
    </>
  )
}

export default SingleProduct
