// import React from 'react';
import WhatshotIcon from '@mui/icons-material/Whatshot';
import Products from "../Products/Products";

const Popular = () => {
    return (
            <div className='shadow-xl my-10 p-5'>
            <p className='flex justify-start items-center text-xl'><WhatshotIcon
                    style={{ fontSize: "2.5rem", color: "tomato" }}
                  ></WhatshotIcon><p className='ml-5'> Popular Products</p></p>
                <Products></Products>
        </div>
    );
};

export default Popular;