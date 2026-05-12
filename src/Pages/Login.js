import React from 'react';
import Swal from "sweetalert2";
import Axios from "axios"
import { Link } from 'react-router-dom'

export default function Login() {




   function adminlogin() {
      //alert();
      const admin_email = document.getElementById("admin_email").value;
      const admin_password = document.getElementById("admin_password").value;
      if (!admin_email || !admin_password) {
         Swal.fire({
            title: 'Error',
            text: 'Both fields are required',
            icon: 'error',
            confirmButtonText: 'OK'
         });
         return;
      }
      Axios.post("http://localhost:1337/api/loginprocess", {
         admin_email: admin_email,
         admin_password: admin_password

      }).then((response) => {
         if (response.data.message) {
            Swal.fire({
               icon: 'error',
               title: 'Opps...',
               text: response.data.message
            }).then(() => {
               window.location = "/Login";
            })
         }
         else {
            const obj = {
               admin_email: response.data[0].admin_email
            };
            sessionStorage.setItem('mydata', JSON.stringify(obj));
            Swal.fire({
               icon: 'success',
               title: 'Login successful',
               text: `Welcome ${admin_email}`
            }).then(() => {
               window.location = "/Home";
            })
         }
      })

   }

   return (
      <>

         {/* <div className="wrapper">
            <div className="content-page"> */}

         <div className="mypage">
            <section className="login-content">

               <div className="container" >
                  <div className="row align-items-center justify-content-center height-self-center">
                     <div className="col-lg-8">
                        <div className="card auth-card" id="myid1">
                           <div className="card-body p-0">
                              <div className="d-flex align-items-center auth-content">
                                 <div className="col-lg-7 align-self-center">
                                    <div className="p-3">
                                       <h2 className="mb-2">Sign In</h2>
                                       <p>Login to stay connected.</p>

                                       <div className="row">
                                          <div className="col-lg-12">
                                             <div className="floating-label form-group">
                                                <input className="floating-input form-control" type="email" name="admin_email" id="admin_email" />
                                                <label>Email</label>
                                             </div>
                                          </div>
                                          <div className="col-lg-12">
                                             <div className="floating-label form-group">
                                                <input className="floating-input form-control" type="password" name="admin_password" id="admin_password" />
                                                <label>Password</label>
                                             </div>
                                          </div>
                                          <div className="my12345">
                                             {/* <div className="col-lg-6">
                                                <Link to="/Passwordchange" className="text-primary float-right">Change Password</Link>
                                             </div> */}
                                             <div className="col-lg-6">
                                                <Link to="/Forgot" className="text-primary float-right">Forgot Password?</Link>
                                             </div>
                                          </div>
                                       </div>

                                       <button type="submit" className="btn btn-primary" onClick={adminlogin} >Login</button>

                                    </div>
                                 </div>
                                 <div className="col-lg-5 content-right">
                                    <img src="assets/images/login/svg2.svg" className="img-fluid image-right" alt="" />
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </section>
         </div>
         {/* </div>

         </div> */}

      </>
   )
}

