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

const ShopTable = () => {
    const [user, loading,] = useAuthState(auth);
    const [userShop, setUserShop] = useState([]);
    // const [userShop, setUserShop] = useState([]);
    const [name, setName] = useState('');
    const [city, setCity] = useState('');
  const [phone, setPhone] = useState();
  const [zip, setZip] = useState('');
    const [description, setDescription] = useState('');
    const [image, setImage] = useState('');
    const [selectedData, setSelectedData] = useState(null);
    const navigate  = useNavigate();
    
    useEffect(() => {
        axios.get(`${import.meta.env.VITE_BACKEND_URL}/api/shop`)
            .then(res=>{
                setUserShop(res.data.payload)
            })

      }, [user])
      // useEffect(() => {
      //   // Get a reference to the dialog element
      //   const myModal = document.getElementById('my_modal_3');
        
      //   // Attach showModal method to the dialog element
      //   myModal.showModal = () => myModal.setAttribute('open', 'true');
        
      //   // Optionally, attach closeModal method
      //   myModal.closeModal = () => myModal.removeAttribute('open');
      // }, []);
      if(loading){
        return <Loading></Loading>
      }
// console.log(userinfo);
    //   const {name, email,phone,address, image, isSeller,isAdmin} = userinfo;
      

    const handleSubmit=(slug)=>{
      console.log(slug);
      const formData = new FormData();
      if(name){
        formData.append('name', name);
      }
      if(phone){
        formData.append('phone', phone);
      }
      if(city){
        formData.append('city', city);
      }
      if(zip){
        formData.append('zip', zip);
      }
      if(description){
        formData.append('description', description);
      }
      if(image){
        formData.append('image', image);
      }

        axios.put(`${import.meta.env.VITE_BACKEND_URL}/api/shop/${slug}`,formData)
        .then(res=>{
            console.log(res);
            setName('');
            setCity('');
            setPhone();
            axios.get(`${import.meta.env.VITE_BACKEND_URL}/api/shop`)
            .then(res=>{
                setUserShop(res.data.payload)
            })
            toast.success('Shop deleted successfully')
        })
        .catch(err => {
          console.log(err)
          toast.error("Registration Failed!")
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
                <th>Control </th>
              </tr>
            </thead>
            <tbody>
              {userShop?.map((data) => (
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
                          <p>Email: {selectedData.email}</p>
                          <p>Phone: {selectedData.phone}</p>
                          <p>Address: {selectedData.city}</p>
                          <p>zip: {selectedData.zip}</p>
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
                              onClick={() => handleSubmit(selectedData.slug)}
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
                      onClick={() => deleteUsers(data.slug)}
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

export default ShopTable;