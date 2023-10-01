import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
// import required modules
import { Autoplay, Pagination, Navigation,Mousewheel, Keyboard } from 'swiper/modules';
import { useEffect } from 'react';
import { useState } from 'react';
import axios from 'axios';




const FancySlider = () => {
  const [userProduct, setUserProduct] = useState([]);
  
  useEffect(() => {
      axios.get(`${import.meta.env.VITE_BACKEND_URL}/api/event/slider`)
          .then(res=>{
              setUserProduct(res.data.payload)
          })

    }, [])
    console.log(userProduct);
    return (
        <div className="w-full">
            <Swiper
            slidesPerView={1}
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        mousewheel={true}
        keyboard={true}
        modules={[Autoplay, Pagination, Navigation,Mousewheel, Keyboard]}
        className="mySwiper w-full rounded-3xl shadow-2xl"
      >
        {
          userProduct.map(data =>(
            <SwiperSlide key={data._id}><img className='w-full' src={`${import.meta.env.VITE_BACKEND_URL}/image/users/${
              data.image
            }`} alt="Slide 1" /></SwiperSlide>
          ))
        }
      </Swiper>
    </div>
    );
};

export default FancySlider;