import DotPattern from "@/Components/magic-ui/dot-pattern";
import { FlipWords } from "@/Components/ui/flip-words";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { Button } from "@/Components/ui/button";
import { Link } from "@inertiajs/react";
import { FaArrowRight, FaEnvelope } from "react-icons/fa";
import { useEffect, useState } from "react";

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

    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => setIsVisible(true), 500);
        return () => clearTimeout(timer);
    }, []);

    return (
        <>
            <section
                id="hero"
                className="py-20 md:py-32 mx-4 rounded-t-2xl relative overflow-hidden"
            >
                <div className="container px-4 md:px-6 max-w-7xl mx-auto relative z-10">
                    <div className="grid gap-12 lg:grid-cols-[1fr_400px] xl:grid-cols-[1fr_600px] items-center">
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
                                    <Link href="#projects">
                                        <Button
                                            size="lg"
                                            className="transition-all duration-300 rounded-xl bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 text-white font-semibold py-3 px-8 shadow-lg hover:shadow-xl"
                                        >
                                            View Projects
                                            <FaArrowRight className="ml-2" />
                                        </Button>
                                    </Link>
                                    <Link href="#contact">
                                        <Button
                                            size="lg"
                                            variant="outline"
                                            className="rounded-xl border-2 border-gray-300 hover:border-white text-gray-300 hover:text-white font-semibold py-3 px-8 transition-all duration-300"
                                        >
                                            Contact Me
                                            <FaEnvelope className="ml-2" />
                                        </Button>
                                    </Link>
                                </div>
                            </div>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, y: 50 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                            className="relative"
                        >
                            <div className="absolute inset-0 bg-gradient-to-br from-purple-600/20 to-blue-600/20 rounded-3xl filter blur-2xl"></div>
                            <div className="relative w-full h-[600px] overflow-hidden rounded-3xl shadow-2xl">
                                <div className="absolute inset-0 bg-gradient-to-tr from-purple-600/30 to-blue-600/30"></div>
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <div className="w-80 h-80 rounded-full overflow-hidden border-8 border-white/30 shadow-inner">
                                        <img
                                            src="./assets/aziz-avatar.jpeg"
                                            alt="S.Aziz Khan"
                                            className="w-full h-full object-cover transform hover:scale-110 transition duration-500 ease-in-out"
                                        />
                                    </div>
                                </div>
                                <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-black/70 to-transparent">
                                    <h3 className="text-3xl font-bold text-white mb-2">
                                        S.Aziz Khan
                                    </h3>
                                    <p className="text-lg text-gray-300">
                                        Full Stack Developer & UI/UX Enthusiast
                                    </p>
                                </div>
                                <div className="absolute top-4 right-4 space-y-2 space-x-2">
                                    {[
                                        "React",
                                        "Node.js",
                                        "TypeScript",
                                        "UI/UX",
                                    ].map((skill, index) => (
                                        <span
                                            key={index}
                                            className="inline-block px-3 py-1 text-sm font-semibold text-white bg-blue-500/50 rounded-full backdrop-blur-sm"
                                        >
                                            {skill}
                                        </span>
                                    ))}
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
