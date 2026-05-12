import React,{useState}  from 'react'
import Swal from "sweetalert2";
import Axios from "axios"

function Forgot() {
    const [adminEmail, setAdminEmail] = useState('');

    const onForgot = () => {
        Axios.post("http://localhost:1337/api/adminsendmail", { email1: adminEmail })
            .then((response) => {
                if (response.data.message === "1") {
                    Swal.fire('Success', 'Password sent successfully', 'success');
                } else {
                    Swal.fire('Error', response.data.message, 'error');
                }
            })
            .catch((error) => {
                Swal.fire('Error', 'Something went wrong', 'error');
            });
    };
    return (
        <>
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
                                                    <h2 className="mb-2">Reset Password</h2>
                                                    <p>Recovery of the password through email</p>

                                                    <div className="row">
                                                        <div className="col-lg-12">
                                                            <div className="floating-label form-group">
                                                                <input className="floating-input form-control" type="email" name="admin_email" id="admin_email" value={adminEmail} onChange={(e) => setAdminEmail(e.target.value)} />
                                                                <label>Email</label>
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <button type="submit" className="btn btn-primary" onClick={onForgot}  >Submit</button>

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

        </>
    )
}
export default Forgot;