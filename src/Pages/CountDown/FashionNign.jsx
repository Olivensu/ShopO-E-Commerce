// import React from 'react';
import campaign1 from '../../img/campaign/fashion.png'

import ShowCountDown from "./ShowCountDown";

const FashionNign = () => {
    const targetDate = new Date('2023-11-11T00:00:00');
    return (
        <div className='grid grid-cols-2 gap-3 bg-gray-light p-3 rounded-xl'>
            <div>
                <img className='w-full' src={campaign1} alt="" />
                <p className='text-red text-start mt-2'>Campaign start in</p>
            </div>
            <ShowCountDown targetDate={targetDate} />
        </div>
    );
};

export default FashionNign;