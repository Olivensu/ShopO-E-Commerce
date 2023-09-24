// import React from 'react';
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

const UserTable = () => {
    const [user, loading,] = useAuthState(auth);
    const [userinfo, setUserinfo] = useState([]);
    const [name, setName] = useState('');
    const [address, setAddress] = useState('');
    const [phone, setPhone] = useState();
    const [selectedData, setSelectedData] = useState(null);
    
    useEffect(() => {
        fetch(`${import.meta.env.VITE_BACKEND_URL}/api/users`)
        .then(res=>res.json())
        .then(data=> setUserinfo(data.payload.users))

      }, [user])
      if(loading){
        return <Loading></Loading>
      }
console.log(userinfo);
    //   const {name, email,phone,address, image, isSeller,isAdmin} = userinfo;
      

    const handleSubmit=(id)=>{
      const formData = new FormData();
      if(name){
        formData.append('name', name);
      }
      if(phone){
        formData.append('phone', phone);
      }
      if(address){
        formData.append('address', address);
      }

        axios.put(`${import.meta.env.VITE_BACKEND_URL}/api/users/${id}`,formData)
        .then(res=>{
            console.log(res);
            setName('');
            setAddress('');
            setPhone();
            fetch(`${import.meta.env.VITE_BACKEND_URL}/api/users`)
        .then(res=>res.json())
        .then(data=> setUserinfo(data.payload.users))
            toast.success('User Edited successfully')
        })
        .catch(err => {
          console.log(err)
          toast.error("Registration Failed!")
        })
    }
    const deleteUsers=(id)=>{
        axios.delete(`${import.meta.env.VITE_BACKEND_URL}/api/users/${id}`)
        .then(res=>{
            console.log(res);
            fetch(`${import.meta.env.VITE_BACKEND_URL}/api/users`)
        .then(res=>res.json())
        .then(data=> setUserinfo(data.payload.users))
            toast.success('User deleted successfully')
        })
    }
    return (
      <div>
        <SideBar></SideBar>
        <div className="relative float-left w-[calc(100%-200px)] max-h-screen overflow-auto  bg-slate-50">
          <table className="table table-zebra">
            {/* head */}
            <thead>
              <tr className="text-lg">
                <th>Image</th>
                <th>Name</th>
                <th>Email</th>
                <th>Phone </th>
                <th>Address </th>
                <th>Control </th>
              </tr>
            </thead>
            <tbody>
              {userinfo?.map((data) => (
                <tr key={data._id}>
                  <th>
                    <img
                      className="w-10"
                      src={`${import.meta.env.VITE_BACKEND_URL}/image/users/${
                        data.image
                      }`}
                      alt=""
                    />
                  </th>
                  <th>{data.name}</th>
                  <th>{data.email}</th>
                  <th>{data.phone}</th>
                  <th>{data.address.slice(0,20)}...</th>
                  <th>
                    <label onClick={() => {
                      setSelectedData(data);
                      document.getElementById('my_modal_4').showModal()
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
                        <dialog id="my_modal_4" className="modal">
                      <form
                        method="dialog"
                        className="modal-box w-11/12 m-auto max-w-5xl"
                      >
                        <div className="border-2 p-2 w-72 m-auto">
                          <p className="text-red text-lg">Previous Info</p>
                          <p>Name: {selectedData.name}</p>
                          <p>Email: {selectedData.email}</p>
                          <p>Phone: {selectedData.phone}</p>
                          <p>Address: {selectedData.address}</p>
                        </div>
                        <p className="text-xl text-gray-dark my-5">
                          Where to change?
                        </p>
                        <Box
                          component="form"
                          sx={{
                            "& .MuiTextField-root": { m:1, width: "80%" },
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
                              onChange={(e) => setName(e.target.value)}
                              // style={{ display: 'block', margin: '0 auto', width: '80%' }}
                            />
                          </div>
                          <div>
                            <TextField
                              label="phone"
                              type="text"
                              variant="standard"
                              required
                              onChange={(e) => setPhone(e.target.value)}
                            />
                          </div>
                          <div>
                            <TextField
                              label="address"
                              type="text"
                              variant="standard"
                              required
                              onChange={(e) => setAddress(e.target.value)}
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

                    <IconButton
                      onClick={() => deleteUsers(data._id, data.email)}
                      color="secondary"
                      sx={{ p: "" }}
                      aria-label="directions"
                    >
                      <DeleteIcon style={{ fontSize: "2rem" }} />
                    </IconButton>
                  </th>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
};

export default UserTable;