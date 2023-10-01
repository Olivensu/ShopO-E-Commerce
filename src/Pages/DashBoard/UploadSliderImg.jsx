import SideBar from './SideBar';
import axios from 'axios';
import { toast } from 'react-toastify';
import Box from '@mui/material/Box';
import { useState } from 'react';

const UploadSliderImg = () => {
    const [image, setImage] = useState('');
    const handleSubmit = (e)=>{
        e.preventDefault();
        if(!image){
            return alert("Please enter a image")
        }
        const formData = new FormData();
          formData.append('image', image);
        axios.post(`${import.meta.env.VITE_BACKEND_URL}/api/event/slider`, formData)
    .then(res => {
      console.log(res);
      toast.success("Add Image Successfully!");
      setImage('');
    })
    .catch(err => {
      console.log(err)
      toast.error("Add Image Failed!")
    })
    }
    return (
        <div>
            <SideBar></SideBar>
            <div className="relative float-left w-[calc(100%-200px)] max-h-screen overflow-auto  bg-slate-50">
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
        </div>
    );
};

export default UploadSliderImg;