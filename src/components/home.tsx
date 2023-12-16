"use client"

import Image from "next/image";
import preimg from "/public/photos/Screenshot 2023-12-09 003501.png"
import { useState } from "react";

const First = () => {
    const [canplay , setCanplay] = useState(false)
    return(<div className="relative h-screen overflow-hidden">
        { !canplay &&
        <Image src={preimg} className="object-cover h-full min-w-full" alt="Img not found" />
        }
        <video src="https://f005.backblazeb2.com/file/conversion-mep/bgvideo.mp4" onCanPlay={()=>setCanplay(true)} autoPlay loop muted playsInline className="object-cover h-full min-w-full"></video>
        <div className="absolute top-0 flex w-full h-full bgopq">
            <div className="flex flex-col items-start justify-center text-white md:mt-40 mt-60 sm:basis-7/12" data-aos="fade-bottom">
                <div className="pl-10 text-5xl font-bold xl:text-7xl text-[#ff8731]">Creating Visual</div>
                <div className="pl-10 mt-5 text-5xl font-bold xl:text-7xl text-[#ff8731]"> Storytelling</div>
                <div className="px-5 pl-10 mt-5 leading-relaxed tracking-wider sm:text-md">
    Established in 2005, Conversion Electromechanical Co L.L.C. is a premier electromechanical contracting company in the UAE. We excel in executing diverse projects, ensuring high-quality services and efficient project completion across the Gulf region.
                </div>
            </div>
        </div>
    </div>)
}
export default First;
