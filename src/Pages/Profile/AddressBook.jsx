// import React from 'react';

import { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../../firebase.init";
import Loading from "../Shared/Loading";
import { Link } from "react-router-dom";

const AddressBook = () => {
    const [userInfo,setUserInfo] = useState([])
    const [user] = useAuthState(auth)
    useEffect(() => {
        if(user){
            fetch(`${import.meta.env.VITE_BACKEND_URL}/api/users/${user?.email}`)
            .then(res=>res.json())
            .then(data=> setUserInfo(data.payload.user))
        }
    },[])
    if(!user || !userInfo){
        return <Loading></Loading>
    }
    const {newAddress} = userInfo;
    console.log(newAddress);
    return (
        <div>
            <p className="text-lg font-bold text-start w-11/12 m-auto mt-5">Address</p>
            <div className="grid grid-cols-2 my-5">
                {
                    newAddress?.map((address)=>(<div className="space-y-2 text-start w-48 p-2 rounded-2xl border-x-red border-y-orange m-auto  bg-white border-2 my-5" key={address._id}>
                        <p className="font-bold">Name: {address.name}</p>
                        <p className="font-bold">Phone: {address.phone}</p>
                        <p className="font-bold">Address: {address.address}</p>
                    </div>))
                }
            </div>
            <Link to='/create-address' className="text-orange font-bold text-xl"><p className="my-5">Add New Address</p></Link>
        </div>
    );
};

export default AddressBook;