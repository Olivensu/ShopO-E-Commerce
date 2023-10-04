
import img from '../../img/stars.png'
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios';

const RankedShops = () => {
    const [userShop, setUserShop] = useState([]);
  const navigate = useNavigate(); 
  useEffect(() => {
            axios.get(`${import.meta.env.VITE_BACKEND_URL}/api/shop`)
            .then(res=>{
                setUserShop(res.data.payload)
            })

    }, [])
    
    const eventShop = userShop?.filter(shop => shop.isPopular ===true)
    const handleShopDetails = slug =>{
      navigate(`/shop/${slug}`)
      // console.log(slug);
  }
    return (
        <div  className='shadow-lg shadow-pink my-10 py-4'>
            <div className='flex items-center justify-between px-5 py-2'>
                <div className='flex items-center'>
                <img className='w-8' src={img} alt="" />
                <span className='ml-5 text-xl font-bold'>Top Rated Shops</span>
                </div>
                <Link to='/shop/event/isPopular'><button className='inline-block btn btn-secondary text-white'>Show More</button></Link>
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

export default RankedShops;