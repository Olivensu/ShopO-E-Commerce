// import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
// import required modules
import { Autoplay, Pagination, Navigation,} from 'swiper/modules';

import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const EventShop = () => {
    const [userShop, setUserShop] = useState([]);
    const navigate  = useNavigate()
    const {eventShop} = useParams()
    useEffect(() => {

        axios.get(`${import.meta.env.VITE_BACKEND_URL}/api/shop`)
            .then(res=>{
                setUserShop(res.data.payload)
            })
      }, [])
      const handleShopDetails = slug =>{
        navigate(`/shop/${slug}`)
        // console.log(slug);
    }

    let filteredShop;
    if(eventShop === 'isFlashSale'){
        filteredShop = userShop?.filter(data=>data.isFlashSale === true)
      }
      else if(eventShop === 'isPopular'){
        filteredShop = userShop?.filter(data=>data.isPopular === true)
      }
    return (
        <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5'>
            {/* <div className="grid md:grid-cols-3 lg:grid-cols-5 grid-cols-1"> */}
                {
                    filteredShop?.map(data=> <div  key={data._id}><div className=" bg-white justify-start items-center w-40 h-48 p-2 rounded-2xl border-x-red border-y-orange m-auto border-2 my-2">
                        <img className="w-24 m-auto" src={`${import.meta.env.VITE_BACKEND_URL}/image/users/${data.image}`} alt="Image Not Found" />
                        <div className="text-start">
                            <p onClick={()=>handleShopDetails(data.slug)} className="overflow-hidden text-center  hover:underline font-bold hover:text-blue cursor-pointer">{data.name.slice(0,18)}...</p>
                            <p className='bg-blue text-start inline-block px-1 rounded-lg bg-opacity-50 mt-2 tooltip'  data-tip="Cash On Delivery">COD</p>
                        </div>

                    </div>
                    </div>
                    )
                }
                {/* </Swiper> */}
        </div>
    );
};

export default EventShop;