"use client"
import { ArrowRightIcon, DrawingPinFilledIcon } from "@radix-ui/react-icons";
import Image from "next/image";
import { useRouter } from "next/navigation";
import about from "/public/photos/about.png"
import about2 from "/public/photos/about-2.png"

const About = () => {
    const router = useRouter()
    return(<>
        <div className="min-h-screen md:p-10 bg-[#111] md:text-lg text-md">
            <div className="flex items-center justify-center py-5 xl:py-10">
                <div className="w-11/12 mt-24 md:my-14 md:flex">
                    <div className="flex items-center justify-center text-5xl font-bold sm:text-7xl basis-1/2 lg:text-8xl text-[#ff8731] my-5">
                        About our firm
                    </div>
                    <div className="flex flex-col items-start justify-center text-white basis-1/2">
                        <div className="p-3 leading-relaxed lg:leading-loose">
                        Welcome to Conversion Electromechanical Company Ltd – a leading force in electromechanical solutions. Committed to excellence, we deliver innovative and sustainable engineering solutions to meet our clients evolving needs.
                        </div>
                        <button className="flex items-center p-3 mt-5 text-lg font-medium text-black bg-white rounded-full" onClick={()=>router.push("/contact")} >
                        Get In Touch<ArrowRightIcon className="ml-4"/></button>
                    </div>
                </div>
            </div>
            <div className="mt-20 mb-10 text-white xl:mb-20">
                <hr/>
                <div className="flex items-center pl-10 mt-3 font-medium"> <DrawingPinFilledIcon className="w-6 mr-5"/> More about us</div>
            </div>
            <div className="flex flex-col items-center justify-center">
                <div className="items-center justify-center w-11/12 text-white xl:flex">
                    <div className="items-center justify-center hidden xl:flex basis-1/2 fade-effect">
                        <div className="flex items-center justify-center w-full"><div className="fade-overlay"></div></div>
                        <Image src={about} className="object-cover min-w-full min-h-full" alt="No Imagee"/>
                    </div>
                    <div className="flex flex-col items-start justify-center p-3 mb-10 xl:mb-5 basis-1/2 xl:pl-10">
                        <div className="my-5 text-5xl font-semibold md:my-10 lg:text-7xl">Our firm story</div>
                        <div className="leading-relaxed lg:leading-loose">
                        Lorem ipsum dolor sit amet consectetur tincidunt magna habitant nunc donec est cras sodales sit nullam congue id nisi ultricies sit faucibus sagittis risus bibendum fermentum suspendisse cum turpis sapien et viverra a consectetur nunc at est tellus diam erat sed varius egestas.
                        </div>
                    </div>
                    <div className="flex items-center justify-center xl:hidden basis-1/2 fade-effect">
                        <div className="flex items-center justify-center w-full"><div className="fade-overlay"></div></div>
                        <Image src={about} className="object-cover min-w-full min-h-full" alt="No Imagee"/>
                    </div>

                </div>
                <div className="items-center justify-center w-11/12 mt-16 text-white xl:flex">
                    <div className="flex flex-col items-start justify-center mb-10 basis-1/2 xl:pl-10">
                        <div className="my-5 text-5xl font-semibold md:my-10 lg:text-7xl">How we started</div>
                        <div className="p-3 leading-relaxed lg:leading-loose">
                        Lorem ipsum dolor sit amet consectetur tincidunt magna habitant nunc donec est cras sodales sit nullam congue id nisi ultricies sit faucibus sagittis risus bibendum fermentum suspendisse cum turpis sapien et viverra a consectetur nunc at est tellus diam erat sed varius egestas.
                        </div>
                    </div>
                    <div className="flex items-center justify-center basis-1/2 fade-effect">
                        <div className="flex items-center justify-center w-full"><div className="fade-overlay2"></div></div>
                        <Image src={about2} className="object-cover min-w-full min-h-full" alt="No Imagee"/>
                    </div>
                </div>
            </div>

            <div className="mt-20 mb-10 text-white xl:mb-20">
                <hr/>
                <div className="flex items-center pl-10 mt-3 font-medium"> <DrawingPinFilledIcon className="w-6 mr-5"/>Stats of our company</div>
            </div>

            <div className="py-10 bg-[#111]">
                <div className="text-5xl font-semibold text-center text-white lg:text-7xl">
                    Our imapct in numbers
                </div>
                <div className="px-5 my-10">
                    <div className="flex flex-wrap items-center justify-around p-10 text-black bg-white">
                        <div className="flex items-center justify-between sm:justify-around basis-1/2">
                            <div className="flex flex-col items-center justify-center p-5 text-5xl font-bold lg:text-7xl">
                                20+
                                <div className="mt-3 text-sm font-medium lg:text-lg">Years of experience</div>
                            </div>
                            <div className="flex flex-col items-center justify-center p-5 text-5xl font-bold lg:text-7xl">
                                200+
                                <div className="mt-3 text-lg font-medium">Projects</div>
                            </div>
                        </div>
                        <div className="flex items-center justify-between sm:justify-around basis-1/2">
                            <div className="flex flex-col items-center justify-center p-5 text-5xl font-bold lg:text-7xl">
                                200+
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
    </>)
}
export default About;
