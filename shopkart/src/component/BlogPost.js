import React from 'react';
import {Link} from 'react-router-dom';
const BlogPost = () => {
  return (
    <div className="col-3">
      <div className="blog-post mt-2">
        <div className="poet-image">
          <img src="images/blog-1.jpg" className="img-fluid" alt="" />
        </div>
        <div className="blog-content">
            <p className="date">11 Jan 2023</p>
            <h5 className="title">A beautiful sunday renaissance</h5>
            <p className="desc mb-0">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
            <Link className="button btn-success mt-4 px-lg-3 p-2" to="/blog/:id">Read More</Link>
        </div>
      </div>
    </div>
    

    
  )
}

export default BlogPost
