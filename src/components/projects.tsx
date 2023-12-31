"use client"

import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, EffectCoverflow, Autoplay } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/autoplay';

import links from "../../data.json";
import links2 from "../../datagoing.json";
import Image from "next/image";
import { Button } from "./ui/button"
import Link from 'next/link';
import { url } from '@/lib/url';


const Projects = () => {
    return(<>
        <div className="flex flex-col justify-center items-center bg-[#111111] min-h-[100vh] text-white pt-20 pb-16 overflow-hidden" id="projects">
        <div className="mb-10 text-4xl font-semibold py-10 md:text-6xl text-[#ff8731] md:font-bold text-center px-3">OUR PROJECTS</div>
        { links.map((ele,idx)=>{ return(
        <div className="flex flex-col items-center justify-center" key={idx}>
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
            className="md:h-[60vh] h-[50vh] w-[90vw]"
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
            <Link href={`${url}/projects?status=finished`}><Button className="p-5 mt-16 text-xl font-semibold text-black bg-white hover:text-white">More</Button></Link>

        <div className="mt-10 mb-10 text-4xl px-3 py-10 font-semibold text-center md:text-6xl text-[#ff8731] md:font-bold">OUR ONGOING PROJECTS</div>
        { links2.map((ele,idx)=>{ return(
        <div className="flex flex-col items-center justify-center" key={idx}>
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
            className="md:h-[60vh] h-[50vh] w-[90vw]"
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
        )}) }

        <Link href={`${url}/projects?status=unfinished`}><Button className="p-5 mt-16 text-xl font-semibold text-black bg-white hover:text-white">More</Button></Link>

        </div>
    </>)
}
export default Projects;
