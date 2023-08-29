import PropTypes from 'prop-types'; // Import PropTypes
import Countdown from 'react-countdown';

const ShowCountDown = ({ targetDate }) => {
    const renderer = ({ days, hours, minutes, seconds }) => {
        return (
          <div className=''>
            <p className='grid grid-cols-2 gap-2'><span className='bg-gray-dark p-2 text-white mx-2 rounded-xl text-2xl font-bold'>{days}d</span> <span className='bg-gray-dark p-2 text-white mx-2 rounded-xl text-2xl font-bold'>{hours}h</span> <span className='bg-gray-dark p-2 text-white mx-2 rounded-xl text-2xl font-bold'>{minutes}m</span> <span className='bg-gray-dark p-2 text-white mx-2 rounded-xl text-2xl font-bold'>{seconds}s</span></p>
          </div>
        );
      };
    
      return (
        <Countdown date={targetDate} renderer={renderer} />
      );
};

ShowCountDown.propTypes = {
    targetDate: PropTypes.instanceOf(Date).isRequired,
  };

export default ShowCountDown;