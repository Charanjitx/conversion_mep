"use client"

import mosque from "../../public/photos/85468867Copy_SHOT 2.jpg"
import scraper1 from "../../public/photos/52153477Copy_EMAAR_ElieSaabTower_CGI02_Draft_04-scaled.jpg"
import scraper2 from "../../public/photos/64151263Copy_01.jpg"

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y , Autoplay } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import Image from "next/image";

const Carosel = () => {
    return(<>
        <Swiper
          modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
          navigation
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{ clickable: true }}
          scrollbar={{ draggable: true }}
          spaceBetween={0}
          slidesPerView={1}
          className="h-[100vh] overflow-hidden"
        >
          <SwiperSlide>
            <Image
            src = {mosque} alt = "Image not found"
            quality={100}
            layout="fill"
            objectFit="cover"
            className="object-cover min-w-full min-h-full"/>
          </SwiperSlide>
          <SwiperSlide>
            <Image
            src = {scraper1} alt = "Image not found"
            className="object-cover min-w-full min-h-full">
            </Image>
          </SwiperSlide>
          <SwiperSlide>
                <Image
                    src = {scraper2} alt = "Image not found"
                    className="object-cover min-w-full min-h-full">
                </Image>
          </SwiperSlide>
        </Swiper>
    </>)
}
export default Carosel;
