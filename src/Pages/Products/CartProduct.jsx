// import React from 'react';

import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../../firebase.init";
import Loading from "../Shared/Loading";
import { useEffect } from "react";
import axios from "axios";
import { useState } from "react";
import DeleteIcon from '@mui/icons-material/Delete';
import { useNavigate } from "react-router-dom";

const CartProduct = () => {
    const [user,loading]= useAuthState(auth);
    const [cartItem,setCartItem]= useState([])
    // const [quantity,setQuantity]= useState(0)
    const [selectedItems, setSelectedItems] = useState([]);
    const [updatedItems, setUpdatedItems] = useState(cartItem);
    const history = useNavigate();
    console.log(selectedItems);
    useEffect(()=>{
        if(user){
            axios.get(`${import.meta.env.VITE_BACKEND_URL}/api/order/cart/${user.email}`)
            .then(res=>{
                console.log(res);
                setCartItem(res.data.payload)
                setUpdatedItems(res.data.payload)
            })
        }
    },[user])
    if(loading){
        return <Loading></Loading>
    }
    // console.log(quantity);
    const handleCheckboxChange = (itemId) => {
        if (selectedItems.includes(itemId)) {
          setSelectedItems(prevSelectedItems =>
          prevSelectedItems.filter(id => id !== itemId)
          );
        } else {
          setSelectedItems(prevSelectedItems => [...prevSelectedItems, itemId]);
        }
        
      };

      // const handleQuantityChange = (itemId, changeAmount) => {
      //   setUpdatedItems(prevItems =>
      //     prevItems.map(item =>
      //       item._id === itemId
      //         ? { ...item, quantity: (item.quantity<2?1:item.quantity + changeAmount) }
      //         : item
      //     )
      //   );
      // };
      

  const handleNavigate = (propArray) => {
    const encodedPropArray = encodeURIComponent(JSON.stringify(propArray));
    history(`/checkout/${encodedPropArray}`);
  };

      const handleDeleteItem=(id)=>{
        if(!id || !user.email){
            return alert('Something is missing')
        }
        console.log(id,user.email);

        axios.delete(`${import.meta.env.VITE_BACKEND_URL}/api/order/cart`, {
            data: { id: id, email: user.email }, // Send data in the "data" field
          })
        .then(res=>{
            console.log(res);
            setUpdatedItems(res.data.payload)
        })

      }

    //   const handleQuantity=(id, quantity)=>{
    //     console.log(id, quantity);
    //     axios.get(`${import.meta.env.VITE_BACKEND_URL}/api/order/cart/${user.email}`)
    //         .then(res=>{
    //             console.log(res);
    //             setCartItem(res.data.payload)
    //         })
    //     if(!id || !quantity || !user.email){
    //         return alert('Something is wrong!')
    //     }
    //     axios.put(`${import.meta.env.VITE_BACKEND_URL}/api/order/cart/quantity`,{email:user.email, quantity:quantity,id:id});

        
    //   }
    //   console.log(selectedItems);

    // console.log(cartItem);
    return (
      <div>
        <p className="text-2xl text-start w-11/12 m-auto mt-5 text-gray-dark">Your Cart Item - </p>
        <div className="my-5">
          {updatedItems?.map((item, index) => (
            <div className="flex justify-around items-center my-7 bg-base-200 p-3 shadow-lg shadow-purple w-11/12 m-auto rounded-xl" key={item._id}>
                <input
            type="checkbox" 
            className="checkbox checkbox-primary" 
            onChange={() => handleCheckboxChange(item._id)}
          />
              <div className="flex text-start">
                <div>
                <img className="w-20 mx-5" src={`${import.meta.env.VITE_BACKEND_URL}/image/users/${
              item.cartItem.image
            }`} alt="" />
                </div>
              <div className="">
              <p className="font-bold">{item.cartItem.name.slice(0,40)}...</p>
              <p className=" ">{item.cartItem.shop}</p>
              <p className="text-sm line-through">৳ {item.cartItem.price}</p>
              <p className="text-sm font-bold ">৳ {item.cartItem.discountPrice}</p>
              {/* <p className=" text-red">Only {item.cartItem.quantity}  Item left</p> */}
              </div>
              </div>
              <div>
              <div className="flex flex-col items-center py-2 font-bold">
              {/* <button onClick={()=>handleQuantityChange(item._id, -1)} className="btn btn-sm btn-secondary text-white font-bold text-xl mx-5">-</button>
              <p className="border-2 px-2 rounded-lg">{()=>setQuantity(item.quantity)}</p>
              <p className="border-2 px-2 rounded-lg">{item.quantity}</p>
              
              <button onClick={()=>handleQuantityChange(item._id, 1)}  className="btn btn-sm btn-secondary text-white font-bold text-xl mx-5">+</button> */}
              <p className="border-2 px-2 rounded-lg mb-5">Quantity {item.quantity}</p>
              <div className="inline-block cursor-pointer" onClick={()=>handleDeleteItem(item._id)}>
              <DeleteIcon
                          color="warning"
                          style={{ fontSize: "2rem" }}
                        ></DeleteIcon>
              </div>
            </div>
              </div>
              {/* Render additional details about the cartItem if needed */}
            </div>
          ))}

        </div>
        <button onClick={()=>handleNavigate(selectedItems)} className="btn btn-warning my-5">Proceed to CheckOut</button>
      </div>
    );
};

export default CartProduct;