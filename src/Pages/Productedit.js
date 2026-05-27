import React, { useEffect, useState } from 'react'
import Axios from 'axios';
import { useLocation } from 'react-router-dom';
import Swal from 'sweetalert2';
import API_BASE_URL from '../config/apiConfig';

export default function Productedit() {
    
    const [catlist, setcatList] = useState([]);


    useEffect(() => {
        Axios.get(`${API_BASE_URL}/categorylist`)
            .then((response) => {
                setcatList(response.data);
                //alert(response.data);
            });
    });


    const location = useLocation();
    const product_id = location.state?.product_id;
    //alert(product_id);
    const [productdata, setprodata] = useState({
        product_id: '',
        product_name: '',
        product_price: '',
        original_price: '',
        product_quantity: '',
        product_image: '',
        category_id: '',
        product_description: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setprodata(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    useEffect(() => {
        if (product_id) {

            Axios.post(`${API_BASE_URL}/editproductdata`, { product_id: product_id })
                .then((response) => {
                    setprodata(response.data);
                    //alert(response.data);
                })
                .catch((error) => {
                    console.error("There was ana error fatching the data!", error);
                });
        }
    }, [product_id]);

        // update image in product list page
        const handleImageChange = (e) => {
            const file = e.target.files[0];
            if (file) {
              setprodata((prevState) => ({
                ...prevState,
                product_image: file
              }));
            }
          };

    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('product_id', productdata.product_id);
        formData.append('category_id', productdata.category_id);
        formData.append('product_name', productdata.product_name);
        formData.append('product_price', productdata.product_price);
        formData.append('original_price', productdata.original_price);
        formData.append('product_description', productdata.product_description);
        formData.append('product_quantity',productdata.product_quantity)
    
        // Only append the image if a new one is selected
        if (productdata.product_image instanceof File){
          formData.append('product_image', productdata.product_image);
        }
      
    
      Axios.post(`${API_BASE_URL}/productupdate`, formData,{
        headers: { 'Content-Type': 'multipart/form-data' },
      }).then(() => {
        Swal.fire({
          icon: 'success',
          title: 'Updated!',
          text: 'Product data updated successfully!'
        });
      }).then(()=>{
        window.location="/Productlist"
    }).catch((error) => {
      console.error("Error during the update:", error);
      Swal.fire({
        icon: 'error',
        title: 'Update Failed',
        text: 'There was an issue updating the product data!',
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
                                            <h4 className="card-title">Edit Product</h4>
                                        </div>
                                    </div>

                                    <div className="card-body">
                                        <div className="row">
                                            <input type="hidden" className="form-control"
                                                data-errors="Please Enter Name." id="product_name" value={productdata.product_id} />

                                            <div className="col-md-6">
                                                <div className="form-group">
                                                    <label>Name *</label>
                                                    <input type="text" className="form-control"
                                                        data-errors="Please Enter Name." id="product_name" name="product_name" value={productdata.product_name} onChange={handleChange}  />
                                                    <div className="help-block with-errors"></div>
                                                </div>
                                            </div>

                                            <div className="col-md-6">
                                                <div className="form-group">
                                                    <label>Category *</label>
                                                    <select name="category_id"  className="form-control" id="category_id" data-style="py-0" value={productdata.category_id} onChange={handleChange} >
                                                    <option hidden> Select Category</option>
                                                    {catlist.map((cat) => (
                                                    <option value={cat.category_id} key={cat.category_id} >{cat.category_name}</option>
                                                    ))}
                                                  
                                                </select>
   
                                                </div>
                                            </div>

                                            <div className="col-md-6">
                                                <div className="form-group">
                                                    <label> Price *</label>
                                                    <input type="text" className="form-control" 
                                                        data-errors="Please Enter Price." name="product_price" id="product_price" value={productdata.product_price} onChange={handleChange} />
                                                    <div className="help-block with-errors"></div>
                                                </div>
                                            </div>
                                            {/* <div className="col-md-6">
                                                <div className="form-group">
                                                    <label> Original Price *</label>
                                                    <input type="text" className="form-control" 
                                                        data-errors="Please Enter Price." name="original_price" id="original_price" value={productdata.original_price} onChange={handleChange} />
                                                    <div className="help-block with-errors"></div>
                                                </div>
                                            </div> */}

                                            <div className="col-md-12">
                                                <div className="form-group">
                                                    <label>Quantity *</label>
                                                    <input type="text" className="form-control" id="product_quantity" name="product_quantity" 
                                                        value={productdata.product_quantity} onChange={handleChange} required />
                                                    <div className="help-block with-errors"></div>
                                                </div>
                                            </div>
                                            <div className="col-md-12">
                                                <div className="form-group">
                                                    <label>Image*</label>
                                                    
                                                    <input type="file" className="form-control image-file" name="product_image"
                                                        id="product_image" onChange={handleImageChange} accept="image/*" />
                                                
                                                        <img
                                                            src={`${MEDIA_BASE_URL}/${(productdata.product_image)}`}
                                                            alt={productdata.product_image}
                                                            className="img-fluid rounded avatar-50 mr-3" />
                                                        
                                                </div>
                                            </div>
                                            <div className="col-md-12">
                                                <div className="form-group">
                                                    <label>Product Description</label>
                                                    <textarea className="form-control" rows="4" name="product_description" id="product_description" value={productdata.product_description} onChange={handleChange}></textarea>
                                                </div>
                                            </div>
                                        </div>
                                        <button type="submit" className="btn btn-primary mr-2" onClick={handleSubmit}>Update</button>
                                        <button type="reset" onclick="reset()" className="btn btn-danger">Reset</button>
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
