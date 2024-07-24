import React, {useState} from 'react'
import Breadcrumb from '../component/Breadcrumb'
import Meta from '../component/Meta'
import ProductListCard from '../component/ProductListCard'
import ReactStars from 'react-rating-stars-component'
import Color from '../component/Color'
const OurStore = () => {
   const[grid, setGrid] = useState(3);
//    alert(grid);
return (
<>
<Meta title={"Our Store"} />
<Breadcrumb title="Our Store"/>
<div className="store-wrapper home-wrapper-2 py-2">
   <div className="container-xxl">
      <div className="row">
         <div className="col-3">
            <div className="filter-card mb-3">
               <h3 className="filter-title">Shop By Categories</h3>
               <div>
                  <ul className="ps-0">
                     <li className="mb-0 py-1">Watch</li>
                     <li className="mb-0 py-1">Tv</li>
                     <li className="mb-0 py-1">Camera</li>
                     <li className="mb-0 py-1">Laptop</li>
                  </ul>
               </div>
            </div>
            <div className="filter-card mb-3">
               <h3 className="filter-title">Filter By</h3>
               <div>
                  <h5 className="sub-title">Availability</h5>
                  <div>
                     <div class="form-check">
                        <input class="form-check-input" type="checkbox" value="" id="" />
                        <label class="form-check-label" htmlFor="" >
                        In Stocks (1)
                        </label>
                     </div>
                     <div class="form-check">
                        <input class="form-check-input" type="checkbox" value="" id=""/>
                        <label class="form-check-label" htmlFor="">
                        Out of Stock (0)
                        </label>
                     </div>
                  </div>
                  <h5 className="sub-title">Price</h5>
                  <div className="d-flex align-items-center gap-10">
                  <div class="form-floating">
                  <input type="text" class="form-control py-1" id="floatingInput" placeholder="From" />
                  <label htmlFor="floatingInput">From</label>
                </div>
                <div class="form-floating">
                  <input type="text" class="form-control py-1" id="floatingInput1" placeholder="To" />
                  <label htmlFor="floatingInput1">To</label>
                </div>
                  </div>
                  <h5 className="sub-title">Color</h5>
                  <div>
                    <Color />
                  </div>
                  <h5 className="sub-title">Size</h5>
                  <div>
                  <div class="form-check">
                        <input class="form-check-input" type="checkbox" value="" id="color-1" />
                        <label class="form-check-label" htmlFor="color-1" >
                        S (1)
                        </label>
                     </div>
                     <div class="form-check">
                        <input class="form-check-input" type="checkbox" value="" id="color-2" />
                        <label class="form-check-label" htmlFor="color-2" >
                        M (10)
                        </label>
                     </div>
                     <div class="form-check">
                        <input class="form-check-input" type="checkbox" value="" id="color-3" />
                        <label class="form-check-label" htmlFor="color-3" >
                        XL (5)
                        </label>
                     </div>
                  </div>
               </div>
            </div>
            <div className="filter-card mb-3">
               <h3 className="filter-title">Product Tags</h3>
               <div>
               <div className="product-tags d-flex flex-wrap align-items-center gap-10">
                <span className="badge bg-secondary">Headphones</span>
                <span className="badge bg-secondary">Mobiles</span>
                <span className="badge bg-secondary">Tv</span>
                <span className="badge bg-secondary">Tablets</span>
                <span className="badge bg-secondary">Watch</span>
                </div>
               </div>
            </div>
            <div className="filter-card mb-3">
               <h3 className="filter-title">Random Product</h3>
               <div>
                <div className="random-products d-flex">
                  <div className="w-50">
                  <img src="images/watch-011.jpg" className="img-fluid" alt="Watch" />
                  </div>
                  <div className="w-50">
                    <h5 className="product-title">Kids Headphones Bulk 10 pack multiple Colored for Student</h5>
                    <ReactStars count={5} size={24} value={4} edit="false" activeColor="#ffd700" />
                    <p className="price"><b>₹ 500.00</b></p>
                  </div>
                </div>
                <div className="random-products d-flex mb-3">
                  <div className="w-50">
                  <img src="images/camera.jpg" className="img-fluid" alt="Watch" />
                  </div>
                  <div className="w-50">
                    <h5 className="product-title mt-2">Kids Camera Bulk 10 pack multiple Colored for Student</h5>
                    <ReactStars count={5} size={24} value={4} edit="false" activeColor="#ffd700" />
                    <p className="price"><b>₹ 500.00</b></p>
                  </div>
                </div>
               </div>
            </div>
         </div>
         <div className="col-9" >
          <div className="filter-short-grid mb-4">
            <div className="d-flex justify-content-between align-items-center">
            <div className="d-flex align-items-center gap-10">
              <p className="mb-0 d-flex" style={{"width":"100px"}}>Sort By:</p>
                <select class="form-select form-select" name="" id="">
                  <option selected>Select one</option>
                  <option value="manual">Featured</option>
                  <option value="best-selling">Best Selling</option>
                  <option value="title-acceding">Alphabetically, A-Z</option>
                  <option value="title-descending">Alphabetically, Z-A</option>
                  <option value="price-acceding">Price, Low to High</option>
                  <option value="price-descending">Price, High to Low</option>
                </select>
            </div>
            <div className=" d-flex align-items-center gap-10">
              <p className="total-products mb-0">21 products</p>
              <div className="d-flex gap-10 align-items-center grid">
                <img onClick={()=>{setGrid(3)}} src="/images/gr4.svg" className="d-block img-fluid" alt="grid" />
                <img onClick={()=>{setGrid(4)}} src="/images/gr3.svg" className="d-block img-fluid" alt="grid" />
                <img onClick={()=>{setGrid(6)}} src="/images/gr2.svg" className="d-block img-fluid" alt="grid" />
                <img onClick={()=>{setGrid(12)}} src="/images/gr.svg" className="d-block img-fluid" alt="grid" />
              </div>
            </div>
            </div>
          </div>
          <div className="product-list pb-5">
            <div className="d-flex gap-10 flex-wrap">
            <ProductListCard  grid={grid}/>
            </div>
            
          </div>
         </div>
      </div>
   </div>
</div>
</>
)
}
export default OurStore
