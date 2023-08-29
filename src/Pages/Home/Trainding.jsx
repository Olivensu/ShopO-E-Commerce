// import React from 'react';
import tranding from '../../img/campaign/trending.png'
import Products from '../Products/Products';

const Trending = () => {
    return (
        <div className='shadow-xl my-10 p-5'>
            <p className='flex justify-start items-center text-xl'><img src={tranding} alt="" /> <p className='ml-5'> Trending Now</p></p>
            <Products></Products>
        </div>
    );
};

export default Trending;