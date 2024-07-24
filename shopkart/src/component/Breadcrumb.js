import React from 'react';
import {Link} from 'react-router-dom';
import {MdOutlineDoubleArrow} from 'react-icons/md';
const Breadcrumb = (props) => {
  const {title}=props;
  return (
    <div className="breadcrumb py-2 bg-white">
      <div className="container-xxl">
        <div className="row">
          <div className="col-12">
            <p className="d-flex align-items-center">
              <Link to="/" className="text-dark">Home <MdOutlineDoubleArrow/>
              </Link> &nbsp;<span>{title}</span>
              </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Breadcrumb
