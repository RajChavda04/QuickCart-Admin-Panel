import React, { useEffect, useState } from 'react'
import Axios from 'axios'


export default function Customerlist() {

     const [list, setList] = useState([]);
       
      
        useEffect(() => {
          fetchusers();
        }, []);


    const fetchusers =() => {
        Axios.get('http://localhost:1337/api/customerlist')
            .then((response) => {
                setList(response.data);
            })
            .catch((err) => {
                        console.error("Axios error:", err);
                      });
    };

    // const fetchOrders = () => {
    //     Axios.get("http://localhost:1337/api/getorder")
    //       .then((response) => {
    //         setList(response.data);
    //       })
    //       .catch((err) => {
    //         console.error("Axios error:", err);
    //       });
    //   };

    const updateOrderStatus = (customer_id, newStatus) => {
        Axios.put(`http://localhost:1337/api/updatecustomerstatus`, {
          customer_id: customer_id,
          newStatus: newStatus,
        })
          .then(() => {
            fetchusers(); // refresh list after update
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
                                        <h4 className="mb-3">Customer List</h4>
                                        <p className="mb-0">A customer dashboard lets you easily gather and visualize customer data from optimizing
                                            the customer experience, ensuring customer retention. </p>
                                    </div>

                                </div>
                            </div>
                            <div className="col-lg-12">
                                <div className="table-responsive rounded mb-3">
                                    <table className="data-table table mb-0 tbl-server-info">
                                        <thead className="bg-white text-uppercase">
                                            <tr className="ligth ligth-data">
                                                <th hidden >customer id</th>
                                                <th>Name</th>
                                                <th>Email</th>
                                                <th>Password</th>
                                                <th>Phone number</th>
                                                <th>Address</th>
            
                                                <th hidden>status</th>
                                                <th>Action</th>
                                            </tr>
                                        </thead>

                                        <tbody className="ligth-body">

                                            {list.map((val, index) => (
                                                <tr key={index}>
                                                     <td hidden>{val.customer_id}</td>
                                                    <td>{val.customer_name}</td>
                                                    <td>{val.customer_email}</td>
                                                    <td>{val.customer_password}</td>
                                                    <td>{val.customer_phone}</td>
                                                    <td>{val.customer_address}</td>
                                                    <td hidden>{val.customer_status}</td>
                                                    <td>
                                                    <button className={`btn btn-sm ${val.customer_status === 1 ? "btn-warning" : "btn-success"}`} onClick={() => updateOrderStatus(val.customer_id, val.customer_status === 1 ? 0 : 1)} style={{height: '40px', width: '90px'}}> {val.customer_status === 1 ? "Block" : "Active"} </button>
                                                        
                                                    </td>

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
                                        <div className="content edit-notes">
                                            <div className="card card-transparent card-block card-stretch event-note mb-0">
                                                <div className="card-body px-0 bukmark">
                                                    <div className="d-flex align-items-center justify-content-between pb-2 mb-3 border-bottom">
                                                        <div className="quill-tool">
                                                        </div>
                                                    </div>
                                                    <div id="quill-toolbar1">
                                                        <p>Virtual Digital Marketing Course every week on Monday, Wednesday and Saturday.Virtual Digital Marketing Course every week on Monday</p>
                                                    </div>
                                                </div>
                                                <div className="card-footer border-0">
                                                    <div className="d-flex flex-wrap align-items-ceter justify-content-end">
                                                        <div className="btn btn-primary mr-3" data-dismiss="modal">Cancel</div>
                                                        <div className="btn btn-outline-primary" data-dismiss="modal">Save</div>
                                                    </div>
                                                </div>
                                            </div>
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
