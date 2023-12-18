"use client"

import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

import contract from "/public/photos/contract.jpg"
import tech from "/public/photos/tech.jpg"
import main from "/public/photos/main.jpeg"

import { url } from "@/lib/url";
import { ArrowRightIcon, DrawingPinFilledIcon, DoubleArrowRightIcon } from "@radix-ui/react-icons";
import { useRouter } from "next/navigation";
import about from "/public/photos/about.png"
import about2 from "/public/photos/about-2.png"
import about3 from "/public/photos/karadi.jpg"


const Services = () => {

    const router = useRouter()

    return(<>
<div className="min-h-screen md:p-10 bg-[#111] md:text-lg text-md overflow-hidden">
            <div className="flex items-center justify-center py-5">
                <div className="w-11/12 mt-24 md:my-14 md:flex" data-aos="fade-left">
                    <div className="flex items-center justify-center text-5xl font-bold sm:text-7xl basis-1/2 lg:text-8xl text-[#ff8731] my-5">
                        About our firm
                    </div>
                    <div className="flex flex-col items-start justify-center text-white basis-1/2">
                        <div className="p-3 leading-relaxed lg:leading-loose">
                        Welcome to Conversion Electromechanical Company Ltd – a leading force in electromechanical solutions. Committed to excellence, we deliver innovative and sustainable engineering solutions to meet our clients evolving needs.
                        </div>
                        <button className="flex items-center p-3 mt-5 ml-2 text-lg font-medium text-black bg-white rounded-full" onClick={()=>router.push("/contact")} >
                        Get In Touch<ArrowRightIcon className="ml-4"/></button>
                    </div>
                </div>
            </div>
            <div className="mt-20 mb-10 text-white xl:mb-20">
                <hr/>
                <div className="flex items-center pl-10 mt-3 font-medium"> <DrawingPinFilledIcon className="w-6 mr-5"/>Services by our firm</div>
            </div>
            <div className="flex flex-col items-center justify-center">
                <div className="pt-3 text-5xl font-bold text-[#ff8731] xl:pb-12 pb-4 sm:text-7xl px-4 text-center" data-aos="fade-left">Services</div>
                <div className="items-center justify-center w-11/12 text-white xl:flex" data-aos="fade-left">
                    <div className="items-center justify-center hidden xl:flex basis-1/2 fade-effect">
                        <div className="flex items-center justify-center w-full"><div className="fade-overlay"></div></div>
                        <Image src={tech} className="object-cover min-w-full min-h-full" alt="No Imagee"/>
                    </div>
                    <div className="flex flex-col items-start justify-center p-3 mb-10 xl:mb-5 basis-1/2 xl:pl-10">
                        <div className="my-5 text-2xl sm:text-4xl font-semibold md:my-10 lg:text-6xl text-[#ff8731] sm:flex sm:items-start items-center">Technical Department</div>
                        <div className="leading-relaxed lg:leading-loose">
                        Our Technical department, boasting AutoCAD drafting stations and advanced printing tools, forms the nexus of creative precision. With state-of-the-art technology, we transform ideas into tangible realities, fostering innovation in every detail. It's a hub where talent converges with cutting-edge tools to drive excellence in design and bring unparalleled vision to fruition
                        </div>
                        <button className="flex items-center p-3 px-5 mt-5 text-lg font-medium text-black bg-white rounded-full" onClick={()=>router.push("/services/tech-dept")} >
                        More <DoubleArrowRightIcon className="ml-4"/></button>
                    </div>
                    <div className="flex items-center justify-center xl:hidden basis-1/2 fade-effect">
                        <div className="flex items-center justify-center w-full"><div className="fade-overlay"></div></div>
                        <Image src={tech} className="object-cover min-w-full min-h-full" alt="No Imagee"/>
                    </div>

                </div>
                <div className="items-center justify-center w-11/12 mt-16 text-white xl:flex" data-aos="fade-left">
                    <div className="flex flex-col items-start justify-center mb-10 basis-1/2">
                        <div className="my-5 text-2xl font-semibold md:my-10 sm:text-4xl lg:text-6xl text-[#ff8731] pl-2">Maintenance Department</div>
                        <div className="p-3 leading-relaxed lg:leading-loose">
                        The Maintenance Department strategically determines the type and quantity of resources needed by aligning them with the specific activities outlined in the MEP construction. Our department strategically allocates manpower, tools, and materials for optimal efficiency in MEP construction, ensuring seamless operations and system longevity in the built environment.
                        </div>
                        <button className="flex items-center p-3 px-5 mt-5 text-lg font-medium text-black bg-white rounded-full" onClick={()=>router.push("/services/main-dept")} >
                        More <DoubleArrowRightIcon className="ml-4"/></button>
                    </div>
                    <div className="flex items-center justify-center basis-1/2 fade-effect">
                        <div className="flex items-center justify-center w-full"><div className="fade-overlay2"></div></div>
                        <Image src={main} className="object-cover min-w-full min-h-full" alt="No Imagee"/>
                    </div>
                </div>
                <div className="items-center justify-center w-11/12 mt-10 text-white xl:flex" data-aos="fade-left">
                    <div className="items-center justify-center hidden xl:flex basis-1/2 fade-effect">
                        <div className="flex items-center justify-center w-full"><div className="fade-overlay"></div></div>
                        <Image src={about} className="object-cover min-w-full min-h-full" alt="No Imagee"/>
                    </div>
                    <div className="flex flex-col items-start justify-center p-3 mb-10 xl:mb-5 basis-1/2 xl:pl-10">
                        <div className="my-5 text-2xl font-semibold md:my-10 sm:text-4xl lg:text-6xl text-[#ff8731]">Contracting Department</div>
                        <div className="leading-relaxed lg:leading-loose">
                        The Contracting Department orchestrates the MEP (Mechanical, Electrical, Plumbing) services in accordance with the foundational construction program established by the main contractor for civil construction. This collaborative approach ensures a synchronized integration of MEP elements within the broader construction framework.
                        </div>
                        <button className="flex items-center p-3 px-5 mt-5 text-lg font-medium text-black bg-white rounded-full" onClick={()=>router.push("/services/contract-dept")} >
                        More <DoubleArrowRightIcon className="ml-4"/></button>
                    </div>
                    <div className="flex items-center justify-center xl:hidden basis-1/2 fade-effect">
                        <div className="flex items-center justify-center w-full"><div className="fade-overlay"></div></div>
                        <Image src={about} className="object-cover min-w-full min-h-full" alt="No Imagee"/>
                    </div>

                </div>

            </div>

            <div className="mt-20 mb-10 text-white xl:mb-20">
                <hr/>
                <div className="flex items-center pl-10 mt-3 font-medium"> <DrawingPinFilledIcon className="w-6 mr-5"/>Stats of our company</div>
            </div>

            <div className="py-10 bg-[#111]" data-aos="fade-left">
                <div className="text-5xl font-semibold text-center text-white lg:text-7xl">
                    Our imapct in numbers
                </div>
                <div className="px-5 my-10">
                    <div className="flex flex-wrap items-center justify-around p-10 text-black bg-white">
                        <div className="flex items-center justify-between sm:justify-around basis-1/2">
                            <div className="flex flex-col items-center justify-center p-5 text-5xl font-bold lg:text-7xl">
                                20+
                                <div className="mt-3 text-lg font-medium">Years of experience</div>
                            </div>
                            <div className="flex flex-col items-center justify-center p-5 text-5xl font-bold lg:text-7xl">
                                200+
                                <div className="mt-3 text-lg font-medium">Projects</div>
                            </div>
                        </div>
                        <div className="flex items-center justify-between sm:justify-around basis-1/2">
                            <div className="flex flex-col items-center justify-center p-5 text-5xl font-bold lg:text-7xl">
                                1200+
                                <div className="mt-3 text-lg font-medium">Members</div>
                            </div>
                            <div className="flex flex-col items-center justify-center p-5 text-5xl font-bold lg:text-7xl">
                                40+
                                <div className="mt-3 text-lg font-medium">Statified clients</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>

    )
}
export default Services;
