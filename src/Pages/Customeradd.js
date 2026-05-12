import React from 'react'

export default function Customeradd() {
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
                                            <h4 className="card-title">Add Customer</h4>
                                        </div>
                                    </div>
                                    <div className="card-body">
                                        <form action="page-list-customers.html" data-toggle="validator">
                                            <div className="row">
                                                <div className="col-md-6">
                                                    <div className="form-group">
                                                        <label>Name *</label>
                                                        <input type="text" className="form-control" placeholder="Enter Name" required/>
                                                            <div className="help-block with-errors"></div>
                                                    </div>
                                                </div>
                                                <div className="col-md-6">
                                                    <div className="form-group">
                                                        <label>Email *</label>
                                                        <input type="text" className="form-control" placeholder="Enter Email" required/>
                                                            <div className="help-block with-errors"></div>
                                                    </div>
                                                </div>
                                                <div className="col-md-6">
                                                    <div className="form-group">
                                                        <label>Phone Number *</label>
                                                        <input type="text" className="form-control" placeholder="Enter Phone Number" required/>
                                                            <div className="help-block with-errors"></div>
                                                    </div>
                                                </div>
                                                <div className="col-md-6">
                                                    <div className="form-group">
                                                        <label>Country *</label>
                                                        <input type="text" className="form-control" placeholder="Enter Country" required/>
                                                            <div className="help-block with-errors"></div>
                                                    </div>
                                                </div>
                                                <div className="col-md-12">
                                                    <div className="form-group">
                                                        <label>Address</label>
                                                        <textarea className="form-control" rows="4"></textarea>
                                                    </div>
                                                </div>
                                                <div className="col-md-12">
                                                    <div className="form-group">
                                                        <label>City *</label>
                                                        <input type="text" className="form-control" placeholder="Enter City" required/>
                                                            <div className="help-block with-errors"></div>
                                                    </div>
                                                </div>
                                                <div className="col-md-12">
                                                    <div className="form-group">
                                                        <label>State *</label>
                                                        <input type="text" className="form-control" placeholder="Enter State" required/>
                                                            <div className="help-block with-errors"></div>
                                                    </div>
                                                </div>
                                                <div className="col-md-12">
                                                    <div className="form-group">
                                                        <label>Customer Group</label>
                                                        <input type="text" className="form-control"/>
                                                    </div>
                                                </div>
                                            </div>
                                            <button type="submit" className="btn btn-primary mr-2">Add Customer</button>
                                            <button type="reset" className="btn btn-danger">Reset</button>
                                        </form>
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
