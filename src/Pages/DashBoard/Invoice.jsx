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
                }, 500);
            })

      }, [user])
      if(loading){
        return <Loading></Loading>
      }
      const price = orderItem?.orders?.reduce((acc, item) =>{
        const itemPrice = item.cartItem.discountPrice*item.cartItem.quantity;
        const itemTotal = itemPrice + item.cartItem.shipping;
        return  acc+itemTotal
      },0)
    return (
      <div className="w-full print:w-full p-5 pt-2">
        <div className="text-right">
          <p>ShopO Limited</p>
          <p>
            House 10 (4th Floor), Main Road, Block C,
            <br /> Banasree, Rampura, Dhaka 1219
          </p>
        </div>
        <div>
          <p className="bg-gray my-5 py-1 text-xl font-bold bg-opacity-50 rounded-xl">
            SALES INVOICE
          </p>
          <div className="text-start my-5 shadow-md w-full min-w-[600px] m-auto p-1 shadow-orange rounded-xl">
            {!orderItem ? (
              <p className="text-xl">No Order Here...</p>
            ) : (
              <div className="">
                <div className="p-3">
                  <div className="grid grid-cols-2 ">
                    <div className="space-y-2">
                      <p>
                        <b>Billing Address</b>
                      </p>
                      <p className="">
                        <b>Name:</b> {orderItem.name}
                      </p>
                      <p className="">
                        <b>Address:</b> {orderItem.address}
                      </p>
                      <p className="">
                        <b>Phone:</b> {orderItem.phone}
                      </p>
                    </div>
                    <div className="space-y-2">
                      <p className=" px-2 ml-10  rounded-lg">
                        <b>Invoice No:</b> {orderItem._id}
                      </p>
                      <p className=" px-2 ml-10  rounded-lg">
                        <b>Invoice date:</b> {Date().slice(0, 16)}
                      </p>
                      <p className=" px-2 ml-10  rounded-lg">
                        <b>Ordered date:</b> {orderItem.createdAt}
                      </p>
                    </div>
                  </div>
                  <table className="table table-zebra my-8 w-full">
                    {/* head */}
                    <thead className="bg-black">
                      <tr className=" text-white">
                        <th>Item ID</th>
                        <th>Name</th>
                        <th>Qty</th>
                        <th>Price</th>
                        <th>Shipping</th>
                        <th>Total Price</th>
                      </tr>
                    </thead>
                    <tbody >
                      {orderItem?.orders?.map((data) => (
                        <tr key={data._id}>
                          <th className="text-sm">{data.cartItem._id}</th>
                          <th className="">{data.cartItem.name}</th>
                          <th className="">{data.cartItem.quantity}</th>
                          <th className="">Tk-{data.cartItem.discountPrice}</th>
                          <th className="">Tk-{data.cartItem.shipping}</th>
                          <th className="">
                            Tk-
                            {(data.cartItem.quantity *
                              data.cartItem.discountPrice) + data.cartItem.shipping}
                          </th>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                  <div className='flex justify-end px-5 text-lg'>
                    <p className=""><b>Total Price:</b></p>
                    <p className="ml-5">TK-{price}</p>
                  </div>
                  <div className="py-5 text-start space-y-2">
                    <p>* Total charges for this shipment include prepaid custom duties and other taxes  as applicable for the merchandise to be delivered to the address in the country specifies by the customer.</p>
                    <p>For return policy contact us: <span className='text-orange'>09696-010506 || 01966-050506</span></p>
                    <p>Need Help? contact us: <span className='text-orange'>09696-010506 || 01966-050506</span></p>
                    <p>Have a great day! Thank you for shopping on <span className='text-orange'>https://ecommerce.easysheba.com/</span></p>
                  </div>
                  <div></div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    );
};

export default Invoice;