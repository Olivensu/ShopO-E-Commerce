
import { useEffect } from 'react';
import ShowCountDown from "./ShowCountDown";
import { useState } from 'react';
import axios from 'axios';

const HappyHour = () => {
    // const targetDate = new Date('2023-11-13T18:00:00');
    const [userProduct, setUserProduct] = useState([]);
  
  useEffect(() => {
      axios.get(`${import.meta.env.VITE_BACKEND_URL}/api/event/campaign`)
          .then(res=>{
              setUserProduct(res.data.payload)
          })

    }, [])
    console.log(userProduct);
    return (
        <>
            {
                userProduct?.map(data=>(
                    <div key={data._id} className='grid grid-cols-2 gap-3 bg-gray-light p-3 rounded-xl'>
            <div>
                <img className='w-full' src={`${import.meta.env.VITE_BACKEND_URL}/image/users/${
              data.image
            }`} alt="Slide 1" />
                <p className='text-red text-start mt-2'>Campaign start in</p>
            </div>
            <ShowCountDown targetDate={new Date(`${data.date}`)} />
        </div>
                ))
            }
        </>
    );
};

export default HappyHour;