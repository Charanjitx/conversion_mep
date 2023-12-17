"use client"

import Image from "next/image";
import certificate from "../../public/photos/policy3.jpg"

const Certifications = () => {

    return(<>
        <div className="min-h-[80vh] bg-[#fff] flex-col flex justify-center items-center overflow-hidden" id="certifications">
                <div className="mt-3 mb-8 lg:text-6xl md:text-5xl text-4xl p-5 font-bold text-[#f3742f] text-center" data-aos="fade-right">CERTIFICATES OF OUR COMPANY</div>
                <div className="flex flex-wrap items-center justify-evenly" data-aos="fade-left">
                    <div className="flex flex-col items-center justify-center mx-5 basis 1/3">
                        <Image src={certificate} alt="certificate" className="w-3/5 border-2 border-black rounded md:w-56 sm:w-36 lg:w-72"/>
                        <div className="p-2 text-lg font-medium text-center">Certificate of Perseverance</div>
                    </div>
                    <div className="flex flex-col items-center justify-center mx-5 basis 1/3">
                        <Image src={certificate} alt="certificate" className="w-3/5 border-2 border-black rounded md:w-56 sm:w-36 lg:w-72"/>
                        <div className="p-2 text-lg font-medium text-center">Certificate of Perseverance</div>
                    </div>
                    <div className="flex flex-col items-center justify-center mx-5 basis 1/3">
                        <Image src={certificate} alt="certificate" className="w-3/5 border-2 border-black rounded sm:w-36 md:w-56 lg:w-72"/>
                        <div className="p-2 text-lg font-medium text-center">Certificate of Perseverance</div>
                    </div>
                </div>
            </div>
    </>)
}
export default Certifications;
