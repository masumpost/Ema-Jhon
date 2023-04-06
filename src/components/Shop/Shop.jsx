import React, { useEffect, useState } from 'react';
import { addToDb, getShoppingCart } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css'

const Shop = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([])
    useEffect(()=>{
        fetch("products.json")
        .then(res=> res.json())
        .then(data => setProducts(data))
    },[]);

    useEffect(()=>{
        const storedCart =  getShoppingCart();
        let saveCart = [];
        // step 1: get id

        for(const id in storedCart){

            // step 2: get the product using id;
            const addedProduct = products.find(product => product.id === id);
            
            // step 3: get the quantity of the product
            if(addedProduct){
                const quantity = storedCart[id];
                addedProduct.quantity = quantity;

                // step 4: add the added product to the saveCart
                saveCart.push(addedProduct);
            }
            // console.log(addedProduct)
        }
        // step 5: set the cart
        setCart(saveCart)
    },[products])

    const handelAddToCart = (product) => {
        let newCart = [...cart, product];
        setCart(newCart);
        addToDb(product.id)
    }
    return (
        <div className='shop-container'>
            <div className='product-container'>
               {
                products.map(product => <Product
                    key={product.id}
                    product = {product}
                    handelAddToCart={handelAddToCart}>
                    </Product>)
               }
            </div>
            <div className='cart-container'>
               <Cart cart={cart}></Cart>
            </div>
            
        </div>
    );
};

export default Shop;