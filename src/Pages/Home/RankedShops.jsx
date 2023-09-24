// import React from 'react';
import { Link } from 'react-router-dom';
import img from '../../img/stars.png'
import Shops from '../Shop/Shops';

const RankedShops = () => {
    return (
        <div  className='shadow-lg shadow-pink my-10 py-4'>
            <div className='flex items-center justify-between px-5 py-2'>
                <div className='flex items-center'>
                <img className='w-8' src={img} alt="" />
                <span className='ml-5 text-xl font-bold'>Top Rated Shops</span>
                </div>
                <Link to='/shop'><button className='inline-block btn btn-secondary text-white'>Show More</button></Link>
            </div>
            <Shops></Shops>
        </div>
    );
};

export default RankedShops;