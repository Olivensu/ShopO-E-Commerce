// import FlashSaleCountdown from './FlashSaleCountdown';
// import { useState } from 'react';
import FlashSaleCountdown from './FlashSaleCountdown ';
import flash from '../../img/flash-sale/c8fdb978-acd8-4e5b-9e04-374607ec6705.gif'

import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios';
import { Slider } from '@mui/material';

const FlashSale = () => {
  const [userProduct, setUserProduct] = useState([]);
  const [products, setProducts] = useState([])
  const [userShop, setUserShop] = useState([]);
  const navigate = useNavigate(); 
  useEffect(() => {
      axios.get(`${import.meta.env.VITE_BACKEND_URL}/api/event/flash-sale`)
          .then(res=>{
              setUserProduct(res.data.payload)
          })
          axios.get(`${import.meta.env.VITE_BACKEND_URL}/api/product/`)
            .then(res=>{
                setProducts(res.data.payload)
            })
            axios.get(`${import.meta.env.VITE_BACKEND_URL}/api/shop`)
            .then(res=>{
                setUserShop(res.data.payload)
            })

    }, [])
    
    
    const eventProduct = products?.filter(product => product.isFlashSale ===true)
    const eventShop = userShop?.filter(shop => shop.isFlashSale ===true)
    const handleShopDetails = slug =>{
      navigate(`/shop/${slug}`)
      // console.log(slug);
  }
    const productDetails =(id)=>{
      navigate(`/product/${id}`)
    }
    const shopDetails =(slug)=>{
      navigate(`/shop/${slug}`)
    }
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
            <Link to='/products/isFlashSale'><button className='inline-block btn'>Show More</button></Link>
        </div>
        {/* <Products></Products> */}
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
        <div className='flex justify-between items-center px-5 my-5'>
            <p className='text-white text-xl'>Shops</p>
            <Link to='/shop/event/isFlashSale'><button className='inline-block btn'>Show More</button></Link>
        </div>
        <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5'>
            {/* <div className="grid md:grid-cols-3 lg:grid-cols-5 grid-cols-1"> */}
                {
                    eventShop.map(data=> <div  key={data._id}><div className=" bg-white justify-start items-center w-40 h-48 p-2 rounded-2xl border-x-red border-y-orange m-auto border-2 my-2">
                        <img className="w-24 m-auto" src={`${import.meta.env.VITE_BACKEND_URL}/image/users/${data.image}`} alt="Image Not Found" />
                        <div className="text-start">
                            <p onClick={()=>handleShopDetails(data.slug)} className="overflow-hidden text-center  hover:underline font-bold hover:text-blue cursor-pointer">{data.name.slice(0,18)}...</p>
                            <p className='bg-blue text-start inline-block px-1 rounded-lg bg-opacity-50 mt-2 tooltip'  data-tip="Cash On Delivery">COD</p>
                        </div>

                    </div>
                    </div>
                    ).slice(0,5)
                }
                {/* </Swiper> */}
        </div>
      </div>
    );
  };
  
  export default FlashSale;
