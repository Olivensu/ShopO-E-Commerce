// import React from 'react';

import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Slider } from '@mui/material';
// import Box from '@mui/material/Box';
import { Button } from '@mui/material';

const CategoriesProduct = () => {
    const [products,setProducts] = useState([])
    const [currentPage, setCurrentPage] = useState(1);
    const navigate =  useNavigate();
    useEffect(() => {
        // Fetch products and categories data on component mount
        axios.get(`${import.meta.env.VITE_BACKEND_URL}/api/product/`)
          .then((res) => {
            setProducts(res.data.payload);
          })
          .catch((err) => {
            console.log(err);
          });
      }, []);
      const {category} = useParams();
      console.log(category);

      const filteredProducts = products.filter(product =>product.category === category);
      console.log(filteredProducts);

      const ITEMS_PER_PAGE = 8;
  const totalItems = filteredProducts.length;
  const totalPages = Math.ceil(totalItems / ITEMS_PER_PAGE);

  let startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const endIndex = Math.min(startIndex + ITEMS_PER_PAGE, totalItems);

  //   const currentData = products.slice(startIndex, endIndex);

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };
  const productDetails = (id) => {
    navigate(`/product/${id}`);
  };

  const shopDetails = (slug) => {
    navigate(`/shop/${slug}`);
  };
    return (
        <div>
            <p className="uppercase my-5 font-bold text-xl">{category}</p>
            <div className='w-full'>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {filteredProducts==0?<p className='text-gray-dark text-xl my-10 text-center'>No Products Found</p>:filteredProducts.map((data) => (
            <div
              className="w-48 h-96 p-2 rounded-2xl border-x-red border-y-orange m-auto  bg-white border-2 my-5"
              key={data._id}
            >
              <img
                className="w-36 m-auto "
                src={`${import.meta.env.VITE_BACKEND_URL}/image/users/${data.image}`}
                alt="Image Not Found"
              />
              <div className="text-start">
                <p
                  onClick={() => productDetails(data._id)}
                  className="text-lg font-bold hover:text-blue cursor-pointer"
                >
                  {data.name.split(' ').slice(0, 5).join(' ')}
                </p>
                <p
                  onClick={() => shopDetails(data.shopSlug)}
                  className="my-1 font-bold cursor-pointer hover:underline"
                >
                  {data.shop}
                </p>
                <p className="line-through text-gray">৳ {data.price}</p>
                <p className="font-bold mt-2">৳ {data.discountPrice}</p>
                <p className="flex justify-between items-center w-full">
                  <Slider
                    style={{ width: '50%' }}
                    aria-label="Temperature"
                    defaultValue={70}
                    disabled
                    color="secondary"
                  />
                  <p className='text-orange text-sm'>{data.quantity} item left.</p>
                </p>
              </div>
            </div>
          )).slice(startIndex, endIndex)}
        </div>

        {/* Pagination controls */}
        <div className='my-5'>
          <Button
            variant="outlined"
            color="primary"
            disabled={currentPage === 1}
            onClick={() => handlePageChange(currentPage - 1)}
          >
            Previous
          </Button>
          <span className='font-bold' style={{ margin: '0 10px' }}>
            Page {currentPage} of {totalPages}
          </span>
          <Button
            variant="outlined"
            color="primary"
            disabled={currentPage === totalPages}
            onClick={() => handlePageChange(currentPage + 1)}
          >
            Next
          </Button>
        </div>
      </div>
        </div>
    );
};

export default CategoriesProduct;