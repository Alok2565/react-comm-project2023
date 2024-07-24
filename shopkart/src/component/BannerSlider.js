import React from 'react';
import {SlArrowLeft,SlArrowRight} from 'react-icons/sl';
import {Link} from 'react-router-dom';
const BannerSlider = () => {
  return (
    <>
      <div className="container-xxl-fluid">
        <div id="carouselExampleInterval" class="carousel slide" data-bs-ride="carousel">
  <div className="carousel-inner">
    <div className="carousel-item active" data-bs-interval="10000">
      <Link><img src="images/slider/slider1.webp" class="d-block w-100" alt="Slider-1"/></Link>
    </div>
    <div className="carousel-item" data-bs-interval="2000">
      <Link><img src="images/slider/slider2.webp" class="d-block w-100" alt="Slider-2"/></Link>
    </div>
    <div className="carousel-item">
      <Link><img src="images/slider/slider3.webp" class="d-block w-100" alt="Slider-3"/></Link>
    </div>
    <div className="carousel-item">
      <Link><img src="images/slider/slider4.webp" class="d-block w-100" alt="Slider-4"/></Link>
    </div>
  </div>
  <a href="#carouselExampleInterval" className="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
   <SlArrowLeft className="left-icons"/>
    {/* <span className="carousel-control-prev-icon" aria-hidden="true"></span> */}
    <span className="visually-hidden">Previous</span>
  </a>
  <a href="#carouselExampleInterval" className="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
  <SlArrowRight className="right-icons"/>
    {/* <span className="carousel-control-next-icon" aria-hidden="true"></span> */}
    <span className="visually-hidden">Next</span>
  </a>
    </div>
      </div>
    </>

  )
}

export default BannerSlider
