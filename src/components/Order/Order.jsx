import React, { useState } from 'react';
import Cart from '../Cart/Cart';
import'./Order.css'
import { Link, useLoaderData } from 'react-router-dom';
import ReviewItems from '../ReviewItems/ReviewItems';
import { deleteShoppingCart, removeFromDb } from '../../utilities/fakedb';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashCan, faCreditCard } from '@fortawesome/free-solid-svg-icons'


const Order = () => {
    const savedCart = useLoaderData();
    const [cart, setCart] = useState(savedCart)

    const handelRemoveFromCart = (id) => {
        const remaining = cart.filter(products=>products.id !== id)
        setCart(remaining)
        removeFromDb(id);

    }

    const clearCart = () => {
        setCart([]);
        deleteShoppingCart()
    }
    // console.log(savedCart);
    return (
        <div className='orders'>
            <div className='reviewCart'>
            {
                cart.map(product => <ReviewItems
                key={product.id}
                product={product}
                handelRemoveFromCart = {handelRemoveFromCart}
                ></ReviewItems>)
               }
            </div>
            <div>
                <Cart 
                cart={cart}
                clearCart= {clearCart}
                >
                    <Link className='proceed-link' to='/checkout'>
                        <button className='proceed-checkout'>Proceed Checkout 
                        <FontAwesomeIcon icon={faCreditCard} />
                        </button>
                    </Link>
                </Cart>
            </div>
        </div>
    );
};

export default Order;