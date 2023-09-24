import { useEffect, useState } from 'react';
import axios from 'axios';
import { Slider } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import Box from '@mui/material/Box';
import { Button } from '@mui/material';
// import { Link } from 'react-router-dom';

const TotalProducts = () => {
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [priceRange, setPriceRange] = useState([1, 200000]);

  useEffect(() => {
    // Fetch products and categories data on component mount
    axios.get(`${import.meta.env.VITE_BACKEND_URL}/api/product/`)
      .then((res) => {
        setProducts(res.data.payload);
        console.log(res.data.payload.length);
      });

    axios.get(`${import.meta.env.VITE_BACKEND_URL}/api/category`)
      .then((res) => {
        setCategories(res.data.payload);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const productDetails = (id) => {
    navigate(`/product/${id}`);
  };

  const shopDetails = (slug) => {
    navigate(`/shop/${slug}`);
  };

  function valuetext(value) {
    return `${value}`;
  }

  

//   const currentData = products.slice(startIndex, endIndex);

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };

  const handlePriceRangeChange = (event, newValue) => {
    setPriceRange(newValue);
  };

  const filterProducts = (product) => {
    const categoryFilter = !selectedCategory || product.category === selectedCategory;
    const priceFilter = product.discountPrice >= priceRange[0] && product.discountPrice <= priceRange[1];

    return categoryFilter && priceFilter;
  };

  let filteredProducts = products.filter(filterProducts);
  const ITEMS_PER_PAGE = 8;
  const totalItems = filteredProducts.length;
  console.log(totalItems);
  const totalPages = Math.ceil(totalItems / ITEMS_PER_PAGE);

  let startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const endIndex = Math.min(startIndex + ITEMS_PER_PAGE, totalItems);
//   if(endIndex === 0){
//     startIndex=0
//   }

  return (
    <div className='flex'>
      {/* Category Filter */}
      <div className='text-start ml-5 bg-yellow bg-opacity-30 p-2 w-56 md:block hidden my-5'>
        <p className='text-2xl'>Categories</p>
        <div className="text-start w-full mt-5">
          {categories.map((data) => (
            <li
            //   value={data.slug}
              onClick={() => setSelectedCategory(data.slug)}
              className="block border-2 p-1 m-2 rounded-xl hover:underline cursor-pointer"
              key={data._id}
            >
              {data.name}
            </li>
          ))}
        </div>

        <Box sx={{ width: 200, p: 2 }}>
          <p className='my-3 font-bold text-lg'>Price Range:</p>
          <Slider
            value={priceRange}
            min={1}
            max={200000}
            onChange={handlePriceRangeChange}
            valueLabelDisplay="auto"
            getAriaValueText={valuetext}
            disableSwap
          />
        </Box>
      </div>

      {/* Product Grid */}
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

export default TotalProducts;
