import About from "@/components/About";
import LandingPage from "@/components/LandingPage";
import Marquee from "@/components/Marquee";
import NavBar from "@/components/NavBar";
import Image from "next/image";

export default function Home() {
  return (
   <>
   <div className="h-screen w-screen bg-zinc-900 text-white">
    <NavBar/>
    <LandingPage/>
    <Marquee/>
    <About/>
   </div>
   </>
  );
}
