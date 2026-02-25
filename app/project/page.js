"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { Github, ExternalLink, Code2 } from "lucide-react";

export default function Projects() {
  const projects = [
    {
      name: "Smart City",
      link: "https://github.com/Levarcof/smart-urban",
      img: "/smartCity.png",
      tech: ["Next.js", "Tailwind", "Framer Motion"],
      demo: "https://smart-urban-beta.vercel.app/",
    },
    {
      name: "Messanger",
      link: "https://github.com/Levarcof/messanger-app",
      img: "/message.png",
      tech: ["Next.js", "Tailwind", "Framer Motion"],
      demo: "https://messanger-app-eight.vercel.app/users",
    },
  
    {
      name: "Password Manager",
      link: "https://github.com/Levarcof/password-manager",
      img: "/password.png",
      tech: ["JavaScript", "Security", "HTML"],
      demo: "https://password-manager-two-theta.vercel.app/",
    },



  ];

  return (
    <div className="min-h-screen pt-32 pb-24 px-6 md:px-20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="bg-glow top-0 right-0 opacity-20" />
      <div className="bg-glow bottom-0 left-0 opacity-10" />

      {/* Header Section */}
      <div className="max-w-7xl mx-auto text-center mb-20">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="inline-block px-4 py-1.5 rounded-full border border-pink-500/30 bg-pink-500/10 text-pink-400 text-xs font-semibold tracking-widest uppercase mb-6 backdrop-blur-sm"
        >
          My Portfolio
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-7xl font-bold tracking-tight mb-8"
        >
          Featured <span className="text-gradient">Projects</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto font-light leading-relaxed"
        >
          Discover a collection of my latest work, where creativity meets clean code and premium design.
        </motion.p>
      </div>

      {/* Projects Grid */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {projects.map((project, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            viewport={{ once: true }}
            className="group relative"
          >
            <div className="glass rounded-[2rem] overflow-hidden hover:-translate-y-3 transition-all duration-500 h-full flex flex-col">
              {/* Image Container */}
              <div className="relative h-64 w-full overflow-hidden">
                <Image
                  src={project.img}
                  alt={project.name}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>

              {/* Content */}
              <div className="p-8 flex-grow flex flex-col">
                <h3 className="text-2xl font-bold mb-4 group-hover:text-pink-400 transition-colors">
                  {project.name}
                </h3>

                {/* Tech Tags */}
                <div className="flex flex-wrap gap-2 mb-8 mt-auto">
                  {project.tech.map((tag) => (
                    <span
                      key={tag}
                      className="text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-white/5 border border-white/10 text-gray-400"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Buttons */}
                <div className="flex items-center gap-4">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 py-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 transition-all font-semibold text-sm"
                  >
                    <Github size={18} /> GitHub
                  </a>
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 py-3 rounded-xl bg-pink-gradient text-white font-bold text-sm pink-glow"
                  >
                    <ExternalLink size={18} /> Live Demo
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
