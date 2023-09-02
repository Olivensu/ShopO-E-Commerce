import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import axios from 'axios';
import { useEffect, useState } from 'react';
// import {  useAuthState } from 'react-firebase-hooks/auth';
// import auth from '../../../firebase.init'
import { toast } from 'react-toastify';
import Loading from '../Shared/Loading';
import { Link, useParams } from 'react-router-dom';

const CreateProduct = () => {
    const [name, setName] = useState('');
    const [price, setPrice] = useState('');
    const [discountPrice, setDiscountPrice] = useState('');
    const [shipping, setShipping] = useState('');
    const [quantity, setQuantity] = useState('');
    const [categories, setCategories] = useState('');
    const [category, setCategory] = useState('');
    const [description, setDescription] = useState('');
    const [image, setImage] = useState('');
    const [shop, setShop] = useState('');
    const { shopSlug } = useParams();
    // console.log(shop);


    useEffect(() => {
       axios.get(`${import.meta.env.VITE_BACKEND_URL}/api/category/`)
       .then(res=>{
        setCategories(res.data.payload)
       })
       axios.get(`${import.meta.env.VITE_BACKEND_URL}/api/shop/${shopSlug}`)
            .then(res=>{
                setShop(res.data.payload[0].name)
            })
    }, [])

    if(!categories){
        return <Loading></Loading>
    }
    // console.log(category);

    const handleSubmit = (e)=>{
        e.preventDefault();
        if(!name || !description || !price || !discountPrice || !shipping || !quantity || !category || !image || !shop || !shopSlug){
            return alert('Please fill up all the required fields');
          }
          const formData = new FormData();
          formData.append('name', name);
          formData.append('price', price);
          formData.append('discountPrice', discountPrice);
          formData.append('shipping', shipping);
          formData.append('quantity', quantity);
          formData.append('category', category);
          formData.append('shop', shop);
          formData.append('shopSlug', shopSlug);
          formData.append('description', description);
          formData.append('image', image);
          console.log(formData);
          
        //   console.log(formData);
          axios.post(`${import.meta.env.VITE_BACKEND_URL}/api/product/create-product`, formData)
          .then(res => {
            console.log(res);
            toast.success("Shop Created Successfully!")
            setName(''); setCategory(''); setPrice(''); setDiscountPrice(''); setShipping(''); setQuantity('');  setDescription(''); setImage('');
          })
          .catch(err => {
            console.log(err)
            toast.error("Shop Creation Failed!")
          })
      }
    //   console.log(categories);
    return (
      <div>
        <Link to={`/shop/${shopSlug}`}><p className='mt-5 text-xl font-bold text-orange text-end w-11/12'>Return To Shop</p></Link>
        <div className="max-w-md m-auto shadow-2xl my-10 py-10 border-2 border-l-yellow border-r-blue border-t-pink border-b-orange rounded-3xl">
          <p className="text-2xl font-bold mb-5">Create Product</p>
          <Box
            component="form"
            sx={{
              "& .MuiTextField-root": { m: 1, width: "80%" },
            }}
            noValidate
            autoComplete="off"
          >
            <div className="">
              <TextField
                label="Product Name"
                type="text"
                variant="standard"
                value={name}
                required
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="">
              <select
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                className="select select-bordered w-4/5"
              >
                <option className='text-lg' value="">Select a category</option>
                {categories.map((category, index) => (
                  <option
                    key={category._id}
                    value={category.slug}
                    className="bg-white text-gray-800 text-lg"
                  >
                    {category.name}
                  </option>
                ))}
              </select>
            </div>
            <div className="">
              <TextField
                label="Price"
                type="text"
                variant="standard"
                value={price}
                required
                onChange={(e) => setPrice(e.target.value)}
              />
            </div>
            <div className="">
              <TextField
                label="Discount Price"
                type="text"
                variant="standard"
                value={discountPrice}
                required
                onChange={(e) => setDiscountPrice(e.target.value)}
              />
            </div>
            <div className="">
              <TextField
                label="Shipping"
                type="text"
                variant="standard"
                value={shipping}
                required
                onChange={(e) => setShipping(e.target.value)}
              />
            </div>
            <div className="">
              <TextField
                label="Quantity"
                type="text"
                variant="standard"
                value={quantity}
                required
                onChange={(e) => setQuantity(e.target.value)}
              />
            </div>
            <div className="">
              <TextField
                label="Description"
                type="text"
                multiline
                rows={4}
                variant="standard"
                value={description}
                required
                onChange={(e) => setDescription(e.target.value)}
              />
            </div>
            <div className="">
              <input
                label="image"
                type="file"
                required
                className="file-input file-input-bordered file-input-accent w-4/5 my-3"
                onChange={(e) => setImage(e.target.files[0])}
                name=""
                id=""
              />
            </div>

            <div>
              <button
                onClick={handleSubmit}
                className="btn btn-warning w-4/5 mt-5"
              >
                Submit
              </button>
            </div>
          </Box>
        </div>
      </div>
    );
};

export default CreateProduct;