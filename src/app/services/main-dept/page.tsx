import Navbar from "@/components/navbar";
import Image from "next/image";
import main from "../../../..//public/photos/main-crp.jpeg"

const Main = () => {
    return(<>
        <div className="bg-[#111] min-h-[100vh]">
            <Navbar/>
            <div className="pt-20 text-white">
                <div className="mb-2 text-3xl font-semibold text-center text-[#f3742f]" data-aos="fade-top">MEP MAINTENANCE DEPARTMENT</div>
                <div className="lg:flex">
                    <div className="flex items-center justify-center basis-5/12">
                    <div className="max-w-xl" data-aos="fade-left"><Image src={main} alt="Contracting dept img" className="w-full lg:m-5"/></div>
                    </div>
                    <div className="p-5 leading-loose text-md basis-7/12" data-aos="fade-right">
                        &nbsp;&nbsp;&nbsp;&nbsp;
                        A Specialized Department with qualified engineers & skilledtechnicians for maintenance works of different premises
                        <div className="p-5">
                            <li>All HVAC Systems</li>
                            <li>ALL Electrical Works, Lighting & Power</li>
                            <li>Drainage & Sanitary</li>
                            <li>Plumbing Services</li>
                            <li>Fire Fighting</li>
                        </div>
                         &nbsp;&nbsp;&nbsp;&nbsp;
                         We are Offering Our clients special high quality services including preventive,corrective, predictive & overhaul maintenance with Annual contract for allabove services .
                    </div>
                </div>
            </div>
        </div>
    </>)
}
export default Main;
