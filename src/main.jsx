import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Shop from './components/Shop/Shop';
import Product from './components/Product/Product';
import Home from './Layout/Home';
import Order from './components/Order/Order';
import Inventory from './components/Inventory/Inventory';
import Login from './components/Login/Login';
import cartProductsLoader from './Loader/cartProductsLoader';
import Checkout from './components/Checkout/Checkout';
import SignUp from './components/SignUp/SignUp';

const router = createBrowserRouter([
  {
    path: '/',
    element:<Home></Home>,
    children: [
      {
        path: '/',
        element: <Shop></Shop>
      },
      {
        path:'order',
        element:<Order></Order>,
        loader: cartProductsLoader
        
      },
      {
        path: 'inventory',
        element:<Inventory></Inventory>
      },
      {
        path: 'checkout',
        element: <Checkout></Checkout>
      },
      {
        path: 'login',
        element:<Login></Login>
      },
      {
        path:'signup',
        element:<SignUp></SignUp>
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <RouterProvider router={router} />
  </React.StrictMode>,
)
