// import React from 'react';
// import { useEffect, useState } from 'react';
import img1 from '../../img/campaign/deal.png'
import img2 from '../../img/campaign/dealDay.png'
// import axios from 'axios';
// import { Slider } from '@mui/material';
import { Link } from 'react-router-dom';
import Products from './Products';

const DealDay = () => {

    // const [products, setProducts] = useState([])

    // useEffect(() => {
    //     axios.get(`${import.meta.env.VITE_BACKEND_URL}/api/product/`)
    //         .then(res=>{
    //             setProducts(res.data.payload)
    //         })
    //   }, [])
    return (
        <div>
            <div className='bg-gradient-to-r from-blue via-green  to-pink shadow-lg shadow-pink rounded-xl my-10'>
            <div className='flex justify-between items-center px-7'>
            <img className='inline w-28' src={img1} alt="" />
            <img className='inline w-28' src={img2} alt="" />
            <Link to='/products'><button className='inline-block btn'>Show More</button></Link>
            </div>
              <Products></Products>
            </div>
        </div>
    );
};

export default DealDay;