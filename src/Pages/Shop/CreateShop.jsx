import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import axios from 'axios';
import { useState } from 'react';
import {  useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init'
import { toast } from 'react-toastify';
import Loading from '../Shared/Loading';
import { checkPropTypes } from 'prop-types';

const CreateShop = ({shopName}) => {
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [city, setCity] = useState('');
    const [zip, setZip] = useState('');
    const [description, setDescription] = useState('');
    const [image, setImage] = useState('');
    const [user, loading] = useAuthState(auth);
    // console.log(user);
    if (loading) {
        return (<Loading></Loading>);
      }
      console.log(shopName);

    const handleSubmit = (e)=>{
        e.preventDefault();
        setEmail(user?.email)
        console.log(email);
        if(!name || !city || !email || !zip || !description || !phone || !image){
            return alert('Please fill up all the required fields');
          }
          const formData = new FormData();
          formData.append('name', name);
          formData.append('email', email);
          formData.append('city', city);
          formData.append('zip', zip);
          formData.append('phone', phone);
          formData.append('description', description);
          formData.append('image', image);
          console.log(formData);
          
        //   console.log(formData);
          axios.post(`${import.meta.env.VITE_BACKEND_URL}/api/shop/create-shop`, formData)
          .then(res => {
            console.log(res);
            toast.success("Shop Created Successfully!")
            setName(''); setPhone(''); setCity(''); setZip(''); setDescription(''); setImage('');
          })
          .catch(err => {
            console.log(err)
            toast.error("Shop Creation Failed!")
          })
      }
    return (
      <div>
        <div className="max-w-md m-auto shadow-2xl my-10 py-10 border-2 border-l-yellow border-r-blue border-t-pink border-b-orange rounded-3xl">
          <p className="text-2xl font-bold mb-5">Create Shop</p>
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
                label="Shop Name"
                type="text"
                variant="standard"
                value={name}
                required
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="">
              <TextField
                label="Phone Number"
                type="text"
                variant="standard"
                value={phone}
                required
                onChange={(e) => setPhone(e.target.value)}
              />
            </div>
            <div className="">
              <TextField
                label="Address"
                type="text"
                variant="standard"
                value={city}
                required
                onChange={(e) => setCity(e.target.value)}
              />
            </div>
            <div className="">
              <TextField
                label="Zip Code"
                type="text"
                variant="standard"
                value={zip}
                required
                onChange={(e) => setZip(e.target.value)}
              />
            </div>
            <div className="">
              <TextField
                label="Description"
                type="text"
                variant="standard"
                value={description}
                required
                onChange={(e) => setDescription(e.target.value)}
              />
            </div>
            <div className="">
            <input label="image"
          type="file"
          required
          className="file-input file-input-bordered file-input-accent w-4/5 my-3"
          onChange={(e)=> setImage(e.target.files[0])} name="" id="" />
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

CreateShop.propTypes = {
  shopName: checkPropTypes,
};
export default CreateShop;