// import React from 'react';
import WhatshotIcon from '@mui/icons-material/Whatshot';
import Products from "../Products/Products";
import { Link } from 'react-router-dom';

const Popular = () => {
    return (
            <div className='shadow-xl shadow-yellow my-10 p-5'>
              <div className='flex justify-between items-center px-5 my-5'>
                <p className='flex justify-start items-center text-xl'><WhatshotIcon
                      style={{ fontSize: "2.5rem", color: "tomato" }}
                    ></WhatshotIcon><p className='ml-5'> Popular Products</p></p>
                <Link to='/products'><button className='inline-block btn btn-secondary text-white'>Show More</button></Link>
              </div>
            
                <Products></Products>
        </div>
    );
};

export default Popular;