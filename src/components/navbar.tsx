"use client"

import Link from "next/link";
import Image from "next/image";

import logo from "/public/photos/logo.png"

import { ChevronDownIcon } from '@radix-ui/react-icons'

import MenuIcon from '@mui/icons-material/Menu';
import { useState } from "react";
import { url } from "@/lib/url";
import DropMnu from "./ui/dropdwn";
import DropMnuPh from "./ui/drpdwnph";

const Navbar = () => {

    const [isOpen,setIsOpen] = useState(false)
    const [show,setShow] = useState(false)

    const service = { lbl : "Service" , url : `${url}/services` }
    const projects = { lbl : "Projects" , url : `${url}/#projects` }

    const serProj = [
        { lbl : "Ongoing Projects" , url : `${url}/projects?status=ongoing` } ,
        { lbl : "Completed Projects" , url : `${url}/projects?status=finished` } ,
    ]

    const serArr = [
        { lbl : "Contracting Department" , url : `${url}/services/contract-dept` } ,
        { lbl : "Technical Department" , url : `${url}/services/tech-dept` } ,
        { lbl : "Maintence Department" , url : `${url}/services/main-dept` }
    ]

    const clsOpn = () => {
        setIsOpen((prev)=>!prev)
    }

    return(
        <div className="fixed flex flex-wrap justify-around items-center text-white z-10 bg-[rgba(0,0,0,0.8)] w-[100vw] h-20">
            <div className="flex justify-center basis-1/5">
                <Link href={`${url}`}><Image src={logo} alt="Logo" className="max-w-xl"/></Link>
            </div>
            <div className="items-center justify-around hidden lg:flex basis-4/5">
                <div className="text-lg font-medium hover:text-xl transition-all">
                    <Link href={`${url}/#`}>Home</Link>
                </div>
                <div className="text-lg font-medium hover:text-xl transition-all">
                    <Link href={`${url}/about`}>About Us</Link>
                </div>
                <div className="text-lg font-medium hover:text-xl transition-all">
                    <Link href={`${url}/#certifications`}>Certifications</Link>
                </div>
                <DropMnu lbl={service} itms={serArr} />
                <DropMnu lbl={projects} itms={serProj} />
                <div className="text-lg font-medium hover:text-xl transition-all">
                    <Link href={`${url}/clients`}>Clients</Link>
                </div>
                <div className="text-lg font-medium hover:text-xl transition-all">
                    <Link href={`${url}/contact`}>Contact us</Link>
                </div>
            </div>
            <button className="lg:hidden" onClick={()=>setIsOpen((prev)=>!prev)}>
                <MenuIcon fontSize="large"/>
            </button>
            {
                isOpen && <div className="w-full mt-1 bg-[rgba(0,0,0,0.8)]">
                <div className="flex flex-col items-center justify-around basis-4/5">
                    <div className="pt-5 text-lg font-medium hover:text-xl transition-all">
                        <Link href={`${url}/#`} onClick={clsOpn}>Home</Link>
                    </div>
                <div className="pt-5 text-lg font-medium hover:text-xl transition-all" onClick={clsOpn}>
                    <Link href={`${url}/about`}>About Us</Link>
                </div>
                    <div className="pt-5 text-lg font-medium hover:text-xl transition-all">
                        <Link href={`${url}/#certifications`} onClick={clsOpn}>Certifications</Link>
                    </div>
                    <DropMnuPh lbl={service} itms={serArr} setClsOpn={setIsOpen} />
                    <DropMnuPh lbl={projects} itms={serProj} setClsOpn={setIsOpen}/>
                    <div className="pt-5 text-lg font-medium hover:text-xl transition-all">
                        <Link href={`${url}/clients`} onClick={clsOpn}>Clients</Link>
                    </div>
                    <div className="py-5 text-lg font-medium hover:text-xl transition-all">
                        <Link href={`${url}/contact`} onClick={clsOpn}>Contact us</Link>
                    </div>
                </div>
            </div>
            }
        </div>)
}
export default Navbar;
