import React,{useEffect,useState} from 'react'
import Axios from 'axios'
import {Link} from 'react-router-dom'
import API_BASE_URL from '../config/apiConfig'

 function Order() {
    const [list, setList] = useState([]);
   
  
    useEffect(() => {
      fetchOrders();
    }, []);
  
    const fetchOrders = () => {
      Axios.get(`${API_BASE_URL}/getorder`)
        .then((response) => {
          setList(response.data);
        })
        .catch((err) => {
          console.error("Axios error:", err);
        });
    };
      const updateOrderStatus = (order_no, newStatus) => {
        Axios.put(`${API_BASE_URL}/updateorderstatus`, {
          order_no,
          newStatus,
        })
          .then(() => {
            fetchOrders(); // refresh list after update
          })
          .catch((err) => {
            console.error("Update error:", err);
          });
      };
   


  return (
    <>
     <div className="wrapper">
                <div className="content-page">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="d-flex flex-wrap align-items-center  mb-4">
                                    <div>
                                        <h4 className="mb-3">Order List</h4>
                                      
                                    </div>

                                </div>
                            </div>
                            <div className="col-lg-12">
                                <div className="table-responsive rounded mb-3">
                                    <table className="data-table table mb-0 tbl-server-info">
                                        <thead className="bg-white text-uppercase">
                                            <tr className="ligth ligth-data">

                                                <th>Order No</th>
                                              
                                                <th>Quantity</th>
                                                <th>Total Price</th>                                                
                                                <th>Date</th>                                                
                                                <th>Payment Method</th>                                                
                                                <th hidden>status</th>
                                                <th>Action</th>
                                                <th>Details</th>
                                            </tr>
                                        </thead>

                                        <tbody className="ligth-body">

                                            {list.map((val, index) => (
                                                <tr key={index}>

                                                    <td>{val.order_no}</td>
                                                    
                                                   
                                                    <td>{val.total_quantity}</td>
                                                    <td>{val.total_amount}</td>
                                                    <td> {new Date(val.order_date).toLocaleDateString()}</td>
                                                    <td>{val.payment_method}</td>
                                                    <td hidden>{val.order_status}</td>
                                                    <td>
                                                        <button className={`btn btn-sm ${val.order_status === 1 ? "btn-warning" : "btn-success"}`} onClick={() => updateOrderStatus(val.order_no, val.order_status === 1 ? 0 : 1)} style={{height: '40px', width: '90px'}}> {val.order_status === 1 ? "Pending" : "Complete"} </button>
                                                    </td> 
                                                    <td> <Link to={{ pathname: "/Order2", }} state={{ order_no: val.order_no }} onClick={() => console.log("Navigating to Order2 with order_no:", val.order_no)}> Details </Link></td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>

                    </div>

                    <div className="modal fade" id="edit-note" tabindex="-1" role="dialog" aria-hidden="true">
                        <div className="modal-dialog modal-dialog-centered" role="document">
                            <div className="modal-content">
                                <div className="modal-body">
                                    <div className="popup text-left">
                                        <div className="media align-items-top justify-content-between">
                                            <h3 className="mb-3">Product</h3>
                                            <div className="btn-cancel p-0" data-dismiss="modal"><i className="las la-times"></i></div>
                                        </div>
                                        
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
      
    </>
  )
}
export default Order;
