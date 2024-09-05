import DotPattern from "@/Components/magic-ui/dot-pattern";
import { FlipWords } from "@/Components/ui/flip-words";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { Button } from "@/Components/ui/button";
import { Link } from "@inertiajs/react";

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

    return (
        <>
            <section id="hero" className="py-16 md:py-28 mx-4 rounded-t-lg ">
                <div className="container px-4 md:px-6 max-w-7xl mx-auto">
                    <div className="grid gap-8 lg:grid-cols-[1fr_400px] xl:grid-cols-[1fr_600px] items-center">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            className="flex flex-col justify-center space-y-8"
                        >
                            <div className="space-y-6 ml-0 sm:ml-8">
                                <h1 className="text-4xl font-bold tracking-tight sm:text-5xl xl:text-6xl">
                                    S.Aziz Khan
                                </h1>
                                <h2 className="text-xl italic font-semibold tracking-normal text-gray-100">
                                    Full Stack Software Developer
                                </h2>
                                <div className="text-3xl sm:text-4xl font-normal text-gray-500 mt-4">
                                    Build
                                    <span className="font-bold tracking-tight ml-2 text-primary">
                                        <FlipWords words={words} />
                                    </span>
                                    <span className="text-gray-500">
                                        {" "}
                                        solutions
                                    </span>
                                </div>
                                <p className="max-w-[600px] text-gray-300 text-lg md:text-xl leading-relaxed">
                                    {`I'm a passionate software developer with expertise in building web applications and mobile apps. I love creating innovative solutions that solve real-world problems.`}
                                </p>
                                <div className="flex flex-wrap gap-4 mt-6">
                                    <Link href="#projects">
                                        <Button
                                            size="lg"
                                            className="transition-colors rounded-xl"
                                        >
                                            View Projects
                                        </Button>
                                    </Link>
                                    <Link href="#contact">
                                        <Button
                                            size="lg"
                                            variant="outline"
                                            className="rounded-xl"
                                        >
                                            Contact Me
                                        </Button>
                                    </Link>
                                </div>
                            </div>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                        >
                            <img
                                width={550}
                                src="./assets/aziz-avatar.jpeg"
                                alt="S.Aziz Khan"
                                className="mx-auto rounded-3xl shadow-xl transform hover:scale-105 transition duration-500 ease-in-out sm:w-full lg:order-last lg:aspect-square object-cover"
                            />
                        </motion.div>
                    </div>
                </div>
                <DotPattern
                    className={cn(
                        "[mask-image:radial-gradient(400px_circle_at_center,white,transparent)]",
                        "opacity-50"
                    )}
                />
            </section>
        </>
    );
}
