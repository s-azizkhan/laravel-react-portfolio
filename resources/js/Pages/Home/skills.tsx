import {
    Card,
    CardContent,
    CardFooter,
    CardHeader,
} from "@/Components/ui/card";
import { DatabaseSettingIcon } from "hugeicons-react";
import { FaReact, FaNodeJs, FaTools } from "react-icons/fa";
import { SiFramework } from "react-icons/si";

export default function Skills() {
    const skills = [
        {
            title: "Frontend",
            icon: <FaReact className="text-2xl mr-2" />,
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
            icon: <FaNodeJs className="text-2xl mr-2" />,
            items: ["Node.js", "Python", "Express", "MongoDB", "PostgreSQL"],
        },
        {
            title: "Frameworks",
            icon: <SiFramework className="text-2xl mr-2" />,
            items: ["Next.js", "Tailwind CSS", "Drizzel", "Laravel", "FastAPI"],
        },
        {
            title: "Tools",
            icon: <FaTools className="text-2xl mr-2" />,
            items: ["Git", "GitHub", "Figma", "Postman", "VSCode"],
        },
        {
            title: "Database",
            icon: <DatabaseSettingIcon className="text-2xl mr-2" />,
            items: ["Postgres", "MySql", "SqlLite", "Firebase", "MongoDB"],
        },
    ];

    return (
        <section id="skills" className="w-full md:py-24 lg:py-32 rounded-t-lg">
            <div className="container mx-auto px-4">
                <div className="flex flex-col items-center justify-center space-y-4 text-center">
                    <div className="space-y-2">
                        <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                            Skills
                        </h2>
                        <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                            Here are some skills that I have worked on and
                            developed using them.
                        </p>
                    </div>
                </div>
                <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 sm:grid-cols-2 lg:grid-cols-3 lg:gap-12">
                    {skills.map((skill, index) => (
                        <Card
                            key={index}
                            className="bg-slate-900 dark:text-white"
                        >
                            <CardHeader className="flex items-center">
                                {skill.icon}
                                <h3 className="text-lg font-semibold">
                                    {skill.title}
                                </h3>
                            </CardHeader>
                            <CardContent>
                                <ul className="space-y-2">
                                    {skill.items.map((item, idx) => (
                                        <li key={idx}>{item}</li>
                                    ))}
                                </ul>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
}
