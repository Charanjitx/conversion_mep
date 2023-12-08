"use client"

import { useState } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import axios from "axios";
import { url } from "@/lib/url";
import { useToast } from "@/components/ui/use-toast"
import Spinner from "./ui/spinner";

const Contact = () => {

    const [email,setEmail] = useState("")
    const [name,setName] = useState("")
    const [phone,setPhone] = useState("")
    const [mess,setMess] = useState("")
    const [loading,setLoading] = useState(false)

    const { toast } = useToast()

    const handleSend = async () => {
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

    return(<>

        <div className="bg-[#111] text-white p-5 overflow-hidden" id="contact">
            <div className="my-8 text-3xl font-semibold text-center">Contact Us</div>
            <div className="lg:flex">
                <div className="basis-1/2">
                    <div className="text-lg">
                            Name : <Input className="p-2 my-2 text-md" onChange={(e)=>setName(e.target.value)} value={name}/>
                            Phone : <Input className="p-2 my-2 text-md" type="tel" onChange={(e)=>setPhone(e.target.value)} value={phone}/>
                            Email : <Input className="p-2 my-2 text-md" type="email" onChange={(e)=>setEmail(e.target.value)} value={email}/>
                            Message : <Textarea className="h-40 p-2 my-2 text-md" onChange={(e)=>setMess(e.target.value)} value={mess}/>
                    </div>
                    <div className="flex justify-center mt-10 mb-5">
                        <Button variant="secondary" className="text-lg font-medium" onClick={()=>handleSend()}>
                            { loading ? <Spinner/> : <span>Submit</span> }
                        </Button>
                    </div>
                </div>
                <div className="flex items-center justify-center p-5 basis-1/2">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3608.4010995165713!2d55.33395997538374!3d25.257089277672392!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f5cde2e954c2d%3A0x404a0909becb7e5d!2sConversion%20Electromechanical%20Works!5e0!3m2!1sen!2sin!4v1702051362993!5m2!1sen!2sin" width="550" height="500"  loading="lazy"></iframe>
                </div>
            </div>
        </div>

    </>)
}
export default Contact;
