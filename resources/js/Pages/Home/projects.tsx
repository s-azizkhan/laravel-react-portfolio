import { Link, usePage } from "@inertiajs/react";
import { Badge } from "@/Components/ui/badge";
import {
    Card,
    CardContent,
    CardFooter,
    CardHeader,
} from "@/Components/ui/card";
import { EyeIcon, GithubIcon } from "hugeicons-react";

interface ProjectInterface {
    title: string;
    description: string;
    image: string;
    previewLink?: string;
    githubLink?: string;
    techStack?: string[]; // New property for tech stack
}

const ProjectCard = (project: ProjectInterface) => {
    return (
        <Card className="flex flex-col justify-between h-fit">
            <CardHeader>
                {project.image && (
                    <img
                        src={project.image}
                        width="550"
                        height="310"
                        alt={project.title}
                        className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full"
                    />
                )}
            </CardHeader>
            <CardContent className="flex-grow">
                <div className="space-y-2">
                    <h3 className="text-xl font-bold">{project.title}</h3>
                    <p className="text-muted-foreground">
                        {project.description}
                    </p>
                </div>
                {project.techStack && (
                    <div className="tech-stack">
                        <h4 className="text-xl font-bold mt-4">Tech Stack</h4>
                        <div className="flex flex-wrap gap-2 mt-2">
                            {project.techStack.map((tech, index) => (
                                <Badge key={index}>{tech}</Badge>
                            ))}
                        </div>
                    </div>
                )}
            </CardContent>
            <CardFooter>
                <div className="flex gap-2">
                    {project.previewLink && (
                        <Link
                            href={project.previewLink}
                            className="inline-flex h-8 items-center justify-center rounded-md bg-primary px-4 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                        >
                            Live Demo
                            <EyeIcon className="ml-2 w-5 h-5" />
                        </Link>
                    )}
                    {project.githubLink && (
                        <Link
                            href={project.githubLink}
                            className="inline-flex h-8 items-center justify-center rounded-md border border-input bg-background px-4 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                        >
                            GitHub
                            <GithubIcon className="ml-2 w-5 h-5" />
                        </Link>
                    )}
                </div>
            </CardFooter>
        </Card>
    );
};

export default function Projects() {
    //  access projects from page props
    const projects: ProjectInterface[] = usePage().props
        .projects as ProjectInterface[];
    return (
        <>
            <section
                id="projects"
                className="w-full py-12 md:py-24 lg:py-32 rounded-t-lg"
            >
                <div className="container px-4 md:px-6">
                    <div className="flex flex-col items-center justify-center space-y-4 text-center">
                        <div className="space-y-2">
                            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                                Featured Projects
                            </h2>
                            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                                Check out some of my recent projects that
                                showcase my skills and expertise.
                            </p>
                        </div>
                    </div>
                    <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 sm:grid-cols-2 lg:grid-cols-3 lg:gap-12">
                        {projects.map((project, index) => (
                            <ProjectCard
                                key={`${project.title}-${index}`}
                                title={project.title}
                                description={project.description}
                                image={project.image}
                                previewLink={project.previewLink}
                                githubLink={project.githubLink}
                                techStack={project.techStack}
                            />
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
}
