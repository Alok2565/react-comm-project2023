import React from 'react';
import Breadcrumb from '../component/Breadcrumb';
import Meta from '../component/Meta';
const ResetPassword = () => {
  return (
    <>
    <Meta title={"Reset Password"} />
    <Breadcrumb title="Reset Password" />
    <div className="reset-password-wrapper home-wrapper-2">
      <div className="container-xxl">
        <div className="row">
          <div className="reset-password-card">
          <h3 className="text-center mb-3">Reset Your Password</h3>
          <form action="" className="d-flex flex-column gap-10">
          <div class="mb-3">
              <label for="inputName" className="col-4 col-form-label">Old Password<span className="mb-0" style={{"color":"#bf4800", "fontWeight":"bold"}}>*</span></label>
                <input type="password" className="form-control" name="old_password" id="old_password" placeholder="Old password"/>
              <label for="inputName" className="col-4 col-form-label">New Password<span className="mb-0" style={{"color":"#bf4800", "fontWeight":"bold"}}>*</span></label>
              <input type="password" className="form-control" name="password" id="password" placeholder="New password" />
              <label for="inputName" className="col-4 col-form-label">Confirm Password<span className="mb-0" style={{"color":"#bf4800", "fontWeight":"bold"}}>*</span></label>
              <input type="password" className="form-control" name="cnf_password" id="cnf_password" placeholder="Confirm password" />
            </div>
            <div className="d-flex align-items-center gap-10">
              <button className="button btn-secondary px-5 py-2 p-10 mb-2 border-2">Submit</button>
              
            </div>
          </form>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default ResetPassword
