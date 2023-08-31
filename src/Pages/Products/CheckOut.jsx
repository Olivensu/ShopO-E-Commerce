// import React from 'react';

import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate, useParams } from "react-router-dom";
import auth from "../../../firebase.init";
import Loading from "../Shared/Loading";
import { useEffect } from "react";
import axios from "axios";
import { useState } from "react";
import { toast } from "react-toastify";

const CheckOut = () => {
    const [user,loading]= useAuthState(auth);
    const { propArray } = useParams();
    const [userinfo, setUserinfo] = useState([]);
    const [cartItem,setCartItem]= useState([])
    const navigate = useNavigate()

    useEffect(() => {
        fetch(`${import.meta.env.VITE_BACKEND_URL}/api/users/${user?.email}`)
        .then(res=>res.json())
        .then(data=> setUserinfo(data.payload.user))

        axios.get(`${import.meta.env.VITE_BACKEND_URL}/api/order/cart/${user.email}`)
            .then(res=>{
                console.log(res);
                setCartItem(res.data.payload)
            })
      }, [user])

    if(loading){
        <Loading></Loading>
    }

    const decodedPropArray = JSON.parse(decodeURIComponent(propArray));

    const checkoutItems = cartItem.filter(item=>decodedPropArray.includes(item._id))

    const totalPrice = checkoutItems.reduce((total, item) => {
        return total + item.cartItem.discountPrice * item.quantity;
      }, 0);
    const totalShipping = checkoutItems.reduce((total, item) => {
        return total + item.cartItem.shipping;
      }, 0);
    console.log(checkoutItems.length);
    console.log(totalShipping);

    const handleCheckOut = ()=>{
        if(!user.email){
            navigate('/login')
        }
        axios.post(`${import.meta.env.VITE_BACKEND_URL}/api/order/checkout`, {order:checkoutItems, email:user.email})
        .then(res=>{
            console.log(res);
            toast.success("CheckOut successfully")
            navigate('/')
        })
        .catch(err => {
            console.log(err)
            toast.error("CheckOut Failed!")
          })

        
    }

    return (
        <div>
            <p className="text-green font-bold text-2xl my-5">Check Out</p>
            <div className="text-start my-5 shadow-md w-11/12 m-auto p-3 shadow-orange rounded-xl">
                <p>Deliver to: {userinfo.name}</p>
                <p>Phone: {userinfo.phone}</p>
                <p>Email: {userinfo.email}</p>
                <p>Address: {userinfo.address}</p>
            </div>
            <div className="text-start my-5 shadow-md w-11/12 m-auto p-3 shadow-orange rounded-xl">
            {checkoutItems?.map((item, index) => (
            <div className="flex justify-around items-center my-5 bg-base-200 p-3 shadow-lg shadow-purple rounded-xl" key={item._id}>
                
              <div className="flex text-start">
                <img className="w-20 mx-5" src={`${import.meta.env.VITE_BACKEND_URL}/image/users/${
              item.cartItem.image
            }`} alt="" />
              <div className="">
              <p className="font-bold text-xl">{item.cartItem.name}</p>
              <p className="font-bold ">{item.cartItem.shop}</p>
              <p className="line-through">৳ {item.cartItem.price}</p>
              <p className="font-bold ">৳ {item.cartItem.discountPrice}</p>
              <p className=" text-red">Only {item.cartItem.quantity}  Item left</p>
              </div>
              </div>
              <div>
              <div className="flex flex-col items-center py-2 font-bold">
              {/* <button onClick={()=>handleQuantityChange(item._id, -1)} className="btn btn-sm btn-secondary text-white font-bold text-xl mx-5">-</button>
              <p className="border-2 px-2 rounded-lg">{()=>setQuantity(item.quantity)}</p>
              <p className="border-2 px-2 rounded-lg">{item.quantity}</p>
              
              <button onClick={()=>handleQuantityChange(item._id, 1)}  className="btn btn-sm btn-secondary text-white font-bold text-xl mx-5">+</button> */}
              <p className="border-2 px-2 rounded-lg mb-5">Quantity {item.quantity}</p>
              {/* <div className="inline-block cursor-pointer" onClick={()=>handleDeleteItem(item._id)}>
              <DeleteIcon
                          color="warning"
                          style={{ fontSize: "2rem" }}
                        ></DeleteIcon>
              </div> */}
            </div>
              </div>
              {/* Render additional details about the cartItem if needed */}
            </div>
          ))}
            </div>
            <div className="text-start my-7 shadow-md w-11/12 m-auto p-3 shadow-orange rounded-xl">
                <p className="font-bold mb-2">Order Summary</p>
                <hr />
                <div className="flex justify-between my-1 mt-3">
                    <p className="font-bold ">Item Total</p>
                    <p className="font-bold ">৳  {totalPrice}</p>
                </div>
                <div className="flex justify-between my-1">
                    <p className="font-bold ">Delivery Fee</p>
                    <p className="font-bold ">৳  {totalShipping}</p>
                </div>
                <div className="flex justify-between my-1">
                    <p className="font-bold ">Delivery Discount</p>
                    <p className="font-bold ">৳  0</p>
                </div>
                <div className="flex justify-between my-1">
                    <p className="font-bold ">Total Payment</p>
                    <p className="font-bold ">৳  {totalPrice + totalShipping}</p>
                </div>
                <button onClick={handleCheckOut} className="btn btn-warning bg-orange text-white w-full mt-5">Place Order</button>
            </div>
        </div>
    );
};

export default CheckOut;