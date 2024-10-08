import Projects from "./projects";
import Skills from "./skills";
import Contact from "./contact";
import Hero from "./hero";
import { Navbar } from "./_components/Navbar";
import { Footer } from "./_components/Footer";
import AboutMe from "./about-me";

export function LandingComponent() {
    return (
        <div className="flex flex-col min-h-[100dvh]">
            <Navbar />

            <main className="flex-1 mt-20 lg:mt-10">
                <Hero />

                <AboutMe />


                <Skills />

                <Projects />

                <Contact />
            </main>
            <Footer />
        </div>
    );
}
