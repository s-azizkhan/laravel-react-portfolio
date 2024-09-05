import { Link } from "@inertiajs/react";
import { CodeIcon, Menu01Icon } from "hugeicons-react";
import { useState, useEffect } from "react";

export function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [activeSection, setActiveSection] = useState("");

    useEffect(() => {
        const handleScroll = () => {
            const sections = ["hero", "projects", "skills", "contact"];
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

    return (
        <>
            <div className="flex justify-center items-center w-full fixed top-0 left-0 right-0 z-50 my-4">
                <header
                    className="flex items-center justify-between h-16 w-full max-w-4xl px-8 mx-5 rounded-full border-2 border-white/10
                    backdrop-blur-md shadow-xl bg-slate-950/55 transition duration-300 ease-in-out"
                >
                    <Link
                        href="/"
                        className="flex items-center justify-center group"
                    >
                        <CodeIcon className="h-6 w-6 group-hover:text-primary transition-colors duration-200" />
                        <span className="ml-2 font-semibold text-sm group-hover:text-primary transition-colors duration-200">
                            S.Aziz Khan
                        </span>
                    </Link>
                    <nav className="hidden md:flex gap-6 items-center">
                        {["projects", "skills", "contact"].map((item) => (
                            <a
                                key={item}
                                href={`#${item}`}
                                className={`text-sm font-medium transition duration-200 ${
                                    activeSection === item
                                        ? "text-primary underline underline-offset-4"
                                        : "hover:text-primary hover:underline underline-offset-4"
                                }`}
                            >
                                {item.charAt(0).toUpperCase() + item.slice(1)}
                            </a>
                        ))}
                    </nav>
                    <button
                        className="md:hidden"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        aria-label="Toggle menu"
                    >
                        <Menu01Icon className="h-6 w-6" />
                    </button>
                </header>
            </div>
            {isMenuOpen && (
                <div className="fixed inset-0 z-40 bg-slate-950/90 backdrop-blur-sm md:hidden">
                    <nav className="flex flex-col items-center justify-center h-full space-y-8">
                        {["projects", "skills", "contact"].map((item) => (
                            <Link
                                key={item}
                                href={`#${item}`}
                                className="text-xl font-medium hover:text-primary transition duration-200"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                {item.charAt(0).toUpperCase() + item.slice(1)}
                            </Link>
                        ))}
                    </nav>
                </div>
            )}
        </>
    );
}
