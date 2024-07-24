import React from 'react'
import { BiRupee } from 'react-icons/bi';
import ReactStars from 'react-rating-stars-component'
import { Link, useLocation } from 'react-router-dom'
const ProductListCard = (props) => {
  const { grid } =props;
  let location = useLocation();
  // console.log(location);
  return (
    <>
    <div className={` ${location.pathname ="/our-store" ? `gr-${grid}` : "col-3"}`}>
      <Link to="/product/:id" className="product-list-card position-relative">
          <div className="wishlist-icon position-absolute">
            <Link to="/wishlist" className="border-0 bg-transparent"><img src="/images/wish.svg" alt="wishlist" /></Link>
          </div>
          <div className="product-image">
            <img src="/images/watch.jpg" className="img-fluid" alt="watch" />
            <img src="/images/watch-1.webp" className="img-fluid" alt="watch1" />
          </div>
          <div className="product-details">
            <h6 className="brand">Havels</h6>
            <h5 className="product-title">
              kids headphones bulk 10 pack multi colored for students
            </h5>
            <ReactStars count={5} size={24} value={4} edit="false" activeColor="#ffd700" />
            <p className={`description ${grid=== 12 ? "d-block" : "d-none"}`}>
              A smartwatch is a wearable computer in the form of a watch; modern smartwatches provide a local touchscreen interface for daily use, while an associated smartphone app provides management and telemetry, such as long-term biomonitoring. </p>
            <p className="price"><BiRupee />500.00</p>
            <Link to="/cart" className="button px-lg-3 p-2 border-0 bg-transparent">Add To Cart</Link>
          </div>
          <div className="action-bar position-absolute gap-30">
            <div className="d-flex flex-column">
              <Link to="/compare-product" className="border-0 bg-transparent">
                <img src="/images/prod-compare.svg" alt="compare2" />
              </Link>
              <Link className="border-0 bg-transparent">
                <img src="/images/view.svg" alt="view" />
              </Link>
              <Link to="/cart" className="border-0 bg-transparent">
                <img src="/images/add-cart.svg" alt="add-cart" />
              </Link>
            </div>
          </div>
        </Link>
    </div>
    <div className={` ${location.pathname ="/our-store" ? `gr-${grid}` : "col-3"}`}>
      <Link to="/product/:id" className="product-list-card position-relative">
          <div className="wishlist-icon position-absolute">
            <Link to="/wishlist" className="border-0 bg-transparent"><img src="/images/wish.svg" alt="wishlist" /></Link>
          </div>
          <div className="product-image">
            <img src="/images/watch.jpg" className="img-fluid" alt="watch" />
            <img src="/images/watch-1.webp" className="img-fluid" alt="watch1" />
          </div>
          <div className="product-details">
            <h6 className="brand">Havels</h6>
            <h5 className="product-title">
              kids headphones bulk 10 pack multi colored for students
            </h5>
            <ReactStars count={5} size={24} value={4} edit="false" activeColor="#ffd700" />
            <p className={`description ${grid=== 12 ? "d-block" : "d-none"}`}>
              A smartwatch is a wearable computer in the form of a watch; modern smartwatches provide a local touchscreen interface for daily use, while an associated smartphone app provides management and telemetry, such as long-term biomonitoring. </p>
            <p className="price"><BiRupee />500.00</p>
            <Link to="/cart" className="button px-lg-3 p-2 border-0 bg-transparent">Add To Cart</Link>
          </div>
          <div className="action-bar position-absolute gap-30">
            <div className="d-flex flex-column">
              <Link to="/compare-product" className="border-0 bg-transparent">
                <img src="/images/prod-compare.svg" alt="compare2" />
              </Link>
              <Link className="border-0 bg-transparent">
                <img src="/images/view.svg" alt="view" />
              </Link>
              <Link to="/cart" className="border-0 bg-transparent">
                <img src="/images/add-cart.svg" alt="add-cart" />
              </Link>
            </div>
          </div>
        </Link>
    </div>
    <div className={` ${location.pathname ="/our-store" ? `gr-${grid}` : "col-3"}`}>
      <Link to="/product/:id" className="product-list-card position-relative">
          <div className="wishlist-icon position-absolute">
            <Link to="/wishlist" className="border-0 bg-transparent"><img src="/images/wish.svg" alt="wishlist" /></Link>
          </div>
          <div className="product-image">
            <img src="/images/watch.jpg" className="img-fluid" alt="watch" />
            <img src="/images/watch-1.webp" className="img-fluid" alt="watch1" />
          </div>
          <div className="product-details">
            <h6 className="brand">Havels</h6>
            <h5 className="product-title">
              kids headphones bulk 10 pack multi colored for students
            </h5>
            <ReactStars count={5} size={24} value={4} edit="false" activeColor="#ffd700" />
            <p className={`description ${grid=== 12 ? "d-block" : "d-none"}`}>
              A smartwatch is a wearable computer in the form of a watch; modern smartwatches provide a local touchscreen interface for daily use, while an associated smartphone app provides management and telemetry, such as long-term biomonitoring. </p>
            <p className="price"><BiRupee />500.00</p>
            <Link to="/cart" className="button px-lg-3 p-2 border-0 bg-transparent">Add To Cart</Link>
          </div>
          <div className="action-bar position-absolute gap-30">
            <div className="d-flex flex-column">
              <Link to="/compare-product" className="border-0 bg-transparent">
                <img src="/images/prod-compare.svg" alt="compare2" />
              </Link>
              <Link className="border-0 bg-transparent">
                <img src="/images/view.svg" alt="view" />
              </Link>
              <Link to="/cart" className="border-0 bg-transparent">
                <img src="/images/add-cart.svg" alt="add-cart" />
              </Link>
            </div>
          </div>
        </Link>
    </div>
    <div className={` ${location.pathname ="/our-store" ? `gr-${grid}` : "col-3"}`}>
      <Link to="/product/:id" className="product-list-card position-relative">
          <div className="wishlist-icon position-absolute">
            <Link to="/wishlist" className="border-0 bg-transparent"><img src="/images/wish.svg" alt="wishlist" /></Link>
          </div>
          <div className="product-image">
            <img src="/images/watch.jpg" className="img-fluid" alt="watch" />
            <img src="/images/watch-1.webp" className="img-fluid" alt="watch1" />
          </div>
          <div className="product-details">
            <h6 className="brand">Havels</h6>
            <h5 className="product-title">
              kids headphones bulk 10 pack multi colored for students
            </h5>
            <ReactStars count={5} size={24} value={4} edit="false" activeColor="#ffd700" />
            <p className={`description ${grid=== 12 ? "d-block" : "d-none"}`}>
              A smartwatch is a wearable computer in the form of a watch; modern smartwatches provide a local touchscreen interface for daily use, while an associated smartphone app provides management and telemetry, such as long-term biomonitoring. </p>
            <p className="price"><BiRupee />500.00</p>
            <Link to="/cart" className="button px-lg-3 p-2 border-0 bg-transparent">Add To Cart</Link>
          </div>
          <div className="action-bar position-absolute gap-30">
            <div className="d-flex flex-column">
              <Link to="/compare-product" className="border-0 bg-transparent">
                <img src="/images/prod-compare.svg" alt="compare2" />
              </Link>
              <Link className="border-0 bg-transparent">
                <img src="/images/view.svg" alt="view" />
              </Link>
              <Link to="/cart" className="border-0 bg-transparent">
                <img src="/images/add-cart.svg" alt="add-cart" />
              </Link>
            </div>
          </div>
        </Link>
    </div>
    <div className={` ${location.pathname ="/our-store" ? `gr-${grid}` : "col-3"}`}>
      <Link to="/product/:id" className="product-list-card position-relative">
          <div className="wishlist-icon position-absolute">
            <Link to="/wishlist" className="border-0 bg-transparent"><img src="/images/wish.svg" alt="wishlist" /></Link>
          </div>
          <div className="product-image">
            <img src="/images/watch.jpg" className="img-fluid" alt="watch" />
            <img src="/images/watch-1.webp" className="img-fluid" alt="watch1" />
          </div>
          <div className="product-details">
            <h6 className="brand">Havels</h6>
            <h5 className="product-title">
              kids headphones bulk 10 pack multi colored for students
            </h5>
            <ReactStars count={5} size={24} value={4} edit="false" activeColor="#ffd700" />
            <p className={`description ${grid=== 12 ? "d-block" : "d-none"}`}>
              A smartwatch is a wearable computer in the form of a watch; modern smartwatches provide a local touchscreen interface for daily use, while an associated smartphone app provides management and telemetry, such as long-term biomonitoring. </p>
            <p className="price"><BiRupee />500.00</p>
            <Link to="/cart" className="button px-lg-3 p-2 border-0 bg-transparent">Add To Cart</Link>
          </div>
          <div className="action-bar position-absolute gap-30">
            <div className="d-flex flex-column">
              <Link to="/compare-product" className="border-0 bg-transparent">
                <img src="/images/prod-compare.svg" alt="compare2" />
              </Link>
              <Link className="border-0 bg-transparent">
                <img src="/images/view.svg" alt="view" />
              </Link>
              <Link to="/cart" className="border-0 bg-transparent">
                <img src="/images/add-cart.svg" alt="add-cart" />
              </Link>
            </div>
          </div>
        </Link>
    </div>
    <div className={` ${location.pathname ="/our-store" ? `gr-${grid}` : "col-3"}`}>
      <Link to="/product/:id" className="product-list-card position-relative">
          <div className="wishlist-icon position-absolute">
            <Link to="/wishlist" className="border-0 bg-transparent"><img src="/images/wish.svg" alt="wishlist" /></Link>
          </div>
          <div className="product-image">
            <img src="/images/watch.jpg" className="img-fluid" alt="watch" />
            <img src="/images/watch-1.webp" className="img-fluid" alt="watch1" />
          </div>
          <div className="product-details">
            <h6 className="brand">Havels</h6>
            <h5 className="product-title">
              kids headphones bulk 10 pack multi colored for students
            </h5>
            <ReactStars count={5} size={24} value={4} edit="false" activeColor="#ffd700" />
            <p className={`description ${grid=== 12 ? "d-block" : "d-none"}`}>
              A smartwatch is a wearable computer in the form of a watch; modern smartwatches provide a local touchscreen interface for daily use, while an associated smartphone app provides management and telemetry, such as long-term biomonitoring. </p>
            <p className="price"><BiRupee />500.00</p>
            <Link to="/cart" className="button px-lg-3 p-2 border-0 bg-transparent">Add To Cart</Link>
          </div>
          <div className="action-bar position-absolute gap-30">
            <div className="d-flex flex-column">
              <Link to="/compare-product" className="border-0 bg-transparent">
                <img src="/images/prod-compare.svg" alt="compare2" />
              </Link>
              <Link className="border-0 bg-transparent">
                <img src="/images/view.svg" alt="view" />
              </Link>
              <Link to="/cart" className="border-0 bg-transparent">
                <img src="/images/add-cart.svg" alt="add-cart" />
              </Link>
            </div>
          </div>
        </Link>
    </div>
    <div className={` ${location.pathname ="/our-store" ? `gr-${grid}` : "col-3"}`}>
      <Link to="/product/:id" className="product-list-card position-relative">
          <div className="wishlist-icon position-absolute">
            <Link to="/wishlist" className="border-0 bg-transparent"><img src="/images/wish.svg" alt="wishlist" /></Link>
          </div>
          <div className="product-image">
            <img src="/images/watch.jpg" className="img-fluid" alt="watch" />
            <img src="/images/watch-1.webp" className="img-fluid" alt="watch1" />
          </div>
          <div className="product-details">
            <h6 className="brand">Havels</h6>
            <h5 className="product-title">
              kids headphones bulk 10 pack multi colored for students
            </h5>
            <ReactStars count={5} size={24} value={4} edit="false" activeColor="#ffd700" />
            <p className={`description ${grid=== 12 ? "d-block" : "d-none"}`}>
              A smartwatch is a wearable computer in the form of a watch; modern smartwatches provide a local touchscreen interface for daily use, while an associated smartphone app provides management and telemetry, such as long-term biomonitoring. </p>
            <p className="price"><BiRupee />500.00</p>
            <Link to="/cart" className="button px-lg-3 p-2 border-0 bg-transparent">Add To Cart</Link>
          </div>
          <div className="action-bar position-absolute gap-30">
            <div className="d-flex flex-column">
              <Link to="/compare-product" className="border-0 bg-transparent">
                <img src="/images/prod-compare.svg" alt="compare2" />
              </Link>
              <Link className="border-0 bg-transparent">
                <img src="/images/view.svg" alt="view" />
              </Link>
              <Link to="/cart" className="border-0 bg-transparent">
                <img src="/images/add-cart.svg" alt="add-cart" />
              </Link>
            </div>
          </div>
        </Link>
    </div>
    <div className={` ${location.pathname ="/our-store" ? `gr-${grid}` : "col-3"}`}>
      <Link to="/product/:id" className="product-list-card position-relative">
          <div className="wishlist-icon position-absolute">
            <Link to="/wishlist" className="border-0 bg-transparent"><img src="/images/wish.svg" alt="wishlist" /></Link>
          </div>
          <div className="product-image">
            <img src="/images/watch.jpg" className="img-fluid" alt="watch" />
            <img src="/images/watch-1.webp" className="img-fluid" alt="watch1" />
          </div>
          <div className="product-details">
            <h6 className="brand">Havels</h6>
            <h5 className="product-title">
              kids headphones bulk 10 pack multi colored for students
            </h5>
            <ReactStars count={5} size={24} value={4} edit="false" activeColor="#ffd700" />
            <p className={`description ${grid=== 12 ? "d-block" : "d-none"}`}>
              A smartwatch is a wearable computer in the form of a watch; modern smartwatches provide a local touchscreen interface for daily use, while an associated smartphone app provides management and telemetry, such as long-term biomonitoring. </p>
            <p className="price"><BiRupee />500.00</p>
            <Link to="/cart" className="button px-lg-3 p-2 border-0 bg-transparent">Add To Cart</Link>
          </div>
          <div className="action-bar position-absolute gap-30">
            <div className="d-flex flex-column">
              <Link to="/compare-product" className="border-0 bg-transparent">
                <img src="/images/prod-compare.svg" alt="compare2" />
              </Link>
              <Link className="border-0 bg-transparent">
                <img src="/images/view.svg" alt="view" />
              </Link>
              <Link to="/cart" className="border-0 bg-transparent">
                <img src="/images/add-cart.svg" alt="add-cart" />
              </Link>
            </div>
          </div>
        </Link>
    </div>
    <div className={` ${location.pathname ="/our-store" ? `gr-${grid}` : "col-3"}`}>
      <Link to="/product/:id" className="product-list-card position-relative">
          <div className="wishlist-icon position-absolute">
            <Link to="/wishlist" className="border-0 bg-transparent"><img src="/images/wish.svg" alt="wishlist" /></Link>
          </div>
          <div className="product-image">
            <img src="/images/watch.jpg" className="img-fluid" alt="watch" />
            <img src="/images/watch-1.webp" className="img-fluid" alt="watch1" />
          </div>
          <div className="product-details">
            <h6 className="brand">Havels</h6>
            <h5 className="product-title">
              kids headphones bulk 10 pack multi colored for students
            </h5>
            <ReactStars count={5} size={24} value={4} edit="false" activeColor="#ffd700" />
            <p className={`description ${grid=== 12 ? "d-block" : "d-none"}`}>
              A smartwatch is a wearable computer in the form of a watch; modern smartwatches provide a local touchscreen interface for daily use, while an associated smartphone app provides management and telemetry, such as long-term biomonitoring. </p>
            <p className="price"><BiRupee />500.00</p>
            <Link to="/cart" className="button px-lg-3 p-2 border-0 bg-transparent">Add To Cart</Link>
          </div>
          <div className="action-bar position-absolute gap-30">
            <div className="d-flex flex-column">
              <Link to="/compare-product" className="border-0 bg-transparent">
                <img src="/images/prod-compare.svg" alt="compare2" />
              </Link>
              <Link className="border-0 bg-transparent">
                <img src="/images/view.svg" alt="view" />
              </Link>
              <Link to="/cart" className="border-0 bg-transparent">
                <img src="/images/add-cart.svg" alt="add-cart" />
              </Link>
            </div>
          </div>
        </Link>
    </div>
    <div className={` ${location.pathname ="/our-store" ? `gr-${grid}` : "col-3"}`}>
      <Link to="/product/:id" className="product-list-card position-relative">
          <div className="wishlist-icon position-absolute">
            <Link to="/wishlist" className="border-0 bg-transparent"><img src="/images/wish.svg" alt="wishlist" /></Link>
          </div>
          <div className="product-image">
            <img src="/images/watch.jpg" className="img-fluid" alt="watch" />
            <img src="/images/watch-1.webp" className="img-fluid" alt="watch1" />
          </div>
          <div className="product-details">
            <h6 className="brand">Havels</h6>
            <h5 className="product-title">
              kids headphones bulk 10 pack multi colored for students
            </h5>
            <ReactStars count={5} size={24} value={4} edit="false" activeColor="#ffd700" />
            <p className={`description ${grid=== 12 ? "d-block" : "d-none"}`}>
              A smartwatch is a wearable computer in the form of a watch; modern smartwatches provide a local touchscreen interface for daily use, while an associated smartphone app provides management and telemetry, such as long-term biomonitoring. </p>
            <p className="price"><BiRupee />500.00</p>
            <Link to="/cart" className="button px-lg-3 p-2 border-0 bg-transparent">Add To Cart</Link>
          </div>
          <div className="action-bar position-absolute gap-30">
            <div className="d-flex flex-column">
              <Link to="/compare-product" className="border-0 bg-transparent">
                <img src="/images/prod-compare.svg" alt="compare2" />
              </Link>
              <Link className="border-0 bg-transparent">
                <img src="/images/view.svg" alt="view" />
              </Link>
              <Link to="/cart" className="border-0 bg-transparent">
                <img src="/images/add-cart.svg" alt="add-cart" />
              </Link>
            </div>
          </div>
        </Link>
    </div>
    <div className={` ${location.pathname ="/our-store" ? `gr-${grid}` : "col-3"}`}>
      <Link to="/product/:id" className="product-list-card position-relative">
          <div className="wishlist-icon position-absolute">
            <Link to="/wishlist" className="border-0 bg-transparent"><img src="/images/wish.svg" alt="wishlist" /></Link>
          </div>
          <div className="product-image">
            <img src="/images/watch.jpg" className="img-fluid" alt="watch" />
            <img src="/images/watch-1.webp" className="img-fluid" alt="watch1" />
          </div>
          <div className="product-details">
            <h6 className="brand">Havels</h6>
            <h5 className="product-title">
              kids headphones bulk 10 pack multi colored for students
            </h5>
            <ReactStars count={5} size={24} value={4} edit="false" activeColor="#ffd700" />
            <p className={`description ${grid=== 12 ? "d-block" : "d-none"}`}>
              A smartwatch is a wearable computer in the form of a watch; modern smartwatches provide a local touchscreen interface for daily use, while an associated smartphone app provides management and telemetry, such as long-term biomonitoring. </p>
            <p className="price"><BiRupee />500.00</p>
            <Link to="/cart" className="button px-lg-3 p-2 border-0 bg-transparent">Add To Cart</Link>
          </div>
          <div className="action-bar position-absolute gap-30">
            <div className="d-flex flex-column">
              <Link to="/compare-product" className="border-0 bg-transparent">
                <img src="/images/prod-compare.svg" alt="compare2" />
              </Link>
              <Link className="border-0 bg-transparent">
                <img src="/images/view.svg" alt="view" />
              </Link>
              <Link to="/cart" className="border-0 bg-transparent">
                <img src="/images/add-cart.svg" alt="add-cart" />
              </Link>
            </div>
          </div>
        </Link>
    </div>
    <div className={` ${location.pathname ="/our-store" ? `gr-${grid}` : "col-3"}`}>
      <Link to="/product/:id" className="product-list-card position-relative">
          <div className="wishlist-icon position-absolute">
            <Link to="/wishlist" className="border-0 bg-transparent"><img src="/images/wish.svg" alt="wishlist" /></Link>
          </div>
          <div className="product-image">
            <img src="/images/watch.jpg" className="img-fluid" alt="watch" />
            <img src="/images/watch-1.webp" className="img-fluid" alt="watch1" />
          </div>
          <div className="product-details">
            <h6 className="brand">Havels</h6>
            <h5 className="product-title">
              kids headphones bulk 10 pack multi colored for students
            </h5>
            <ReactStars count={5} size={24} value={4} edit="false" activeColor="#ffd700" />
            <p className={`description ${grid=== 12 ? "d-block" : "d-none"}`}>
              A smartwatch is a wearable computer in the form of a watch; modern smartwatches provide a local touchscreen interface for daily use, while an associated smartphone app provides management and telemetry, such as long-term biomonitoring. </p>
            <p className="price"><BiRupee />500.00</p>
            <Link to="/cart" className="button px-lg-3 p-2 border-0 bg-transparent">Add To Cart</Link>
          </div>
          <div className="action-bar position-absolute gap-30">
            <div className="d-flex flex-column">
              <Link to="/compare-product" className="border-0 bg-transparent">
                <img src="/images/prod-compare.svg" alt="compare2" />
              </Link>
              <Link className="border-0 bg-transparent">
                <img src="/images/view.svg" alt="view" />
              </Link>
              <Link to="/cart" className="border-0 bg-transparent">
                <img src="/images/add-cart.svg" alt="add-cart" />
              </Link>
            </div>
          </div>
        </Link>
    </div>

    
    
    </>
  )
}

export default ProductListCard
