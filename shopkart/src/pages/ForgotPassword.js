import React from 'react';
import { Link } from 'react-router-dom';
import Breadcrumb from '../component/Breadcrumb';
import Meta from '../component/Meta';
// import {Link} from 'react-router-dom';
const ForgotPassword = () => {
  return (
    <>
    <Meta title={"Forgot Password"} />
    <Breadcrumb title="Forgot Password" />
    <div className="forgot-password-wrapper home-wrapper-2">
      <div className="container-xxl">
        <div className="row">
          <div className="forgot-password-card">
          <h3 className="text-center mb-3">Forgot Your Password</h3>
          <p className="text-center mb-3" style={{"color":"#232f3e"}}>We will send you an email to reset your password</p>
            <form action="" className="d-flex flex-column gap-10">
              <div className="mb-3">
              <label for="inputName" class="col-4 col-form-label">Email<span className="mb-0" style={{"color":"#bf4800", "fontWeight":"bold"}}>*</span></label>
              <input type="email" className="form-control" name="email" id="email" placeholder="Email"/>
              </div>
              <div className="d-flex align-items-center gap-10">
                <button className="button btn-secondary px-4 py-2" type="submit">Submit</button>
                <button className="button btn-secondary px-4 py-2"><Link to="/login" className="text-white">Cancel</Link></button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default ForgotPassword
