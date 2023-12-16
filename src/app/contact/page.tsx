"use client"

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import axios from "axios";
import { url } from "@/lib/url";
import { useToast } from "@/components/ui/use-toast"
import Spinner from "@/components/ui/spinner";


const ContactUs = () => {

    const [email,setEmail] = useState("")
    const [name,setName] = useState("")
    const [phone,setPhone] = useState("")
    const [mess,setMess] = useState("")
    const [loading,setLoading] = useState(false)

    const { toast } = useToast()

    const handleSend = async () => {
        if( email === "" ) {
            toast({
                description: "Please enter your email",
            })
        }else if( name === "" ) {
            toast({
                description: "Please enter your name",
            })
        }else if( phone === "" ) {
            toast({
                description: "Please enter your phone",
            })
        }else if( mess === "" ) {
            toast({
                description: "Please enter your mess",
            })
        }else{
        setLoading(true)
        setName("")
        setEmail("")
        setMess("")
        setPhone("")
        await axios.post(`${url}/api`,{email,name,phone,mess})
            .then((data)=>{
                console.log(data)
                if (data.data.status === 200) {
                    toast({
                        description: "Your contact request has been sent",
                    })
                }else{
                    toast({
                        description: "Please enter a valid mail",
                    })
                }
            })
            .catch(()=>{
                    toast({
                        description: "Sorry we cant reach our servers",
                    })
            })
            .finally(()=>{
                setLoading(false)
            })
        }
    }


    return(<div className="flex items-center justify-center bg-[#111] min-h-screen text-white">
        <div className="px-3 pt-24">
            <div className="mt-10 mb-3 text-5xl font-semibold text-center text-[#f3742f]">CONTACT US</div>
            <div className="py-5 text-lg text-center">
            Feel free to be in reach us via this contact form and our customer care representatives will get back to you with the closest convenience
            </div>
            <div className="mb-4 text-xl font-medium text-center"><span className="font-semibold">Phone : </span> 04 295 2727</div>
            <div className="my-4 text-xl font-medium text-center"><span className="font-semibold">Email : </span>info@conversionmep.com</div>
                <div className="flex flex-col items-center justify-center">
                    <div className="w-[80vw] text-lg lg:flex">
                        <div className="px-5 basis-1/2">
                            Name : <Input className="p-2 py-3 my-2 text-md" onChange={(e)=>setName(e.target.value)} value={name}/>
                            Phone : <Input className="p-2 my-2 text-md" type="tel" onChange={(e)=>setPhone(e.target.value)} value={phone}/>
                            Email : <Input className="p-2 my-2 text-md" type="email" onChange={(e)=>setEmail(e.target.value)} value={email}/>
                        </div>
                        <div className="px-5 basis-1/2">
                            Message : <Textarea className="p-2 my-2 h-5/6 text-md" onChange={(e)=>setMess(e.target.value)} value={mess}/>
                        </div>
                    </div>
                    <div className="flex justify-center mt-10 mb-5">
                        <Button variant="secondary" className="p-5 text-lg font-medium" onClick={()=>handleSend()}>
                            { loading ? <Spinner/> : <span>Submit</span> }
                        </Button>
                    </div>
                </div>
                <div className="flex flex-col items-center justify-center w-full py-5 pb-10">
                    <div className="py-5 text-3xl font-medium text-[#f3742f]">You can find us in</div>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3608.4010995165713!2d55.33395997538374!3d25.257089277672392!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f5cde2e954c2d%3A0x404a0909becb7e5d!2sConversion%20Electromechanical%20Works!5e0!3m2!1sen!2sin!4v1702051362993!5m2!1sen!2sin" className="w-11/12" height="500"  loading="lazy"></iframe>
                </div>
        </div>
    </div>)
}
export default ContactUs;
