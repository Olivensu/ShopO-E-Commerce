// import React from 'react';
import { useEffect, useState } from 'react';
import img1 from '../../img/campaign/deal.png'
import img2 from '../../img/campaign/dealDay.png'
import { Slider } from '@mui/material';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';

const DealDay = () => {
    const navigate = useNavigate(); 
    const [products, setProducts] = useState([])
      
    useEffect(() => {
        axios.get(`${import.meta.env.VITE_BACKEND_URL}/api/product/`)
            .then(res=>{
                setProducts(res.data.payload)
            })
      }, [])
      const productDetails =(id)=>{
        navigate(`/product/${id}`)
      }
      const shopDetails =(slug)=>{
        navigate(`/shop/${slug}`)
      }
        const eventProduct = products?.filter(product => product.isDealDay ===true)
      
    return (
        <div>
            <div className='bg-gradient-to-r from-blue via-green  to-pink shadow-lg shadow-pink rounded-xl my-10'>
            <div className='flex justify-between items-center px-7'>
            <img className='inline w-28' src={img1} alt="" />
            <img className='inline w-28' src={img2} alt="" />
            <Link to='/products/isDealDay'><button className='inline-block btn'>Show More</button></Link>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6">
                {eventProduct?.map((data) => (
                  <div
                    className="w-40 p-2 rounded-2xl border-x-red border-y-orange m-auto  bg-white border-2 my-5"
                    key={data._id}
                  >
                    <img
                      className="w-36 m-auto "
                      src={`${import.meta.env.VITE_BACKEND_URL}/image/users/${
                        data.image
                      }`}
                      alt="Image Not Found"
                    />
                    <div className="text-start">
                      <p onClick={()=>productDetails(data._id)} className="text-md font-bold hover:text-blue cursor-pointer">
                        {data.name.split(' ').slice(0,4).join(' ')} ...
                      </p>
                      <p onClick={()=>shopDetails(data.shopSlug)} className="my-1 text-sm font-bold cursor-pointer hover:underline">{data.shop}</p>
                      <p className="line-through text-gray">৳ {data.price}</p>
                      <p className="font-bold mt-2">৳ {data.discountPrice}</p>
                      <p className="flex justify-between items-center w-full">
                        <Slider
                          style={{ width: "50%" }}
                          aria-label="Temperature"
                          defaultValue={70}
                          disabled
                          color="secondary"
                        />{" "}
                        <p className='text-orange text-sm'>{data.quantity} item left.</p>
                      </p>
                    </div>
                  </div>
                )).slice(0,6)}
              </div>
        </div></div>
    );
};

export default DealDay;