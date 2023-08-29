// import React from 'react';
import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
const TotalShop = () => {
    const [userShop, setUserShop] = useState([]);
    const navigate  = useNavigate()

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
    return (
        <div>
            <p className="mt-5 text-2xl text-start m-auto w-11/12">Shops</p>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 my-10">
            {
                    userShop.map(data=> <div  key={data._id}><div className="h-52 bg-white justify-start items-center w-48 p-2 rounded-2xl border-x-red border-y-orange m-auto border-2 my-2">
                        <img className="w-32 m-auto" src={`${import.meta.env.VITE_BACKEND_URL}/image/users/${data.image}`} alt="Image Not Found" />
                        <div className="text-start">
                            <p onClick={()=>handleShopDetails(data.slug)} className="overflow-hidden text-lg hover:underline font-bold hover:text-blue cursor-pointer">{data.name}</p>
                        </div>
                    </div></div>)
                }
            </div>
        </div>
    );
};

export default TotalShop;