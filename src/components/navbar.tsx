"use client"

import Link from "next/link";
import Image from "next/image";

import logo from "../../public/photos/logo.png"

import MenuIcon from '@mui/icons-material/Menu';
import { useState } from "react";

const Navbar = () => {

    const [isOpen,setIsOpen] = useState(false)

    const clsOpn = () => {
        setIsOpen((prev)=>!prev)
    }

    return(
        <div className="fixed flex flex-wrap justify-around items-center text-white z-10 bg-[rgba(0,0,0,0.7)] w-[100vw] h-20">
            <div className="flex justify-center basis-1/5">
                <Link href="http://localhost:3000"><Image src={logo} alt="Logo" className="max-w-xl"/></Link>
            </div>
            <div className="items-center justify-around hidden lg:flex basis-4/5">
                <div className="text-lg font-medium hover:text-xl transition-all">
                    <Link href="http://localhost:3000/#">Home</Link>
                </div>
                <div className="text-lg font-medium hover:text-xl transition-all">
                    <Link href="http://localhost:3000/#certifications">Certifications</Link>
                </div>
                <div className="text-lg font-medium hover:text-xl transition-all">
                    <Link href="http://localhost:3000/#services">Services</Link>
                </div>
                <div className="text-lg font-medium hover:text-xl transition-all">
                    <Link href="http://localhost:3000/#projects">Projects</Link>
                </div>
                <div className="text-lg font-medium hover:text-xl transition-all">
                    <Link href="">Clients</Link>
                </div>
                <div className="text-lg font-medium hover:text-xl transition-all">
                    <Link href="http://localhost:3000/#contact">Contact us</Link>
                </div>
            </div>
            <button className="lg:hidden" onClick={()=>setIsOpen((prev)=>!prev)}>
                <MenuIcon fontSize="large"/>
            </button>
            {
                isOpen && <div className="w-full pt-2 bg-[rgba(0,0,0,0.7)]">
                <div className="flex flex-col items-center justify-around basis-4/5">
                    <div className="py-5 text-lg font-medium hover:text-xl transition-all">
                        <Link href="http://localhost:3000/#" onClick={clsOpn}>Home</Link>
                    </div>
                    <div className="py-5 text-lg font-medium hover:text-xl transition-all">
                        <Link href="http://localhost:3000/#certifications" onClick={clsOpn}>Certifications</Link>
                    </div>
                    <div className="text-lg font-medium hover:text-xl transition-all">
                        <Link href="http://localhost:3000/#services" onClick={clsOpn}>Services</Link>
                    </div>
                    <div className="py-5 text-lg font-medium hover:text-xl transition-all">
                        <Link href="" onClick={clsOpn}>Projects</Link>
                    </div>
                    <div className="text-lg font-medium hover:text-xl transition-all">
                        <Link href="" onClick={clsOpn}>Clients</Link>
                    </div>
                    <div className="py-5 text-lg font-medium hover:text-xl transition-all">
                        <Link href="http://localhost:3000/#contact" onClick={clsOpn}>Contact us</Link>
                    </div>
                </div>
            </div>
            }
        </div>)
}
export default Navbar;