"use client"

import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

import contract from "../../public/photos/contract.jpg"
import tech from "../../public/photos/tech.jpg"
import main from "../../public/photos/main-crp.jpeg"

const Services = () => {

    return(
            <div className="min-h-[100vh] flex flex-col bg-[#111111] text-white" id="services">
                <div className="mt-24 md:text-4xl text-3xl font-semibold text-center text-[#f3742f]" data-aos="fade-top">SERVICES FROM OUR COMPANY</div>
                <div className="flex flex-col mt-3">
                    <div className="md:flex">
                        <div className="flex items-center justify-center basis-1/2" data-aos="fade-right"><Image src={tech} className="w-full p-10" alt="technial department"/></div>
                        <div className="flex flex-col items-center justify-center p-10 text-center basis-1/2" data-aos="fade-left">
                            <div className="flex items-center justify-center md:text-3xl text-2xl font-semibold basis-1/2 text-[#f3742f]">MEP TECHNICAL DEPARTMENT</div>
                            <div className="text-lg leading-loose basis-1/2">
                                We have an in-house Design department equipped with AutoCAD drafting stations, printing & plotting tools.
                            </div>
                                <Button className="text-white bg-[#f3742f] hover:bg-white hover:text-black">More</Button>
                            </div>
                    </div>
                    <div className="my-3 md:flex">
                        <div className="flex items-center justify-center md:hidden basis-1/2" data-aos="fade-right"><Image src={main} className="w-full p-10" alt="technial department"/></div>
                        <div className="flex flex-col items-center justify-center p-10 text-center basis-1/2" data-aos="fade-left">
                            <div className="flex items-center justify-center md:text-3xl text-2xl font-semibold basis-1/2 text-[#f3742f]">MEP MAINTENANCE DEPARTMENT</div>
                            <div className="text-lg leading-loose basis-1/2">
                                The type and no. of resources required are established based on activities as per the MEP construction.
                            </div>
                                <Button className="text-white bg-[#f3742f] hover:bg-white hover:text-black">More</Button>
                            </div>
                        <div className="items-center justify-center hidden md:flex basis-1/2" data-aos="fade-right"><Image src={main} className="w-full p-10" alt="technial department"/></div>
                    </div>
                    <div className="md:flex">
                    <div className="flex items-center justify-center basis-1/2" data-aos="fade-right"><Image src={contract} className="w-full p-10" alt="technial department"/></div>
                        <div className="flex flex-col items-center justify-center p-10 text-center basis-1/2" data-aos="fade-left">
                            <div className="flex items-center justify-center text-2xl md:text-3xl font-semibold basis-1/2 text-[#f3742f]">MEP CONTRACTING DEPARTMENT</div>
                            <div className="text-lg leading-loose basis-1/2">
                            The basic construction programme of MEP services shall follow the Main contractor’s civil construction
                            </div>
                                <Link href="http://localhost:3000/services/contract-dept">
                                    <Button className="text-white bg-[#f3742f] hover:bg-white hover:text-black">More</Button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
    )
}
export default Services;