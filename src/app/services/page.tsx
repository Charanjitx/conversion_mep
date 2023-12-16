"use client"
import Clients from "@/components/clients";
import Services from "@/components/services";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const Service = () => {
    useEffect(() => {
        AOS.init();
        AOS.refresh();
    }, []);
    return(<>
        <Services/>
    </>)
}
export default Service;
