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
import { Globe, ArrowLeft, ArrowRight, Code2, Layers , Cpu} from "lucide-react";
import Link from "next/link";

export default function WebDev() {
    const techStack = [
        { name: "HTML5", icon: <SiHtml5 className="text-orange-500 w-10 h-10" />, desc: "Semantic Structure" },
        { name: "CSS3", icon: <SiCss3 className="text-blue-500 w-10 h-10" />, desc: "Responsive Styling" },
        { name: "JavaScript", icon: <SiJavascript className="text-yellow-400 w-10 h-10" />, desc: "Dynamic Logic" },
        { name: "React", icon: <SiReact className="text-cyan-400 w-10 h-10" />, desc: "Component Architecture" },
        { name: "Next.js", icon: <SiNextdotjs className="text-foreground w-10 h-10" />, desc: "Full-stack Framework" },
        { name: "Tailwind CSS", icon: <SiTailwindcss className="text-sky-400 w-10 h-10" />, desc: "Utility-first Design" },
        { name: "Node.js", icon: <SiNodedotjs className="text-green-500 w-10 h-10" />, desc: "Server-side Runtime" },
        { name: "Express.js", icon: <SiExpress className="text-gray-400 w-10 h-10" />, desc: "Backend API Framework" },
        { name: "MongoDB", icon: <SiMongodb className="text-green-400 w-10 h-10" />, desc: "NoSQL Database" },
    ];

    return (
        <div className="min-h-screen pt-20 pb-24 px-6 md:px-20 relative overflow-hidden">
            {/* Background Elements */}
            <div className="bg-glow top-0 left-1/4 opacity-20" />
            <div className="bg-glow bottom-0 right-1/4 opacity-10" />

            <div className="max-w-7xl mx-auto text-center mb-10">
                {/* <Link href="/skill" className="inline-flex items-center gap-2 text-gray-400 hover:text-pink-400 transition-colors group mb-8">
                    <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" /> Back to Skills
                </Link> */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                    className="inline-block px-4 py-1.5 rounded-full border border-pink-500/30 bg-pink-500/10 text-pink-400 text-xs font-semibold tracking-widest uppercase mb-6 backdrop-blur-sm"
                >
                    Expertise
                </motion.div>
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-3xl md:text-4xl font-bold tracking-tight mb-4"
                >
                    Web <span className="text-gradient">Development</span>
                </motion.h1>
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="text-gray-400 text-sm md:text-lg max-w-2xl mx-auto font-light leading-relaxed"
                >
                    I specialize in building <span className="text-foreground font-medium">modern, scalable, and high-performance</span> web applications using the latest industry standards.
                </motion.p>
            </div>

            {/* Tech Stack Grid */}
            <section className="mb-32">
                <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {techStack.map((tech, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: i * 0.05 }}
                            viewport={{ once: true }}
                            className="glass p-8 rounded-[2rem] flex flex-col items-center group hover:-translate-y-2 transition-all duration-300"
                        >
                            <div className="mb-6 group-hover:scale-110 transition-transform duration-500">
                                {tech.icon}
                            </div>
                            <h3 className="text-lg font-bold mb-2">{tech.name}</h3>
                            <p className="text-[10px] text-gray-500 uppercase tracking-widest font-bold">{tech.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* Journey & Approach */}
            <section className="max-w-6xl mx-auto">
                <div className="glass p-12 md:p-20 rounded-[3rem] relative overflow-hidden">
                    <div className="bg-glow -bottom-20 -right-20 opacity-10" />
                    <div className="flex flex-col lg:flex-row items-center gap-16">
                        <div className="w-full lg:w-1/2">
                            <div className="w-16 h-16 rounded-2xl bg-pink-500/10 flex items-center justify-center text-pink-400 mb-8 pink-glow">
                                <Globe size={32} />
                            </div>
                            <h2 className="text-3xl md:text-5xl font-bold mb-8 tracking-tight">Crafting Digital <span className="text-gradient">Experiences</span></h2>
                            <p className="text-gray-400 text-lg leading-relaxed mb-8 font-light">
                                My approach to web development centers on <span className="text-foreground font-medium">performance, accessibility, and exceptional UI/UX</span>. I believe every pixel counts and every interaction should feel natural.
                            </p>
                            <Link href="/project">
                                <button className="bg-pink-gradient text-white px-10 py-4 rounded-xl font-bold flex items-center gap-2 hover:scale-105 transition-all text-sm">
                                    Browse Web Projects <ArrowRight size={18} />
                                </button>
                            </Link>
                        </div>

                        <div className="w-full lg:w-1/2 grid grid-cols-1 gap-4">
                            {[
                                { title: "Responsive Design", desc: "Fluid layouts for every device screen.", icon: <Layers size={20} /> },
                                { title: "API Integration", desc: "Seamless communication with backend services.", icon: <Code2 size={20} /> },
                                { title: "Performance First", desc: "Optimized Core Web Vitals and load times.", icon: <Cpu size={20} /> }
                            ].map((item, idx) => (
                                <div key={idx} className="glass p-6 rounded-2xl border-white/5 flex items-start gap-4 hover:bg-white/5 transition-colors">
                                    <div className="text-pink-400 mt-1">{item.icon}</div>
                                    <div>
                                        <h4 className="font-bold text-foreground mb-1">{item.title}</h4>
                                        <p className="text-xs text-gray-500">{item.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
