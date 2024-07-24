import React from 'react';
import { Link } from 'react-router-dom';
import Breadcrumb from '../component/Breadcrumb';
import Meta from '../component/Meta';
import {FaLongArrowAltLeft} from 'react-icons/fa';
const SinglePost = () => {
  return (
    <>
      <Meta title={"Dynamic Blog Name"} />
      <Breadcrumb title="Dynamic Blog Name" />
        <div className="bog-wrapper home-wrapper-2 py-2">
            <div className='container-xxl'>
                <div className="row">
                    <div className="col-12">
                        <div className="single-blog-card">
                          <Link to="/our-blog" className="text-dark d-flex align-items-center gap-10"><FaLongArrowAltLeft className="fs-5"/>Go back to blog</Link>
                            <h3 className="title">A beautiful sunday renaissance</h3>
                            <img src="/images/blog-2.jpg" className="img-fluid w-100 my-4" alt="blog-1" />
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum</p>
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
    </>
  )
}

export default SinglePost
