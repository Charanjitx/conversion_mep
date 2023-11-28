import Marquee from "react-fast-marquee";
import logo from "../../public/photos/logo.png"
import logo2 from "../../public/photos/emmar.png"
import logo3 from "../../public/photos/photos_conv/clients/AHG-Logo.jpg"
import logo4 from "../../public/photos/photos_conv/clients/Dubai-Properties-Logo.png"
import logo5 from "../../public/photos/photos_conv/clients/maf.jpg"
import logo6 from "../../public/photos/photos_conv/clients/damac.jpg"
import logo7 from "../../public/photos/photos_conv/clients/logo-nshama.png"
import logo8 from "../../public/photos/photos_conv/clients/meraas.jpg"
import logo9 from "../../public/photos/photos_conv/clients/nakheel.jpg"
import Image from "next/image";

const Clients = () => {
    return(<>
        <div className="py-5 bg-white">
            <Marquee>
                <div className="px-5">
                    <Image src={logo} alt="logo" className="w-48 h-auto"/>
                </div>
                <div className="px-5">
                    <Image src={logo2} alt="logo" className="w-48 h-auto"/>
                </div>
                <div className="px-5">
                    <Image src={logo3} alt="logo" className="w-48 h-auto"/>
                </div>
                <div className="px-5">
                    <Image src={logo4} alt="logo" className="w-48 h-auto"/>
                </div>
                <div className="px-5">
                    <Image src={logo5} alt="logo" className="w-48 h-auto"/>
                </div>
                <div className="px-5">
                    <Image src={logo6} alt="logo" className="w-48 h-auto"/>
                </div>
                <div className="px-5">
                    <Image src={logo7} alt="logo" className="w-48 h-auto"/>
                </div>
                <div className="px-5">
                    <Image src={logo8} alt="logo" className="w-48 h-auto"/>
                </div>
                <div className="px-5">
                    <Image src={logo9} alt="logo" className="w-48 h-auto"/>
                </div>
             </Marquee>
        </div>
    </>)
}
export default Clients;
