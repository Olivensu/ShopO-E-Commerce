// import React, { useEffect } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Navigate, useLocation } from 'react-router-dom';
import Loading from '../Shared/Loading';
import { checkPropTypes } from 'prop-types';
import auth from '../../../firebase.init';

const PrivateRoute = ({children}) => {
    const [user, loading] = useAuthState(auth);
    const location = useLocation();
    // console.log(location);

    if(loading){
        return <Loading></Loading>;
    }

    if(!user){
        return <Navigate to='/login' state={{from: location}} replace></Navigate>
    }
    return children;
};

PrivateRoute.propTypes = {
    children: checkPropTypes,
  };

export default PrivateRoute; 