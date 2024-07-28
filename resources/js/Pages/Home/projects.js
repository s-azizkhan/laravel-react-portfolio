import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { Card, CardContent, CardFooter, CardHeader } from "@/Components/ui/card";
import { GitHubLogoIcon } from "@radix-ui/react-icons";
import { HiEye } from "react-icons/hi2";
import { Link } from "@inertiajs/react";
import { Badge } from "@/Components/ui/badge";
const ProjectCard = (project) => {
    return (_jsxs(Card, { className: "flex flex-col justify-between h-fit", children: [_jsx(CardHeader, { children: project.image &&
                    _jsx("img", { src: project.image, width: "550", height: "310", alt: project.title, className: "mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full" }) }), _jsxs(CardContent, { className: "flex-grow", children: [_jsxs("div", { className: "space-y-2", children: [_jsx("h3", { className: "text-xl font-bold", children: project.title }), _jsx("p", { className: "text-muted-foreground", children: project.description })] }), project.techStack && (_jsxs("div", { className: "tech-stack", children: [_jsx("h4", { className: "text-xl font-bold mt-4", children: "Tech Stack" }), _jsx("div", { className: "flex flex-wrap gap-2 mt-2", children: project.techStack.map((tech, index) => (_jsx(Badge, { children: tech }, index))) })] }))] }), _jsx(CardFooter, { children: _jsxs("div", { className: "flex gap-2", children: [project.previewLink &&
                            _jsxs(Link, { href: project.previewLink, className: "inline-flex h-8 items-center justify-center rounded-md bg-primary px-4 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50", children: ["Live Demo", _jsx(HiEye, { className: "ml-2" })] }), project.githubLink &&
                            _jsxs(Link, { href: project.githubLink, className: "inline-flex h-8 items-center justify-center rounded-md border border-input bg-background px-4 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50", children: ["GitHub", _jsx(GitHubLogoIcon, { className: "ml-2" })] })] }) })] }));
};
export default function Projects() {
    const projects = [
        {
            title: "Project 1",
            description: "A web application that helps users manage their tasks and projects.",
            image: "/assets/1.png",
            previewLink: "/",
            githubLink: "/",
            techStack: ["React", "Next.js", "Node.js", "MongoDB", "Express.js", 'AWS']
        },
        {
            title: "Project 2",
            description: "A web application that helps users manage their tasks and projects.",
            image: "/assets/2.jpg",
            githubLink: "/",
            techStack: ["Vue", "Nuxt.js", "Firebase"]
        },
        {
            title: "Project 3",
            description: "A web application that helps users manage their tasks and projects.",
            image: "/assets/3.jpg",
            previewLink: "/",
            techStack: ["Angular", "NestJS", "MongoDB"]
        },
        {
            title: "Project 4",
            description: "A web application that helps users manage their tasks and projects.",
            image: "/assets/aziz-avatar.jpeg",
            techStack: ["Svelte", "Sapper", "GraphQL"]
        },
        {
            title: "Project 5",
            description: "A web application that helps users manage their tasks and projects.",
            image: "/assets/placeholder.svg",
            techStack: ["Svelte", "Sapper", "GraphQL"]
        }
    ];
    return (_jsx(_Fragment, { children: _jsx("section", { id: "projects", className: "w-full py-12 md:py-24 lg:py-32 bg-muted rounded-t-lg", children: _jsxs("div", { className: "container px-4 md:px-6", children: [_jsx("div", { className: "flex flex-col items-center justify-center space-y-4 text-center", children: _jsxs("div", { className: "space-y-2", children: [_jsx("h2", { className: "text-3xl font-bold tracking-tighter sm:text-5xl", children: "Featured Projects" }), _jsx("p", { className: "max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed", children: "Check out some of my recent projects that showcase my skills and expertise." })] }) }), _jsx("div", { className: "mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 sm:grid-cols-2 lg:grid-cols-3 lg:gap-12", children: projects.map((project, index) => (_jsx(ProjectCard, { title: project.title, description: project.description, image: project.image, previewLink: project.previewLink, githubLink: project.githubLink, techStack: project.techStack }, `${project.title}-${index}`))) })] }) }) }));
}
