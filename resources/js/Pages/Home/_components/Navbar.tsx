import { Link } from "@inertiajs/react";
import { CodeIcon } from "hugeicons-react";

export function Navbar() {
    return (
        <>
            <div className="flex justify-center items-center w-full fixed top-0 left-0 right-0 z-50 my-4">
                <header
                    className="flex items-center justify-between h-16 w-full max-w-4xl px-8 mx-5 rounded-full border-2 border-white/10
                    backdrop-blur-md shadow-xl bg-slate-950/55 transition duration-300 ease-in-out"
                >
                    <Link href="#" className="flex items-center justify-center">
                        <CodeIcon className="h-6 w-6" />
                        <span className="sr-only">S.Aziz Khan</span>
                    </Link>
                    <nav className="flex gap-5 sm:gap-6 items-center">
                        <Link
                            href="#projects"
                            className="text-sm font-medium hover:text-primary hover:underline underline-offset-4 transition duration-200"
                        >
                            Projects
                        </Link>
                        <Link
                            href="#skills"
                            className="text-sm font-medium hover:text-primary hover:underline underline-offset-4 transition duration-200"
                        >
                            Skills
                        </Link>
                        <Link
                            href="#contact"
                            className="text-sm font-medium hover:text-primary hover:underline underline-offset-4 transition duration-200"
                        >
                            Contact
                        </Link>
                    </nav>
                </header>
            </div>
        </>
    );
}
