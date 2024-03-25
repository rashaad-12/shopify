// ProductPage.js

import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts, selectProducts } from '../../app/productDataSlice';
import { NavigationBar } from '../../components/common';
import { AddProductCard, AddProductForm, ProductCard, SelectionPane } from './components';

import backgroundImage from './assests/images/background-image.jpg';

import '../../css/product-page.css';

export const ProductPage = () => {
  const dispatch = useDispatch();
  const products = useSelector(selectProducts);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  return (
    <>
      <div className='position-fixed top-0 start-0 w-100 h-100 '>
        <img src={backgroundImage} className='background-image' alt="Background"/>
      </div>
      <NavigationBar />
      
      <div className="container-fluid overflow-hidden bg-light py-5">
      <div className="container-fluid">
          <div className="row row-cols-2">
            <div className="col-3">
              <SelectionPane products={products} />
            </div>
            <div className='col-9'>
              <div className="row row-cols-lg-3 row-cols-md-2 row-cols-sm-1 justify-content-start ps-5">
                {products.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
                <AddProductCard />
                <AddProductForm />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
