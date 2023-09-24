// import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import { Navigate } from 'react-router-dom';
import Loading from '../Shared/Loading';

const CheckUser = () => {
    const [user,loading] = useAuthState(auth);
    if(user){
        return( <Navigate to='/dashboard' /> );
    }else if(loading){
        return <Loading></Loading>
    }
};

export default CheckUser;