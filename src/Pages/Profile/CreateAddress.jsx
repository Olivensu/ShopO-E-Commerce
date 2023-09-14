import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import axios from 'axios';
import { useState } from 'react';
import { useAuthState, useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import Loading from '../Shared/Loading';
const CreateAddress = () => {
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [phone, setPhone] = useState(0);
  const [user] = useAuthState(auth)
  if(!user){
    return <Loading></Loading>
  }
  
  const history = useNavigate();

  const handleSubmit = (e)=>{
    e.preventDefault();
    if(!name || !address || !phone ){
      return alert('Please fill up all the required fields');
    }
    axios.post(`${import.meta.env.VITE_BACKEND_URL}/api/users/new-address`, {name:name,phone:phone,address:address, email:user.email})
    .then(res => {
      console.log(res);
      history('/address-book')
      toast.success("New address created Successfully!")
    })
    .catch(err => {
      console.log(err)
      toast.error("New address creation Failed!")
    })
  }
  return (
    <div>
        <div className='max-w-md m-auto shadow-2xl my-10 py-10 border-2 border-l-yellow border-r-blue border-t-pink border-b-orange rounded-3xl'>
        <p className='text-2xl font-bold mb-5'>New Address</p>
        <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '80%' },
      }}
      noValidate
      autoComplete="off"
    >
        <div>
        <TextField
          label="name"
          type="text"
          variant="standard"
          required
          onChange={(e)=> setName(e.target.value)}
          // style={{ display: 'block', margin: '0 auto', width: '80%' }}
        />
        </div>
        <div>
        <TextField
          label="phone"
          type="text"
          variant="standard"
          required
          onChange={(e)=> setPhone(e.target.value)}
        />
        </div>
        <div>
        <TextField
          label="address"
          type="text"
          variant="standard"
          required
          onChange={(e)=> setAddress(e.target.value)}
        />
        </div>
        
        <div>
          <button onClick={handleSubmit} className='btn btn-warning w-4/5 mt-5'>Submit</button>
        </div>
    </Box>
        </div>
    </div>
    
  )
}

export default CreateAddress