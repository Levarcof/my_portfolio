"use client";
import { motion } from "framer-motion";
import {
    SiHtml5,
    SiCss3,
    SiJavascript,
    SiReact,
    SiNextdotjs,
    SiTailwindcss,
    SiNodedotjs,
    SiExpress,
    SiMongodb,
} from "react-icons/si";
import { Globe } from "lucide-react";
import Link from "next/link";

export default function page() {
    const techStack = [
        { name: "HTML", icon: <SiHtml5 className="text-orange-500 w-10 h-10" /> },
        { name: "CSS", icon: <SiCss3 className="text-blue-500 w-10 h-10" /> },
        {
            name: "JavaScript",
            icon: <SiJavascript className="text-yellow-400 w-10 h-10" />,
        },
        {
            name: "React (with Hooks)",
            icon: <SiReact className="text-cyan-400 w-10 h-10" />,
        },
        {
            name: "Next.js",
            icon: <SiNextdotjs className="text-white w-10 h-10" />,
        },
        {
            name: "Tailwind CSS",
            icon: <SiTailwindcss className="text-sky-400 w-10 h-10" />,
        },
        {
            name: "Node.js",
            icon: <SiNodedotjs className="text-green-500 w-10 h-10" />,
        },
        {
            name: "Express.js",
            icon: <SiExpress className="text-gray-300 w-10 h-10" />,
        },
        {
            name: "MongoDB",
            icon: <SiMongodb className="text-green-400 w-10 h-10" />,
        },
    ];

    return (
        <div className="min-h-screen bg-black text-white px-6 py-12">
            {/* Hero Section */}
            <section className="text-center mb-16">
                <motion.h1
                    className="md:text-4xl text-2xl font-bold text-pink-400"
                    initial={{ opacity: 0, y: -30 }}
                    animate={{ opacity: 1, y: 0 }}
                >
                    💻 My Web Development Skills
                </motion.h1>
                <p className="mt-4 text-lg max-w-2xl mx-auto">
                    I specialize in building{" "}
                    <span className="text-pink-400">modern, scalable</span> web
                    applications using the latest technologies in frontend, backend, and
                    databases.
                </p>
                <a
                    href="https://github.com/Levarcof?tab=repositories" // <-- apne projects page ka link daalna
                    className="inline-block mt-6 px-6 py-3 rounded-2xl bg-pink-400 text-black font-semibold hover:scale-105 transition"
                >
                    View My Projects
                </a>
            </section>

            {/* Tech Stack Section */}
            <section className="mb-20">
                <h2 className="md:text-3xl text-2xl font-semibold text-pink-400 mb-8 text-center">
                    🚀 Tech Stack I Work With
                </h2>
                <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
                    {techStack.map((tech, i) => (
                        <motion.div
                            key={i}
                            className="p-6 rounded-2xl bg-zinc-900 shadow-lg border border-pink-400/30 hover:border-pink-400 hover:scale-105 transition flex flex-col items-center"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                        >
                            {tech.icon}
                            <h3 className="text-xl font-semibold mt-3">{tech.name}</h3>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* My Web Dev Journey */}
            <section className="text-center">
                <h2 className="md:text-3xl text-xl font-semibold text-pink-400 mb-8">
                    🌐 My Web Dev Journey
                </h2>
                <div className="max-w-3xl mx-auto bg-zinc-900 p-8 rounded-2xl shadow-lg border border-pink-400/30">
                    <Globe className="w-10 h-10 text-pink-400 mx-auto mb-4" />
                    <p className="text-lg mb-6">
                        From crafting static websites to building{" "}
                        <span className="text-pink-400">full-stack applications</span>, I
                        enjoy creating user-friendly and high-performance solutions.
                    </p>

                    <ul className="space-y-4 text-left max-w-md mx-auto">
                        <li className="border-l-4 border-pink-400 pl-4">
                            ✅ Designed responsive websites with <b>HTML, CSS, Tailwind</b>
                        </li>
                        <li className="border-l-4 border-pink-400 pl-4">
                            ✅ Built dynamic UIs using <b>React & Next.js</b>
                        </li>
                        <li className="border-l-4 border-pink-400 pl-4">
                            ✅ Developed REST APIs with <b>Node.js & Express.js</b>
                        </li>
                        <li className="border-l-4 border-pink-400 pl-4">
                            ✅ Worked with <b>MongoDB</b> for database management
                        </li>
                    </ul>
                    <Link
                        href="https://github.com/ 4" // <-- apna GitHub link daalna
                        target="_blank"
                        className="inline-block mt-8 px-6 py-3 rounded-2xl border border-pink-400 text-pink-400 hover:bg-pink-400 hover:text-black transition">Check My Web Dev Repos</Link>

                </div>
            </section>
        </div>
    );
}
