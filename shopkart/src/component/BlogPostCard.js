import React from 'react';
import { Link, useLocation } from 'react-router-dom';
const BlogPostCard = (props) => {
    const {grid} =props;
    let location = useLocation();
    // console.log(location);
  return (
    <>
    <div className={` ${location.pathname ="/our-blog" ? `gr-${grid}` : "col-3"}`}>
      <div className="blog-post mt-2">
        <div className="poet-image">
          <img src="images/blog-1.jpg" className="img-fluid" alt="" />
        </div>
        <div className="blog-content">
            <p className="date">11 Jan 2023</p>
            <Link><h5 className="title">A beautiful sunday renaissance</h5></Link>
            <p className="desc mb-0">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
            <Link className="button btn-success mt-4 px-lg-3 p-2" to="/our-blog/:id">Read More</Link>
        </div>
      </div>
    </div>
    <div className={` ${location.pathname ="/our-blog" ? `gr-${grid}` : "col-3"}`}>
      <div className="blog-post mt-2">
        <div className="poet-image">
          <img src="images/blog-1.jpg" className="img-fluid" alt="" />
        </div>
        <div className="blog-content">
            <p className="date">11 Jan 2023</p>
            <h5 className="title">A beautiful sunday renaissance</h5>
            <p className="desc mb-0">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
            <Link className="button btn-success mt-4 px-lg-3 p-2" to="#">Read More</Link>
        </div>
      </div>
    </div>
    <div className={` ${location.pathname ="/our-blog" ? `gr-${grid}` : "col-3"}`}>
      <div className="blog-post mt-2">
        <div className="poet-image">
          <img src="images/blog-1.jpg" className="img-fluid" alt="" />
        </div>
        <div className="blog-content">
            <p className="date">11 Jan 2023</p>
            <h5 className="title">A beautiful sunday renaissance</h5>
            <p className="desc mb-0">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
            <Link className="button btn-success mt-4 px-lg-3 p-2" to="#">Read More</Link>
        </div>
      </div>
    </div>
    <div className={` ${location.pathname ="/our-blog" ? `gr-${grid}` : "col-3"}`}>
      <div className="blog-post mt-2">
        <div className="poet-image">
          <img src="images/blog-1.jpg" className="img-fluid" alt="" />
        </div>
        <div className="blog-content">
            <p className="date">11 Jan 2023</p>
            <h5 className="title">A beautiful sunday renaissance</h5>
            <p className="desc mb-0">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
            <Link className="button btn-success mt-4 px-lg-3 p-2" to="#">Read More</Link>
        </div>
      </div>
    </div>
    <div className={` ${location.pathname ="/our-blog" ? `gr-${grid}` : "col-3"}`}>
      <div className="blog-post mt-2">
        <div className="poet-image">
          <img src="images/blog-1.jpg" className="img-fluid" alt="" />
        </div>
        <div className="blog-content">
            <p className="date">11 Jan 2023</p>
            <h5 className="title">A beautiful sunday renaissance</h5>
            <p className="desc mb-0">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
            <Link className="button btn-success mt-4 px-lg-3 p-2" to="#">Read More</Link>
        </div>
      </div>
    </div>
    <div className={` ${location.pathname ="/our-blog" ? `gr-${grid}` : "col-3"}`}>
      <div className="blog-post mt-2">
        <div className="poet-image">
          <img src="images/blog-1.jpg" className="img-fluid" alt="" />
        </div>
        <div className="blog-content">
            <p className="date">11 Jan 2023</p>
            <h5 className="title">A beautiful sunday renaissance</h5>
            <p className="desc mb-0">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
            <Link className="button btn-success mt-4 px-lg-3 p-2" to="#">Read More</Link>
        </div>
      </div>
    </div>
    <div className={` ${location.pathname ="/our-blog" ? `gr-${grid}` : "col-3"}`}>
      <div className="blog-post mt-2">
        <div className="poet-image">
          <img src="images/blog-1.jpg" className="img-fluid" alt="" />
        </div>
        <div className="blog-content">
            <p className="date">11 Jan 2023</p>
            <h5 className="title">A beautiful sunday renaissance</h5>
            <p className="desc mb-0">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
            <Link className="button btn-success mt-4 px-lg-3 p-2" to="#">Read More</Link>
        </div>
      </div>
    </div>
    <div className={` ${location.pathname ="/our-blog" ? `gr-${grid}` : "col-3"}`}>
      <div className="blog-post mt-2">
        <div className="poet-image">
          <img src="images/blog-1.jpg" className="img-fluid" alt="" />
        </div>
        <div className="blog-content">
            <p className="date">11 Jan 2023</p>
            <h5 className="title">A beautiful sunday renaissance</h5>
            <p className="desc mb-0">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
            <Link className="button btn-success mt-4 px-lg-3 p-2" to="#">Read More</Link>
        </div>
      </div>
    </div>
    </>
    
  )
}

export default BlogPostCard
