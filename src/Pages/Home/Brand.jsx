// import React from 'react'
import brand1 from '../../img/brand/brand-1.webp'
import brand2 from '../../img/brand/brand-2.webp'
import brand3 from '../../img/brand/brand-3.webp'
import brand4 from '../../img/brand/brand-4.webp'
import brand5 from '../../img/brand/brand-5.webp'
import brand6 from '../../img/brand/brand-6.webp'
import brand7 from '../../img/brand/brand-7.webp'
import brand8 from '../../img/brand/brand-8.webp'
import brand9 from '../../img/brand/brand-9.webp'
import brand10 from '../../img/brand/brand-10.webp'
import brand11 from '../../img/brand/brand-11.webp'
import brand12 from '../../img/brand/brand-12.webp'
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import { Pagination } from 'swiper/modules';

const Brand = () => {
  return (
    <div>
        <p className='text-3xl font-bold my-10 text-start'>Shop by Brand</p>
        <div  data-aos="zoom-in" className='grid lg:grid-cols-6 md:grid-cols-4 grid-cols-2'>
            <div className='p-8 flex items-center justify-center border-2 border-gray'><img className='w-full' src={brand1} alt="" /></div>
            <div className='p-8 flex items-center justify-center border-2 border-gray'><img className='w-full' src={brand2} alt="" /> </div> 
            <div className='p-8 flex items-center justify-center border-2 border-gray'><img className='w-full' src={brand3} alt="" /></div>
            <div className='p-8 flex items-center justify-center border-2 border-gray'><img className='w-full' src={brand4} alt="" /></div>
            <div className='p-8 flex items-center justify-center border-2 border-gray'><img className='w-full' src={brand5} alt="" /></div>
            <div className='p-8 flex items-center justify-center border-2 border-gray'><img className='w-full' src={brand6} alt="" /></div>
            <div className='p-8 flex items-center justify-center border-2 border-gray'><img className='w-full' src={brand7} alt="" /></div>
            <div className='p-8 flex items-center justify-center border-2 border-gray'><img className='w-full' src={brand8} alt="" /></div>
            <div className='p-8 flex items-center justify-center border-2 border-gray'><img className='w-full' src={brand9} alt="" /></div>
            <div className='p-8 flex items-center justify-center border-2 border-gray'><img className='w-full' src={brand10} alt="" /></div>
            <div className='p-8 flex items-center justify-center border-2 border-gray'><img className='w-full' src={brand11} alt="" /></div>
            <div className='p-8 flex items-center justify-center border-2 border-gray'><img className='w-full' src={brand12} alt="" /></div>
        </div>
        {/* <div className='my-10 m-auto '>
        <Swiper
        slidesPerView={2}
        spaceBetween={10}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          540: {
            slidesPerView: 3,
            spaceBetween: 10,
          },
          768: {
            slidesPerView: 4,
            spaceBetween: 10,
          },
          1024: {
            slidesPerView: 5,
            spaceBetween: 40,
          },
        }}
        // navigation={{
        //   clickable: true,
        // }}
        // autoplay={{
        //   delay: 2500,
        //   disableOnInteraction: false,
        // }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide><div className='p-8 flex w-52 h-32 items-center justify-center border-2 border-gray'><img className='w-full' src={brand1} alt="" /></div></SwiperSlide>
        <SwiperSlide><div className='p-8 flex w-52 h-32 items-center justify-center border-2 border-gray'><img className='w-full' src={brand2} alt="" /> </div> </SwiperSlide>
        <SwiperSlide><div className='p-8 flex w-52 h-32 items-center justify-center border-2 border-gray'><img className='w-full' src={brand3} alt="" /> </div> </SwiperSlide>
        <SwiperSlide><div className='p-8 flex w-52 h-32 items-center justify-center border-2 border-gray'><img className='w-full' src={brand4} alt="" /> </div></SwiperSlide>
        <SwiperSlide><div className='p-8 flex w-52 h-32 items-center justify-center border-2 border-gray'><img className='w-full' src={brand3} alt="" /> </div></SwiperSlide>
        <SwiperSlide><div className='p-8 flex w-52 h-32 items-center justify-center border-2 border-gray'><img className='w-full' src={brand3} alt="" /> </div></SwiperSlide>
        <SwiperSlide><div className='p-8 flex w-52 h-32 items-center justify-center border-2 border-gray'><img className='w-full' src={brand7} alt="" /> </div> </SwiperSlide>
        <SwiperSlide><div className='p-8 flex w-52 h-32 items-center justify-center border-2 border-gray'><img className='w-full' src={brand3} alt="" /> </div></SwiperSlide>
        <SwiperSlide><div className='p-8 flex w-52 h-32 items-center justify-center border-2 border-gray'><img className='w-full' src={brand3} alt="" /> </div></SwiperSlide>
      </Swiper>
        </div> */}
    </div>
  )
}

export default Brand