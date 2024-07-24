import React from 'react'
import Meta from '../component/Meta';
import BannerSlider from '../component/BannerSlider'
import Marquee from "react-fast-marquee";
import { Link } from 'react-router-dom';
import BlogPost from '../component/BlogPost';
import ProductCard from '../component/ProductCard';
import SpecialProduct from '../component/SpecialProduct';
import FeaturedProductCard from '../component/FeaturedProductCard';
import PopularProductCard from '../component/PopularProductCard';
// import Container from '../component/Container';
import { services } from '../utils/Data';

const Home = () => {
  return (
    <>
    <Meta title={"Home"} />
    
      <section className="home-wrapper-1">
      <div className="home-banner">
      <BannerSlider />
        </div>
      </section>
      <section className="home-wrapper-2 py-5">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <div className="service d-flex align-items-center justify-content-between">
                {services?.map((i,j) =>{ 
                    return(
                    <div className="d-flex align-items-center gap-15 key={j}">
                        <img src={i.image} alt="services" />
                      <div>
                        <h6>{i.title}</h6>
                        <p className="mb-0">{i.tagline}</p>
                    </div>
                </div>
                    )})
                }
                
                {/* <div className="d-flex align-items-center gap-15">
                  <img src="images/service-02.png" alt="services" />
                  <div>
                  <h6>Daily Surprise Offers</h6>
                  <p className="mb-0">Save UPto 25% Off</p>
                </div>
                </div>
                <div className="d-flex align-items-center gap-15">
                  <img src="images/service-03.png" alt="services" />
                  <div>
                  <h6>Support 24/7</h6>
                  <p className="mb-0">Shop with an expert</p>
                </div>
                </div>
                <div className="d-flex align-items-center gap-15">
                  <img src="images/service-04.png" alt="services" />
                  <div>
                  <h6>Affordable Price</h6>
                  <p className="mb-0">Get Factory Default Price</p>
                </div>
                </div>
                <div className="d-flex align-items-center gap-15">
                  <img src="images/service-05.png" alt="services" />
                  <div>
                  <h6>Secure Payment</h6>
                  <p className="mb-0">100% Protected Payment</p>
                </div>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="home-wrapper-2 pay-5">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <div className="categories d-flex justify-content-between flex-wrap align-items-center">
                <div className="d-flex align-items-center gap">
                  <div>
                    <h6>Cameras</h6>
                    <p>10 Items</p>
                  </div>
                  <img src="images/camera.jpg" alt="camera"/>
                </div>
                <div className="d-flex align-items-center gap">
                  <div>
                    <h6>Smart Tv</h6>
                    <p>10 Items</p>
                  </div>
                  <img src="images/tv.jpg" alt="camera"/>
                </div>
                <div className="d-flex align-items-center gap">
                  <div>
                    <h6>Home & Accessories</h6>
                    <p>10 Items</p>
                  </div>
                  <img src="images/home-app.jpg" alt="camera"/>
                </div>
                <div className="d-flex align-items-center gap">
                  <div>
                    <h6>Music & Gaming</h6>
                    <p>10 Items</p>
                  </div>
                  <img src="images/camera.jpg" alt="camera"/>
                </div>
                <div className="d-flex align-items-center gap">
                  <div>
                    <h6>Headphone</h6>
                    <p>10 Items</p>
                  </div>
                  <img src="images/headphone.jpg" alt="camera"/>
                </div>
                <div className="d-flex align-items-center gap">
                  <div>
                    <h6>Cameras</h6>
                    <p>10 Items</p>
                  </div>
                  <img src="images/camera.jpg" alt="camera"/>
                </div>
                <div className="d-flex align-items-center gap">
                  <div>
                    <h6>Smart Tv</h6>
                    <p>10 Items</p>
                  </div>
                  <img src="images/tv.jpg" alt="camera"/>
                </div>
                <div className="d-flex align-items-center gap">
                  <div>
                    <h6>Home & Accessories</h6>
                    <p>10 Items</p>
                  </div>
                  <img src="images/home-app.jpg" alt="camera"/>
                </div>
                
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="Latest-wrapper py-5 home-wrapper-2">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <h3 className="section-heading">Latest Collection</h3>
            </div>
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
          </div>
        </div>
      </section>
      <section className="featured-wrapper py-5 home-wrapper-2">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <h3 className="section-heading">Featured Collection</h3>
            </div>
            <FeaturedProductCard />
            <FeaturedProductCard />
            <FeaturedProductCard />
            <FeaturedProductCard />
            <FeaturedProductCard />
          </div>
        </div>
      </section>
      <section className="famous-wrapper pay-5 home-wrapper-2">
        <div className="container-xxl">
          <div className="row">
            <div className="col-3">
              <div className="famous-card position-relative">
              <Link>
                <img src="images/famous-2.jpg" className="img-fluid" alt="famous" />
                <div className="famous-content position-absolute py-2">
                <h5>Big Screen</h5>
                <h6>Smart watch series7</h6>
                <p>From ₹ 599.75 or ₹ 799.45/mo. for 24 mo*</p>
                </div></Link>
              </div>
            </div>
            <div className="col-3 bg-white">
              <div className="famous-card position-relative">
              <Link>
                <img src="images/famous-2.jpg" className="img-fluid" alt="famous" />
                <div className="famous-content position-absolute py-2">
                <h5>Big Screen</h5>
                <h6>Smart watch series7</h6>
                <p>From ₹ 599.75 or ₹ 799.45/mo. for 24 mo*</p>
                </div>
                </Link>
              </div>
            </div>
            <div className="col-3 bg-white">
              <div className="famous-card position-relative">
                <Link ><img src="images/famous-2.jpg" className="img-fluid" alt="famous" />
                <div className="famous-content position-absolute py-2">
                <h5>Big Screen</h5>
                <h6>Smart watch series7</h6>
                <p>From ₹ 599.75 or ₹ 799.45/mo. for 24 mo*</p>
                </div></Link>
              </div>
            </div>
            <div className="col-3 bg-white">
              <div className="famous-card position-relative">
                <Link><img src="images/famous-2.jpg" className="img-fluid" alt="famous" />
                <div className="famous-content position-absolute py-2">
                <h5>Big Screen</h5>
                <h6>Smart watch series7</h6>
                <p>From ₹ 599.75 or ₹ 799.45/mo. for 24 mo*</p>
                </div></Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="special-wrapper py-5 home-wrapper-2">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <h3 className="section-heading">Special Products</h3>
            </div>
          </div>
          <div className="row">
            <SpecialProduct />
            <SpecialProduct />
            <SpecialProduct />
          </div>
        </div>
      </section>
      <section className="popular-wrapper py-5 home-wrapper-2">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12 mb-3">
              <h3 className="section-heading">Our Popular Products</h3>
            </div>
            <PopularProductCard />
            <PopularProductCard />
            <PopularProductCard />
            <PopularProductCard />
            <PopularProductCard />
          </div>  
        </div>
      </section>
      <section className="marque-wrapper home-wrapper-2  py-5">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <div className="marquee-inner-wrapper bg-white p-3 card-wrapper">
                <Marquee className="d-flex" pauseOnHover={true}>
                  <div className="mx-4 w-25"><img src="images/brand-01.png" alt="brand-1" /></div>
                  <div className="mx-4 w-25"><img src="images/brand-02.png" alt="brand-1" /></div>
                  <div className="mx-4 w-25"><img src="images/brand-03.png" alt="brand-1" /></div>
                  <div className="mx-4 w-25"><img src="images/brand-04.png" alt="brand-1" /></div>
                  <div className="mx-4 w-25"><img src="images/brand-05.png" alt="brand-1" /></div>
                  <div className="mx-4 w-25"><img src="images/brand-06.png" alt="brand-1" /></div>
                  <div className="mx-4 w-25"><img src="images/brand-07.png" alt="brand-1" /></div>
                  <div className="mx-4 w-25"><img src="images/brand-08.png" alt="brand-1" /></div>
                </Marquee>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="blog-wrapper py-5 home-wrapper-2">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <h3 className="section-heading">Our Latest Blog</h3>
            </div>
            <BlogPost />
            <BlogPost />
            <BlogPost />
            <BlogPost />
          </div>
        </div>
      </section>
    </>
  )
}

export default Home
