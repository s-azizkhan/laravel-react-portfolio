import { Card, CardContent, CardHeader } from "@/Components/ui/card";
import { DatabaseSettingIcon } from "hugeicons-react";
import { FaReact, FaNodeJs, FaTools } from "react-icons/fa";
import { SiFramework } from "react-icons/si";
import { motion } from "framer-motion";
import MaxWidthWrapper from "@/Components/shared/max-width-wrapper";

export default function Skills() {
    const skills = [
        {
            title: "Frontend",
            icon: <FaReact className="text-4xl text-blue-400" />,
            items: [
                "NextJS",
                "ReactJS",
                "JavaScript",
                "HTML/CSS",
                "TypeScript",
            ],
        },
        {
            title: "Backend",
            icon: <FaNodeJs className="text-4xl text-green-500" />,
            items: ["Node.js", "Python", "Express", "MongoDB", "PostgreSQL"],
        },
        {
            title: "Frameworks",
            icon: <SiFramework className="text-4xl text-purple-500" />,
            items: ["Next.js", "Tailwind CSS", "Drizzel", "Laravel", "FastAPI"],
        },
        {
            title: "Tools",
            icon: <FaTools className="text-4xl text-yellow-500" />,
            items: ["Git", "GitHub", "Figma", "Postman", "VSCode"],
        },
        {
            title: "Database",
            icon: <DatabaseSettingIcon className="text-4xl text-red-500" />,
            items: ["Postgres", "MySql", "SqlLite", "Firebase", "MongoDB"],
        },
    ];

    return (
        <MaxWidthWrapper>
            <section
                id="skills"
                className="w-full py-20 lg:py-20 relative overflow-hidden"
            >
                <div className="absolute inset-0"></div>
                <div className="container mx-auto px-4 relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="flex flex-col items-center justify-center space-y-6 text-center"
                    >
                        <h2 className="text-5xl font-bold tracking-tighter sm:text-6xl text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-500">
                            My Skills
                        </h2>
                        <p className="max-w-[900px] text-xl text-gray-300 md:text-2xl/relaxed lg:text-2xl/relaxed">
                            Explore the technologies and tools I've mastered on
                            my journey.
                        </p>
                    </motion.div>
                    <div className="mx-auto grid max-w-7xl grid-cols-1 gap-8 py-16 sm:grid-cols-2 lg:grid-cols-3">
                        {skills.map((skill, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{
                                    duration: 0.3,
                                    delay: index * 0.1,
                                }}
                            >
                                <Card className="group bg-gradient-to-br from-white/10 to-white/5 backdrop-filter backdrop-blur-xl border border-white/20 shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 overflow-hidden rounded-2xl">
                                    <CardHeader className="flex items-center space-x-4 relative mb-4">
                                        <div className="absolute inset-0 bg-gradient-to-r from-purple-400/30 to-blue-500/30 opacity-70 group-hover:opacity-100 transition-opacity duration-300"></div>
                                        <div className="z-10 p-2 bg-white/10 rounded-full">
                                            {skill.icon}
                                        </div>
                                        <h3 className="text-2xl font-semibold text-white z-10">
                                            {skill.title}
                                        </h3>
                                    </CardHeader>
                                    <CardContent>
                                        <ul className="space-y-3">
                                            {skill.items.map((item, idx) => (
                                                <motion.li
                                                    key={idx}
                                                    initial={{
                                                        opacity: 0,
                                                        x: -20,
                                                    }}
                                                    animate={{
                                                        opacity: 1,
                                                        x: 0,
                                                    }}
                                                    transition={{
                                                        duration: 0.3,
                                                        delay: idx * 0.1,
                                                    }}
                                                    className="text-gray-300 hover:text-white transition-colors duration-200 flex items-center space-x-2"
                                                >
                                                    <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                                                    <span className="group-hover:text-blue-300 transition-colors duration-200">
                                                        {item}
                                                    </span>
                                                </motion.li>
                                            ))}
                                        </ul>
                                    </CardContent>
                                </Card>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
        </MaxWidthWrapper>
    );
}
