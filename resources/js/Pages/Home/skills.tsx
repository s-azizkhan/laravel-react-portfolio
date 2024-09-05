import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
    FaArrowRight,
    FaBrain,
    FaCheckCircle,
    FaNodeJs,
    FaReact,
    FaTools,
} from "react-icons/fa";
import { DatabaseSettingIcon, FrameworksIcon } from "hugeicons-react";
import MaxWidthWrapper from "@/Components/shared/max-width-wrapper";

interface Skill {
    title: string;
    icon: any;
    description: string[];
}

export default function Skills() {
    const skills: Skill[] = [
        {
            title: "Frontend",
            icon: <FaReact className="text-4xl text-blue-400" />,
            description: [
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
            description: [
                "Node.js",
                "Python",
                "Express",
                "MongoDB",
                "PostgreSQL",
            ],
        },
        {
            title: "Frameworks",
            icon: (
                <FrameworksIcon className="size-8 text-4xl text-purple-500" />
            ),
            description: [
                "Next.js",
                "Tailwind CSS",
                "Drizzel",
                "Laravel",
                "FastAPI",
            ],
        },
        {
            title: "Tools",
            icon: <FaTools className="text-4xl text-yellow-500" />,
            description: ["Git", "GitHub", "Figma", "Postman", "VSCode"],
        },
        {
            title: "Database",
            icon: (
                <DatabaseSettingIcon className="size-8 text-4xl text-red-500" />
            ),
            description: [
                "Postgres",
                "MySql",
                "SqlLite",
                "Firebase",
                "MongoDB",
            ],
        },
        {
            title: "AI & Machine Learning",
            icon: <FaBrain className="text-4xl text-indigo-500" />,
            description: [
                "TensorFlow",
                "PyTorch",
                "Scikit-learn",
                "Natural Language Processing",
                "Computer Vision",
            ],
        },
    ];

    const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);
    const [showModal, setShowModal] = useState(false);

    return (
        <MaxWidthWrapper>
            <section
                id="skills"
                className="w-full py-24 relative overflow-hidden"
            >
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-700/20 via-purple-900/20 to-black"></div>
                <div className="container mx-auto px-4 relative z-10">
                    <motion.h2
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="text-4xl md:text-5xl font-bold text-center mb-6 bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text"
                    >
                        Expertise That Drives Results
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="text-xl text-gray-300 text-center mb-12 max-w-2xl mx-auto"
                    >
                        Leverage our cutting-edge skills to transform your ideas
                        into reality.
                    </motion.p>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
                        {skills.map((skill, index) => (
                            <div onClick={() => setShowModal(true)}>
                                <SkillCard
                                    key={index}
                                    skill={skill}
                                    index={index}
                                    isHovered={hoveredSkill === skill.title}
                                    onHover={() => setHoveredSkill(skill.title)}
                                    onLeave={() => setHoveredSkill(null)}
                                />
                            </div>
                        ))}
                    </div>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        className="mt-8 text-center"
                    >
                        <button
                            onClick={() => setShowModal(true)}
                            className="inline-flex items-center px-8 py-4 text-lg font-semibold text-white bg-gradient-to-r from-blue-500 to-purple-600 rounded-full hover:from-blue-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
                        >
                            Get a Free Consultation
                            <FaArrowRight className="ml-2" />
                        </button>
                    </motion.div>
                </div>
            </section>
            <AnimatePresence>
                {showModal && (
                    <ConsultationModal onClose={() => setShowModal(false)} />
                )}
            </AnimatePresence>
        </MaxWidthWrapper>
    );
}

function SkillCard({
    skill,
    index,
    isHovered,
    onHover,
    onLeave,
}: {
    skill: Skill;
    index: number;
    isHovered: boolean;
    onHover: () => void;
    onLeave: () => void;
}) {
    const Icon = skill.icon;
    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="relative group perspective cursor-pointer"
            onMouseEnter={onHover}
            onMouseLeave={onLeave}
        >
            <div
                className={`absolute inset-0 bg-gradient-to-br from-blue-500/30 to-purple-500/30 rounded-2xl transform ${
                    isHovered ? "rotate-0 scale-105" : "rotate-6"
                } transition-all duration-300`}
            ></div>
            <div
                className={`relative bg-white/10 backdrop-filter backdrop-blur-lg border border-white/20 rounded-2xl p-8 overflow-hidden transform ${
                    isHovered ? "scale-105" : ""
                } transition-all duration-300 shadow-xl`}
            >
                <div className="relative z-10">
                    <motion.div
                        initial={{ scale: 1 }}
                        animate={{ scale: isHovered ? 1.1 : 1 }}
                        transition={{ duration: 0.3 }}
                        className="text-5xl mb-4 text-blue-400"
                    >
                        {Icon}
                    </motion.div>
                    <h3 className="text-2xl font-bold mb-4 text-white">
                        {skill.title}
                    </h3>
                    <ul className="space-y-2">
                        {skill.description.map((item, i) => (
                            <motion.li
                                key={i}
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.3, delay: i * 0.1 }}
                                className="flex items-center text-gray-300"
                            >
                                <FaCheckCircle className="text-green-400 mr-2" />
                                {item}
                            </motion.li>
                        ))}
                    </ul>
                </div>
            </div>
        </motion.div>
    );
}

function ConsultationModal({ onClose }: { onClose: () => void }) {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 flex items-center justify-center z-50"
            onClick={onClose}
        >
            <motion.div
                initial={{ scale: 0.9, y: 20 }}
                animate={{ scale: 1, y: 0 }}
                exit={{ scale: 0.9, y: 20 }}
                className="bg-gray-900 p-8 rounded-2xl max-w-md w-full mx-4"
                onClick={(e) => e.stopPropagation()}
            >
                <h3 className="text-2xl font-bold mb-4 text-white">
                    Get Your Free Consultation
                </h3>
                <form className="space-y-4">
                    <input
                        type="text"
                        placeholder="Your Name"
                        className="w-full px-4 py-2 rounded-lg bg-gray-800 text-white border border-gray-700 focus:outline-none focus:border-blue-500"
                    />
                    <input
                        type="email"
                        placeholder="Your Email"
                        className="w-full px-4 py-2 rounded-lg bg-gray-800 text-white border border-gray-700 focus:outline-none focus:border-blue-500"
                    />
                    <textarea
                        placeholder="Tell us about your project"
                        rows={4}
                        className="w-full px-4 py-2 rounded-lg bg-gray-800 text-white border border-gray-700 focus:outline-none focus:border-blue-500"
                    ></textarea>
                    <button
                        type="submit"
                        className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold py-2 rounded-lg hover:from-blue-600 hover:to-purple-700 transition-all duration-300"
                    >
                        Schedule Consultation
                    </button>
                </form>
            </motion.div>
        </motion.div>
    );
}
