"use client"

import Navbar from "@/components/navbar";
import Image from "next/image";

const Projects = () => {
    return(<div className="bg-[#111] min-h-[100vh]">
        <Navbar/>

        <div className="flex items-center justify-center flex-col text-white min-h-[30vh] pb-20">
            <div className="pb-5 mt-24 text-5xl text-bold">
                Projects
            </div>
            <div className="px-10 text-center md:text-lg text-md md:px-40">
            Our architecture company is dedicated to shaping the built environment with innovative designs that inspire At our architecture firm, our mission is to create sustainable and timeless spaces that enhance the quality of life.
            </div>
        </div>
   </div>)
}
export default Projects;
