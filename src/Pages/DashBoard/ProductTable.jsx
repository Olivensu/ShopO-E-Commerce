import SideBar from './SideBar';
import { useAuthState, useDeleteUser } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import axios from 'axios';
import Loading from '../Shared/Loading';
import DeleteIcon from '@mui/icons-material/Delete';
import IconButton from '@mui/material/IconButton';
import EditIcon from '@mui/icons-material/Edit';
import { toast } from 'react-toastify';
import { Box, TextField } from '@mui/material';

const ProductTable = () => {
    const [user, loading,] = useAuthState(auth);
    const [userProduct, setUserProduct] = useState([]);
    const [name, setName] = useState('');
    const [price, setPrice] = useState();
  const [discountPrice, setDiscountPrice] = useState();
  const [shipping, setShipping] = useState('');
  const [quantity, setQuantity] = useState('');
    const [description, setDescription] = useState('');
    const [image, setImage] = useState('');
    const [selectedData, setSelectedData] = useState(null);
    const [categories, setCategories] = useState('');
    const [category, setCategory] = useState('');
    const navigate  = useNavigate();
    
    useEffect(() => {
        axios.get(`${import.meta.env.VITE_BACKEND_URL}/api/product/`)
            .then(res=>{
                setUserProduct(res.data.payload)
            })
            axios.get(`${import.meta.env.VITE_BACKEND_URL}/api/category/`)
       .then(res=>{
        setCategories(res.data.payload)
       })

      }, [user])
      if(loading){
        return <Loading></Loading>
      }
// console.log(userinfo);
    //   const {name, email,phone,address, image, isSeller,isAdmin} = userinfo;
      

    const handleSubmit=(id)=>{
      const formData = new FormData();
      if(name){
        formData.append('name', name);
      }
      if(price){
        formData.append('price', price);
      }
      if(discountPrice){
        formData.append('discountPrice', discountPrice);
      }
      if(shipping){
        formData.append('shipping', shipping);
      }
      if(quantity){
        formData.append('quantity', quantity);
      }
      if(category){
        formData.append('category', category);
      }
      if(description){
        formData.append('description', description);
      }
      if(image){
        formData.append('image', image);
      }

        axios.put(`${import.meta.env.VITE_BACKEND_URL}/api/product/${id}`,formData)
        .then(res=>{
            console.log(res);
            setName('');
            setPrice();
            setDiscountPrice();
            setShipping();
            setQuantity();
            setCategory('');
            setImage('');
            setDescription('');
            axios.get(`${import.meta.env.VITE_BACKEND_URL}/api/product`)
            .then(res=>{
              setUserProduct(res.data.payload)
            })
            toast.success('Product Edited successfully')
        })
        .catch(err => {
          console.log(err)
          toast.error("Product Edited Failed!")
        })
    }

    const handleAvailable=(id, show)=>{
      axios.put(`${import.meta.env.VITE_BACKEND_URL}/api/product/${id}`,{'isAvailable': !show})
        .then(res=>{
            console.log(res);
            axios.get(`${import.meta.env.VITE_BACKEND_URL}/api/product`)
            .then(res=>{
              setUserProduct(res.data.payload)
            })
            toast.success('Product Available successfully')
        })
        .catch(err => {
          console.log(err)
          toast.error("Product Edited Failed!")
        })
    }

    const handleFlashSale=(id, show)=>{
      axios.put(`${import.meta.env.VITE_BACKEND_URL}/api/product/${id}`,{'isFlashSale': !show})
        .then(res=>{
            console.log(res);
            axios.get(`${import.meta.env.VITE_BACKEND_URL}/api/product`)
            .then(res=>{
              setUserProduct(res.data.payload)
            })
            toast.success('Product FlashSale successfully')
        })
        .catch(err => {
          console.log(err)
          toast.error("Product Edited Failed!")
        })
    }

    const handleTrending=(id, show)=>{
      axios.put(`${import.meta.env.VITE_BACKEND_URL}/api/product/${id}`,{'isTrending': !show})
        .then(res=>{
            console.log(res);
            axios.get(`${import.meta.env.VITE_BACKEND_URL}/api/product`)
            .then(res=>{
              setUserProduct(res.data.payload)
            })
            toast.success('Product Trending successfully')
        })
        .catch(err => {
          console.log(err)
          toast.error("Product Edited Failed!")
        })
    }

    const handleDealDay=(id, show)=>{
      axios.put(`${import.meta.env.VITE_BACKEND_URL}/api/product/${id}`,{'isDealDay': !show})
        .then(res=>{
            console.log(res);
            axios.get(`${import.meta.env.VITE_BACKEND_URL}/api/product`)
            .then(res=>{
              setUserProduct(res.data.payload)
            })
            toast.success('Product DealDay successfully')
        })
        .catch(err => {
          console.log(err)
          toast.error("Product Edited Failed!")
        })
    }

    const handlePopular=(id, show)=>{
      axios.put(`${import.meta.env.VITE_BACKEND_URL}/api/product/${id}`,{'isPopular': !show})
        .then(res=>{
            console.log(res);
            axios.get(`${import.meta.env.VITE_BACKEND_URL}/api/product`)
            .then(res=>{
              setUserProduct(res.data.payload)
            })
            toast.success('Product Popular successfully')
        })
        .catch(err => {
          console.log(err)
          toast.error("Product Edited Failed!")
        })
    }

    const deleteUsers=(id)=>{
        axios.delete(`${import.meta.env.VITE_BACKEND_URL}/api/product/${id}`)
        .then(res=>{
            console.log(res);
            axios.get(`${import.meta.env.VITE_BACKEND_URL}/api/product`)
            .then(res=>{
                setUserProduct(res.data.payload)
            })
            toast.success('Product deleted successfully')
        })
    }

    const shopDetails = slug =>{
        navigate(`/shop/${slug}`)
        // console.log(slug);
        }
        const productDetails =(id)=>{
            navigate(`/product/${id}`)
          }
    return (
        <div>
            <SideBar></SideBar>
            <div className="relative float-left w-[calc(100%-200px)] max-h-screen overflow-auto  bg-slate-50">
                <table className="table table-zebra">
                    {/* head */}
                    <thead>
                      <tr className='text-lg'>
                        <th>Image</th>
                        <th>Name</th>
                        <th>Shop</th>
                        <th>Price </th>
                        <th>Discount Price </th>
                        <th>Shipping </th>
                        <th>Quantity </th>
                        <th>Available</th>
                        <th>FlashSale </th>
                        <th>Trending </th>
                        <th>Deal Day </th>
                        <th>Popular</th>
                        <th>Action </th>
                      </tr>
                    </thead>
                    <tbody>
                        {
                            userProduct?.map(data=>(<tr  key={data._id}>
                                <th><img className='w-10' src={`${import.meta.env.VITE_BACKEND_URL}/image/users/${data.image}`} alt="" /></th>
                                <th className='cursor-pointer hover:text-primary'  onClick={()=>productDetails(data._id)}>{data.name.slice(0,20)}...</th>
                                <th  className='cursor-pointer hover:text-primary' onClick={()=>shopDetails(data.shopSlug)}>{data.shop}</th>
                                <th>{data.price}</th>
                                <th>{data.discountPrice}</th>
                                <th>{data.shipping}</th>
                                <th>{data.quantity}</th>
                                <th>{data.isAvailable?<input onClick={()=>handleAvailable(data._id, data.isAvailable)} type="checkbox" className="toggle toggle-success" checked />:<input type="checkbox"  onClick={()=>handleAvailable(data._id, data.isAvailable)} className="toggle toggle-success"  />}</th>
                                <th>{data.isFlashSale?<input onClick={()=>handleFlashSale(data._id, data.isFlashSale)} type="checkbox" className="toggle toggle-success" checked />:<input type="checkbox"  onClick={()=>handleFlashSale(data._id, data.isFlashSale)} className="toggle toggle-success"  />}</th>
                                <th>{data.isTrending?<input onClick={()=>handleTrending(data._id, data.isTrending)} type="checkbox" className="toggle toggle-success" checked />:<input type="checkbox"  onClick={()=>handleTrending(data._id, data.isTrending)} className="toggle toggle-success"  />}</th>
                                <th>{data.isDealDay?<input onClick={()=>handleDealDay(data._id, data.isDealDay)} type="checkbox" className="toggle toggle-success" checked />:<input type="checkbox"  onClick={()=>handleDealDay(data._id, data.isDealDay)} className="toggle toggle-success"  />}</th>
                                <th>{data.isPopular?<input onClick={()=>handlePopular(data._id, data.isPopular)} type="checkbox" className="toggle toggle-success" checked />:<input type="checkbox"  onClick={()=>handlePopular(data._id, data.isPopular)} className="toggle toggle-success"  />}</th>
                  
                                <th>
                                <label onClick={()=>{
                      setSelectedData(data);
                      document.getElementById('my_modal_5').showModal()
                    }}>
                      <IconButton
                        // onClick={()=>editUsers(data._id, data.email, )}
                        color="secondary"
                        sx={{ p: "" }}
                        aria-label="directions"
                      >
                        <EditIcon style={{ fontSize: "2rem" }} />
                      </IconButton>
                    </label>

                    {
                      selectedData && (
                        <dialog id="my_modal_5" className="modal" open={false}>
                      <form
                        method="dialog"
                        className="modal-box w-11/12 m-auto max-w-5xl"
                      >
                        <div className="border-2 p-2 w-72 m-auto">
                          <p className="text-red text-lg">Previous Info</p>
                          <p>Name: {selectedData.name}</p>
                          <p>Price: {selectedData.price}</p>
                          <p>DiscountPrice: {selectedData.discountPrice}</p>
                          <p>Shipping: {selectedData.shipping}</p>
                          <p>Quantity: {selectedData.quantity}</p>
                          <p>Category: {selectedData.category}</p>
                          <p>Description: {selectedData.description.slice(0,30)}...</p>
                        </div>
                        <p className="text-xl text-gray-dark my-5">
                          Where to change?
                        </p>
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
                        </Box>
                        <div>
                          <br />
                          <br />
                        </div>
                        <div>
                          <div className="modal-action">
                            {/* if there is a button, it will close the modal */}
                            <button
                              className="btn w-1/2 btn-success text-white"
                              onClick={() => handleSubmit(selectedData._id)}
                            >
                              Confirm
                            </button>
                            <button className="btn w-1/2 btn-accent">
                              Close
                            </button>
                          </div>
                        </div>
                      </form>
                    </dialog>
                      )
                    }
                                    <IconButton onClick={()=>deleteUsers(data._id)}
                                    color="secondary"
                                    sx={{ p: "" }}
                                    aria-label="directions"
                                >
                                        <DeleteIcon style={{ fontSize: "2rem" }} />
                                    </IconButton>
                                </th>
                              </tr>))
                        }
                    </tbody>
                  </table>
            </div>
        </div>
    );
};

export default ProductTable;