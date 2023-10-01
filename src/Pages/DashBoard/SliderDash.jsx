import SideBar from './SideBar';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios';
import Loading from '../Shared/Loading';
import DeleteIcon from '@mui/icons-material/Delete';
import IconButton from '@mui/material/IconButton';
import { toast } from 'react-toastify';
import { Link } from 'react-router-dom';

const SliderDash = () => {
    const [user, loading,] = useAuthState(auth);
    const [userProduct, setUserProduct] = useState([]);
    
    useEffect(() => {
        axios.get(`${import.meta.env.VITE_BACKEND_URL}/api/event/slider`)
            .then(res=>{
                setUserProduct(res.data.payload)
            })

      }, [user])
      if(loading){
        return <Loading></Loading>
      }
    const deleteUsers=(id)=>{
        axios.delete(`${import.meta.env.VITE_BACKEND_URL}/api/event/slider/${id}`)
        .then(res=>{
            console.log(res);
            axios.get(`${import.meta.env.VITE_BACKEND_URL}/api/event/slider`)
            .then(res=>{
                setUserProduct(res.data.payload)
            })
            toast.success('Image deleted successfully')
        })
    }
        
    return (
      <div>
        <SideBar></SideBar>
        <div className="relative float-left w-[calc(100%-200px)] max-h-screen overflow-auto  bg-slate-50">
            <div className='float-right mr-5'>
                <Link to='/dashboard/slider-img'><button className='btn btn-primary text-white my-3 btn-sm'>Add Picture</button></Link>
            </div>
          <table className="table table-zebra">
            {/* head */}
            <thead>
              <tr className="text-lg">
                <th>Image</th>
                <th>Name</th>
                <th>Action </th>
              </tr>
            </thead>
            <tbody>
              {userProduct?.map((data) => (
                <tr key={data._id}>
                  <th>
                    <img
                      className="w-28"
                      src={`${import.meta.env.VITE_BACKEND_URL}/image/users/${
                        data.image
                      }`}
                      alt=""
                    />
                  </th>
                  <th className="">{data.image}</th>

                  <th>
                    <IconButton
                      onClick={() => deleteUsers(data._id)}
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

export default SliderDash;