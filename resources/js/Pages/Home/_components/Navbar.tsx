import { Link } from "@inertiajs/react";
import { CodeIcon, Menu01Icon, XingIcon } from "hugeicons-react";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [activeSection, setActiveSection] = useState("");

    useEffect(() => {
        const handleScroll = () => {
            const sections = ["hero", "about", "projects", "skills", "contact"];
            const currentSection = sections.find((section) => {
                const element = document.getElementById(section);
                if (element) {
                    const rect = element.getBoundingClientRect();
                    return rect.top <= 100 && rect.bottom >= 100;
                }
                return false;
            });
            setActiveSection(currentSection || "");
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const menuItems = ["about", "skills", "projects", "contact"];

    return (
        <>
            <motion.div
                initial={{ y: -100 }}
                animate={{ y: 0 }}
                transition={{ type: "spring", stiffness: 100 }}
                className="flex justify-center items-center w-full fixed top-0 left-0 right-0 z-50 my-4"
            >
                <header
                    className="flex items-center justify-between h-16 w-full max-w-4xl px-8 mx-5 rounded-full border-2 border-white/10
                    backdrop-blur-md shadow-xl bg-slate-950/55 transition duration-300 ease-in-out hover:bg-slate-900/70"
                >
                    <Link
                        href="/"
                        className="flex items-center justify-center group"
                    >
                        <motion.div
                            whileHover={{ rotate: 360 }}
                            transition={{ duration: 0.5 }}
                        >
                            <CodeIcon className="h-6 w-6 group-hover:text-primary transition-colors duration-200" />
                        </motion.div>
                        <span className="ml-2 font-semibold text-sm group-hover:text-primary transition-colors duration-200">
                            S.Aziz Khan
                        </span>
                    </Link>

                    {/* Contact button for mobile */}
                    <a
                        href="#contact"
                        className="md:hidden bg-black border border-primary p-2 rounded-xl text-sm font-medium text-primary hover:underline underline-offset-4 transition duration-200"
                    >
                        Contact
                    </a>

                    <nav className="hidden md:flex gap-6 items-center">
                        {menuItems.map((item) => (
                            <motion.a
                                key={item}
                                href={`#${item}`}
                                className={`text-sm font-medium transition duration-200 ${
                                    activeSection === item
                                        ? "text-primary underline underline-offset-4"
                                        : "hover:text-primary hover:underline underline-offset-4"
                                }`}
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                {item.charAt(0).toUpperCase() + item.slice(1)}
                            </motion.a>
                        ))}
                    </nav>
                    <motion.button
                        className="md:hidden"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        aria-label="Toggle menu"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        {isMenuOpen ? (
                            <XingIcon className="h-6 w-6" />
                        ) : (
                            <Menu01Icon className="h-6 w-6" />
                        )}
                    </motion.button>
                </header>
            </motion.div>
            <AnimatePresence>
                {isMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="fixed inset-0 z-40 bg-slate-950/90 backdrop-blur-sm md:hidden"
                    >
                        <nav className="flex flex-col items-center justify-center h-full space-y-8">
                            {["projects", "skills"].map((item, index) => (
                                <motion.div
                                    key={item}
                                    initial={{ y: 20, opacity: 0 }}
                                    animate={{ y: 0, opacity: 1 }}
                                    transition={{ delay: index * 0.1 }}
                                >
                                    <Link
                                        href={`#${item}`}
                                        className="text-xl font-medium hover:text-primary transition duration-200"
                                        onClick={() => setIsMenuOpen(false)}
                                    >
                                        {item.charAt(0).toUpperCase() +
                                            item.slice(1)}
                                    </Link>
                                </motion.div>
                            ))}
                        </nav>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
