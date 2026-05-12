import React from 'react'
import {Link} from 'react-router-dom'

const Header = () => {

    const usersession = sessionStorage.getItem("mydata");
    const user= JSON.parse(usersession);

    function logout() {
        sessionStorage.clear();
        window.location = "/Login"
    }
  return (
    <>
      <div className="iq-top-navbar">
            <div className="iq-navbar-custom">
                <nav className="navbar navbar-expand-lg navbar-light p-0">
                    <div className="iq-navbar-logo d-flex align-items-center justify-content-between">
                        <i className="ri-menu-line wrapper-menu"></i>
                        <a href="index.html" className="header-logo">
                            <img src="assets/images/logo.png" className="img-fluid rounded-normal" alt="logo"/>
                            <h5 className="logo-title ml-3">QuickCart</h5>

                        </a>
                    </div>
                    <div className="iq-search-bar device-search">
                        <form action="#" className="searchbox">
                            {/* <a className="search-link" href="/"><i className="ri-search-line"></i></a> */}
                            <input type="text" hidden className="text search-input" placeholder="Search here..."/>
                        </form>
                    </div>
                    <div className="d-flex align-items-center">
                        <button className="navbar-toggler" type="button" data-toggle="collapse"
                            data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                            aria-label="Toggle navigation">
                            <i className="ri-menu-3-line"></i>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav ml-auto navbar-list align-items-center">
                                
                                <li className="nav-item nav-icon dropdown caption-content">
                                    <a href="/" className="search-toggle dropdown-toggle" id="dropdownMenuButton4"
                                        data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        <img src="assets/images/user/rajimage.jpg" className="img-fluid rounded" alt="user"/>
                                    </a>
                                    <div className="iq-sub-dropdown dropdown-menu" aria-labelledby="dropdownMenuButton">
                                        <div className="card shadow-none m-0">
                                            <div className="card-body p-0 text-center">
                                                <div className="media-body profile-detail text-center">
                                                    <img src="assets/images/page-img/userauth.jpeg" alt="profile-bg"
                                                        className="rounded-top img-fluid mb-4"/>
                                                    <img src="assets/images/user/rajimage.jpg" alt="profile-img"
                                                        className="rounded profile-img img-fluid avatar-70"/>
                                                </div>
                                                <div className="p-3">
                                                    <h5 className="mb-1">rajchavda463@gmail.com</h5>
                                                    <p className="mb-0">Since 1 feb, 2025</p>
                                                    <div className="d-flex align-items-center justify-content-center mt-3">
                                                        <a href="user-profile.html" className="btn border mr-2"><Link to="/Admindetails">Profile</Link></a>
                                                        <a href="/Signup" className="btn border"> <Link onClick={logout}>Sign Out</Link></a>
                                                      
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
        </div>
    </>
  )
}

export default Header
