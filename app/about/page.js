"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Download, User, Cpu, Code2 } from "lucide-react";

export default function About() {
  return (
    <div className="min-h-screen pt-32 pb-24 px-6 md:px-20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="bg-glow top-0 right-0 opacity-20" />
      <div className="bg-glow bottom-0 left-0 opacity-10" />

      <div className="max-w-7xl mx-auto">
        <div className="mb-12">
          <Link href="/" className="inline-flex items-center gap-2 text-gray-400 hover:text-pink-400 transition-colors group mb-8">
            <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" /> Back to Home
          </Link>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="inline-block px-4 py-1.5 rounded-full border border-pink-500/30 bg-pink-500/10 text-pink-400 text-xs font-semibold tracking-widest uppercase mb-6 backdrop-blur-sm"
          >
            My Story
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-7xl font-bold tracking-tight mb-8"
          >
            About <span className="text-gradient">Me</span>
          </motion.h1>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          {/* Image Column */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-5 relative group"
          >
            <div className="absolute -inset-4 bg-pink-gradient rounded-3xl blur-2xl opacity-10 group-hover:opacity-20 transition duration-700"></div>
            <div className="relative glass rounded-3xl p-3 overflow-hidden">
              <Image
                src="/photo.png"
                alt="Vikram Prajapat"
                width={800}
                height={800}
                className="rounded-2xl object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>

            <div className="absolute -bottom-6 -left-6 glass p-6 rounded-2xl hidden md:block">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-pink-500/10 flex items-center justify-center text-pink-400">
                  <User size={24} />
                </div>
                <div>
                  <p className="text-foreground font-bold">Vikram Prajapat</p>
                  <p className="text-xs text-gray-500 font-medium">Full Stack Developer</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Text Column */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-7 space-y-8"
          >
            <h2 className="text-3xl font-bold text-foreground">
              Passionate <span className="text-pink-400">Software Developer</span> & Programmer
            </h2>

            <div className="space-y-6 text-gray-400 text-lg leading-relaxed font-light">
              <p>
                I am a dedicated <span className="text-foreground font-medium">Software Programmer</span> and <span className="text-foreground font-medium">Web Developer</span> with an unwavering passion for building high-quality, impact-driven software solutions.
              </p>
              <p>
                My journey in tech is driven by a desire to solve complex problems through clean, maintainable code and elegant design. Currently, I focus on the MERN stack and Next.js, always seeking to optimize for both developer experience and performance.
              </p>
              <p>
                Whether it&apos;s crafting a pixel-perfect user interface or architecting a robust backend, I approach every project with meticulous attention to detail and a commitment to excellence. I thrive in collaborative environments and am always eager to contribute to innovative projects.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-6">
              <div className="glass p-6 rounded-2xl flex items-center gap-4">
                <div className="w-10 h-10 rounded-xl bg-blue-500/10 flex items-center justify-center text-blue-400">
                  <Code2 size={20} />
                </div>
                <div>
                  <p className="text-foreground font-semibold text-sm">Clean Architecture</p>
                  <p className="text-xs text-gray-500">Robust & Scalable</p>
                </div>
              </div>
              <div className="glass p-6 rounded-2xl flex items-center gap-4">
                <div className="w-10 h-10 rounded-xl bg-purple-500/10 flex items-center justify-center text-purple-400">
                  <Cpu size={20} />
                </div>
                <div>
                  <p className="text-foreground font-semibold text-sm">Modern Tech Stack</p>
                  <p className="text-xs text-gray-500">Latest Standards</p>
                </div>
              </div>
            </div>

            <div className="pt-8">
              <a href="/resume.jpg" download="Vikram_Resume.jpg" className="group">
                <button className="bg-pink-gradient text-white px-8 py-4 rounded-xl font-bold flex items-center gap-3 pink-glow hover:scale-105 transition-all">
                  <Download size={20} className="group-hover:translate-y-0.5 transition-transform" /> Download Resume
                </button>
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
