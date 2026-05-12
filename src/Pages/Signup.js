import React from 'react'
import {Link} from 'react-router-dom'

export default function Signup() {
  return (
    <>
      <div className="login_form">
    <section className="login-content">
       <div className="container">
          <div className="row align-items-center justify-content-center height-self-center">
             <div className="col-lg-8">
                <div className="card auth-card">
                   <div className="card-body p-0">
                      <div className="d-flex align-items-center auth-content">
                         <div className="col-lg-7 align-self-center">
                            <div className="p-3">
                               <h2 className="mb-2">Sign Up</h2>
                               <p>Create your QuickCart account.</p>
                               <form>
                                  <div className="row">
                                     <div className="col-lg-6">
                                        <div className="floating-label form-group">
                                           <input className="floating-input form-control" type="text" placeholder=" "/>
                                           <label>Full Name</label>
                                        </div>
                                     </div>
                                     <div className="col-lg-6">
                                        <div className="floating-label form-group">
                                           <input className="floating-input form-control" type="text" placeholder=" "/>
                                           <label>Last Name</label>
                                        </div>
                                     </div>
                                     <div className="col-lg-6">
                                        <div className="floating-label form-group">
                                           <input className="floating-input form-control" type="email" placeholder=" "/>
                                           <label>Email</label>
                                        </div>
                                     </div>
                                     <div className="col-lg-6">
                                        <div className="floating-label form-group">
                                           <input className="floating-input form-control" type="text" placeholder=" "/>
                                           <label>Phone No.</label>
                                        </div>
                                     </div>
                                     <div className="col-lg-6">
                                        <div className="floating-label form-group">
                                           <input className="floating-input form-control" type="password" placeholder=" "/>
                                           <label>Password</label>
                                        </div>
                                     </div>
                                     <div className="col-lg-6">
                                        <div className="floating-label form-group">
                                           <input className="floating-input form-control" type="password" placeholder=" "/>
                                           <label>Confirm Password</label>
                                        </div>
                                     </div>
                                     <div className="col-lg-12">
                                        <div className="custom-control custom-checkbox mb-3">
                                           <input type="checkbox" className="custom-control-input" id="customCheck1"/>
                                           <label className="custom-control-label" for="customCheck1">I agree with the terms of use</label>
                                        </div>
                                     </div>
                                  </div>
                                  <button type="submit" className="btn btn-primary">Sign Up</button>
                                  <p className="mt-3">
                                     Already have an Account <a href="./Login.js" className="text-primary"><Link to='/Login'>Sign in</Link></a>
                                  </p>
                               </form>
                            </div>
                         </div>
                         <div className="col-lg-5 content-right">
                            <img src="assets/images/login/01.png" className="img-fluid image-right" alt=""/>
                         </div>
                      </div>
                   </div>
                </div>
             </div>
          </div>
       </div>
    </section>
    </div>
    </>
  )
}
