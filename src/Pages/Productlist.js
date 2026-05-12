import React, { useEffect, useState } from 'react'
import Axois from 'axios'
import { Link } from 'react-router-dom'
import Swal from 'sweetalert2'



export default function Productlist() {

    const [list, setList] = useState([]);
   
  useEffect(() => {
    Axois.get('http://localhost:1337/api/productlist')
      .then((response) => {
        setList(response.data);
        
        const lowStockProducts = response.data.filter(item => item.product_quantity < 5);

        if (lowStockProducts.length > 0) {
          const productNames = lowStockProducts
            .map(p => `${p.product_name} (Qty: ${p.product_quantity})`)
            .join('\n');

          Swal.fire({
            icon: 'warning',
            title: 'Low Stock Alert!',
            html: `<pre style="text-align:left;">${productNames}</pre>`,
            confirmButtonText: 'OK',
          });
        }
      })
      .catch((error) => {
        console.error('Error fetching product list:', error);
      });
  }, []); 

    const handledelete = (product_id) => {
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
                Axois.delete(`http://localhost:1337/api/Product_Delete/${product_id}`)
                    .then((response) => {
                        setList(list.filter(iteam => iteam.product_id !== product_id));
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
                                <div className="d-flex flex-wrap flex-wrap align-items-center mb-4">
                                    <div>
                                        <h4 className="mb-3">Product List</h4>
                                        <p className="mb-0">The product list effectively dictates product presentation and provides space to list your products and offering in the most appealing way.</p>
                                    </div>

                                </div>
                            </div>
                            <div className="col-lg-12">
                                <div className="table-responsive rounded mb-3">
                                    <table className="data-tables table mb-0 tbl-server-info" >
                                        <thead className="text-uppercase" >
                                            <tr className="ligth ligth-data" >
                                                <th>Product Id</th>
                                                <th>Product</th>
                                                <th >Image</th>

                                                <th>Category</th>
                                                <th>Price</th>
                                                {/* <th>Org Price</th> */}

                                                <th>Quantity</th>
                                                <th>Action</th>
                                            </tr>
                                        </thead>
                                        <tbody className="ligth-body">
                                            {list.map((val, index) => (
                                                <tr>
                                                    <td>{val.product_id}</td>
                                                    <td>{val.product_name} </td>
                                                    <td>
                                                        <img
                                                            src={`http://localhost:1337/${(val.product_image)}`}
                                                            alt={val.product_image}
                                                            className="img-fluid rounded avatar-50 mr-3" />
                                                    </td>
                                                    <td> {val.category_name}</td>
                                                    <td>{val.product_price}</td>
                                                    {/* <td>{val.original_price}</td> */}
                                                    <td>{val.product_quantity}</td>

                                                    <td> <div className="d-flex align-items-center list-action">

                                                        <Link to="/Productedit" state={{product_id:val.product_id}} className="badge bg-success mr-2" data-toggle="tooltip" data-placement="top" title="" data-original-title="Edit" >
                                                            <i className="ri-pencil-line mr-0"></i></Link>

                                                        <Link to="/Productlist" className="badge bg-warning mr-2" data-toggle="tooltip" data-placement="top" title="" data-original-title="Delete"
                                                            onClick={() => handledelete(val.product_id)} ><i className="ri-delete-bin-line mr-0" ></i></Link>
                                                    </div></td>
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
