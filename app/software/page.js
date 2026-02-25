"use client";
import { motion } from "framer-motion";
import { FaCuttlefish, FaJava, FaJs } from "react-icons/fa";
import {
  SiCplusplus,
  SiMongodb,
  SiIntellijidea,
  SiPostman,
  SiVisualstudio,
} from "react-icons/si";
import { Code2, Server, ArrowLeft, ArrowRight, Settings, Database, Rocket } from "lucide-react";
import Link from "next/link";

export default function SoftwareDev() {
  const skills = [
    {
      title: "Languages",
      icon: <Code2 className="text-pink-400" size={24} />,
      items: [
        { name: "C", icon: <FaCuttlefish className="text-pink-400 text-4xl" /> },
        { name: "C++", icon: <SiCplusplus className="text-pink-400 text-4xl" /> },
        { name: "Java", icon: <FaJava className="text-pink-400 text-4xl" /> },
        { name: "JavaScript", icon: <FaJs className="text-pink-400 text-4xl" /> },
      ],
    },
    {
      title: "Architecture",
      icon: <Database className="text-blue-400" size={24} />,
      items: [
        { name: "MongoDB", icon: <SiMongodb className="text-blue-400 text-4xl" /> },
        { name: "SQL", icon: <Database className="text-blue-400 text-4xl" /> },
      ],
    },
    {
      title: "Engineering Tools",
      icon: <Settings className="text-purple-400" size={24} />,
      items: [
        // { name: "VS Code", icon: <SiVisualstudio className="text-purple-400 text-4xl" /> },
        { name: "Postman", icon: <SiPostman className="text-purple-400 text-4xl" /> },
        { name: "IntelliJ", icon: <SiIntellijidea className="text-purple-400 text-4xl" /> },
      ],
    },
  ];

  return (
    <div className="min-h-screen pt-20 pb-24 px-6 md:px-20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="bg-glow top-0 left-1/2 -translate-x-1/2 opacity-20" />
      <div className="bg-glow bottom-0 right-0 opacity-10" />

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
          Engineering
        </motion.div>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold tracking-tight mb-4"
        >
          Software <span className="text-gradient">Engineering</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-gray-400 text-sm md:text-lg max-w-2xl mx-auto font-light leading-relaxed"
        >
          Building scalable, maintainable systems with a focus on <span className="text-foreground font-medium">clean code</span> and <span className="text-foreground font-medium">architectural excellence</span>.
        </motion.p>
      </div>

      {/* Skills Grid */}
      <section className="mb-32 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {skills.map((category, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: idx * 0.1 }}
            viewport={{ once: true }}
            className="glass p-10 rounded-[2.5rem] flex flex-col group"
          >
            <div className="flex items-center gap-4 mb-10 border-b border-white/5 pb-6">
              <div className="p-3 rounded-xl bg-white/5">
                {category.icon}
              </div>
              <h2 className="text-xl font-bold">{category.title}</h2>
            </div>

            <div className="grid grid-cols-2 gap-10 mt-auto">
              {category.items.map((item, i) => (
                <div key={i} className="flex flex-col items-center gap-3 group/item">
                  <div className="transition-transform duration-500 group-hover/item:scale-125">
                    {item.icon}
                  </div>
                  <p className="text-xs text-gray-400 font-bold uppercase tracking-widest">{item.name}</p>
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </section>

      {/* Experience Section */}
      <section className="max-w-5xl mx-auto">
        <div className="glass p-12 md:p-20 rounded-[3rem] relative overflow-hidden bg-gradient-to-br from-white/5 to-transparent">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="w-full lg:w-1/2">
              <div className="w-16 h-16 rounded-2xl bg-purple-500/10 flex items-center justify-center text-purple-400 mb-8 shadow-[0_0_20px_rgba(168,85,247,0.3)]">
                <Rocket size={32} />
              </div>
              <h2 className="text-3xl md:text-5xl font-bold mb-8">System <span className="text-gradient">Design</span></h2>
              <p className="text-gray-400 text-lg leading-relaxed font-light mb-10">
                I emphasize writing <span className="text-foreground font-medium">modular, testable code</span>. My background in software engineering enables me to build systems that aren&apos;t just functional, but also robust and ready to scale.
              </p>
              <Link href="/contact">
                <button className="bg-white text-black px-10 py-4 rounded-xl font-bold flex items-center gap-2 hover:bg-gray-200 transition-all text-sm">
                  Work Together <ArrowRight size={18} />
                </button>
              </Link>
            </div>
            <div className="w-full lg:w-1/2 space-y-4">
              {[
                { title: "Object Oriented Design", progress: "90%" },
                { title: "API Architecture", progress: "85%" },
                { title: "Database Schema Design", progress: "88%" },
                { title: "Unit Testing", progress: "75%" }
              ].map((skill, i) => (
                <div key={i} className="space-y-2">
                  <div className="flex justify-between text-xs font-bold uppercase tracking-widest text-gray-500">
                    <span>{skill.title}</span>
                    <span>{skill.progress}</span>
                  </div>
                  <div className="h-2 bg-white/5 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: skill.progress }}
                      transition={{ duration: 1, delay: 0.5 }}
                      className="h-full bg-pink-gradient rounded-full"
                    />
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
