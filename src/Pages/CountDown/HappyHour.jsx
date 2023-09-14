// import React from 'react';
import campaign2 from '../../img/campaign/happyhour.png'

import ShowCountDown from "./ShowCountDown";

const HappyHour = () => {
    const targetDate = new Date('2023-11-13T18:00:00');
    return (
        <div className='grid grid-cols-2 bg-gray-light p-3 rounded-xl'>
            <div>
                <img src={campaign2} alt="" />
                <p className='text-red text-start mt-2'>Campaign start in</p>
            </div>
            <ShowCountDown targetDate={targetDate} />
        </div>
    );
};

export default HappyHour;