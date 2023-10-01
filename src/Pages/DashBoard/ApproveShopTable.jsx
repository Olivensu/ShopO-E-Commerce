import SideBar from './SideBar';
import { useAuthState, } from 'react-firebase-hooks/auth';
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

const ApproveShopTable = () => {
    const [user, loading,] = useAuthState(auth);
    const [userShop, setUserShop] = useState([]);
    const navigate  = useNavigate();
    
    useEffect(() => {
        axios.get(`${import.meta.env.VITE_BACKEND_URL}/api/shop`)
            .then(res=>{
                setUserShop(res.data.payload)
            })

      }, [user])
      if(loading){
        return <Loading></Loading>
      }

    const handleShow=(slug, show)=>{
      axios.put(`${import.meta.env.VITE_BACKEND_URL}/api/shop/${slug}`,{'isShow': !show})
        .then(res=>{
            console.log(res);
            axios.get(`${import.meta.env.VITE_BACKEND_URL}/api/shop`)
            .then(res=>{
                setUserShop(res.data.payload)
            })
            toast.success('Shop Show successfully')
        })
        .catch(err => {
          console.log(err)
          toast.error("Shop Edited Failed!")
        })
    }

    const deleteUsers=(slug)=>{
        axios.delete(`${import.meta.env.VITE_BACKEND_URL}/api/shop/${slug}`)
        .then(res=>{
            console.log(res);
            axios.get(`${import.meta.env.VITE_BACKEND_URL}/api/shop`)
            .then(res=>{
                setUserShop(res.data.payload)
            })
            toast.success('Shop deleted successfully')
        })
    }

    const handleShopDetails = slug =>{
        navigate(`/shop/${slug}`)
        // console.log(slug);
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
                <th>Zip </th>
                <th>Description </th>
                <th>Approval</th>
                <th>Control </th>
              </tr>
            </thead>
            <tbody>
              {userShop?.map((data) => (
                <tr key={data._id}>
                  {
                    data.isShow=== false?(
                        <>
                        <th>
                    <img
                      className="w-10"
                      src={`${import.meta.env.VITE_BACKEND_URL}/image/users/${
                        data.image
                      }`}
                      alt=""
                    />
                  </th>
                  <th
                    className="cursor-pointer hover:text-primary"
                    onClick={() => handleShopDetails(data.slug)}
                  >
                    {data.name}
                  </th>
                  <th>{data.email}</th>
                  <th>{data.phone}</th>
                  <th>{data.city}</th>
                  <th>{data.zip}</th>
                  <th>{data.description.slice(0, 20)}...</th>
                  <th><button onClick={()=>handleShow(data.slug, data.isShow)} className='btn btn-sm btn-primary text-white'>Approved</button></th>
                  
                  <th className=''>
                   
                    <IconButton
                      onClick={() => deleteUsers(data.slug)}
                      color="secondary"
                      sx={{ p: "" }}
                      aria-label="directions"
                    >
                      <DeleteIcon style={{ fontSize: "2rem" }} />
                    </IconButton>
                  </th>
                        </>
                    ):''
                  }
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
};

export default ApproveShopTable;