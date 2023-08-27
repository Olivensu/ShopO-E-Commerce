// import FlashSaleCountdown from './FlashSaleCountdown';
// import { useState } from 'react';
import FlashSaleCountdown from './FlashSaleCountdown ';
import flash from '../../img/flash-sale/c8fdb978-acd8-4e5b-9e04-374607ec6705.gif'

const FlashSale = () => {
    // const [userInput, setUserInput] = useState('');
    // const [targetDate, setTargetDate] = useState(null);
    const targetDate = new Date('2023-08-31T18:00:00');
  
    // const handleUserInputChange = (event) => {
    //   setUserInput(event.target.value);
    // };
  
    // const handleSetTargetDate = () => {
    //   if (userInput) {
    //     const userDate = new Date(userInput);
    //     setTargetDate(userDate);
    //   }
    // };
  
    return (
      <div className='bg-black pb-5 rounded-xl my-16'>
        {/* <h2>Set Flash Sale End Time:</h2> */}
        {/* <input type="datetime-local" value={userInput} onChange={handleUserInputChange} />
        <button onClick={handleSetTargetDate}>Set Target Date</button>
         */}
        {targetDate && (
          <div className=''>
            <div>
                <img className='w-full rounded-xl' src={flash} alt="" />
            </div>
            {/* <h2>Flash Sale Ending In:</h2> */}
            <FlashSaleCountdown targetDate={targetDate} />
          </div>
        )}
        <div className='flex justify-between items-center px-5 my-5'>
            <p className='text-white text-xl'>Products</p>
            <button className='btn rounded-full'>Show More</button>
        </div>
        <div className='flex justify-between items-center px-5 my-5'>
            <p className='text-white text-xl'>Shop</p>
            <button className='btn rounded-full'>Show More</button>
        </div>
      </div>
    );
  };
  
  export default FlashSale;
