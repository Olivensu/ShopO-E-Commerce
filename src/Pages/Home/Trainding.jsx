// import React from 'react';
import { Link } from 'react-router-dom';
import tranding from '../../img/campaign/trending.png'
import Products from '../Products/Products';

const Trending = () => {
    return (
        <div className='shadow-lg shadow-red my-10'>
            <div className='flex justify-between items-center px-5 my-5'>
            <p className='flex justify-start items-center text-xl'><img src={tranding} alt="" /> <p className='ml-5'> Trending Now</p></p>
                <Link to='/products'><button className='inline-block btn btn-secondary text-white'>Show More</button></Link>
              </div>
            
            <Products></Products>
        </div>
    );
};

export default Trending;