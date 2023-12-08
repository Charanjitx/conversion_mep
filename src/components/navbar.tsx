"use client"

import Link from "next/link";
import Image from "next/image";

import logo from "../../public/photos/logo.png"

import MenuIcon from '@mui/icons-material/Menu';
import { useState } from "react";
import { url } from "@/lib/url";

const Navbar = () => {

    const [isOpen,setIsOpen] = useState(false)

    const clsOpn = () => {
        setIsOpen((prev)=>!prev)
    }

    return(
        <div className="fixed flex flex-wrap justify-around items-center text-white z-10 bg-[rgba(0,0,0,0.7)] w-[100vw] h-20">
            <div className="flex justify-center basis-1/5">
                <Link href={`${url}`}><Image src={logo} alt="Logo" className="max-w-xl"/></Link>
            </div>
            <div className="items-center justify-around hidden lg:flex basis-4/5">
                <div className="text-lg font-medium hover:text-xl transition-all">
                    <Link href={`${url}/#`}>Home</Link>
                </div>
                <div className="text-lg font-medium hover:text-xl transition-all">
                    <Link href={`${url}/#certifications`}>Certifications</Link>
                </div>
                <div className="text-lg font-medium hover:text-xl transition-all">
                    <Link href={`${url}/#services`}>Services</Link>
                </div>
                <div className="text-lg font-medium hover:text-xl transition-all">
                    <Link href={`${url}/#projects`}>Projects</Link>
                </div>
                <div className="text-lg font-medium hover:text-xl transition-all">
                    <Link href="">Clients</Link>
                </div>
                <div className="text-lg font-medium hover:text-xl transition-all">
                    <Link href={`${url}/#contact`}>Contact us</Link>
                </div>
            </div>
            <button className="lg:hidden" onClick={()=>setIsOpen((prev)=>!prev)}>
                <MenuIcon fontSize="large"/>
            </button>
            {
                isOpen && <div className="w-full mt-1 bg-[rgba(0,0,0,0.7)]">
                <div className="flex flex-col items-center justify-around basis-4/5">
                    <div className="pt-5 text-lg font-medium hover:text-xl transition-all">
                        <Link href={`${url}/#`} onClick={clsOpn}>Home</Link>
                    </div>
                    <div className="py-5 text-lg font-medium hover:text-xl transition-all">
                        <Link href={`${url}/#certifications`} onClick={clsOpn}>Certifications</Link>
                    </div>
                    <div className="text-lg font-medium hover:text-xl transition-all">
                        <Link href={`${url}/#services`} onClick={clsOpn}>Services</Link>
                    </div>
                    <div className="py-5 text-lg font-medium hover:text-xl transition-all">
                        <Link href={`${url}/#projects`} onClick={clsOpn}>Projects</Link>
                    </div>
                    <div className="text-lg font-medium hover:text-xl transition-all">
                        <Link href={`${url}/#client`} onClick={clsOpn}>Clients</Link>
                    </div>
                    <div className="py-5 text-lg font-medium hover:text-xl transition-all">
                        <Link href={`${url}/#contact`} onClick={clsOpn}>Contact us</Link>
                    </div>
                </div>
            </div>
            }
        </div>)
}
export default Navbar;
