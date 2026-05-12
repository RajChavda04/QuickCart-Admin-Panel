import React, { useEffect, useState } from 'react'
import Axios from 'axios';
import API_BASE_URL from '../config/apiConfig';


export default function Home() {

    const [summary, setSummary] = useState({
        totalProducts: 0,
        totalFeed: 0,
        totalCategories: 0,
        totalUsers: 0,
        totalOrders: 0,
        totalSales: 0,
        totalProfit: 0,
        productValueAfterDiscount: 0,
    });

    useEffect(() => {

        const fetchSummary = () => {
            Axios.get(`${API_BASE_URL}/admin/summary`)
                .then((res) => {
                    setSummary(res.data);
                })
        };

        fetchSummary();
    }, []);


    return (
        <>

            <div className="wrapper">
                <div className="content-page">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-lg-0">
                                <div className="card card-transparent card-block card-stretch card-height border-none">
                                    <div className="card-body p-0 mt-lg-2 mt-0">
                                        <h2 className="mb-3">Hi Raj, Good afternoon</h2>
                                        <p className="mb-0 mr-4">Your dashboard gives you views of key performance or business
                                            process.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-112">
                                <div className="row">
                                    <div className="col-lg-4 col-md-4">
                                        <div className="card card-block card-stretch card-height">
                                            <div className="card-body">
                                                <div className="d-flex align-items-center mb-4 card-total-sale">
                                                    <div className="icon iq-icon-box-2 bg-info-light">
                                                        <img src="assets/images/product/growth.png" className="img-fluid" alt="" />

                                                    </div>
                                                    <div>
                                                        <p className="mb-2">Total Sales</p>
                                                        <h4>₹{summary.totalSales}</h4>
                                                    </div>
                                                </div>
                                                <div className="iq-progress-bar mt-2">



                                                    <div className="progress" style={{ height: "100%", borderRadius: "12px" }} >
                                                        <div className="progress-bar" style={{ width: "70%", height: "100%", backgroundColor: "blue", borderRadius: "12px" }}></div>
                                                    </div>


                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-md-4">
                                        <div className="card card-block card-stretch card-height">
                                            <div className="card-body">
                                                <div className="d-flex align-items-center mb-4 card-total-sale">
                                                    <div className="icon iq-icon-box-2 bg-danger-light">
                                                        <img src="assets/images/product/salary.png" className="img-fluid" alt="" />
                                                    </div>
                                                    <div>
                                                        <p className="mb-2">Total Products Cost</p>
                                                        <h4>₹{summary.productValueAfterDiscount}</h4>
                                                    </div>
                                                </div>
                                                <div className="iq-progress-bar mt-2">
                                                    <div className="progress" style={{ height: "100%", borderRadius: "12px" }} >
                                                        <div className="progress-bar" style={{ width: "80%", height: "100%", backgroundColor: "purple", borderRadius: "12px" }}></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-md-4">
                                        <div className="card card-block card-stretch card-height">
                                            <div className="card-body">
                                                <div className="d-flex align-items-center mb-4 card-total-sale">
                                                    <div className="icon iq-icon-box-2 bg-success-light">
                                                        <img src="assets/images/product/arrow.png" className="img-fluid" alt="" />
                                                    </div>
                                                    <div>
                                                        <p className="mb-2">Profit</p>
                                                        <h4>{summary.totalProfit}</h4>
                                                    </div>
                                                </div>
                                                <div className="iq-progress-bar mt-2">
                                                    <div className="progress" style={{ height: "100%", borderRadius: "12px" }} >
                                                        <div className="progress-bar" style={{ width: "60%", height: "100%", backgroundColor: "green", borderRadius: "12px" }}></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* count------------------------ */}

                            <h2>Dashboard Summary</h2>

                            <div className="card12-container">

                                <div className="card12">

                                    <div class="q">
                                        <h3>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" class="bi bi-box-seam-fill" viewBox="0 0 16 16">
                                                <path fill-rule="evenodd" d="M15.528 2.973a.75.75 0 0 1 .472.696v8.662a.75.75 0 0 1-.472.696l-7.25 2.9a.75.75 0 0 1-.557 0l-7.25-2.9A.75.75 0 0 1 0 12.331V3.669a.75.75 0 0 1 .471-.696L7.443.184l.01-.003.268-.108a.75.75 0 0 1 .558 0l.269.108.01.003zM10.404 2 4.25 4.461 1.846 3.5 1 3.839v.4l6.5 2.6v7.922l.5.2.5-.2V6.84l6.5-2.6v-.4l-.846-.339L8 5.961 5.596 5l6.154-2.461z" />
                                            </svg>
                                        </h3>
                                        <h3>Total Products</h3>
                                    </div>

                                    <p>{summary.totalProducts}</p>
                                </div>
                                <div className="card12">
                                    <div class="q">
                                        <h3>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" class="bi bi-cart-check" viewBox="0 0 16 16">
                                                <path d="M11.354 6.354a.5.5 0 0 0-.708-.708L8 8.293 6.854 7.146a.5.5 0 1 0-.708.708l1.5 1.5a.5.5 0 0 0 .708 0z" />
                                                <path d="M.5 1a.5.5 0 0 0 0 1h1.11l.401 1.607 1.498 7.985A.5.5 0 0 0 4 12h1a2 2 0 1 0 0 4 2 2 0 0 0 0-4h7a2 2 0 1 0 0 4 2 2 0 0 0 0-4h1a.5.5 0 0 0 .491-.408l1.5-8A.5.5 0 0 0 14.5 3H2.89l-.405-1.621A.5.5 0 0 0 2 1zm3.915 10L3.102 4h10.796l-1.313 7zM6 14a1 1 0 1 1-2 0 1 1 0 0 1 2 0m7 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0" />
                                            </svg>
                                        </h3>
                                        <h3>Categories</h3>
                                    </div>
                                    <p>{summary.totalCategories}</p>
                                </div>

                                <div className="card12">
                                    <div class="q">
                                        <h3>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" class="bi bi-person-fill-up" viewBox="0 0 16 16">
                                                <path d="M12.5 16a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7m.354-5.854 1.5 1.5a.5.5 0 0 1-.708.708L13 11.707V14.5a.5.5 0 0 1-1 0v-2.793l-.646.647a.5.5 0 0 1-.708-.708l1.5-1.5a.5.5 0 0 1 .708 0M11 5a3 3 0 1 1-6 0 3 3 0 0 1 6 0" />
                                                <path d="M2 13c0 1 1 1 1 1h5.256A4.5 4.5 0 0 1 8 12.5a4.5 4.5 0 0 1 1.544-3.393Q8.844 9.002 8 9c-5 0-6 3-6 4" />
                                            </svg>
                                        </h3>
                                        <h3>Total Users</h3>
                                    </div>
                                    <p>{summary.totalUsers}</p>
                                </div>

                                <div className="card12">
                                    <div class="q">
                                        <h3>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" class="bi bi-truck" viewBox="0 0 16 16">
                                                <path d="M0 3.5A1.5 1.5 0 0 1 1.5 2h9A1.5 1.5 0 0 1 12 3.5V5h1.02a1.5 1.5 0 0 1 1.17.563l1.481 1.85a1.5 1.5 0 0 1 .329.938V10.5a1.5 1.5 0 0 1-1.5 1.5H14a2 2 0 1 1-4 0H5a2 2 0 1 1-3.998-.085A1.5 1.5 0 0 1 0 10.5zm1.294 7.456A2 2 0 0 1 4.732 11h5.536a2 2 0 0 1 .732-.732V3.5a.5.5 0 0 0-.5-.5h-9a.5.5 0 0 0-.5.5v7a.5.5 0 0 0 .294.456M12 10a2 2 0 0 1 1.732 1h.768a.5.5 0 0 0 .5-.5V8.35a.5.5 0 0 0-.11-.312l-1.48-1.85A.5.5 0 0 0 13.02 6H12zm-9 1a1 1 0 1 0 0 2 1 1 0 0 0 0-2m9 0a1 1 0 1 0 0 2 1 1 0 0 0 0-2" />
                                            </svg>
                                        </h3>
                                        <h3>Total Orders</h3>
                                    </div>
                                    <p>{summary.totalOrders}</p>
                                </div>
                                <div className="card12">
                                    <div class="q">
                                        <h3>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="42" height="42" fill="currentColor" class="bi bi-clipboard-data-fill" viewBox="0 0 16 16">
  <path d="M6.5 0A1.5 1.5 0 0 0 5 1.5v1A1.5 1.5 0 0 0 6.5 4h3A1.5 1.5 0 0 0 11 2.5v-1A1.5 1.5 0 0 0 9.5 0zm3 1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5z"/>
  <path d="M4 1.5H3a2 2 0 0 0-2 2V14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V3.5a2 2 0 0 0-2-2h-1v1A2.5 2.5 0 0 1 9.5 5h-3A2.5 2.5 0 0 1 4 2.5zM10 8a1 1 0 1 1 2 0v5a1 1 0 1 1-2 0zm-6 4a1 1 0 1 1 2 0v1a1 1 0 1 1-2 0zm4-3a1 1 0 0 1 1 1v3a1 1 0 1 1-2 0v-3a1 1 0 0 1 1-1"/>
</svg>
                                        </h3>
                                        <h3>Feedback</h3>
                                    </div>
                                    <p>{summary.totalFeed}</p>
                                </div>
                            </div>


                            {/* count------------------------ */}

                            {/* 
                            <div className="col-lg-112">
                                <div className="card card-block card-stretch card-height">
                                    <div className="card-header d-flex align-items-center justify-content-between">
                                        <div className="header-title">
                                            <h4 className="card-title">Top Products</h4>
                                        </div>

                                    </div>
                                    <div className="card-body">
                                        <ul className="list-unstyled row top-product mb-0">
                                            <li className="col-lg-3">
                                                <div className="card card-block card-stretch card-height mb-0">
                                                    <div className="card-body">
                                                        <div className="bg-warning-light rounded">
                                                            <img src="assets/images/product/lap.jpg"
                                                                className="style-img img-fluid  p-2" alt="img" />
                                                        </div>
                                                        <div className="style-text text-left mt-3">
                                                            <h5 className="mb-1">ASUS Laptop</h5>
                                                            <p className="mb-0">23 Item</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </li>
                                            <li className="col-lg-3">
                                                <div className="card card-block card-stretch card-height mb-0">
                                                    <div className="card-body">
                                                        <div className="bg-danger-light rounded">
                                                            <img src="assets/images/product/monitor.jpg"
                                                                className="style-img img-fluid  p-2" alt="img" />
                                                        </div>
                                                        <div className="style-text text-left mt-3">
                                                            <h5 className="mb-1">Samsumg Monitor</h5>
                                                            <p className="mb-0">10 Item</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </li>
                                            <li className="col-lg-3">
                                                <div className="card card-block card-stretch card-height mb-0">
                                                    <div className="card-body">
                                                        <div className="bg-info-light rounded">
                                                            <img src="assets/images/product/lenovo1.jpg"
                                                                className="style-img img-fluid p-2" alt="img" />
                                                        </div>
                                                        <div className="style-text text-left mt-3">
                                                            <h5 className="mb-1">Lenovo Laptop</h5>
                                                            <p className="mb-0">30 Items</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </li>
                                            <li className="col-lg-3">
                                                <div className="card card-block card-stretch card-height mb-0">
                                                    <div className="card-body">
                                                        <div className="bg-success-light rounded">
                                                            <img src="assets/images/product/dell.jpg"
                                                                className="style-img img-fluid p-2" alt="img" />
                                                        </div>
                                                        <div className="style-text text-left mt-3">
                                                            <h5 className="mb-1">Dell laptop</h5>
                                                            <p className="mb-0">4 Item</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div> */}

                            {/* another portion */}
                            {/* <div className="col-lg-112">
                                <div className="card card-block card-stretch card-height">
                                    <div className="card-header d-flex align-items-center justify-content-between">
                                        <div className="header-title">
                                            <h4 className="card-title">Best Selling iteams</h4>
                                        </div>

                                    </div>
                                    <div className="card-body">
                                        <ul className="list-unstyled row top-product mb-0">
                                            <li className="col-lg-3">
                                                <div className="card card-block card-stretch card-height mb-0">
                                                    <div className="card-body">
                                                        <div className="bg-warning-light rounded">
                                                            <img src="assets/images/product/lap.jpg"
                                                                className="style-img img-fluid  p-2" alt="img" />
                                                        </div>
                                                        <div className="style-text text-left mt-3">
                                                            <h5 className="mb-1">ASUS Laptop</h5>
                                                            <p className="mb-0">23 Item</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </li>
                                            <li className="col-lg-3">
                                                <div className="card card-block card-stretch card-height mb-0">
                                                    <div className="card-body">
                                                        <div className="bg-danger-light rounded">
                                                            <img src="assets/images/product/monitor.jpg"
                                                                className="style-img img-fluid  p-2" alt="img" />
                                                        </div>
                                                        <div className="style-text text-left mt-3">
                                                            <h5 className="mb-1">Samsumg Monitor</h5>
                                                            <p className="mb-0">10 Item</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </li>
                                            <li className="col-lg-3">
                                                <div className="card card-block card-stretch card-height mb-0">
                                                    <div className="card-body">
                                                        <div className="bg-info-light rounded">
                                                            <img src="assets/images/product/lenovo1.jpg"
                                                                className="style-img img-fluid p-2" alt="img" />
                                                        </div>
                                                        <div className="style-text text-left mt-3">
                                                            <h5 className="mb-1">Lenovo Laptop</h5>
                                                            <p className="mb-0">30 Items</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </li>
                                            <li className="col-lg-3">
                                                <div className="card card-block card-stretch card-height mb-0">
                                                    <div className="card-body">
                                                        <div className="bg-success-light rounded">
                                                            <img src="assets/images/product/dell.jpg"
                                                                className="style-img img-fluid p-2" alt="img" />
                                                        </div>
                                                        <div className="style-text text-left mt-3">
                                                            <h5 className="mb-1">Dell laptop</h5>
                                                            <p className="mb-0">4 Item</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div> */}


                            {/* <div className="col-my1">
                                    <div className="col-lg-4" >
                                        <div className="card card-transparent card-block card-stretch mb-4">
                                            <div className="card-header d-flex align-items-center justify-content-between p-0">
                                                <div className="header-title">
                                                    <h4 className="card-title mb-0">Best Item All Time</h4>
                                                </div>
                                               
                                            </div>
                                        </div>
                                        <div className="card card-block card-stretch card-height-helf">
                                            <div className="card-body card-item-right">
                                                <div className="d-flex align-items-top">
                                                    <div className="bg-warning-light rounded">
                                                        <img src="assets/images/product/cabinet.jpg" className="style-img img-fluid m-auto"
                                                            alt="img" />
                                                    </div>
                                                    <div className="style-text text-left">
                                                        <h5 className="mb-2">Antec Cabinet</h5>
                                                        <p className="mb-2">Total Sell : 23 </p>
                                                        <p className="mb-0">Total Earned : ₹45,89 M</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="card card-block card-stretch card-height-helf">
                                            <div className="card-body card-item-right">
                                                <div className="d-flex align-items-top">
                                                    <div className="bg-danger-light rounded">
                                                        <img src="assets/images/product/graphic.jpg" className="style-img img-fluid m-auto"
                                                            alt="img" />
                                                    </div>
                                                    <div className="style-text text-left">
                                                        <h5 className="mb-2">4k Graphic card</h5>
                                                        <p className="mb-2">Total Sell : 200000</p>
                                                        <p className="mb-0">Total Earned : ₹45,50 M</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div> */}
                            <div className="col-my2" >
                                {/* <div className="col-lg-114">
                                    <div className="card card-block card-stretch card-height-helf">
                                        <div className="card-body">
                                            <div className="d-flex align-items-top justify-content-between">
                                                <div className="">
                                                    <p className="mb-0">Income</p>
                                                    <h5>₹98,7800</h5>
                                                </div>
                                                <div className="progress progress-round m-0 primary conversation-bar "
                                                    data-percent="78">
                                                    <span className="progress-left">
                                                        <span className="progress-bar"></span>
                                                    </span>
                                                    <span className="progress-right">
                                                        <span className="progress-bar"></span>
                                                    </span>
                                                    <div className="progress-value text-primary">78%</div>
                                                </div>
                                                <div className="card-header-toolbar d-flex align-items-center">
                                                    <div className="dropdown">
                                                        <span className="dropdown-toggle dropdown-bg btn" id="dropdownMenuButton003"
                                                            data-toggle="dropdown">
                                                            This Month<i className="ri-arrow-down-s-line ml-1"></i>
                                                        </span>

                                                    </div>
                                                </div>
                                            </div>


                                        </div>
                                    </div>
                                    <div className="card card-block card-stretch card-height-helf">
                                        <div className="card-body">
                                            <div className="d-flex align-items-top  justify-content-between">
                                                <div className="">
                                                    <p className="mb-0">Expenses</p>
                                                    <h5>₹ 45,8956</h5>
                                                </div>
                                                <div className="card-header-toolbar d-flex align-items-center ">
                                                    <div className="progress progress-round m-0 primary conversation-bar"
                                                        data-percent="67">
                                                        <span className="progress-left">
                                                            <span className="progress-bar"></span>
                                                        </span>
                                                        <span className="progress-right">
                                                            <span className="progress-bar"></span>
                                                        </span>
                                                        <div className="progress-value text-primary">67%</div>
                                                    </div>
                                                    <div className="dropdown">
                                                        <span className="dropdown-toggle dropdown-bg btn" id="dropdownMenuButton004"
                                                            data-toggle="dropdown">
                                                            This Month<i className="ri-arrow-down-s-line ml-1"></i>
                                                        </span>
                                                        <div className="dropdown-menu dropdown-menu-right shadow-none"
                                                            aria-labelledby="dropdownMenuButton004">
                                                            <a className="dropdown-item" href="#">Year</a>
                                                            <a className="dropdown-item" href="#">Month</a>
                                                            <a className="dropdown-item" href="#">Week</a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                </div> */}


                                <div className="col-lg-113">
                                    {/* <div className="card card-block card-stretch card-height">
                                        <div className="card-header d-flex ">
                                            <div className="header-title">
                                                <h4 className="card-title">Order Summary</h4>
                                            </div>

                                        </div>
                                        <div className="card-body">
                                            <div className="d-flex flex-wrap align-items-center mt-2">
                                                <div className="d-flex align-items-center progress-order-left">
                                                    <div className="progress progress-round m-0 orange conversation-bar"
                                                        data-percent="46">
                                                        <span className="progress-left">
                                                            <span className="progress-bar"></span>
                                                        </span>
                                                        <span className="progress-right">
                                                            <span className="progress-bar"></span>
                                                        </span>
                                                        <div className="progress-value text-secondary">46%</div>
                                                    </div>
                                                    <div className="progress-value ml-3 pr-5 border-right">
                                                        <h5>₹12,6598</h5>
                                                        <p className="mb-0">Average Orders</p>
                                                    </div>
                                                </div>
                                                <div className="d-flex align-items-center ml-5 progress-order-right">
                                                    <div className="progress progress-round m-0 orange conversation-bar"
                                                        data-percent="46">
                                                        <span className="progress-left">
                                                            <span className="progress-bar"></span>
                                                        </span>
                                                        <span className="progress-right">
                                                            <span className="progress-bar"></span>
                                                        </span>
                                                        <div className="progress-value text-secondary">46%</div>
                                                    </div>
                                                    <div className="progress-value ml-3">
                                                        <h5>₹59,8478</h5>
                                                        <p className="mb-0">Top Orders</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div> */}
                                    <div className="card-body pt-0">
                                        <div id="layout1-chart-5"></div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div className="none">

                    </div>
                </div>
            </div>


        </>
    )
}
