import Marquee from "react-fast-marquee";
import logo from "../../public/photos/logo.png"
import logo2 from "../../public/photos/emmar.png"

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
             </Marquee>
        </div>
    </>)
}
export default Clients;
