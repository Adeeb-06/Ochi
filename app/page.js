"use client"
import About from "@/components/About";
import Cards from "@/components/Cards";
import Eyes from "@/components/Eyes";
import Featured from "@/components/Featured";
import { Footer } from "@/components/Footer";
import LandingPage from "@/components/LandingPage";
import Marquee from "@/components/Marquee";
import NavBar from "@/components/NavBar";
import Ready from "@/components/Ready";
import Image from "next/image";
import LocomotiveScroll from 'locomotive-scroll';
import { useEffect } from "react";



export default function Home() {
   useEffect(() => {
    const locomotiveScroll = new LocomotiveScroll();
  }, []);

  return (
   <>
   <div className="h-screen w-screen bg-zinc-900 text-white">
    <NavBar/>
    <LandingPage/>
    <Marquee/>
    <About/>
    <Eyes/>
    <Featured/>
    <Cards/>
    <Ready/>
    <Footer/>
   </div>
   </>
  );
}
