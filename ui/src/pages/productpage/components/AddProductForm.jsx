import React from 'react';

import backgroundImage from '../assests/images/background-image.jpg';

export const AddProductForm = () => {
    return (
        <div
            className="offcanvas offcanvas-start p-5"
            data-bs-scroll="true"
            tabIndex="-1"
            id="add-product-form"
            style={{ backgroundImage: `url(${backgroundImage})` }}>
            <p className=" text-center form-heading">Product details</p>
            <form className="row g-3 add-product-form">
                <div className="col-8">
                    <label htmlFor="productName" className="form-label ">Model</label>
                    <input type="text" className="form-control" id="productName"/>
                </div>
                <div className="col-4">
                    <label htmlFor="productSeries" className="form-label">Series</label>
                    <input type="text" className="form-control" id="productSeries"/>
                </div>
                <div className="col-4">
                    <label htmlFor="productBrand" className="form-label">Brand</label>
                    <input type="text" className="form-control" id="productBrand"/>
                </div>
                <div className="col-4">
                    <label htmlFor="productPrice" className="form-label">Price</label>
                    <input type="number" className="form-control" id="productPrice"/>
                </div>
                <div className="col-4">
                    <label htmlFor="productQuantity" className="form-label">quantity</label>
                    <input type='number' id="productQuantity" className="form-control"></input>
                </div>
                <div className="col-12">
                    <label htmlFor="productDescription" className="form-label">description</label>
                    <textarea class="form-control" id="productDescription" rows="2"></textarea>
                </div>
                <div className="col-12">
                    <button type="submit" className="btn custom-btn mt-3">Add to Inventory</button>
                </div>
            </form>
        </div>
    );
};
