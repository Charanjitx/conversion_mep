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

        <div className="bg-[#111] text-white p-5" id="contact">
            <div className="my-8 text-3xl font-semibold text-center">Contact Us</div>
            <div className="justify-center text-lg md:flex">
                <div className="basis-5/12">
                    Name : <Input className="p-2 my-2 text-md" onChange={(e)=>setName(e.target.value)} value={name}/>
                    Phone : <Input className="p-2 my-2 text-md" type="tel" onChange={(e)=>setPhone(e.target.value)} value={phone}/>
                    Email : <Input className="p-2 my-2 text-md" type="email" onChange={(e)=>setEmail(e.target.value)} value={email}/>
                </div>
                <div className="md:pb-10 md:px-5 basis-1/2">
                    Message : <Textarea className="h-full p-2 my-2 text-md" onChange={(e)=>setMess(e.target.value)} value={mess}/>
                </div>
            </div>
            <div className="flex justify-center mt-10 mb-5">
                <Button variant="secondary" className="text-lg font-medium" onClick={()=>handleSend()}>
                    { loading ? <Spinner/> : <span>Submit</span> }
                </Button>
            </div>
        </div>

    </>)
}
export default Contact;
