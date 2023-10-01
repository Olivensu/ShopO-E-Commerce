import SideBar from './SideBar';
import { useAuthState, } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useEffect } from 'react';
import axios from 'axios';
import Loading from '../Shared/Loading';
import { toast } from 'react-toastify';

const Invoice = () => {
    const [user, loading,] = useAuthState(auth);
    const [orderItem,setOrderItem]= useState([])
    const { id } = useParams();
    const navigate = useNavigate();
    
    useEffect(() => {
        axios.get(`${import.meta.env.VITE_BACKEND_URL}/api/order/${id}`)
            .then(res=>{
                console.log(res.data.payload);
                setOrderItem(res.data.payload)
                setTimeout(() => {
                    window.print();
                    navigate(-1)
                }, 1000);
            })

      }, [user])
      if(loading){
        return <Loading></Loading>
      }
    return (
        <div  className="w-full print:w-full p-1 pt-2">
        <div>
          <div className="text-start my-5 shadow-md w-full min-w-[600px] mx-3 m-auto p-1 shadow-orange rounded-xl">
            {!orderItem ? (
              <p className="text-xl">No Order Here...</p>
            ) : (
                <div
                  className="my-3 bg-base-200 p-1 shadow-lg shadow-purple rounded-xl border-2 border-y-orange border-x-pink"
                >
                  {orderItem?.orders?.map((item, index) => (
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
                            Quantity {orderItem.quantity}
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
                      <b>Name:</b> {orderItem.name}
                    </p>
                    <p className="">
                      <b>Address:</b> {orderItem.address}
                    </p>
                    <p className="">
                      <b>Phone:</b> {orderItem.phone}
                    </p>
                    <p className=" px-2 ml-10 inline-block rounded-lg">
                      <b>Ordered date:</b> {orderItem.createdAt}
                    </p>
                    <p className=" px-2 ml-10 inline-block rounded-lg">
                      <b>Status:</b> {orderItem.status}
                    </p>
                  </div>
                </div>
              )
            }
          </div>
        </div>
      </div>
    );
};

export default Invoice;