import React, { useEffect, useState } from 'react'
import Axios from 'axios';
import { useLocation } from 'react-router-dom';
import Swal from 'sweetalert2';
import API_BASE_URL from '../config/apiConfig';

export default function Categoryedit() {
    
    const location = useLocation();
    const category_id = location.state?.category_id;
    //alert(product_id);
    const [categorydata, setprodata] = useState({
        category_id: '',
        category_name: '',
        category_image: '',
        category_description: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setprodata(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    useEffect(() => {
        if (category_id) {

            Axios.post(`${API_BASE_URL}/editcategorydata1`, { category_id: category_id })
                .then((response) => {
                    setprodata(response.data);
                    //alert(response.data);
                })
                .catch((error) => {
                    console.error("There was ana error fatching the data!", error);
                });
        }
    }, [category_id]);

        // update image in product list page
        const handleImageChange = (e) => {
            const file = e.target.files[0];
            if (file) {
              setprodata((prevState) => ({
                ...prevState,
                category_image: file
              }));
            }
          };

    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData();
      
        formData.append('category_id', categorydata.category_id);
        formData.append('category_name', categorydata.category_name);
       
        formData.append('category_description', categorydata.category_description);
        
    
        // Only append the image if a new one is selected
        if (categorydata.category_image instanceof File){
          formData.append('category_image', categorydata.category_image);
        }
      
    
      Axios.post(`${API_BASE_URL}/categoryupdate1`, formData,{
        headers: { 'Content-Type': 'multipart/form-data' },
      }).then(() => {
        Swal.fire({
          icon: 'success',
          title: 'Updated!',
          text: 'Product data updated successfully!'
        });
      }).then(()=>{
        window.location="/Catagorylist"
    }).catch((error) => {
      console.error("Error during the update:", error);
      Swal.fire({
        icon: 'error',
        title: 'Update Failed',
        text: 'There was an issue updating the category data!',
      });
    });
    };
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
                                            <h4 className="card-title">Edit category</h4>
                                        </div>
                                    </div>
                                    <form id="Myform">
                                        <div className="card-body">

                                            <div className="row">

                                                <div className="col-md-12">
                                                    <div className="form-group">

                                                        <input type="hidden" id="category_id" name="category_id" className="form-control" value={categorydata.category_id} />
                                                        <div className="help-block with-errors"></div>
                                                    </div>
                                                </div>

                                                <div className="col-md-12">
                                                    <div className="form-group">
                                                        <label>Category Name *</label>
                                                        <input type="text" id="category_name" name="category_name" className="form-control" value={categorydata.category_name} onChange={handleChange} required />
                                                        <div className="help-block with-errors"></div>
                                                    </div>
                                                </div>


                                                <div className="col-md-12">
                                                    <div className="form-group">
                                                        <label>Category Descrition</label>
                                                        <textarea className="form-control" rows="4" id="category_description" name="category_description" value={categorydata.category_description} onChange={handleChange}></textarea>
                                                    </div>
                                                </div>
                                                <div className="col-md-12">
                                                <div className="form-group">
                                                    <label>Image*</label>
                                                    
                                                    <input type="file" className="form-control image-file" name="product_image"
                                                        id="product_image" onChange={handleImageChange} accept="image/*" />
                                                
                                                        <img
                                                            src={`http://localhost:1337/${(categorydata.category_image)}`}
                                                            alt={categorydata.category_image}
                                                            className="img-fluid rounded avatar-50 mr-3" />
                                                        
                                                </div>
                                            </div>
                                            </div>
                                            <button type="submit" className="btn btn-primary mr-2" onClick={handleSubmit} >Update</button>
                                            <button type="reset" className="btn btn-danger" onclick="reset">Reset</button>

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
