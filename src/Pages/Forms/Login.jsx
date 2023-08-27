import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import axios from 'axios';
import { useState } from 'react';
import {  useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [
    signInWithEmailAndPassword,
    user,
    loading,
    errors,
  ] = useSignInWithEmailAndPassword(auth);
  const history = useNavigate();
  if (user) {
    history('/')
  }
  if (loading) {
    return <p>Loading...</p>;
  }
  const handleSubmit = (e)=>{
    e.preventDefault();
    if(!email || !password){
      setError('Please fill up all the required fields');
      return alert('Please fill up all the required fields');
    }
    signInWithEmailAndPassword(email, password)

    axios.post(`${import.meta.env.VITE_BACKEND_URL}/api/auth/login`, {email,password})
    .then(res => {
      console.log(res);
      toast.success("Signed in Successfully!")
    })
    .catch(err => {
      console.log(err)
      toast.error("Signed in Failed!")
    })
  }
  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };
  return (
    <div>
        <div className='max-w-md m-auto shadow-2xl my-10 py-10 border-2 border-l-yellow border-r-blue border-t-pink border-b-orange rounded-3xl'>
        <p className='text-2xl font-bold mb-5'>Login</p>
        <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '80%' },
      }}
      noValidate
      autoComplete="off"
    >
        <div className=''>
        <TextField
          label="email"
          type="text"
          variant="standard"
          required
          onChange={(e)=> setEmail(e.target.value)}
          // style={{ display: 'block', margin: '0 auto', width: '80%' }}
        />
        </div>
        
        <div className='flex m-auto w-4/5'>
        <TextField
          label="password"
          type={showPassword ? 'text' : 'password'}
          variant="standard"
          required
          onChange={(e)=> setPassword(e.target.value)}
        />
        <button className='btn mt-5 ' type="button" onClick={handleShowPassword}>
                {showPassword ? <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
  <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
</svg>

 : <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
 <path strokeLinecap="round" strokeLinejoin="round" d="M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.242 4.242L9.88 9.88" />
</svg>
}
              </button>
        </div>
        
        <p className='text-red'>{error} {errors?.message}</p>
        
        <div>
          <button onClick={handleSubmit} className='btn btn-warning w-4/5 mt-5'>Submit</button>
        </div>
    </Box>
    <p className='mt-5'>Do not have an account?<Link to='/register' className='text-gray ml-4'>Sign Up</Link></p>
        </div>
    </div>
    
  )
}

export default Login