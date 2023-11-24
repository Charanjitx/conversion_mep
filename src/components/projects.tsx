"use client"

import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, EffectCoverflow, Autoplay } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/autoplay';

import _links from "../../data.json";
import Image from "next/image";
import { Button } from "./ui/button"
import { Root } from '@/lib/types';
import Link from 'next/link';


const Projects = () => {
    const links = _links as Root
    return(<>
        <div className="flex flex-col justify-center items-center bg-[#111111] min-h-[100vh] text-white pt-24 pb-16" id="projects">
        <div className="text-4xl font-semibold md:text-5xl md:font-bold">OUR PROJECTS</div>
        { links.map((ele,idx)=>{ return(
        <div className="flex flex-col items-center justify-center" key={idx}>
            <Image src={ele.logo} alt="Sorry" width={100} height={100} quality={100} className="my-10 sm:w-40"/>
            <Swiper
            effect={'coverflow'}
            grabCursor={true}
            centeredSlides={true}
            slidesPerView={1.3}
            coverflowEffect={{
              rotate: 0,
              stretch: 0,
              depth: 100,
              modifier: 2,
              slideShadows: true,
            }}
            breakpoints={{
                1024 : {
                    slidesPerView : 2,
                }
            }}
            pagination={true}
            spaceBetween= {60}
            modules={[EffectCoverflow, Pagination,Autoplay]}
            autoplay = {{
                delay : 1500,
            }}
            className="md:h-[60vh] h-[45vh] w-[80vw]"
            data-aos="fade-right"
            >
                    {
                        ele.images.map((img,idx)=>{return(<div key={idx}>
              <SwiperSlide className="relative">
                    <Image
                    src = {img.img_url} alt="Image not found"
                    fill
                    quality={100}
                    className="object-cover min-w-full min-h-full transition-all hover:opacity-10"/>
                    <div
        className="absolute inset-0 bg-[rgba(0,0,0,0.6)] flex justify-center items-center flex-col opacity-0 hover:opacity-100 transition-all p-10">
                        <div className="flex items-center justify-center text-xl font-semibold text-center md:text-3xl basis-1/2">{img.name}</div>
                        <div className="flex items-center justify-center text-center basis-1/2">{img.content}</div>
                    </div>
                </SwiperSlide>
                        </div>)})
                    }
            </Swiper>
        </div>
        )})}
            <Link href="http://localhost:3000/projects"><Button className="p-5 mt-16 text-xl font-semibold text-black bg-white hover:text-white">More</Button></Link>
        </div>
    </>)
}
export default Projects;