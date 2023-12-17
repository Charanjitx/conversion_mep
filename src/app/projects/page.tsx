"use client"
import { useSearchParams } from 'next/navigation'

import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, EffectCoverflow, Autoplay } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/autoplay';

import Navbar from "@/components/navbar";
import Image from "next/image";

import {
  Table,
  TableBody,
  TableCell,
  TableRow,
} from "@/components/ui/table"

import data from "../../../projects.json"
import { Badge } from '@/components/ui/badge';

const Projects = () => {
    const router = useSearchParams() 
    const status = router.get("status") == "finished" ? true : false;

    return(<div className="bg-[#111] min-h-[100vh] overflow-x-hidden">
        <Navbar/>

        <div className="flex items-center justify-center flex-col text-white min-h-[30vh] pb-20">
            <div className="pb-5 mt-24 mb-5 md:text-7xl text-5xl text-[#ff8731] font-bold">
                PROJECTS
            </div>
            { status ? <div className='text-center text-[#ff8731] md:text-4xl text-3xl font-semibold'>COMPLETED PROJECTS</div> : <div className='text-center text-[#ff8731] md:text-4xl text-3xl font-semibold'>ONGOING PROJECTS</div> }
            <div>
            { data.filter((ele)=>ele.is_finished==status).map((ele,idx)=>{
                return(

                <div className="w-screen my-20 md:flex" key={idx}>
                    <div className="basis-7/12">
                        <div className="p-3 my-5 text-xl text-[#ff8731] font-semibold text-center md:hidden">{ele.name}</div>
                        <Swiper
                            effect={'coverflow'}
                            grabCursor={true}
                            centeredSlides={true}
                            slidesPerView={1.1}
                            coverflowEffect={{
                              rotate: 0,
                              stretch: 0,
                              depth: 100,
                              modifier: 2,
                              slideShadows: true,
                            }}
                            pagination={true}
                            spaceBetween= {30}
                            modules={[EffectCoverflow, Pagination,Autoplay]}
                            autoplay = {{
                                delay : 2000,
                            }}
                            className="md:w-[50vw] w-screen h-[50vh] p-3 mt-5"
                            data-aos="fade-right"
                        >
                            {
                                ele.images.map((img,idx)=>{
                                    return(
                                        <SwiperSlide className="relative" key={idx}>
                                            <Image
                                            src={img} alt="Image not found"
                                            fill
                                            quality={100}
                                            className="object-cover min-w-full min-h-full"/>
                                        </SwiperSlide>
                                    )
                                })
                            }
                        </Swiper>
                    </div>
                    <div className="flex flex-col items-center justify-center w-full text-white basis-5/12" data-aos="fade-right">
                        <div className="items-center justify-center hidden text-xl text-[#f3742f] font-semibold text-center lg:text-2xl md:flex basis-1/4">{ele.name}</div>
                        <div className="px-5 basis-3/4 md:px-10">
                        <div className='flex justify-end pt-5'>{ele.is_finished ? <Badge variant="secondary">Completed</Badge> :  <Badge variant="destructive">Ongoing</Badge> }</div>
                            <Table className="mt-10 md:mt-5 text-md md:text-lg">
                                <TableBody>
                                { ele.location.length > 3 &&
                                    <TableRow>
                                      <TableCell className="text-center">LOCATION</TableCell>
                                      <TableCell className="text-center">{ele.location}</TableCell>
                                    </TableRow>
                                }
                                { ele.cname.length > 3 &&
                                    <TableRow>
                                      <TableCell className="text-center">CLIENT</TableCell>
                                      <TableCell className="text-center">{ele.cname}</TableCell>
                                    </TableRow>
                                }
                                { ele.consultant.length > 3 &&
                                    <TableRow>
                                      <TableCell className="text-center">CONSULTANT</TableCell>
                                      <TableCell className="text-center">{ele.consultant}</TableCell>
                                    </TableRow>
                                }
                                { ele.maincontract.length > 3 &&
                                    <TableRow>
                                      <TableCell className="text-center">MAIN CONTRACTOR</TableCell>
                                      <TableCell className="text-center">{ele.maincontract}</TableCell>
                                    </TableRow>
                                }
                                </TableBody>
                            </Table>
                        </div>
                    </div>
                </div>

                )
                })
            }
            </div>
        </div>
   </div>)

}
export default Projects;
