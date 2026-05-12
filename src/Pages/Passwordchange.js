import React from 'react';
import Swal from 'sweetalert2';
import Axios from "axios";


const Passwordchange = () => {


   const usersession = sessionStorage.getItem('mydata');
   function changepass() {



      const parsedata = JSON.parse(usersession)
      const current_password = document.getElementById('current_password').value;

      const new_password = document.getElementById('new_password').value;
      const con_password = document.getElementById('con_password').value;

      if (new_password !== con_password) {
         Swal.fire({
            title: 'Error',
            text: 'Write same password',
            icon: 'error',
            confirmButtonText: 'OK'
         });
         return;
      }
      Axios.post("http://localhost:1337/api/passchange", {
         admin_email: parsedata.admin_email,
         current_password: current_password,
         new_password: new_password,


      }).then((response) => {
         if (response.data.message) {
            // alert(response.data.message);
            Swal.fire({
               icon: 'success',
               title: 'sucess',
               text: response.data.message,
               confrimButtonText: 'OK'


            })
            window.location = "/Login";
         } else {
            alert("Password updated successfully");
            window.location = "/Login"
         }
      }).catch((error) => {
         console.error("There was an error making the response:", error);
         alert('An error occured.Please try again later.');
      });





   }

   return (
      <>
      

               <div className='mypage'>
                  <section className="login-content">

                     <div className="container"  >
                        <div className="row align-items-center justify-content-center height-self-center">
                           <div className="col-lg-8" >
                              <div className="card auth-card" id="myid1">
                                 <div className="card-body p-0">
                                    <div className="d-flex align-items-center auth-content">
                                       <div className="col-lg-7 align-self-center">
                                          <div className="p-3">
                                             <h2 className="mb-2">Change Password</h2>


                                             <div className="row">
                                                <div className="col-lg-12">
                                                   <div className="floating-label form-group">
                                                      {/* <label>Current Password</label> */}
                                                      <input className="floating-input form-control" type="password" name="current_password" id="current_password" placeholder='Enter your current password' />

                                                   </div>
                                                </div>
                                                <div className="col-lg-12">
                                                   <div className="floating-label form-group">
                                                      {/* <label>New Password</label> */}
                                                      <input className="floating-input form-control" type="password" name="new_password" id="new_password" placeholder='Enter your new password' />

                                                   </div>
                                                </div>

                                                <div className="col-lg-12">
                                                   <div className="floating-label form-group">
                                                      {/* <label>Confirm Password</label> */}
                                                      <input className="floating-input form-control" type="password" name="con_password" id="con_password" placeholder='Confirm password' />

                                                   </div>
                                                </div>


                                             </div>
                                             <button type="submit" className="btn btn-primary" onClick={changepass} >Submit</button>


                                          </div>
                                       </div>
                                       <div className="col-lg-5 content-right">
                                          <img src="assets/images/login/svg1.svg" className="img-fluid image-right" alt="" />
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

export default Passwordchange
