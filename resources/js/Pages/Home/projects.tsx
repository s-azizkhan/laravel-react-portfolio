import { Link, usePage } from "@inertiajs/react";
import { Badge } from "@/Components/ui/badge";
import { Card, CardContent } from "@/Components/ui/card";
import { EyeIcon, GithubIcon } from "hugeicons-react";
import { ChevronRightIcon } from "@radix-ui/react-icons";
import { motion } from "framer-motion";
import MaxWidthWrapper from "@/Components/shared/max-width-wrapper";
import { Button } from "@/Components/ui/button";

interface ProjectInterface {
    title: string;
    description: string;
    image: string;
    time?: string;
    previewLink?: string;
    githubLink?: string;
    challenges?: string;
    techStack?: string[];
}

const ProjectCard = ({
    project,
    variant,
}: {
    project: ProjectInterface;
    variant: "default" | "wide";
}) => {
    return (
        <Card
            className={`group overflow-hidden rounded-3xl bg-gradient-to-br from-purple-900/30 via-blue-900/30 to-teal-900/30 border border-white/10 shadow-lg hover:shadow-xl transition-all duration-300 ${
                variant === "wide" ? "col-span-2" : ""
            }`}
        >
            <CardContent className="p-6 h-full flex flex-col justify-between">
                <div>
                    <h3 className="text-2xl font-bold text-white mb-2">
                        {project.title}
                    </h3>
                    <p className="text-gray-300 text-sm mb-4">
                        {project.description}
                    </p>
                    {project.techStack && (
                        <div className="flex flex-wrap gap-2 mb-4">
                            {project.techStack.map((tech, index) => (
                                <Badge
                                    key={index}
                                    className="bg-primary/20 text-primary hover:bg-primary/30 transition-colors duration-200 text-xs"
                                >
                                    {tech}
                                </Badge>
                            ))}
                        </div>
                    )}
                </div>
                <div className="flex justify-between items-center mt-4">
                    <span className="text-xs text-white/60">
                        {project.time || "Ongoing"}
                    </span>
                    <div className="flex space-x-2">
                        {project.previewLink && (
                            <a
                                href={project.previewLink}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <Button
                                    size="sm"
                                    variant="ghost"
                                    className="text-white hover:text-primary"
                                >
                                    <EyeIcon className="w-4 h-4 mr-2" />
                                    Demo
                                </Button>
                            </a>
                        )}
                        {project.githubLink && (
                            <a
                                href={project.githubLink}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <Button
                                    size="sm"
                                    variant="ghost"
                                    className="text-white hover:text-primary"
                                >
                                    <GithubIcon className="w-4 h-4 mr-2" />
                                    Code
                                </Button>
                            </a>
                        )}
                    </div>
                </div>
            </CardContent>
        </Card>
    );
};

export default function Projects() {
    const projects: ProjectInterface[] = usePage().props
        .projects as ProjectInterface[];

    return (
        <MaxWidthWrapper>
            <section
                id="projects"
                className="w-full py-20 md:py-28 lg:py-36 bg-gradient-to-b from-background via-background/90 to-background/80"
            >
                <div className="container px-4 md:px-6 mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="flex flex-col items-center justify-center space-y-4 text-center mb-12 md:mb-16"
                    >
                        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-500 to-red-500">
                            Featured Projects
                        </h2>
                        <p className="max-w-[900px] text-muted-foreground text-base md:text-lg lg:text-xl">
                            Explore my recent projects that showcase innovative
                            solutions and cutting-edge technologies.
                        </p>
                    </motion.div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {projects.map((project, index) => (
                            <motion.div
                                key={project.title}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{
                                    duration: 0.5,
                                    delay: index * 0.1,
                                }}
                                className={
                                    index === 0 || index === 5
                                        ? "lg:col-span-2"
                                        : ""
                                }
                            >
                                <ProjectCard
                                    project={project}
                                    variant={
                                        index === 0 || index === 5
                                            ? "wide"
                                            : "default"
                                    }
                                />
                            </motion.div>
                        ))}
                    </div>
                    <motion.div
                        className="mt-12 md:mt-16 text-center"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5 }}
                    >
                        <Link href="/projects" className="hidden">
                            <Button
                                variant="outline"
                                size="lg"
                                className="group bg-white/10 hover:bg-white/20 text-white border-white/20"
                            >
                                View All Projects
                                <ChevronRightIcon className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
                            </Button>
                        </Link>
                    </motion.div>
                </div>
            </section>
        </MaxWidthWrapper>
    );
}
