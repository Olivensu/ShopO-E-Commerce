// import React from 'react';
import { useEffect, useState } from 'react';
import img1 from '../../img/campaign/deal.png'
import img2 from '../../img/campaign/dealDay.png'
import axios from 'axios';
import { Slider } from '@mui/material';
import { Link } from 'react-router-dom';

const DealDay = () => {

    const [products, setProducts] = useState([])

    useEffect(() => {
        axios.get(`${import.meta.env.VITE_BACKEND_URL}/api/product/`)
            .then(res=>{
                setProducts(res.data.payload)
            })
      }, [])
    return (
        <div>
            <div className='bg-gradient-to-r from-blue via-green  to-pink rounded-xl my-10'>
            <div className='flex justify-between items-center px-7'>
            <img className='inline w-28' src={img1} alt="" />
            <img className='inline w-28' src={img2} alt="" />
            <Link to='/products'><button className='inline-block btn'>Show More</button></Link>
            </div>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
                {products.map((data) => (
                  <div
                    className="w-48 p-2 rounded-2xl border-x-red border-y-orange m-auto  bg-white border-2 my-5"
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
                      <p className="text-lg font-bold hover:text-blue cursor-pointer">
                        {data.name.split(' ').slice(0,5).join(' ')}
                      </p>
                      <p className="my-1 font-bold">{data.shop}</p>
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
                )).slice(0,5)}
              </div>
            </div>
        </div>
    );
};

export default DealDay;