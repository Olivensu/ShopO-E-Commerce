// import React from 'react';

import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../../firebase.init";
import Loading from "../Shared/Loading";

const CartItem = () => {
    const [user, loading,] = useAuthState(auth);  
    const [cartProduct, setCartProduct] = useState([]);
    useEffect(() => {
        if (user) {
          axios.get(`${import.meta.env.VITE_BACKEND_URL}/api/order/cart/${user?.email}`)
            .then(res => {
              setCartProduct(res.data.payload);
            })
            .catch(error => {
              console.error('Error fetching cart products:', error);
            });
        }
      }, [user]); // Fetching logic only depends on user
    
      // You can use another useEffect to monitor changes in cartProduct
    //   useEffect(() => {
    //     console.log(cartProduct.length);
    //   }, [cartProduct]);
    if(loading){
        return <Loading></Loading>
    }
    console.log(cartProduct)
    return (cartProduct);
};

export default CartItem;