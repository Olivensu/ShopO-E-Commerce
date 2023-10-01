import SideBar from './SideBar';
import { useAuthState, } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import axios from 'axios';
import Loading from '../Shared/Loading';
import { toast } from 'react-toastify';

const WareHouseTable = () => {
    const [user, loading,] = useAuthState(auth);
    const [orderItem,setOrderItem]= useState([])
    
    useEffect(() => {
        axios.get(`${import.meta.env.VITE_BACKEND_URL}/api/order/`)
            .then(res=>{
                console.log(res.data.payload);
                setOrderItem(res.data.payload)
            })

      }, [user])
      if(loading){
        return <Loading></Loading>
      }
// console.log(userinfo);
    //   const {name, email,phone,address, image, isSeller,isAdmin} = userinfo;
    const orderedItem = orderItem?.filter((item, index) => item.status==='WareHouse')
      

    const handleSubmit=(id)=>{

        axios.put(`${import.meta.env.VITE_BACKEND_URL}/api/order/status`,{_id:id, status: 'Shipped'})
        .then(res=>{
            axios.get(`${import.meta.env.VITE_BACKEND_URL}/api/order/`)
            .then(res=>{
                console.log(res.data.payload);
                setOrderItem(res.data.payload)
            })
            toast.success('Ordered Accepted successfully')
        })
        .catch(err => {
          console.log(err)
          toast.error("Ordered Not Accepted")
        })
    }
    return (
        <div>
        <SideBar></SideBar>
        <div className="relative float-left w-[calc(100%-200px)] max-h-screen overflow-auto  bg-slate-50">
          {/* <table className="table table-zebra">
            <thead>
              <tr className="text-lg">
                <th>Image</th>
                <th>Name</th>
                <th>Shop</th>
                <th>Price </th>
                <th>Discount Price </th>
                <th>Shipping </th>
                <th>Quantity </th>
                <th>Action </th>
              </tr>
            </thead>
            <tbody>
            {orderItem?.length === 0 ? (
              <p className="text-xl">No Order Created...</p>
            ) : (
              orderItem?.map((item, index) => (
                <tr key={item._id}>
                    {item?.order?.map((item, index) => (
                        
                    ))}
                </tr>
              )))}
            </tbody>
          </table> */}
          <div className="text-start my-5 shadow-md w-full min-w-[600px] mx-3 m-auto p-1 shadow-orange rounded-xl">
            {orderedItem?.length === 0 ? (
              <p className="text-xl">No Order Here...</p>
            ) : (
                orderedItem?.map((item, index) => (
                <div
                  className="my-3 bg-base-200 p-1 shadow-lg shadow-purple rounded-xl border-2 border-y-orange border-x-pink"
                  key={item._id}
                >
                  {item?.orders?.map((item, index) => (
                    <div
                      className="flex justify-around items-center mb-5"
                      key={item._id}
                    >
                      <div className="flex items-center text-start">
                        <img
                          className="w-20 mx-5 h-20"
                          src={`${
                            import.meta.env.VITE_BACKEND_URL
                          }/image/users/${item.cartItem.image}`}
                          alt=""
                        />
                        <div className="">
                          <p className="font-bold ">{item.cartItem.name}</p>
                          <p className="">{item.cartItem.shop}</p>
                          <p className="text-sm line-through">
                            ৳ {item.cartItem.price}
                          </p>
                          <p className="text-sm font-bold ">
                            ৳ {item.cartItem.discountPrice}
                          </p>
                        </div>
                      </div>
                      <div>
                        <div className="flex flex-col items-center py-2 font-bold">
                          {/* <button onClick={()=>handleQuantityChange(item._id, -1)} className="btn btn-sm btn-secondary text-white font-bold text-xl mx-5">-</button>
                      <p className="border-2 px-2 rounded-lg">{()=>setQuantity(item.quantity)}</p>
                      <p className="border-2 px-2 rounded-lg">{item.quantity}</p>
                      
                      <button onClick={()=>handleQuantityChange(item._id, 1)}  className="btn btn-sm btn-secondary text-white font-bold text-xl mx-5">+</button> */}
                          <p className="border-2 px-2 rounded-lg mb-5">
                            Quantity {item.quantity}
                          </p>
                          {/* <div className="inline-block cursor-pointer" onClick={()=>handleDeleteItem(item._id)}>
                      <DeleteIcon
                                  color="warning"
                                  style={{ fontSize: "2rem" }}
                                ></DeleteIcon>
                      </div> */}
                        </div>
                      </div>
                      {/* Render additional details about the cartItem if needed */}
                    </div>
                  ))}
                  <div className="grid justify-items-center grid-cols-3 gap-5 mt-5">
                    <p className="">
                      <b>Name:</b> {item.name}
                    </p>
                    <p className="">
                      <b>Address:</b> {item.address}
                    </p>
                    <p className="">
                      <b>Phone:</b> {item.phone}
                    </p>
                    <p className=" px-2 ml-10 inline-block rounded-lg">
                      <b>Ordered date:</b> {item.createdAt.slice(0, 11)}
                    </p>
                    <p className=" px-2 ml-10 inline-block rounded-lg">
                      <b>Status:</b> {item.status}
                    </p>
                    <div>
                    <button onClick={()=>handleSubmit(item._id)} className='btn-sm btn-primary rounded-xl'>Accepted</button>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    );
};

export default WareHouseTable;