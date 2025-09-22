"use client";
import { motion } from "framer-motion";
import { Code, Globe, Cpu } from "lucide-react";
import Link from "next/link";

export default function page() {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center px-6 py-16">
      {/* Heading */}
      <motion.h1
        className="text-4xl md:text-6xl font-extrabold mb-14 text-center"
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        My <span className="text-pink-400">Skills</span>
      </motion.h1>

      {/* Skills Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 max-w-6xl w-full">
        {/* DSA */}
        <Link href="/dsa">  <motion.div
          className="p-8 border  border-gray-700 rounded-2xl shadow-lg bg-gradient-to-b from-[#111] to-[#1a1a1a] hover:border-pink-400 hover:shadow-pink-400/50 transition-all duration-300 flex flex-col items-center text-center"
          whileHover={{ scale: 1.05 }}
        >
          <Code className="w-12 h-12 text-pink-400 mb-4" />
          <h2 className="text-2xl font-semibold text-pink-400 mb-3">DSA</h2>
          <p className="text-sm text-gray-300 leading-relaxed">
            Strong problem-solving skills with Data Structures and Algorithms,
            focusing on efficient and optimized solutions.
          </p>
        </motion.div></Link>

      
        <Link href="/webd">  
         <motion.div
          className="p-8 border border-gray-700 rounded-2xl shadow-lg bg-gradient-to-b from-[#111] to-[#1a1a1a] hover:border-pink-400 hover:shadow-pink-400/50 transition-all duration-300 flex flex-col items-center text-center"
          whileHover={{ scale: 1.05 }}
        >
          <Globe className="w-12 h-12 text-pink-400 mb-4" />
          <h2 className="text-2xl font-semibold text-pink-400 mb-3">
            Web Development
          </h2>
          <p className="text-sm text-gray-300 leading-relaxed">
            Building responsive and modern websites using Next.js, React, and
            TailwindCSS with focus on performance and UI/UX.
          </p>
        </motion.div>
</Link>
        {/* Web Development */}
     
        {/* Software Development */}
        <Link href="/software">   <motion.div
          className="p-8 border border-gray-700 rounded-2xl shadow-lg bg-gradient-to-b from-[#111] to-[#1a1a1a] hover:border-pink-400 hover:shadow-pink-400/50 transition-all duration-300 flex flex-col items-center text-center"
          whileHover={{ scale: 1.05 }}
        >
          <Cpu className="w-12 h-12 text-pink-400 mb-4" />
          <h2 className="text-2xl font-semibold text-pink-400 mb-3">
            Software Development
          </h2>
          <p className="text-sm text-gray-300 leading-relaxed">
            Designing scalable applications with clean code practices, optimized
            performance, and modern software engineering principles.
          </p>
        </motion.div></Link>
     
      </div>
    </div>
  );
}
