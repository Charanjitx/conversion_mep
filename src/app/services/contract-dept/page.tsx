"use client"
import Navbar from "@/components/navbar";

import AOS from "aos";
import "aos/dist/aos.css";

import contract from "../../../../public/photos/42481563Copy_Picture19-01.jpg"
import Image from "next/image";
import { useEffect } from "react";

const Contract = () => {
    useEffect(() => {
        AOS.init();
        AOS.refresh();
    }, []);

    return(<>
        <div className="bg-black min-h-[100vh]">
            <Navbar/>
            <div className="pt-20 text-white">
                <div className="mb-2 text-3xl font-semibold text-center text-[#f3742f]" data-aos="fade-top">MEP CONTRACTING DEPARTMENT</div>
                <div className="lg:flex">
                    <div className="flex items-center justify-center basis-5/12">
                        <div className="max-w-xl" data-aos="fade-left"><Image src={contract} alt="Contracting dept img" className="w-full lg:m-5"/></div>
                    </div>
                    <div className="p-5 leading-loose text-md basis-7/12" data-aos="fade-right">
                        &nbsp;&nbsp;&nbsp;&nbsp;Our Special Team Of Engineers With Technicians & Skilled Manpower For Different Electromechanical Services & Systems Installations
                        <div className="p-5">
                            <li>All HVAC Systems</li>
                            <li>Smoke Management Systems</li>
                            <li>BMS-BUILDING MANGMENT SYSTEMS</li>
                            <li>LPG Systems</li>
                            <li>ALL Electrical Works, Lighting & Power</li>
                            <li>ELV Systems</li>
                            <li>Drainage & Sanitary</li>
                            <li>Plumbing Services</li>
                            <li>Solar System</li>
                            <li>Fire Fighting</li>
                        </div>
                         &nbsp;&nbsp;&nbsp;&nbsp; The dedicated MEP work execution team which includes Project Manager, discipline project engineers, site engineers, QA/QC, safety Officer, and necessary supervisors and labour forces etc. not limited, with office engineering back up will organize and execute the MEP works.<br/>
                         &nbsp;&nbsp;&nbsp;&nbsp; The authority liaison and inspections will be make sure as per the speculated authority tracking schedule. The specific commissioning program will be implemented the services associated with pre-commissioning, commissioning, and startups.<br/>
                         &nbsp;&nbsp;&nbsp;&nbsp; The Detailed Operation and Maintenance manuals, commissioning reports, preventive maintenance schedules & programs, material warranties, Guarantees, As built drawings, Authority approved drawings will be handed over and Client staff training will be conducted.<br/>
                    </div>
                </div>
            </div>
        </div>
    </>)
}
export default Contract;
