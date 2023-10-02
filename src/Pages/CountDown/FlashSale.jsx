// import FlashSaleCountdown from './FlashSaleCountdown';
// import { useState } from 'react';
import FlashSaleCountdown from './FlashSaleCountdown ';
import flash from '../../img/flash-sale/c8fdb978-acd8-4e5b-9e04-374607ec6705.gif'
import Products from '../Products/Products';
import { Link } from 'react-router-dom';
import Shops from '../Shop/Shops';
import { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios';

const FlashSale = () => {
  const [userProduct, setUserProduct] = useState([]);
    
  useEffect(() => {
      axios.get(`${import.meta.env.VITE_BACKEND_URL}/api/event/flash-sale`)
          .then(res=>{
              setUserProduct(res.data.payload)
          })

    }, [])
  
    return (
      <div className='bg-black pb-5 rounded-xl my-16'>
          <div className=''>
            <div>
                <img className='w-full rounded-xl' src={`${import.meta.env.VITE_BACKEND_URL}/image/users/${
                        userProduct[0]?.image
                      }`} alt="" />
            </div>
            {/* <h2>Flash Sale Ending In:</h2> */}
            {/* <FlashSaleCountdown targetDate={targetDate} /> */}
          </div>
        <div className='flex justify-between items-center px-5 my-5'>
            <p className='text-white text-xl'>Products</p>
            <Link to='/products'><button className='inline-block btn'>Show More</button></Link>
        </div>
        <Products></Products>
        <div className='flex justify-between items-center px-5 my-5'>
            <p className='text-white text-xl'>Shops</p>
            <Link to='/shop'><button className='inline-block btn'>Show More</button></Link>
        </div>
        <Shops></Shops>
      </div>
    );
  };
  
  export default FlashSale;
