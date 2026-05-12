import React, { useEffect, useState } from 'react'
import Axios from 'axios'
import {Link} from 'react-router-dom'
import Swal from "sweetalert2"
import API_BASE_URL from '../config/apiConfig'

 function Feedback() {

    
    const [list, setList] = useState([]);


    useEffect(() => {
        Axios.get(`${API_BASE_URL}/feedbacklist`)
            .then((response) => {
                setList(response.data);
            });
    },[]);

    const handledelete = (feed_id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You want be able to revert this?",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it",
            cancelButtonText: "cancel"

        }).then((result) => {
            if (result.isConfirmed) {
                Axios.delete(`${API_BASE_URL}/feeddelete/${feed_id}`)
                    .then((response) => {
                        setList(list.filter(iteam => iteam.feed_id !== Number(feed_id)));
                        Swal.fire(
                            'Deleted!',
                            'Your file has been deleted',
                            'success'
                        );
                    })
            } else {
                Swal.fire(
                    'Cancel',
                    'Your file is safe',
                    'info'
                );
            }
        });
    }

  return (
    <>
       <div className="wrapper">
                <div className="content-page">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="d-flex flex-wrap align-items-center  mb-4">
                                    <div>
                                        <h4 className="mb-3">Feedback List</h4>
                                    </div>

                                </div>
                            </div>
                            <div className="col-lg-12">
                                <div className="table-responsive rounded mb-3">
                                    <table className="data-table table mb-0 tbl-server-info">
                                        <thead className="bg-white text-uppercase">
                                            <tr className="ligth ligth-data">
                                                <th hidden>Id</th>
                                                <th>Name</th>
                                                <th>Rating</th>
                                                <th>Date</th>
                                                <th>Review</th>
                                                <th>Action</th>
                                               
                                
                                            </tr>
                                        </thead>

                                        <tbody className="ligth-body">

                                            {list.map((val, index) => (
                                                <tr key={index}>
                                                    <td hidden> {val.feed_id}</td>
                                                    <td>{val.customer_name}</td>
                                                    <td>{val.feed_message}</td>
                                                    <td>{val.feed_date ? new Date(val.feed_date).toLocaleDateString("en-GB") : "N/A"}</td>
                                                    <td>{[1, 2, 3, 4, 5].map((star) => (
                                                    <span key={star}style={{ fontSize: "28px",color: star <= val.rating ? "red" : "#ccc",}}>★ </span> ))}</td>
                                                    <td> <Link to='/Feedback' className="badge bg-warning mr-2" data-toggle="tooltip" data-placement="top" title="" data-original-title="Delete" onClick={() => handledelete(val.feed_id)}  >
                                                        <i className="ri-delete-bin-line mr-0"></i>
                                                        </Link></td>
                                                </tr>
                                            ))}
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
export default Feedback