import HeroSection from "@/app/components/HeroSection";
import Navbar from "@/app/components/Navbar";
import AboutSection from "@/app/components/AboutSection";
import ProjectsSection from "@/app/components/ProjectsSection";
import Contact from "@/app/components/Contact";
import Footer from "@/app/components/footer";

export default function Home() {
    return (
        <main className="flex min-h-screen flex-col ">
            <Navbar/>
            <container className="container mt-24 mx-auto px-12 py-4 ">
                <HeroSection/>
                <AboutSection/>
                <ProjectsSection/>
                <Contact/>
            </container>
            <Footer/>


        </main>
    );
}
