import React, {useState} from 'react';
import {GrFavorite} from 'react-icons/gr';

import dummy from '../assests/images/product-dummy-2.png';

export const ProductCard = ({product}) => {
    const [isLiked,
        setIsLiked] = useState(false);

    const handleLikeToggle = () => {
        setIsLiked(!isLiked);
    };

    const handleAddToCart = () => {
        // Implement the logic to add the product to the cart
        console.log(`Product added to cart: ${product.name}`);
    };

    const productImage = product.image || dummy; // Use product.image if available, otherwise use the dummy image

    return (
        <div className="card p-3 g4 product-card">
            <img
                className="card-img-top"
                src={productImage === ''
                ? dummy
                : productImage}
                alt={`Product: ${product.name}`}/>
            <div className="card-body mt-2">
                <div className="d-flex justify-content-between align-items-start">
                    <div>
                        <h5 className="card-title mb-3 placeholder-glow">{product.name}</h5>
                        <h6 className="card-subtitle mb-4 ">{product.brand}</h6>
                    </div>
                    <div className=' mt-2'>
                        <strong className="card-text fs-4">&#8377; {product.price}</strong>
                    </div>
                </div>
                <p className="card-text mb-4">{product.description}</p>
                <div className="d-flex justify-content-between my-auto">
                    <button onClick={handleAddToCart} className="btn custom-btn">
                        Add to cart
                    </button>
                    <button className="btn" onClick={handleLikeToggle}>
                        <GrFavorite
                            size={20}
                            color={isLiked
                            ? 'red'
                            : 'rgba(var(--non-photo-blue)'}/>
                    </button>
                </div>
            </div>
        </div>
    );
};
