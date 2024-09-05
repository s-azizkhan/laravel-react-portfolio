import { motion } from "framer-motion";
import MaxWidthWrapper from "@/Components/shared/max-width-wrapper";
import {
    FaCode,
    FaLightbulb,
    FaRocket,
    FaLinkedin,
    FaGithub,
    FaPeopleCarry,
} from "react-icons/fa";
import { Link } from "@inertiajs/react";
import { Button } from "@/Components/ui/button";
import { ArrowDown01Icon, PeerToPeer01Icon } from "hugeicons-react";
import { GroupIcon } from "@radix-ui/react-icons";
import { useState } from "react";
import ExpandableText from "@/Components/shared/expandable-text";

export default function AboutMe() {
    const fullText = `
        Hello! I'm S.Aziz Khan, a full-stack developer with a passion for crafting elegant and efficient solutions to complex problems. My journey in the world of programming began with a fascination for how technology can transform ideas into reality.

        With expertise in both front-end and back-end technologies, I enjoy creating seamless user experiences while ensuring robust and scalable architectures. My approach combines creativity with technical precision, always striving to deliver high-quality code that makes a difference.

        When I'm not coding, you can find me exploring new technologies, contributing to open-source projects, or sharing my knowledge through mentoring and tech community engagements.
    `;

    const highlights = [
        {
            icon: <FaCode className="text-3xl text-primary" />,
            title: "Passionate Coder",
            description: "I breathe life into ideas through elegant code.",
        },
        {
            icon: <FaLightbulb className="text-3xl text-primary" />,
            title: "Problem Solver",
            description:
                "I thrive on tackling complex challenges with innovative solutions.",
        },
        {
            icon: <FaRocket className="text-3xl text-primary" />,
            title: "Continuous Learner",
            description:
                "Always exploring new technologies to stay at the cutting edge.",
        },
    ];

    return (
        <MaxWidthWrapper className="mx-0 px-0 lg:mx-auto">
            <section id="about" className="w-full py-24 lg:py-32">
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1 }}
                    className="container mx-auto px-4 md:px-6 relative"
                >
                    <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 via-blue-500/10 to-teal-500/10 blur-3xl"></div>
                    <div className="relative z-10 backdrop-blur-lg bg-white/5 rounded-3xl border border-white/10 p-8 md:p-12 shadow-2xl">
                        <motion.h2
                            className="text-5xl font-bold tracking-tight sm:text-6xl md:text-7xl text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-violet-500 to-blue-500"
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                        >
                            About Me
                        </motion.h2>

                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                            <motion.div
                                initial={{ opacity: 0, x: -50 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.8, delay: 0.2 }}
                                className="space-y-6"
                            >
                                <ExpandableText
                                    text={fullText.trim()}
                                    maxLength={300}
                                    className="text-gray-200 text-lg leading-relaxed"
                                />

                                {/* View skills button */}
                                <motion.button
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="w-full mt-6"
                                >
                                    <a href="#skills">
                                        <Button
                                            variant="outline"
                                            className="w-full font-semibold text-lg rounded-2xl h-16 transition bg-gradient-to-r from-purple-400 via-violet-500 to-blue-500 duration-300"
                                        >
                                            View Skills
                                            <ArrowDown01Icon className="size-6 ml-2" />
                                        </Button>
                                    </a>
                                </motion.button>
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, x: 50 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.8, delay: 0.4 }}
                                className="grid gap-6"
                            >
                                {highlights.map((item, index) => (
                                    <motion.div
                                        key={index}
                                        className="flex items-center space-x-4 bg-gradient-to-r from-purple-900/20 to-blue-900/20 backdrop-blur-md p-4 rounded-xl border border-white/10 hover:border-white/20 transition-all duration-300 group"
                                        whileHover={{ scale: 1.03, y: -3 }}
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{
                                            duration: 0.5,
                                            delay: 0.1 * index,
                                        }}
                                    >
                                        <div className="flex-shrink-0 p-3 bg-white/10 rounded-full group-hover:bg-white/20 transition-colors duration-300">
                                            {item.icon}
                                        </div>
                                        <div>
                                            <h3 className="text-xl font-semibold text-white mb-1">
                                                {item.title}
                                            </h3>
                                            <p className="text-gray-300 text-sm">
                                                {item.description}
                                            </p>
                                        </div>
                                    </motion.div>
                                ))}

                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5, delay: 0.5 }}
                                    className="mt-8"
                                >
                                    <a href="#contact">
                                        <Button
                                            variant="outline"
                                            className="w-full font-semibold text-lg rounded-2xl h-16 transition bg-gradient-to-r from-purple-400 via-violet-500 to-blue-500 duration-300 hover:scale-105"
                                        >
                                            Let's Work Together
                                            <FaPeopleCarry className="size-6 ml-2" />
                                        </Button>
                                    </a>
                                </motion.div>
                            </motion.div>
                        </div>
                    </div>
                </motion.div>
            </section>
        </MaxWidthWrapper>
    );
}
