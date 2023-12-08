import Marquee from "react-fast-marquee";
import data from "./../../clients.json"
import Image from "next/image";

const Clients = () => {
    return(<>
        <div className="py-5 overflow-hidden bg-white" id="client">
            <Marquee>
            { data.map((ele,idx)=>{
                return(
                    <div className="px-5" key={idx}>
                        <Image src={ele} alt="logo" width={85} height={85}/>
                    </div>
                )
            })
            }
             </Marquee>
            <Marquee direction="right" className="mt-5">
            { data.map((ele,idx)=>{
                return(
                    <div className="px-5" key={idx}>
                        <Image src={ele} alt="logo" width={85} height={85}/>
                    </div>
                )
            })
            }
             </Marquee>
        </div>
    </>)
}
export default Clients;
