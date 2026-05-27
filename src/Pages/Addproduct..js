import React, { useEffect, useState } from 'react'
import Swal from 'sweetalert2'
import Axios from 'axios'
import API_BASE_URL from '../config/apiConfig'



function Addproduct() {

    const [list, setList] = useState([]);
    useEffect(() => {
        Axios.get(`${API_BASE_URL}/getcategory`)
            .then((response) => {
                //console.log("API Response:", response.data); // Debugging step


                setList(response.data);
            })
            .catch((error) => {
                Swal.fire({
                    icon: 'error',
                    title: 'Error',
                    text: 'Failed to load data',
                });
            });
    }, []);



    function aproduct(e) {
        e.preventDefault();
        var product_name = document.getElementById("product_name").value;
        var product_description = document.getElementById("product_description").value;
        var product_quantity = document.getElementById("product_quantity").value;
        var product_price = document.getElementById("product_price").value;
        var product_image = document.getElementById("product_image").files[0];
        var category_id = document.getElementById("category_id").value;


        if (!product_name || !product_description || !product_price || !product_quantity || !product_image || !category_id) {
            Swal.fire({
                title: 'Error',
                text: 'All feilds are required',
                icon: 'error',
                confirmButtonText: 'OK'
            });
            return;
        }

        const formData = new FormData();
        formData.append('product_name', product_name);
        formData.append('product_price', product_price);
        formData.append('product_quantity', product_quantity);
        formData.append('product_description', product_description);
        formData.append('category_id', category_id);
        formData.append('product_image', product_image);

        Axios.post(`${API_BASE_URL}/insertproduct`, formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        }).then((response) => {
            if (response.data.message) {
                Swal.fire({
                    icon: 'success',
                    title: 'Product Added',
                    text: response.data.message,
                }).then(() => {
                    window.location = "/Addproduct"
                });

            } else {
                Swal.fire({
                    icon: 'success',
                    title: 'event inserted',
                }).then(() => {
                    window.location = "/Addproduct";
                });
            }
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
                                            <h4 className="card-title">Add Product</h4>
                                        </div>
                                    </div>
                                    <form id="Myform">
                                        <div className="card-body">

                                            <div className="row">

                                                <div className="col-md-6">
                                                    <div className="form-group">
                                                        <label>Name *</label>
                                                        <input type="text" className="form-control" placeholder="Enter Name"
                                                            data-errors="Please Enter Name." id="product_name" required />
                                                        <div className="help-block with-errors"></div>
                                                    </div>
                                                </div>

                                                <div className="col-md-6">
                                                    <div className="form-group">
                                                        <label>Category *</label>
                                                        <select name="category_id" className="form-control" id="category_id" data-style="py-0">
                                                            <option hidden> Select Category</option>
                                                            {list.map((cat) => (
                                                                <option value={cat.category_id} key={cat.category_id}>{cat.category_name}</option>
                                                            ))}

                                                        </select>
                                                    </div>
                                                </div>

                                                <div className="col-md-6">
                                                    <div className="form-group">
                                                        <label> Price *</label>
                                                        <input type="text" className="form-control" placeholder="Enter Price"
                                                            data-errors="Please Enter Price." id="product_price" required />
                                                        <div className="help-block with-errors"></div>
                                                    </div>
                                                </div>
                                                {/* <div className="col-md-6">
                                            <div className="form-group">
                                                <label>Original Price *</label>
                                                <input type="text" className="form-control" placeholder="Enter Price"
                                                    data-errors="Please Enter Price." id="original_price" required/>
                                                <div className="help-block with-errors"></div>
                                            </div>
                                        </div> */}

                                                <div className="col-md-12">
                                                    <div className="form-group">
                                                        <label>Quantity *</label>
                                                        <input type="text" className="form-control" id="product_quantity" placeholder="Enter Quantity"
                                                            required />
                                                        <div className="help-block with-errors"></div>
                                                    </div>
                                                </div>
                                                <div className="col-md-12">
                                                    <div className="form-group">
                                                        <label>Image*</label>
                                                        <input type="file" className="form-control image-file" name="product_image"
                                                            id="product_image" accept="image/*" />
                                                    </div>
                                                </div>
                                                <div className="col-md-12">
                                                    <div className="form-group">
                                                        <label>Product Description</label>
                                                        <textarea className="form-control" rows="4" id="product_description"></textarea>
                                                    </div>
                                                </div>
                                            </div>
                                            <button type="submit" className="btn btn-primary mr-2" onClick={aproduct}>Add Product</button>
                                            <button type="reset" className="btn btn-danger">Reset</button>

                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

        </>
    )
}
export default Addproduct;
