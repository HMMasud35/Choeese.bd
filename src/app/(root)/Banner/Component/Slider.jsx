"use client"
import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, FreeMode, Thumbs } from 'swiper/modules';
import Image from 'next/image';

import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';

export default function Slider() {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  return (
    <>
      <Swiper
        style={{
          '--swiper-pagination-color': '#fff',
        }}
        loop={true}
        autoplay={{ delay: 3000, pauseOnMouseEnter: true }}
        thumbs={{ swiper: thumbsSwiper }}
        modules={[FreeMode, Thumbs, Autoplay]}
        className="mySwiper2"
      >
        <SwiperSlide>
          <Image className='w-full h-80' width={600} height={600} src="/background2.png" alt='Profilepic.png'/>
        </SwiperSlide>
        <SwiperSlide>
          <Image className='w-full h-80' width={600} height={600} src="/background6.png" alt='Profilepic.png'/>
        </SwiperSlide>
        <SwiperSlide>
          <Image className='w-full h-80' width={600} height={600} src="/background8.png" alt='Profilepic.png'/>
        </SwiperSlide>
      </Swiper>
      <Swiper
        onSwiper={setThumbsSwiper}
        loop={true}
        spaceBetween={5}
        slidesPerView={3}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Thumbs, Autoplay]}
        className="mySwiper mt-1"
      >
        <SwiperSlide>
          <Image className='w-full h-20' width={600} height={600} src="/background2.png" alt='Profilepic.png'/>
        </SwiperSlide>
        <SwiperSlide>
          <Image className='w-full h-20' width={600} height={600} src="/background6.png" alt='Profilepic.png'/>
        </SwiperSlide>
        <SwiperSlide>
          <Image className='w-full h-20' width={600} height={600} src="/background8.png" alt='Profilepic.png'/>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
