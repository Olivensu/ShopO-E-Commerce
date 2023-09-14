// import React from 'react';

import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import RestoreIcon from '@mui/icons-material/Restore';
import RemoveModeratorIcon from '@mui/icons-material/RemoveModerator';
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../../firebase.init";
import Loading from "../Shared/Loading";
import { toast } from "react-toastify";
import CartItem from "../Hooks/CartItem";

const ProductDetails = () => {
    const [user, loading,] = useAuthState(auth); 
    const navigate = useNavigate();
    const {id} = useParams();
    const [product,setProduct] = useState([])
    const [quantity,setQuantity] = useState(1)
    let cart =  CartItem()
    // const [shop,setShop] = useState([])
    useEffect(() => {
        axios.get(`${import.meta.env.VITE_BACKEND_URL}/api/product/${id}`)
        .then(res=>{
            setProduct(res.data.payload)
        })
        // axios.get(`${import.meta.env.VITE_BACKEND_URL}/api/shop/${product.shopSlug}`)
        //     .then(res=>{
        //         setShop(res.data.payload[0])
        //     })
    },[id])
    if(loading || !product || !cart){
        return <Loading></Loading>
    }
    // console.log(product);
    
    
    // let sub = quantity-1;
    // let add = quantity+1;
    // const handleQuantity(quantity)=>{

    // }

    const handleAddToCart = ()=>{
        
        if(!user){
            return navigate('/login')
        }
        cart;
        axios.post(`${import.meta.env.VITE_BACKEND_URL}/api/order/cart`, {product:product,quantity:quantity, email:user.email})
        .then(res=>{
            console.log(res);
            toast.success("Add to Cart successfully")
        })
        .catch(err => {
            console.log(err)
            toast.error("Add to Cart Failed!")
          })
    }

    const handleNavigate = (id, quantity) => {
      navigate(`/product/checkout/${id}/${quantity}`);
    };
    return (
      <div>
        <div className="grid grid-cols-1 md:grid-cols-2 text-start items-center">
          <img
            className="px-16"
            src={`${import.meta.env.VITE_BACKEND_URL}/image/users/${
              product.image
            }`}
            alt=""
          />
          <div className="space-y-2 w-11/12 m-auto my-5">
            <p className="text-2xl font-bold ">{product.name}</p>
            <p className="inline-block font-bold">
              Category: {product.category}.
            </p>
            <p className="text-red inline-block ml-5">
              Item left {product.quantity}
            </p>
            <p><b>Price: </b> <span className="line-through text-gray">{product.price}</span></p>
            <p className="font-bold">Discount Price: {product.discountPrice}</p>
            <div className="flex items-center py-2 font-bold">
              Quantity : 
              <button onClick={()=>setQuantity(quantity<2?1:quantity-1)} className="btn btn-sm btn-secondary text-white font-bold text-xl mx-5">-</button>
              <p className="border-2 px-2 rounded-lg">{quantity>product.quantity?setQuantity(product.quantity):quantity}</p>
              <button onClick={()=>setQuantity(quantity>product.quantity?product.quantity:quantity+1)}  className="btn btn-sm btn-secondary text-white font-bold text-xl mx-5">+</button>
            </div>
            <p className='bg-blue text-start inline-block px-1 rounded-lg bg-opacity-50 mt-2 tooltip'  data-tip="Cash On Delivery">COD</p>
            <p>
              <b>Product description: </b>
              <br />
              {product.description}
            </p>
            {
              product.quantity===0?<p className="my-5 font-bold text-red">Not Available At This Time</p>:
              <div><button onClick={()=>handleAddToCart()} className="btn btn-primary text-white">Add To Cart</button></div>
            }
            {/* <button onClick={()=>handleAddToCart()} className="btn btn-primary text-white">Add To Cart</button> */}
          </div>
        </div>
        <div className="text-start w-11/12 m-auto space-y-5 my-5 shadow-xl p-3">
          <p className="font-bold">Service</p>
          <div className=" space-y-5 grid grid-cols-1 md:grid-cols-2 items-center  gap-5">
            <div className="flex items-center">
              <RestoreIcon
                color="black"
                style={{ fontSize: "2rem" }}
              ></RestoreIcon>
              <div className="ml-5">
                <p>7 Days Returns</p>
                <p>Change of mind is not applicable</p>
              </div>
            </div>
            <div className="flex items-center">
              <RemoveModeratorIcon
                color="black"
                style={{ fontSize: "2rem" }}
              ></RemoveModeratorIcon>
              <div>
                <p>Warranty not available</p>
              </div>
            </div>
          </div>
          <div>
            <p className="text-gray">Sold by</p>
            <Link to={`/shop/${product.shopSlug}`}>
              <p className="text-2xl my-3">{product.shop}</p>
            </Link>
            <div className="grid grid-cols-3">
              <div>
                <p className="text-gray text-xs my-2">
                  Positive Seller Ratings
                </p>
                <p className="text-2xl">83%</p>
              </div>
              <div className="">
                <p className="text-gray text-xs my-2">Ship on Time</p>
                <p className="text-2xl">97%</p>
              </div>
              <div className="">
                <p className="text-gray text-xs my-2">Chat Response Rate</p>
                <p className="text-2xl">76%</p>
              </div>
            </div>
            <Link to={`/shop/${product.shopSlug}`}><button className="mt-5 w-full text-white btn btn-primary">Visit Store</button></Link>
          </div>
        </div>
      </div>
    );
};

export default ProductDetails;