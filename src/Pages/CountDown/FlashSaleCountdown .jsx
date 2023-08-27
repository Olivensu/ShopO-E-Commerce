// import React from 'react';
import PropTypes from 'prop-types'; // Import PropTypes
import Countdown from 'react-countdown';

const FlashSaleCountdown = ({ targetDate }) => {
    const renderer = ({ days, hours, minutes, seconds }) => {
      return (
        <div className=' bg-gray h-20'>
          <p className='pt-6'><span className='bg-blue p-5 text-white mx-2 rounded-full text-2xl font-bold'>{days}d</span> <span className='bg-red p-5 text-white mx-2 rounded-full text-2xl font-bold'>{hours}h</span> <span className='bg-yellow p-5 text-white mx-2 rounded-full text-2xl font-bold'>{minutes}m</span> <span className='bg-orange p-5 text-white mx-2 rounded-full text-2xl font-bold'>{seconds}s</span></p>
        </div>
      );
    };
  
    return (
      <Countdown date={targetDate} renderer={renderer} />
    );
  };
  
  FlashSaleCountdown.propTypes = {
    targetDate: PropTypes.instanceOf(Date).isRequired,
  };
  

export default FlashSaleCountdown;
