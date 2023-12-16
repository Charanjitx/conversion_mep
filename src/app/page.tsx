"use client"

import { useEffect } from "react";

import AOS from "aos";
import "aos/dist/aos.css";

import Certifications from "@/components/certification";
import Services from "@/components/services";
import First from "@/components/home";
import Projects from "@/components/projects";
import Clients from "@/components/clients";
import Contact from "@/components/contact";

const Home = () => {

    useEffect(() => {
        AOS.init();
        AOS.refresh();
    }, []);

    return(<>
        <div>
            <First/>
            <Projects/>
            <Clients/>
            <Services/>
            <Certifications/>
            <Contact/>
        </div>
     </>)
}
export default Home;
