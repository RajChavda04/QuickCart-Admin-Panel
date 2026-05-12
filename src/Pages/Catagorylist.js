import React, { useEffect, useState } from 'react'
import Axois from 'axios'
import { Link } from 'react-router-dom'
import Swal from 'sweetalert2'
import API_BASE_URL from '../config/apiConfig'

export default function Catagorylist() {

    const [list, setList] = useState([]);
    useEffect(() => {
        Axois.get(`${API_BASE_URL}/categorylist`)
            .then((response) => {
                setList(response.data);
            });
    });
    const handledelete = (category_id) => {
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
                Axois.delete(`${API_BASE_URL}/Category_Delete/${category_id}`)
                    .then((response) => {
                        setList(list.filter(iteam => iteam.category_id !== category_id));
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
                                <div className="d-flex flex-wrap align-items-center -between mb-4">
                                    <div>
                                        <h4 className="mb-3">Category List</h4>
                                        <p className="mb-0">Use category list as to describe your overall core business from the provided list.
                                            Click the name of the category where you want to add a list item.</p>
                                    </div>
                                    {/* <a href="page-add-category.html" className="btn btn-primary add-list"><i className="las la-plus mr-3"></i>Add Category</a> */}
                                </div>
                            </div>
                            <div className="col-lg-12">
                                <div className="table-responsive rounded mb-3">
                                    <table className="data-table table mb-0 tbl-server-info">
                                        <thead className="bg-white text-uppercase">
                                            <tr className="ligth ligth-data">

                                                <th>Category Id</th>
                                                <th>Category Image</th>
                                                <th>Category</th>
                                                <th>Description</th>

                                                <th>Action</th>
                                            </tr>
                                        </thead>
                                        <tbody className="ligth-body">

                                            {list.map((val, index) => (
                                                <tr>
                                                    <td>{val.category_id}</td>
                                                    <td>
                                                        <img
                                                            src={`http://localhost:1337/${(val.category_image)}`}
                                                            alt={val.category_image}
                                                            className="img-fluid rounded avatar-50 mr-3" />
                                                    </td>
                                                    <td>{val.category_name}</td>
                                                    <td>{val.category_description}</td>
                                                    <td>
                                                        <div className="d-flex align-items-center list-action">
                                                            <Link to="/Categoryedit" className="badge bg-success mr-2" data-toggle="tooltip" data-placement="top" title="" data-original-title="Edit" state={{ category_id: val.category_id }}>
                                                                <i className="ri-pencil-line mr-0"></i></Link>

                                                            <Link to='/Catagorylist' className="badge bg-warning mr-2" data-toggle="tooltip" data-placement="top" title="" data-original-title="Delete" onClick={() => handledelete(val.category_id)}>


                                                                <i className="ri-delete-bin-line mr-0"></i>
                                                            </Link>

                                                        </div>

                                                    </td>
                                                </tr>
                                            ))}

                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>

                    </div>


                </div>
            </div >

        </>
    )
}
