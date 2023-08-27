import { Box, TextField } from "@mui/material";
import axios from "axios";
import { useState } from "react";
// import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const CreateCategories = () => {
    const [name, setName] = useState('');
    // const navigate = useNavigate();

    const handleSubmit = (e)=>{
        e.preventDefault();
        if(!name){
            return alert("Please enter a name")
        }
        axios.post(`${import.meta.env.VITE_BACKEND_URL}/api/category/create-category`, {name})
    .then(res => {
      console.log(res);
      toast.success("Create a Category Successfully!");
      setName('');
    })
    .catch(err => {
      console.log(err)
      toast.error("Create a Category Failed!")
    })
    }
    return (
        <div>
        <div className='max-w-md m-auto shadow-2xl my-10 py-10 border-2 border-l-yellow border-r-blue border-t-pink border-b-orange rounded-3xl'>
        <p className='text-2xl font-bold mb-5'>Create Categories</p>
        <Box
      // component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '80%' },
      }}
      noValidate
      autoComplete="off"
    >
        <div className=''>
        <TextField
          label="Category"
          type="text"
          variant="standard"
          value={name}
          required
          onChange={(e)=> setName(e.target.value)}
          // style={{ display: 'block', margin: '0 auto', width: '80%' }}
        />
        </div>
        
        <div>
          <button onClick={handleSubmit} className='btn btn-warning w-4/5 mt-5'>Submit</button>
        </div>
    </Box>
        </div>
    </div>
    );
};

export default CreateCategories;