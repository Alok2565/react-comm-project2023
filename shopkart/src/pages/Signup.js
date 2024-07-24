import React from 'react';
import { Link } from 'react-router-dom';
import Breadcrumb from '../component/Breadcrumb';
import CustomInput from '../component/CustomInput';
import Meta from '../component/Meta';
const Signup = () => {
  return (
    <>
    <Meta title={"Signup"} />
    <Breadcrumb title="Signup" />
    <div className="register-wrapper home-wrapper-2">
      <div className="container-xxl">
        <div className="row">
          <div className="register-card">
          <h3 className="text-center mb-3">Registration Here</h3>
          <form action="" className="d-flex flex-column">
          <label for="inputName" class="col-4 col-form-label">username<span className="mb-0" style={{"color":"#bf4800", "fontWeight":"bold"}}>*</span></label>
          <CustomInput type="text" name="username" id="username" placeholder="Username" required/>
          <label for="inputName" className="col-4 col-form-label">Email<span className="mb-0" style={{"color":"#bf4800", "fontWeight":"bold"}}>*</span></label>
          <CustomInput type="email" className="form-control" name="email" id="email"  placeholder="email" required/>
          <label for="inputName" className="col-4 col-form-label">Mobile<span className="mb-0" style={{"color":"#bf4800", "fontWeight":"bold"}}>*</span></label>
          <CustomInput type="tel" className="form-control" name="mobile" id="mobile" placeholder="Mobile Number" required/>
          <label for="inputName" className="col-4 col-form-label">Password<span className="mb-0" style={{"color":"#bf4800", "fontWeight":"bold"}}>*</span></label>
          <CustomInput type="password" className="form-control" name="password" id="password" placeholder="password" required/>
          <label for="inputName" className="col-4 col-form-label">Confirm Password<span className="mb-0" style={{"color":"#bf4800", "fontWeight":"bold"}}>*</span></label>
          <CustomInput type="password" className="form-control" name="cnf_password" id="cfn_password" placeholder="Confirm password" required/>
            <div className="form-check d-flex align-items-center mb-2">
              <input className="form-check-input me-2" type="checkbox" value="" id="form2Example3c" autocompleted="" data-gtm-form-interact-field-id="0" />
              <label className="form-check-label" for="form2Example3">
                I agree all statements in <a href="#!" className="mb-0" style={{"color":"#bf4800", "fontWeight":"bold"}}>Terms of service</a>
              </label>
            </div>
            <div className="d-flex align-items-center gap-15">
              <button className="button btn-secondary px-5 py-2 p-10 mb-2 border-2">Register</button>
              <div>Already have an account? <Link className="mb-0" style={{"color":"#bf4800", "fontWeight":"bold"}} to="/login">Login here</Link></div>
            </div>
          </form>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default Signup
