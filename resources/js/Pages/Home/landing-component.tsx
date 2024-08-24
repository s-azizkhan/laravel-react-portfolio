import Projects from "./projects";
import Skills from "./skills";
import Contact from "./contact";
import Hero from "./hero";
import { Link } from "@inertiajs/react";
import { CodeIcon } from "hugeicons-react";

export function LandingComponent() {
    return (
        <div className="flex flex-col min-h-[100dvh]">
            <header className="px-4 lg:px-6 h-14 flex items-center my-2 bg-gray-800 mx-3 rounded-md text-white dark:text-white dark:bg-gray-800 shadow-[0px_1px_3px_0px_#a0aec0]">
                <Link href="#" className="flex items-center justify-center">
                    <CodeIcon className="h-6 w-6" />
                    <span className="sr-only">S.Aziz Khan</span>
                </Link>
                <nav className="ml-auto flex gap-5 sm:gap-6 text-center items-center">
                    <Link
                        href="#projects"
                        className="text-sm font-medium hover:underline underline-offset-4"
                    >
                        Projects
                    </Link>
                    <Link
                        href="#skills"
                        className="text-sm font-medium hover:underline underline-offset-4"
                    >
                        Skills
                    </Link>
                    <Link
                        href="#contact"
                        className="text-sm font-medium hover:underline underline-offset-4"
                    >
                        Contact
                    </Link>
                </nav>
            </header>

            <main className="flex-1">
                <Hero />

                <Projects />

                <Skills />

                <Contact />
            </main>
            <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
                <p className="text-xs text-muted-foreground">
                    &copy; {`${new Date().getFullYear()} S.Aziz Khan`}. All
                    rights reserved.
                </p>
                <nav className="sm:ml-auto flex gap-4 sm:gap-6 hidden">
                    <Link
                        href="#"
                        className="text-xs hover:underline underline-offset-4"
                    >
                        Privacy
                    </Link>
                    <Link
                        href="#"
                        className="text-xs hover:underline underline-offset-4"
                    >
                        Terms of Service
                    </Link>
                </nav>
            </footer>
        </div>
    );
}
