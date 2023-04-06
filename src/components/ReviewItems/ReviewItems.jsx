import React from 'react';
import './ReviewItems.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons'

const ReviewItems = ({product, handelRemoveFromCart}) => {
    const {id, img, price, name , quantity} = product;
    return (
        <div className='review-items'>
            <div className='cartImgDiv'>
            <img src={img} alt="" />
                <div>
                    <h5>{name}</h5>
                    <p>Price: ${price}</p>
                    <p>Quantity: {quantity}</p>
                </div>
            </div>
            
                <button onClick={()=>handelRemoveFromCart(id)} className='del-btn'>
                <FontAwesomeIcon icon={faTrashAlt} />
                </button>
        </div>
    );
};

export default ReviewItems;
