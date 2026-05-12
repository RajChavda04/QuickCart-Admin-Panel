import React from 'react'
import Swal from "sweetalert2"
import Axios from "axios"
import API_BASE_URL from '../config/apiConfig'


function Catagoryadd() {

    function add() {
        var category_name = document.getElementById("category_name").value;
        var category_description = document.getElementById("category_description").value;
        var category_image = document.getElementById("category_image").files[0];

        if (!category_name || !category_description || !category_image) {
            Swal.fire({
                title: 'Error',
                text: 'All feilds are required',
                icon: 'error',
                confirmButtonText: 'OK'
            });
            return;
        }
        const formData = new FormData();
        formData.append('category_name', category_name);
        formData.append('category_description', category_description);
        formData.append('category_image', category_image);


        Axios.post(`${API_BASE_URL}/insertcategory`, formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        }).then((response) => {
            if (response.data.message) {
                Swal.fire({
                    icon: 'success',
                    title: 'Category Added',
                    text: response.data.message,
                }).then(() => {
                    window.location = "/Catagoryadd"
                });

            } 
            // else {
            //     Swal.fire({
            //         icon: 'success',
            //         title: 'event inserted',
            //     }).then(() => {
            //         window.location = "/Catagoryadd";
            //     });
            // }
        }

        )

    }

    return (
        <>
            <div className="wrapper">
                <div className="content-page">
                    <div className="container-fluid add-form-list">
                        <div className="row">
                            <div className="col-sm-12">
                                <div className="card">
                                    <div className="card-header d-flex justify-content-between">
                                        <div className="header-title">
                                            <h4 className="card-title">Add category</h4>
                                        </div>
                                    </div>
                                    <div id="Myform">
                                        <div className="card-body">

                                            <div className="row">

                                                <div className="col-md-12">
                                                    <div className="form-group">
                                                        <label>Category Name *</label>
                                                        <input type="text" id="category_name" className="form-control" placeholder="Enter category Name" />
                                                        <div className="help-block with-errors"></div>
                                                    </div>
                                                </div>


                                                <div className="col-md-12">
                                                    <div className="form-group">
                                                        <label>Category Descrition</label>
                                                        <textarea className="form-control" rows="4" id="category_description"></textarea>
                                                    </div>
                                                    <div className="col-md-12">
                                                        <div className="form-group">
                                                            <label>Image*</label>
                                                            <input type="file" className="form-control image-file" name="category_image"
                                                                id="category_image" accept="image/*" />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <button type="submit" className="btn btn-primary mr-2" onClick={add}>Add category</button>
                                            <button type="reset" className="btn btn-danger" onclick="reset">Reset</button>

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

export default Catagoryadd;
