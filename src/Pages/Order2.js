import React, { useEffect, useState } from 'react'
import Axios from 'axios'
import { useLocation } from "react-router-dom";
import API_BASE_URL from '../config/apiConfig'
import MEDIA_BASE_URL from '../config/apiConfig';

function Order2() {
    const location = useLocation();
    const order_no = location.state?.order_no;

    const [orderDetails, setOrderDetails] = useState(null);
    const [loading, setLoading] = useState(true);
    const [errorMsg, setErrorMsg] = useState('');

    useEffect(() => {
        if (!order_no) {
            setErrorMsg("Order number not provided.");
            setLoading(false);
            return;
        }

        Axios.get(`${API_BASE_URL}/order-details/${order_no}`)
            .then((response) => {
                setOrderDetails(response.data);
                // alert(order_no)
            })
            .catch((error) => {
                if (error.response && error.response.status === 404) {
                    setErrorMsg("Invoice data not found.");
                    // alert("no")
                } else {
                    setErrorMsg("Error fetching invoice.");
                }
                console.error("Invoice fetch error:", error);
            })
            .finally(() => {
                setLoading(false);
            });
    }, [order_no]);

    if (loading) return <p>Loading details...</p>;
    if (errorMsg) return <p>{errorMsg}</p>;


    return (
        <>
            <div className="wrapper">
                <div className="content-page">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-sm-12">
                                <div className="card">
                                    <div className="card-header d-flex justify-content-between">
                                        <div className="header-title">
                                            <h4 className="card-title">Customer details</h4>
                                        </div>
                                    </div>
                                    <div id="Myform">
                                        <div className="card-body">

                                            <div className="row">

                                                <div className="col-md-6">
                                                    <div className="form-group">
                                                        <label>Customer Name:</label>
                                                        <div><label>{orderDetails.user.customer_name}</label></div>
                                                    </div>

                                                </div>
                                                <div className="col-md-6">
                                                    <div className="form-group">
                                                        <label>Customer Email:</label>
                                                        <div><label>{orderDetails.user.customer_email}</label></div>
                                                    </div>

                                                </div>
                                                <div className="col-md-6">
                                                    <div className="form-group">
                                                        <label>Phone no:</label>
                                                        <div><label>{orderDetails.user.customer_phone}</label></div>
                                                    </div>

                                                </div>
                                                <div className="col-md-6">
                                                    <div className="form-group">
                                                        <label>Address:</label>
                                                        <div><label>{orderDetails.user.customer_address}</label></div>
                                                    </div>

                                                </div>
                                                {/* <div className="col-md-6">
                                                    <div className="form-group">
                                                        <label>City:</label>
                                                        <div><label>{orderDetails.user.customer_city}</label></div>
                                                    </div>
                                                </div>

                                                <div className="col-md-6">
                                                    <div className="form-group">
                                                        <label>State:</label>
                                                        <div><label>{orderDetails.user.customer_state}</label></div>
                                                    </div>
                                                </div>

                                                <div className="col-md-6">
                                                    <div className="form-group">
                                                        <label>Pincode:</label>
                                                        <div><label>{orderDetails.user.customer_pincode}</label></div>
                                                    </div>
                                                </div> */}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>


                            <div className="container-fluid">
                                <div className="row">
                                    <div className="col-sm-12">
                                        <div className="card">
                                            <div className="card-header d-flex justify-content-between">
                                                <div className="header-title">
                                                    <h4 className="card-title">Order details</h4>
                                                </div>
                                            </div>

                                            <div id="Myform">
                                                <div className="card-body">
                                                    <div className="row">
                                                    <div className="col-md-6">
                                                        <div className="form-group">
                                                            <label>Order No:</label>
                                                            <div><label>{orderDetails.order_no}</label></div>
                                                        </div>
                                                    </div>

                                                        <div className="col-md-6">
                                                            <div className="form-group">
                                                                <label>Payment Type:</label>
                                                                <div><label>{orderDetails.payment_method}</label></div>
                                                            </div>
                                                        </div>
                                                        <div className="col-md-6">
                                                            <div className="form-group">
                                                                <label>Order date:</label>
                                                                <div><label>{new Date(orderDetails.order_date).toLocaleDateString()}</label></div>
                                                            </div>
                                                        </div>
                                                        <div className="col-md-6">
                                                            <div className="form-group">
                                                                <label>Delivery date:</label>
                                                                <div><label>{orderDetails.order_date
                                                                ? new Date(new Date(orderDetails.order_date).setDate(new Date(orderDetails.order_date).getDate() + 2)).toLocaleDateString()
                                                                : "N/A"}</label></div>
                                                            </div>
                                                        </div>
                                                        <div className="col-md-6">
                                                            <div className="form-group">
                                                                <label>Shipping cost:</label>
                                                                <div><label>₹50</label></div>
                                                            </div>
                                                        </div>
                                                        <div className="col-md-6">
                                                            <div className="form-group">
                                                                <label><strong>Total Amount:</strong></label>
                                                                <div><label><strong>₹{orderDetails.total_amount.toFixed(2)}</strong></label></div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>





                            <div className="col-lg-12">
                                <div className="table-responsive rounded mb-3">
                                    <table className="data-table table mb-0 tbl-server-info">
                                        <thead className="bg-white text-uppercase">
                                            <tr className="ligth ligth-data">

                                                <th>Image</th>
                                                <th>Product Name</th>
                                                {/* <th>Category</th> */}
                                                <th>Quantity</th>
                                                <th>Price</th>
                                            </tr>
                                        </thead>

                                        <tbody className="ligth-body">
                                            {orderDetails.items.map((item, index) => (
                                                <tr key={index} >
                                                    <td><img
                                                        src={`${MEDIA_BASE_URL}/${(item.product_image)}`}
                                                        alt={item.product_image}
                                                        className="img-fluid rounded avatar-50 mr-3" /></td>
                                                    <td>{item.product_name}</td>
                                                    {/* <td >{item.category_name}</td> */}
                                                    <td>{item.product_quantity}</td>
                                                    <td>{item.product_price}</td>
                                                </tr>
                                            ))}
                                            {orderDetails.items.length > 0 && (
                                                <tr>
                                                    <td style={{ border: '1px solid #ddd', padding: '8px' }} colSpan={3}><strong>Delivery Charge:</strong></td>
                                                    <td style={{ border: '1px solid #ddd', padding: '8px' }}><strong>₹50.00</strong></td>
                                                </tr>
                                                )}
                                                {orderDetails.items.length > 0 && (
                                                <tr>
                                                    <td style={{ border: '1px solid #ddd', padding: '8px' }} colSpan={3}><strong>Total amount:</strong></td>
                                                    <td style={{ border: '1px solid #ddd', padding: '8px' }}><strong>₹{orderDetails.total_amount.toFixed(2)}</strong></td>

                                                </tr>
                                                )}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>

                    </div>


                </div>
            </div>
        </>
    )
}
export default Order2