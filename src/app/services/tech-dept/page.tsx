import Navbar from "@/components/navbar";
import Image from "next/image";
import tech from "../../../../public/photos/tech.jpg"

const Tech = () => {
    return(<>
        <div className="bg-[#111] min-h-[100vh]">
            <Navbar/>
            <div className="pt-20 text-white">
                <div className="mb-2 text-3xl font-semibold text-center text-[#f3742f]" data-aos="fade-top">MEP TECHNICAL DEPARTMENT</div>

                <div className="mb-2 text-xl py-3 font-semibold text-center text-[#f3742f]" data-aos="fade-top">MEP DESIGN DEPARTMENT</div>
                <div className="lg:flex">
                    <div className="flex items-center justify-center px-3 basis-5/12">
                        <div className="max-w-xl" data-aos="fade-left"><Image src={tech} alt="Contracting dept img" className="w-full lg:m-5"/></div>
                    </div>
                    <div className="p-5 leading-loose text-md basis-7/12" data-aos="fade-right">
                        &nbsp;&nbsp;&nbsp;&nbsp;
                        In Our Belief That The Effort And Engineering Planning Is The Basis For All The Projects So It Was Necessary To Prepare A Specialized Department Of Qualified Engineers With Skilled Draftsmen To Perform Engineering Works in house For All Electromechanical Services & Systems
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
                         &nbsp;&nbsp;&nbsp;&nbsp; 
                          In order to begin engineering works following documents were ensured as reference documents and shop drawing and material submission will be performed as per the tracking schedules.
                        <div className="p-5">
                            <li>Issued for Construction Drawings –MEP</li>
                            <li>Specifications</li>
                    <li>Authority approved drawings (ADDC,DEWA,SEWA,FEWA, DCD, Telephone, Dubai Police security Dept, Drainage, Municipality…etc)</li>
                            <li>Issued for Construction Architectural & Structural Drawings</li>
                            <li>ID drawings, if Relevant.</li>
                        </div>
                    </div>
                </div>

                <div className="mb-2 text-xl py-3 font-semibold text-center text-[#f3742f]" data-aos="fade-top">MEP ESTIMATION DEPARTMENT</div>
                <div className="lg:flex">
                    <div className="flex items-center justify-center px-3 basis-5/12">
                        <div className="max-w-xl" data-aos="fade-left"><Image src={tech} alt="Contracting dept img" className="w-full lg:m-5"/></div>
                    </div>
                    <div className="p-5 leading-loose text-md basis-7/12" data-aos="fade-right">
                        &nbsp;&nbsp;&nbsp;&nbsp;
                        A Specialized Department In The Pricing Of Diversified Projects FOR ALL ELECTROMECHNICALServices & Systems
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
                    </div>
                </div>


            </div>
        </div>
    </>)
}
export default Tech;
