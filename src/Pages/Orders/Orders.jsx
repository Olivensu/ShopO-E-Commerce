import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import Loading from '../Shared/Loading';
import { useEffect } from 'react';
import axios from 'axios';
import { useState } from 'react';

const Orders = () => {
    const [user,loading]= useAuthState(auth);
    const [orderItem,setOrderItem]= useState([])
    
    useEffect(()=>{
        axios.get(`${import.meta.env.VITE_BACKEND_URL}/api/order/order/${user.email}`)
            .then(res=>{
                console.log(res.data.payload);
                setOrderItem(res.data.payload)
            })
    },[])
    if(loading){
        return <Loading></Loading>
    }
    return (
        <div>
            <p className='text-start w-11/12 m-auto text-2xl my-5'>All Orders</p>
            <div className="text-start my-5 shadow-md w-11/12 m-auto p-3 shadow-orange rounded-xl">
            {orderItem?.map((item, index) => (
            <div className='my-5 bg-base-200 p-3 shadow-lg shadow-purple rounded-xl' key={item._id}>
                {
                    item.order.map((item,index)=>(
                        <div className="flex justify-around items-center " key={item._id}>
                        
                      <div className="flex text-start">
                        <img className="w-20 mx-5" src={`${import.meta.env.VITE_BACKEND_URL}/image/users/${
                      item.cartItem.image
                    }`} alt="" />
                      <div className="">
                      <p className="font-bold text-xl">{item.cartItem.name}</p>
                      <p className="font-bold ">{item.cartItem.shop}</p>
                      <p className="line-through">৳ {item.cartItem.price}</p>
                      <p className="font-bold ">৳ {item.cartItem.discountPrice}</p>
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
                    ))
                }
                <div className='flex justify-around items-center mt-5'>
                    <p  className="border-2 bg-blue px-2 ml-10 inline-block rounded-lg">Ordered time: {item.createdAt.slice(0,11)}</p>
                <p className="border-2 bg-blue px-2 ml-10 inline-block rounded-lg">Status: {item.status}</p>
                </div>
            </div>
          ))}
            </div>
        </div>
    );
};

export default Orders;