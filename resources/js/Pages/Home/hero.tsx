import DotPattern from "@/Components/magic-ui/dot-pattern";
import { FlipWords } from "@/Components/ui/flip-words";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { Button } from "@/Components/ui/button";
import { Link } from "@inertiajs/react";
import { FaArrowRight, FaEnvelope } from "react-icons/fa";
import { useEffect, useState } from "react";
import { Github01Icon, Linkedin01Icon } from "hugeicons-react";

export default function Hero() {
    const words = [
        "innovative",
        "scalable",
        "user-friendly",
        "efficient",
        "secure",
        "reliable",
        "seamless",
        "interactive",
        "robust",
        "versatile",
        "intuitive",
        "performant",
    ];
    const socialLinks = {
        GitHub: "https://github.com/s-azizkhan",
        LinkedIn: "https://www.linkedin.com/in/sakat-aziz-khan/",
        Twitter: "https://x.com/JusttAzizz",
    };

    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => setIsVisible(true), 500);
        return () => clearTimeout(timer);
    }, []);

    return (
        <>
            <section
                id="hero"
                className="pb-20 md:py-32 mx-4 rounded-t-2xl relative overflow-hidden"
            >
                <div className="container px-4 md:px-6 max-w-7xl mx-auto relative z-10">
                    <div className="grid gap-12 lg:grid-cols-[1fr_400px] xl:grid-cols-[1fr_600px] items-center">
                        <motion.div
                            initial={{ opacity: 0, y: 50 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{
                                duration: 0.8,
                                delay: 0.4,
                                ease: "easeOut",
                            }}
                            className="relative w-full max-w-md mx-auto mt-12 lg:mt-0"
                        >
                            <div className="absolute inset-0 bg-gradient-to-br from-purple-400/20 to-blue-500/20 rounded-2xl filter blur-xl"></div>
                            <div className="relative bg-white/10 backdrop-blur-md rounded-2xl p-6 shadow-2xl overflow-hidden">
                                <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-purple-400 to-blue-500"></div>
                                <img
                                    src="./assets/aziz-avatar.jpeg"
                                    alt="S.Aziz Khan"
                                    className="w-32 h-32 rounded-full mx-auto mb-4 border-4 border-white/30 shadow-lg"
                                />
                                <h3 className="text-2xl font-bold text-center text-white mb-2">
                                    S.Aziz Khan
                                </h3>
                                <p className="text-gray-300 text-center mb-4">
                                    Full Stack Software Developer
                                </p>
                                <div className="flex justify-center space-x-4">
                                    <a
                                        href={socialLinks.Twitter}
                                        className="text-blue-400 hover:text-blue-300 transition-colors"
                                    >
                                        <svg
                                            className="w-6 h-6"
                                            fill="currentColor"
                                            viewBox="0 0 24 24"
                                            aria-hidden="true"
                                        >
                                            <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                                        </svg>
                                    </a>
                                    <a
                                        href={socialLinks.GitHub}
                                        className="text-gray-400 hover:text-gray-300 transition-colors"
                                    >
                                        <Github01Icon className="w-6 h-6" />
                                    </a>
                                    <a
                                        href={socialLinks.LinkedIn}
                                        className="text-blue-600 hover:text-blue-500 transition-colors"
                                    >
                                        <Linkedin01Icon className="w-6 h-6" />
                                    </a>
                                </div>

                                <a href="#contact" className="cursor-pointer">
                                    <div className="mt-6 text-center">
                                        <span className="px-4 py-2 bg-green-500/20 rounded-full text-sm text-white font-medium">
                                            Available for freelance work
                                        </span>
                                    </div>
                                </a>
                            </div>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, y: 50 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                            className="flex flex-col justify-center space-y-10"
                        >
                            <div className="space-y-5 ml-0 sm:ml-8">
                                <div className="flex flex-col space-y-1">
                                    <h1 className="text-5xl font-bold tracking-tight sm:text-6xl xl:text-7xl bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-500">
                                        S.Aziz Khan
                                    </h1>
                                    <h2 className="text-2xl italic font-semibold tracking-normal text-gray-100">
                                        Full Stack Software Developer
                                    </h2>
                                    <div className="text-3xl sm:text-4xl font-normal text-gray-400 mt-6">
                                        Build
                                        <span className="font-bold tracking-tight ml-2 text-primary">
                                            <FlipWords words={words} />
                                        </span>
                                        <span className=""> solutions</span>
                                    </div>
                                </div>
                                <div className="flex flex-col space-y-1">
                                    <p className="max-w-[600px] text-gray-300 text-xl md:text-2xl leading-relaxed">
                                        {`I'm a passionate software developer with expertise in building cutting-edge web applications and mobile apps. I thrive on creating innovative solutions that solve real-world problems and push the boundaries of technology.`}
                                    </p>
                                </div>

                                <div className="flex flex-wrap gap-6 mt-8">
                                    <a href="#projects">
                                        <Button
                                            size="lg"
                                            className="transition-all duration-300 rounded-xl bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 text-white font-semibold py-3 px-8 shadow-lg hover:shadow-xl"
                                        >
                                            View Projects
                                            <FaArrowRight className="ml-2" />
                                        </Button>
                                    </a>
                                    <a href="#contact">
                                        <Button
                                            size="lg"
                                            variant="outline"
                                            className="rounded-xl border-2 border-gray-300 hover:border-white text-gray-300 hover:text-white font-semibold py-3 px-8 transition-all duration-300"
                                        >
                                            Contact Me
                                            <FaEnvelope className="ml-2" />
                                        </Button>
                                    </a>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
                <DotPattern
                    className={cn(
                        "[mask-image:radial-gradient(600px_circle_at_center,white,transparent)]",
                        "opacity-30 absolute inset-0 z-0"
                    )}
                />
                {isVisible && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1 }}
                        className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-background to-transparent"
                    />
                )}
            </section>
        </>
    );
}
