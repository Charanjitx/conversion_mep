"use client"

import { useEffect } from "react";

import AOS from "aos";
import "aos/dist/aos.css";

import Navbar from "@/components/navbar";
import Certifications from "@/components/certification";
import Services from "@/components/services";
import First from "@/components/home";
import Projects from "@/components/projects";
import Clients from "@/components/clients";
import Footer from "@/components/footer";
import Contact from "@/components/contact";

const Home = () => {

    useEffect(() => {
        AOS.init();
        AOS.refresh();
    }, []);

    return(<>
        <div>
            <Navbar/>
            <First/>
            <Projects/>
            <Clients/>
            <Services/>
            <Certifications/>
            <Contact/>
            <Footer/>
        </div>
     </>)
}
export default Home;
