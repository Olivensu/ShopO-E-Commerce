// import React from 'react';

import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";

const Categories = () => {
    const [categories, setCategories] =  useState([]);
    useEffect(() => {
        axios
          .get(`${import.meta.env.VITE_BACKEND_URL}/api/category`)
          .then((res) => {
            setCategories(res.data.payload)
          })
          .catch((err) => {
            console.log(err);
          });
    },[])

    
    return (
        <div className="w-11/12 m-auto my-12">
            <p className="text-start text-2xl font-bold">Categories</p>
            <div className="text-start w-full mt-5">
            {
                categories.map(data=><Link to={`/categories/${data.slug}`}  key={data._id}><p className="inline-block border-2 p-3 m-2 rounded-xl hover:underline cursor-pointer">{data.name}</p></Link>)
            }
            </div>
        </div>
    );
};

export default Categories;