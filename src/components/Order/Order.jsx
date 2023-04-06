import React, { useState } from 'react';
import Cart from '../Cart/Cart';
import'./Order.css'
import { useLoaderData } from 'react-router-dom';
import ReviewItems from '../ReviewItems/ReviewItems';
import { removeFromDb } from '../../utilities/fakedb';


const Order = () => {
    const savedCart = useLoaderData();
    const [cart, setCart] = useState(savedCart)

    const handelRemoveFromCart = (id) => {
        const remaining = cart.filter(products=>products.id !== id)
        setCart(remaining)
        removeFromDb(id);

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
                <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Order;