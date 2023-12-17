import data from "../../../clients.json"
import Image from "next/image";
const Client = () => {
    return(<>
        <div className="pt-24 pb-10 bg-[#111]">
            <div className="text-white">
                <div className="pt-3 md:text-7xl text-5xl font-bold text-center text-[#ff8731]">OUR CLIENTS</div>
                <div className="p-5 text-lg font-medium text-center md:text-xl">
                At Conversion MEP, our success is rooted in the satisfaction and achievements of our clients. Join the ranks of satisfied clients who have entrusted us to propel their success stories forward. Your journey to success starts with us.
                </div>
            </div>
            <div className="flex flex-wrap items-center justify-center p-5 mx-10 bg-white">
            { data.map((ele,idx )=>{
                return(<div key={idx} className="p-3">
                             <Image src={ele} alt="logo" width={100} height={100}/>
                </div>)
               })
            }
            </div>
       </div>
    </>)
}
export default Client;
