// import React from 'react';

import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import Loading from "../Shared/Loading";
import { Slider } from "@mui/material";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../../firebase.init";

const ShopDetails = () => {
    const { slug } = useParams();
    const [user] = useAuthState(auth);
    // console.log(slug);
    const [shop, setShop] = useState([]);
    const [products, setProducts] = useState([]);
    // console.log(products);
    const navigate = useNavigate();

    useEffect(()=>{
        axios.get(`${import.meta.env.VITE_BACKEND_URL}/api/shop/${slug}`)
            .then(res=>{
                setShop(res.data.payload[0])
            })
        axios.get(`${import.meta.env.VITE_BACKEND_URL}/api/product/shop/${slug}`)
            .then(res=>{
                setProducts(res.data.payload.products)
            })

    },[])
    const shopName = shop.slug;

    if(!products && !user){
        return <Loading></Loading>
    }
    const productDetails =(id)=>{
      navigate(`/product/${id}`)
    }
    // console.log(shop)

//     const details = data.find((c) => c.id === slug);
//   console.log(details);
//   const { id, name, img, lecture, time, price, course } = details;
    return (
      <div>
        <p className="text-3xl font-bold mt-5">Welcome to {shop.name}</p>
        <div className="flex p-2 w-11/12 rounded-2xl border-x-red border-y-orange m-auto border-2 shadow-lg shadow-gray my-10">
          <img
            className="w-32 my-3 rounded-full"
            src={`${import.meta.env.VITE_BACKEND_URL}/image/users/${
              shop.image
            }`}
            alt="Image Not Found"
          />
          <div className="text-start">
            <p className=" text-xl font-bold my-1">
              Name: {shop.name}
            </p>
            <p className=" text-lg my-1">Email: {shop.email}</p>
            <p className=" text-lg my-1">Phone: {shop.phone}</p>
            <p className=" text-lg my-1">Address: {shop.city}</p>
            <p className=" text-lg my-1">Zip: {shop.zip}</p>
            <p className='bg-blue text-start inline-block px-1 rounded-lg bg-opacity-50 mt-2 tooltip'  data-tip="Cash On Delivery">COD</p>
          </div>
        </div>
        <div>
          {products.length === 0 ? (
            <div className="text-xl">There is no Products Uploaded</div>
          ) : (
            ""
          )}
          {
            user?.email===shop?.email?<Link to={`/create-product/${shopName}`}>
            <span className="text-xl text-orange font-bold inline-block text-end my-5">
              + Add a Product
            </span>
          </Link>:''
          }
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4">
            {products.map((data) => (
              <div
                className="w-64 p-2 rounded-2xl border-x-red border-y-orange m-auto border-2 shadow-lg shadow-blue my-10"
                key={data._id}
              >
                <img
                  className="w-36 m-auto"
                  src={`${import.meta.env.VITE_BACKEND_URL}/image/users/${
                    data.image
                  }`}
                  alt="Image Not Found"
                />
                <div className="text-start">
                  <p  onClick={()=>productDetails(data._id)} className="text-xl font-bold hover:text-blue cursor-pointer">
                    {data.name}
                  </p>
                  <p className="py-1">
                    {data.description.split(" ").slice(0, 20).join(" ")}
                  </p>
                  <p className="my-1 font-bold">{data.shop}</p>
                  <p className="line-through text-gray">৳ {data.price}</p>
                  <p className="font-bold mt-2">৳ {data.discountPrice}</p>
                  <p className="flex justify-between items-center w-full">
                    <Slider
                      style={{ width: "60%" }}
                      aria-label="Temperature"
                      defaultValue={70}
                      disabled
                      color="secondary"
                    />{" "}
                    <p>{data.quantity} item left.</p>
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
};

export default ShopDetails;