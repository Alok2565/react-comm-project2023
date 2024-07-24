import React from 'react';
import Breadcrumb from '../component/Breadcrumb';
import Meta from '../component/Meta';
import {FaHome, FaPhoneAlt, FaEnvelope,FaInfo} from 'react-icons/fa';
const Contact = () => {
  
  return (
    <>
      <Meta title={"Contact Us"}/>
      <Breadcrumb title="Contact Us"/>
      <div className="contact-wrapper py-2 home-wrapper-2">
        <div class="container-xxl">
          <div class="row">
            <div class="col-12">
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14012.938738007655!2d77.29727332837992!3d28.592735559796278!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce48b866af1ef%3A0x58913d62225c2c0!2sNew%20Ashok%20Nagar%2C%20New%20Delhi%2C%20Delhi!5e0!3m2!1sen!2sin!4v1675019556921!5m2!1sen!2sin" style={{"border":"0", "borderRadius":"5px", "width":"100%", "height":"320px"}} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
            </div>
            <div className="col-12">
              <div className="contact-inner-wrapper d-flex justify-content-between">
                <div className="col-6">
                  <h3 className="contact-title mt-5">Contact Us</h3>
                    <form className="d-flex flex-column gap-15">
                      <input type="text" className="from-control" placeholder="Name" required/>
                      <input type="email" className="from-control" placeholder="Email" required/>
                      <input type="tel" className="from-control" placeholder="Mobile Number"/>
                      <textarea name="" id="" className="w-100 from-control" cols="30" rows="5" placeholder="Comments"/>
                      <div><button type="button" className="btn btn-secondary btn-lg border-1 rounded-pill">Submit</button></div>
                    </form>
                </div>
                <div className="col-6">
                  <h3 className="contact-title mt-5">Get in touch with us</h3>
                  <p className="p-2 mb-0 d-flex align-items-center"><FaHome />&nbsp;New Ashok Nagar, New Delhi - 110096</p>
                  <p className="p-2 mb-0 d-flex align-items-center"><FaPhoneAlt />&nbsp;<a href="tel:+91-8882165414">+91-8882165414</a></p>
                  <p className="p-2 mb-0 d-flex align-items-center"><FaEnvelope />&nbsp;<a className="Text-dark" href="mailto:web.aloksingh8190@gmail.com">web.aloksingh8190@gmail.com</a></p>
                  <p className="p-2 mb-0 d-flex align-items-center"><FaInfo />&nbsp;Monday - Friday 10:00 AM TO 08:00 PM</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </>
  )
}

export default Contact
