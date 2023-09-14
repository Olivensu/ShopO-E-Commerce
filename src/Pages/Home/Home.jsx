// import React from 'react'
import Banner1 from './Banner1'
import Brand from './Brand'
import FlashSale from '../CountDown/FlashSale'
import DealDay from '../Products/DealDay'
import Trending from './Trainding'
import Popular from './Popular'
import RankedShops from './RankedShops'
// import { useAuthState } from 'react-firebase-hooks/auth';
// import auth from '../../../firebase.init';
// import { useNavigate } from 'react-router-dom';
// import Loading from '../Shared/Loading';

const Home = () => {
  // const [user,loading] = useAuthState(auth);
  // const navigate = useNavigate();
  // if (loading) {
  //   return (
  //     <Loading></Loading>
  //   );
  // }
  // if(user){
  //   navigate('/')
  // }
  return (
    <div className=' mx-auto bg-[#F8F8F8]'>
        <div className='max-w-screen-xl mx-auto p-3'>
        <Banner1></Banner1>
        <DealDay></DealDay>
        <FlashSale></FlashSale>
        <Trending></Trending>
        <Popular></Popular>
        <RankedShops></RankedShops>
        {/* <Brand></Brand> */}
        </div>
    </div>
  )
}

export default Home