import { Link, usePage } from "@inertiajs/react";
import { Badge } from "@/Components/ui/badge";
import {
    Card,
    CardContent,
    CardFooter,
    CardHeader,
} from "@/Components/ui/card";
import { EyeIcon, GithubIcon } from "hugeicons-react";
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
    techStack?: string[];
}

const ProjectCard = (project: ProjectInterface) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
        >
            <Card className="flex flex-col justify-between h-full backdrop-blur-md bg-gradient-to-t from-purple-400/10 to-blue-500/40 border-white/20 border shadow-lg hover:shadow-xl transition-all duration-300 rounded-xl overflow-hidden">
                <CardHeader className="p-0 relative">
                    {project.image && (
                        <img
                            src={project.image}
                            width="550"
                            height="310"
                            alt={project.title}
                            className="w-full aspect-video object-cover object-center transition-transform duration-300 group-hover:scale-105"
                        />
                    )}
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/70 flex flex-col items-center justify-end p-4">
                        <h3 className="text-2xl font-bold text-white text-center px-4 mb-2">
                            {project.title}
                        </h3>
                        <span className="text-sm text-white/80">
                            {project.time || "Ongoing"}
                        </span>
                    </div>
                </CardHeader>
                <CardContent className="flex-grow p-6">
                    <p className="text-gray-300 text-sm leading-relaxed mb-4">
                        {project.description}
                    </p>
                    {project.techStack && (
                        <div className="mt-4">
                            <h4 className="text-lg font-semibold mb-2 text-primary">
                                Tech Stack
                            </h4>
                            <div className="flex flex-wrap gap-2">
                                {project.techStack.map((tech, index) => (
                                    <Badge
                                        key={index}
                                        className="bg-primary/20 text-primary hover:bg-primary/30 transition-colors duration-200"
                                    >
                                        {tech}
                                    </Badge>
                                ))}
                            </div>
                        </div>
                    )}
                </CardContent>
                <CardFooter className="p-6 pt-0">
                    <div className="flex gap-3 w-full">
                        {project.previewLink && (
                            <a target="_blank" href={project.previewLink}>
                                <Button
                                    variant="outline"
                                    className="flex-1 inline-flex items-center justify-center w-full rounded-xl"
                                >
                                    Live Demo
                                    <EyeIcon className="ml-2 w-5 h-5" />
                                </Button>
                            </a>
                        )}
                        {project.githubLink && (
                            <a target="_blank" href={project.githubLink}>
                                <Button className="flex-1 inline-flex items-center justify-center w-full rounded-xl">
                                    GitHub
                                    <GithubIcon className="ml-2 w-5 h-5" />
                                </Button>
                            </a>
                        )}
                    </div>
                </CardFooter>
            </Card>
        </motion.div>
    );
};

export default function Projects() {
    const projects: ProjectInterface[] = usePage().props
        .projects as ProjectInterface[];

    return (
        <MaxWidthWrapper>
            <section
                id="projects"
                className="w-full py-16 md:py-24 lg:py-20 bg-gradient-to-b from-background to-background/50"
            >
                <div className="container px-4 md:px-6 mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="flex flex-col items-center justify-center space-y-4 text-center mb-12"
                    >
                        <h2 className="text-4xl font-bold tracking-tighter sm:text-5xl bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-violet-600">
                            Featured Projects
                        </h2>
                        <p className="max-w-[900px] text-muted-foreground text-lg md:text-xl/relaxed">
                            Explore my recent projects that showcase my skills
                            and expertise in creating innovative solutions.
                        </p>
                    </motion.div>
                    <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
                        {projects.map((project, index) => (
                            <ProjectCard
                                key={`${project.title}-${index}`}
                                {...project}
                            />
                        ))}
                    </div>
                </div>
            </section>
        </MaxWidthWrapper>
    );
}
