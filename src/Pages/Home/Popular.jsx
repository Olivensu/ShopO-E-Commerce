// import React from 'react';
import WhatshotIcon from '@mui/icons-material/Whatshot';
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios';
import { Slider } from '@mui/material';

const Popular = () => {
  const [products, setProducts] = useState([]);
  const navigate = useNavigate(); 
  useEffect(() => {
          axios.get(`${import.meta.env.VITE_BACKEND_URL}/api/product/`)
            .then(res=>{
                setProducts(res.data.payload)
            })
    }, [])

    const eventProduct = products?.filter(product => product.isPopular ===true)
    const productDetails =(id)=>{
      navigate(`/product/${id}`)
    }
    const shopDetails =(slug)=>{
      navigate(`/shop/${slug}`)
    }
    return (
            <div className='shadow-xl shadow-yellow my-10 '>
              <div className='flex justify-between items-center px-5 my-5'>
                <p className='flex justify-start items-center text-xl'><WhatshotIcon
                      style={{ fontSize: "2.5rem", color: "tomato" }}
                    ></WhatshotIcon><p className='ml-5'> Popular Products</p></p>
                <Link to='/products/isPopular'><button className='inline-block btn btn-secondary text-white'>Show More</button></Link>
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
                        />
                        <p className='text-orange text-sm'>{data.quantity} item left.</p>
                      </p>
                    </div>
                  </div>
                )).slice(0,6)}
              </div>
        </div>
    );
};

export default Popular;