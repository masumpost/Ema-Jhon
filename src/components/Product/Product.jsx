import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import './Product.css'
const Product = (props) => {
    console.log(props.product)
    const {name, img, seller, quantity, price, ratings} = props.product;
    const handelAddToCart = props.handelAddToCart
    return (
        <div className='product'>
            <img src={img} alt="" />
            <div className='product-info'>
            <h5 className='name'>{name}</h5>
            <p>Manufacture: {seller}</p>
            <p>Rating: {ratings} star</p>
            </div>
            <button onClick={()=>handelAddToCart(props.product)} className='btn-cart'>Add To Cart <FontAwesomeIcon icon={faShoppingCart} />
            </button>
        </div>
    );
};

export default Product;