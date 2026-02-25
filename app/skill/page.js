"use client";
import { motion } from "framer-motion";
import { Code2, Globe, Cpu, ArrowLeft, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function Skills() {
  const skills = [
    {
      title: "DSA & Programming",
      icon: <Code2 className="text-pink-400" size={32} />,
      href: "/dsa",
      color: "pink",
      description: "Strong problem-solving skills with Data Structures and Algorithms, focusing on efficient and optimized solutions."
    },
    {
      title: "Web Development",
      icon: <Globe className="text-blue-400" size={32} />,
      href: "/webd",
      color: "blue",
      description: "Building responsive and modern websites using Next.js, React, and TailwindCSS with a focus on performance and UI/UX."
    },
    {
      title: "Software Engineering",
      icon: <Cpu className="text-purple-400" size={32} />,
      href: "/software",
      color: "purple",
      description: "Designing scalable applications with clean code practices, optimized performance, and modern principles."
    }
  ];

  return (
    <div className="min-h-screen pt-32 pb-24 px-6 md:px-20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="bg-glow top-0 right-0 opacity-20" />
      <div className="bg-glow bottom-0 left-0 opacity-10" />

      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <Link href="/" className="inline-flex items-center gap-2 text-gray-400 hover:text-pink-400 transition-colors group mb-8">
            <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" /> Back to Home
          </Link>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="inline-block px-4 py-1.5 rounded-full border border-pink-500/30 bg-pink-500/10 text-pink-400 text-xs font-semibold tracking-widest uppercase mb-6 backdrop-blur-sm"
          >
            Capabilities
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-7xl font-bold tracking-tight mb-8"
          >
            Technical <span className="text-gradient">Skills</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto font-light leading-relaxed"
          >
            Equipped with a diverse range of technical skills, I specialize in creating robust software and stunning web applications.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {skills.map((skill, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="relative group h-full"
            >
              <Link href={skill.href} className="block h-full">
                <div className={`glass p-10 rounded-[2.5rem] h-full flex flex-col transition-all duration-500 group-hover:-translate-y-3 group-hover:shadow-[0_20px_40px_rgba(0,0,0,0.4)]`}>
                  <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-8 bg-${skill.color}-500/10 group-hover:scale-110 transition-transform duration-500`}>
                    {skill.icon}
                  </div>
                  <h3 className="text-2xl font-bold mb-4">{skill.title}</h3>
                  <p className="text-gray-400 leading-relaxed mb-auto font-light">
                    {skill.description}
                  </p>
                  <div className="pt-8 flex items-center gap-2 text-sm font-bold text-foreground opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    Learn More <ArrowRight size={16} />
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
