import React from 'react';
import { Link } from 'react-router-dom';
import Breadcrumb from '../component/Breadcrumb';
import Meta from '../component/Meta';
import CustomInput from '../component/CustomInput';
// import {FaUserAlt} from 'react-icons/fa';
const Login = () => {
  return (
    <>
    <Meta title={"Login"} />
    <Breadcrumb title="Login" />
    <div className="login-wrapper py-2 home-wrapper-2">
        <div className="container-xxl">
            <div className="row">
                <div className="login-auth-card">
                    <h3 className="text-center mb-3">Login</h3>
                    <form action="" className="d-flex flex-column gap-10">
                        <label for="inputName" class="col-4 col-form-label">Username or Email<span className="mb-0" style={{"color":"#bf4800", "fontWeight":"bold"}}>*</span></label>
                        <CustomInput type="email" className="form-control" name="email" id="email" placeholder="Email" required/>
                        <label for="inputName" class="col-4 col-form-label">Password<span className="mb-0" style={{"color":"#bf4800", "fontWeight":"bold"}}>*</span></label>
                        <CustomInput type="Password" class="form-control" name="password" id="password" placeholder="Password" required/>
                        <div>
                            <Link to={"/forgot-password"} className="mb-0" style={{"color":"#bf4800", "fontWeight":"bold"}}>Forgot Password?</Link>
                            
                            <div className="d-flex justify-content-between gap-15 align-items-center">
                            <div className="mb-3 py-2">
                            <button className="button btn-secondary px-5 py-2 p-10 mb-2 border-2">Login</button>&nbsp;
                            Don't have an Account?<Link to={"/register"} className="mb-0" style={{"color":"#bf4800", "fontWeight":"bold"}}> &nbsp;Sign Up</Link>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
    </>
  );
}

export default Login
