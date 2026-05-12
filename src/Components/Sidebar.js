import React from 'react'
import { Link } from 'react-router-dom'

const Sidebar = () => {
    return (
        <>
            <div className="wrapper">

                <div className="iq-sidebar  sidebar-default ">
                    <div className="iq-sidebar-logo d-flex align-items-center ">
                        <a href="/Home" className="header-logo">
                            <img src="assets/images/logo100.png" className="img-fluid rounded-normal light-logo" alt="logo" />
                            <h5 className="logo-title light-logo ml-3">QuickCart</h5>
                        </a>
                        <div className="iq-menu-bt-sidebar ml-0">
                            <i className="las la-bars wrapper-menu"></i>
                        </div>
                    </div>
                    <div className="data-scrollbar" data-scroll="1">
                        <nav className="iq-sidebar-menu">
                            <ul id="iq-sidebar-toggle" className="iq-menu">
                                <li className="active">
                                    <Link to="/Home">


                                        <svg className="svg-icon" id="p-dash1" width="20" height="20"
                                            xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none"
                                            stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                            stroke-linejoin="round">
                                            <path
                                                d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z">
                                            </path>
                                            <polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline>
                                            <line x1="12" y1="22.08" x2="12" y2="12"></line>
                                        </svg>
                                        <span className="ml-4">Dashboards</span>

                                    </Link>
                                </li>
                                <li className=" ">
                                    <a href="#product" className="collapsed" data-toggle="collapse" aria-expanded="false">
                                        <svg className="svg-icon" id="p-dash2" width="20" height="20"
                                            xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none"
                                            stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                            stroke-linejoin="round">
                                            <circle cx="9" cy="21" r="1"></circle>
                                            <circle cx="20" cy="21" r="1"></circle>
                                            <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
                                        </svg>
                                        <span className="ml-4">Products</span>
                                        <svg className="svg-icon iq-arrow-right arrow-active" width="20" height="20"
                                            xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none"
                                            stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                            stroke-linejoin="round">
                                            <polyline points="10 15 15 20 20 15"></polyline>
                                            <path d="M4 4h7a4 4 0 0 1 4 4v12"></path>
                                        </svg>
                                    </a>
                                    <ul id="product" className="iq-submenu collapse" data-parent="#iq-sidebar-toggle">
                                        <li className="">
                                            {/* <a href="/Productlist"> */}
                                            <Link to="/Productlist">
                                                <i className="las la-minus"></i><span>List Product</span>
                                            </Link>
                                            {/* </a> */}
                                        </li>
                                        <li className="">
                                            {/* <a href="/Addproduct">    */}
                                            <Link to="/Addproduct">
                                                <i className="las la-minus"></i> <span>Add Product</span>
                                            </Link>
                                            {/* </a>  */}
                                        </li>
                                    </ul>
                                </li>
                                <li className=" ">
                                    <a href="#category" className="collapsed" data-toggle="collapse" aria-expanded="false">
                                        <svg className="svg-icon" id="p-dash3" width="20" height="20"
                                            xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none"
                                            stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                            stroke-linejoin="round">
                                            <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
                                            <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                                        </svg>
                                        <span className="ml-4">Categories</span>
                                        <svg className="svg-icon iq-arrow-right arrow-active" width="20" height="20"
                                            xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none"
                                            stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                            stroke-linejoin="round">
                                            <polyline points="10 15 15 20 20 15"></polyline>
                                            <path d="M4 4h7a4 4 0 0 1 4 4v12"></path>
                                        </svg>
                                    </a>
                                    <ul id="category" className="iq-submenu collapse" data-parent="#iq-sidebar-toggle">
                                        <li className="">

                                            <Link to="/Catagorylist">
                                                <i className="las la-minus"></i><span>List Category</span>
                                            </Link>

                                        </li>
                                        <li className="">

                                            <Link to="/Catagoryadd">
                                                <i className="las la-minus"></i><span>Add Category</span>
                                            </Link>

                                        </li>
                                    </ul>
                                </li>

                                <li className=" ">
                                    <a href="#purchase" className="collapsed" data-toggle="collapse" aria-expanded="false">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="23" height="23" fill="currentColor" class="bi bi-truck" viewBox="0 0 16 16">
                                            <path d="M0 3.5A1.5 1.5 0 0 1 1.5 2h9A1.5 1.5 0 0 1 12 3.5V5h1.02a1.5 1.5 0 0 1 1.17.563l1.481 1.85a1.5 1.5 0 0 1 .329.938V10.5a1.5 1.5 0 0 1-1.5 1.5H14a2 2 0 1 1-4 0H5a2 2 0 1 1-3.998-.085A1.5 1.5 0 0 1 0 10.5zm1.294 7.456A2 2 0 0 1 4.732 11h5.536a2 2 0 0 1 .732-.732V3.5a.5.5 0 0 0-.5-.5h-9a.5.5 0 0 0-.5.5v7a.5.5 0 0 0 .294.456M12 10a2 2 0 0 1 1.732 1h.768a.5.5 0 0 0 .5-.5V8.35a.5.5 0 0 0-.11-.312l-1.48-1.85A.5.5 0 0 0 13.02 6H12zm-9 1a1 1 0 1 0 0 2 1 1 0 0 0 0-2m9 0a1 1 0 1 0 0 2 1 1 0 0 0 0-2" />
                                        </svg>
                                        <span className="ml-4">Order</span>
                                        <svg className="svg-icon iq-arrow-right arrow-active" width="20" height="20"
                                            xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none"
                                            stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                            stroke-linejoin="round">
                                            <polyline points="10 15 15 20 20 15"></polyline>
                                            <path d="M4 4h7a4 4 0 0 1 4 4v12"></path>
                                        </svg>
                                    </a>
                                    <ul id="purchase" className="iq-submenu collapse" data-parent="#iq-sidebar-toggle">
                                        <li className="">
                                            <Link to="/Order">

                                                <i className="las la-minus"></i><span>Order list</span>
                                            </Link>

                                        </li>

                                    </ul>
                                </li>
                                <li className=" ">
                                    <a href="#sale" className="collapsed" data-toggle="collapse" aria-expanded="false">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="23" height="23" fill="currentColor" class="bi bi-clipboard-data-fill" viewBox="0 0 16 16">
                                            <path d="M6.5 0A1.5 1.5 0 0 0 5 1.5v1A1.5 1.5 0 0 0 6.5 4h3A1.5 1.5 0 0 0 11 2.5v-1A1.5 1.5 0 0 0 9.5 0zm3 1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5z" />
                                            <path d="M4 1.5H3a2 2 0 0 0-2 2V14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V3.5a2 2 0 0 0-2-2h-1v1A2.5 2.5 0 0 1 9.5 5h-3A2.5 2.5 0 0 1 4 2.5zM10 8a1 1 0 1 1 2 0v5a1 1 0 1 1-2 0zm-6 4a1 1 0 1 1 2 0v1a1 1 0 1 1-2 0zm4-3a1 1 0 0 1 1 1v3a1 1 0 1 1-2 0v-3a1 1 0 0 1 1-1" />
                                        </svg>
                                        <span className="ml-4">Feedback</span>
                                        <svg className="svg-icon iq-arrow-right arrow-active" width="20" height="20"
                                            xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none"
                                            stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                            stroke-linejoin="round">
                                            <polyline points="10 15 15 20 20 15"></polyline>
                                            <path d="M4 4h7a4 4 0 0 1 4 4v12"></path>
                                        </svg>
                                    </a>
                                    <ul id="sale" className="iq-submenu collapse" data-parent="#iq-sidebar-toggle">
                                        <li className="">

                                            <Link to="/Feedback">
                                                <i className="las la-minus"></i><span>Feedbak list</span>
                                            </Link>

                                        </li>

                                    </ul>
                                </li>

                                <li className=" ">
                                    <a href="#people" className="collapsed" data-toggle="collapse" aria-expanded="false">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="23" height="23" fill="currentColor" class="bi bi-person-fill-up" viewBox="0 0 16 16">
                                            <path d="M12.5 16a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7m.354-5.854 1.5 1.5a.5.5 0 0 1-.708.708L13 11.707V14.5a.5.5 0 0 1-1 0v-2.793l-.646.647a.5.5 0 0 1-.708-.708l1.5-1.5a.5.5 0 0 1 .708 0M11 5a3 3 0 1 1-6 0 3 3 0 0 1 6 0" />
                                            <path d="M2 13c0 1 1 1 1 1h5.256A4.5 4.5 0 0 1 8 12.5a4.5 4.5 0 0 1 1.544-3.393Q8.844 9.002 8 9c-5 0-6 3-6 4" />
                                        </svg>
                                        <span className="ml-4">Users</span>
                                        <svg className="svg-icon iq-arrow-right arrow-active" width="20" height="20"
                                            xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none"
                                            stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                            stroke-linejoin="round">
                                            <polyline points="10 15 15 20 20 15"></polyline>
                                            <path d="M4 4h7a4 4 0 0 1 4 4v12"></path>
                                        </svg>
                                    </a>
                                    <ul id="people" className="iq-submenu collapse" data-parent="#iq-sidebar-toggle">
                                        <li className="">

                                            <Link to="/Customerlist">
                                                <i className="las la-minus"></i><span>Customers</span>
                                            </Link>

                                        </li>


                                    </ul>
                                </li>

                                <li className=" ">
                                    <a href="#otherpage" className="collapsed" data-toggle="collapse" aria-expanded="false">
                                        <svg className="svg-icon" id="p-dash9" width="20" height="20"
                                            xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none"
                                            stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                            stroke-linejoin="round">
                                            <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
                                            <rect x="7" y="7" width="3" height="9"></rect>
                                            <rect x="14" y="7" width="3" height="5"></rect>
                                        </svg>
                                        <span className="ml-4">other page</span>
                                        <svg className="svg-icon iq-arrow-right arrow-active" width="20" height="20"
                                            xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none"
                                            stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                            stroke-linejoin="round">
                                            <polyline points="10 15 15 20 20 15"></polyline>
                                            <path d="M4 4h7a4 4 0 0 1 4 4v12"></path>
                                        </svg>
                                    </a>
                                    <ul id="otherpage" className="iq-submenu collapse" data-parent="#iq-sidebar-toggle">
                                        <li className=" ">
                                            <Link to="/Admindetails">

                                                <svg className="svg-icon" id="p-dash10" width="20" height="20"
                                                    xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none"
                                                    stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                                    stroke-linejoin="round">
                                                    <path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                                                    <circle cx="8.5" cy="7" r="4"></circle>
                                                    <polyline points="17 11 19 13 23 9"></polyline>
                                                </svg>
                                                <span className="ml-4">Admin Profile</span>


                                            </Link>

                                        </li>

                                        <li className=" ">

                                            <Link to="/" className="collapsed" data-toggle="collapse" aria-expanded="false">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-check-circle-fill" viewBox="0 0 16 16">
                                                    <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0m-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z" />
                                                </svg>
                                                <span className="ml-4">Login</span>
                                            </Link>
                                        </li>
                                        <li className=" ">

                                            <Link to="/Passwordchange" className="collapsed" data-toggle="collapse" aria-expanded="false">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="23" height="23" fill="currentColor" class="bi bi-shield-exclamation" viewBox="0 0 16 16">
                                                    <path d="M5.338 1.59a61 61 0 0 0-2.837.856.48.48 0 0 0-.328.39c-.554 4.157.726 7.19 2.253 9.188a10.7 10.7 0 0 0 2.287 2.233c.346.244.652.42.893.533q.18.085.293.118a1 1 0 0 0 .101.025 1 1 0 0 0 .1-.025q.114-.034.294-.118c.24-.113.547-.29.893-.533a10.7 10.7 0 0 0 2.287-2.233c1.527-1.997 2.807-5.031 2.253-9.188a.48.48 0 0 0-.328-.39c-.651-.213-1.75-.56-2.837-.855C9.552 1.29 8.531 1.067 8 1.067c-.53 0-1.552.223-2.662.524zM5.072.56C6.157.265 7.31 0 8 0s1.843.265 2.928.56c1.11.3 2.229.655 2.887.87a1.54 1.54 0 0 1 1.044 1.262c.596 4.477-.787 7.795-2.465 9.99a11.8 11.8 0 0 1-2.517 2.453 7 7 0 0 1-1.048.625c-.28.132-.581.24-.829.24s-.548-.108-.829-.24a7 7 0 0 1-1.048-.625 11.8 11.8 0 0 1-2.517-2.453C1.928 10.487.545 7.169 1.141 2.692A1.54 1.54 0 0 1 2.185 1.43 63 63 0 0 1 5.072.56" />
                                                    <path d="M7.001 11a1 1 0 1 1 2 0 1 1 0 0 1-2 0M7.1 4.995a.905.905 0 1 1 1.8 0l-.35 3.507a.553.553 0 0 1-1.1 0z" />
                                                </svg>
                                                <span className="ml-4">Change Password</span>
                                            </Link>
                                        </li>
                                    </ul>
                                </li>
                            </ul>
                        </nav>
                        <div id="sidebar-bottom" className="position-relative sidebar-bottom">
                            <div className="card border-none">

                            </div>
                        </div>
                        <div className="p-3"></div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Sidebar
