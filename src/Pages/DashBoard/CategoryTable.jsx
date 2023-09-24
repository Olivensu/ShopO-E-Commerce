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

const CategoryTable = () => {
    const [user, loading,] = useAuthState(auth);
    const [userProduct, setUserProduct] = useState([]);
    // const [userShop, setUserShop] = useState([]);
    const [creatPost, setCreatPost] = useState([]);
    const navigate  = useNavigate();
    
    useEffect(() => {
        axios.get(`${import.meta.env.VITE_BACKEND_URL}/api/category/`)
            .then(res=>{
                setUserProduct(res.data.payload)
            })

      }, [user])
      if(loading){
        return <Loading></Loading>
      }
// console.log(userinfo);
    //   const {name, email,phone,address, image, isSeller,isAdmin} = userinfo;
      

    // const editUsers=(id, email)=>{
    //     axios.put(`${import.meta.env.VITE_BACKEND_URL}/api/users/${id}`)
    //     .then(res=>{
    //         console.log(res);
    //         fetch(`${import.meta.env.VITE_BACKEND_URL}/api/users`)
    //     .then(res=>res.json())
    //     .then(data=> setUserinfo(data.payload.users))
    //         toast.success('User deleted successfully')
    //     })
    // }
    const deleteUsers=(slug)=>{
        axios.delete(`${import.meta.env.VITE_BACKEND_URL}/api/category/${slug}`)
        .then(res=>{
            console.log(res);
            axios.get(`${import.meta.env.VITE_BACKEND_URL}/api/category`)
            .then(res=>{
                setUserProduct(res.data.payload)
            })
            toast.success('category deleted successfully')
        })
    }

    const categoryDetails = slug =>{
        navigate(`/categories/${slug}`)
        // console.log(slug);
        }
        
    return (
        <div>
            <SideBar></SideBar>
            <div className="relative float-left w-[calc(100%-200px)] max-h-screen overflow-auto  bg-slate-50">
                <table className="table table-zebra">
                    {/* head */}
                    <thead>
                      <tr className='text-lg'>
                        <th>Name</th>
                        <th>Slug</th>
                        <th>Action </th>
                      </tr>
                    </thead>
                    <tbody>
                        {
                            userProduct?.map(data=>(<tr  key={data._id}>
                                <th className='cursor-pointer hover:text-primary' onClick={()=>categoryDetails(data.slug)} >{data.name}</th>
                                <th  className='cursor-pointer hover:text-primary' onClick={()=>categoryDetails(data.slug)}>{data.slug}</th>
                                
                                <th>
                                    <IconButton onClick={()=>deleteUsers(data.slug)}
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

export default CategoryTable;