import React from 'react';
import './Product.css'
const Product = (props) => {
    console.log(props.product)
    const {name, img, seller, quantity, price, ratings} = props.product
    return (
        <div className='product'>
            <img src={img} alt="" />
            <div className='product-info'>
            <h5 className='name'>{name}</h5>
            <p>Manufacture: {seller}</p>
            <p>Rating: {ratings} star</p>
            </div>
            <button className='btn-cart'>Add To Cart</button>
        </div>
    );
};

export default Product;