import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { FlipWords } from "@/Components/ui/flip-words";
export default function Hero() {
    const words = ["innovative", "scalable", "user-friendly", "efficient", "secure", "reliable", "seamless", "interactive", "robust", "versatile", "intuitive", "performant"];
    return (_jsx(_Fragment, { children: _jsx("section", { id: "hero", className: "py-12 md:py-24 mx-4 rounded-t-lg", children: _jsx("div", { className: "container px-4 md:px-6", children: _jsxs("div", { className: "grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-8 xl:grid-cols-[1fr_600px] items-center", children: [_jsx("div", { className: "flex flex-col justify-center space-y-6", children: _jsxs("div", { className: "space-y-4", children: [_jsx("h1", { className: "text-3xl font-bold tracking-tight sm:text-5xl xl:text-6xl ", children: "S.Aziz Khan" }), _jsx("h2", { className: "text-lg italic font-bold tracking-tight", children: "Software Developer" }), _jsxs("div", { className: "text-4xl font-normal text-neutral-600 mt-2", children: ["Build ", _jsx(FlipWords, { words: words })] }), _jsx("p", { className: "max-w-[600px] text-gray-400 md:text-xl", children: `I'm a passionate software developer with expertise in building web applications and mobile apps. I love creating innovative solutions that solve real-world problems.` })] }) }), _jsx("img", { width: 550, src: "./assets/aziz-avatar.jpeg", alt: "Hero Image", className: "mx-auto aspect-video overflow-hidden rounded-xl object-cover sm:w-full lg:order-last lg:aspect-square" })] }) }) }) }));
}
