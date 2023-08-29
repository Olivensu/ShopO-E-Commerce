// import React from 'react';
import campaign1 from '../../img/campaign/fashion.png'

import ShowCountDown from "./ShowCountDown";

const FashionNign = () => {
    const targetDate = new Date('2023-09-01T18:00:00');
    return (
        <div className='grid grid-cols-2 bg-gray-light p-3 rounded-xl'>
            <div>
                <img src={campaign1} alt="" />
                <p className='text-red text-start mt-2'>Campaign start in</p>
            </div>
            <ShowCountDown targetDate={targetDate} />
        </div>
    );
};

export default FashionNign;