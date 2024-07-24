import React, {useState} from 'react'
import BlogPostCard from '../component/BlogPostCard'
import Breadcrumb from '../component/Breadcrumb'
import Meta from '../component/Meta'
import { Link } from 'react-router-dom'
const Blog = () => {
  const[grid] = useState(3);
    //  alert(grid);
  return (
    <>
    <Meta title={"Our Blog"} />
    <Breadcrumb title="Our Blog"/>
    <div className="bog-wrapper home-wrapper-2 py-2">
    <div className='container-xxl'>
    <div className="row">
      <div className="col-3">
      <div className="filter-card mb-3">
          <h3 className="filter-title">Find By Categories</h3>
          <div>
            <ul className="ps-0">
                <li>Watch</li>
                <li>Tv</li>
                <li>Camera</li>
                <li>Laptop</li>
            </ul>
          </div>
      </div>
      <div className="filter-card mb-3">
               <h3 className="filter-title">Latest Blog</h3>
               <div className="post-image">
                  <img src="images/watch-011.jpg" className="img-fluid" alt="Watch" />
                 </div>
                <div className="latest-blog">
                <div className="blog-content">
            <p className="date">11 Jan 2023</p>
            <h5 className="title">A beautiful sunday renaissance</h5>
            <p className="desc mb-0">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
            <Link className="button btn-success mt-4 px-lg-3 p-2" to="/blog/:id">Read More</Link>
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
      </div>
      <div className="col-9">
      {/* <img onClick={()=>{setGrid(3)}} src="images/gr4.svg" className="d-block img-fluid" alt="grid" /> */}
      <div className="blog-post-list pb-5"> 
        <div className="d-flex gap-10 flex-wrap">
        <BlogPostCard grid={grid} />
        {/* <BlogPostCard />
        <BlogPostCard />
        <BlogPostCard />
        <BlogPostCard />
        <BlogPostCard /> */}
        </div>
      </div>
      </div>
      
    </div>
    </div>
    </div>
    </>

  )
}

export default Blog
