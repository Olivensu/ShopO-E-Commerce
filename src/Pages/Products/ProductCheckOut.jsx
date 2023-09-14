// import React from 'react';

import { useAuthState } from "react-firebase-hooks/auth";
import { Link, useNavigate, useParams } from "react-router-dom";
import auth from "../../../firebase.init";
import Loading from "../Shared/Loading";
import { useEffect } from "react";
import axios from "axios";
import { useState } from "react";
import { toast } from "react-toastify";
// import AddressBook from "../Profile/AddressBook";

const ProductCheckOut = () => {
    const [user,loading]= useAuthState(auth);
    const { productId, quantity } = useParams();
    const [userinfo, setUserinfo] = useState([]);
    const [cartItem,setCartItem]= useState([])
    const navigate = useNavigate()
    const [selectedAddress, setSelectedAddress] = useState(null);
    // console.log(productId, quantity)

    useEffect(() => {
        if(user){
            fetch(`${import.meta.env.VITE_BACKEND_URL}/api/users/${user?.email}`)
        .then(res=>res.json())
        .then(data=> setUserinfo(data.payload.user))
        }

        axios.get(`${import.meta.env.VITE_BACKEND_URL}/api/product/`)
            .then(res=>{
                console.log(res);
                setCartItem(res.data.payload)
            })
      }, [user])

    if(loading || !cartItem){
        return <Loading></Loading>
    }

    // const decodedPropArray = JSON.parse(decodeURIComponent(propArray));
    // console.log(decodedPropArray);
    const checkoutItems = cartItem?.filter(item=>(item._id === productId))
    // console.log(checkoutItems);
    const totalPrice = checkoutItems[0]?.discountPrice * quantity;
    const totalShipping = checkoutItems[0]?.shipping
    // console.log(checkoutItems.length);
    // console.log(totalShipping);

    const handleCheckOut = ()=>{
        if(!user.email){
            navigate('/login')
        }
        if(!selectedAddress){
          return alert('Please select a address')
        }
        axios.post(`${import.meta.env.VITE_BACKEND_URL}/api/order/product/checkout`, {order:checkoutItems, email:user.email, name:selectedAddress.name, phone:selectedAddress.phone, address:selectedAddress.address})
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

    const handleAddressChange = (id) => {
      const selectedAddressId = id;
      const address = userinfo?.newAddress?.find((addr) => addr._id === selectedAddressId);
  
      // Update the selected address state
      setSelectedAddress(address);
    //   console.log(id);
    };

    return (
        <div>
            <p className="text-green font-bold text-2xl my-5">Check Out</p>
            {/* <div className="text-start my-5 shadow-md w-11/12 m-auto p-3 shadow-orange rounded-xl">
                <p>Deliver to: {userinfo.name}</p>
                <p>Phone: {userinfo.phone}</p>
                <p>Email: {userinfo.email}</p>
                <p>Address: {userinfo.address}</p>
            </div> */}
            <div>
            <p className="text-lg font-bold text-start w-11/12 m-auto mt-5">Select Address</p>
            <div className="grid grid-cols-2 my-5">
                {
                    userinfo?.newAddress?.map((address)=>(<div className="space-y-2 text-start w-48 p-2 rounded-2xl border-x-red border-y-orange m-auto  bg-white border-2 my-5" key={address._id}>
                        <input
              type="radio"
              name="shippingAddress"
              className="radio radio-accent"
              value={address._id}
              onChange={()=>handleAddressChange(address._id)}
            />
                        <p className="font-bold">Name: {address.name}</p>
                        <p className="font-bold">Phone: {address.phone}</p>
                        <p className="font-bold">Address: {address.address}</p>
                    </div>))
                }
            </div>
            <Link to='/create-address' className="text-orange font-bold text-xl"><p className="my-5">Add New Address</p></Link>
            </div>
            <div className="text-start my-5 w-11/12 m-auto">
            {checkoutItems?.map((item, index) => (
            <div className="my-5 bg-base-200 p-2  shadow-lg shadow-purple rounded-xl" key={item._id}>
                
              <div className="flex items-center  text-start">
                <div>
                <img className="w-20 mx-3" src={`${import.meta.env.VITE_BACKEND_URL}/image/users/${
              item.image
            }`} alt="" />
                </div>
              <div className="ml-1">
              <p className="font-bold text-lg">{item.name}</p>
              <p className="font-bold ">{item.shop}</p>
              <p className="line-through">৳ {item.price}</p>
              <p className="font-bold ">৳ {item.discountPrice}</p>
              <p className=" text-red">Only {item.quantity}  Item left</p>
              <p className="border-2 inline-block px-2 rounded-lg">Quantity {quantity}</p>
              </div>
              </div>
              <div>
              <div className="flex flex-col items-center py-2 font-bold">
              {/* <button onClick={()=>handleQuantityChange(item._id, -1)} className="btn btn-sm btn-secondary text-white font-bold text-xl mx-5">-</button>
              <p className="border-2 px-2 rounded-lg">{()=>setQuantity(item.quantity)}</p>
              <p className="border-2 px-2 rounded-lg">{item.quantity}</p>
              
              <button onClick={()=>handleQuantityChange(item._id, 1)}  className="btn btn-sm btn-secondary text-white font-bold text-xl mx-5">+</button> */}
              
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

export default ProductCheckOut;