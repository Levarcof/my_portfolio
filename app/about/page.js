"use client";
import { motion } from "framer-motion";
import Image from "next/image";
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
        About <span className="text-pink-400">Me</span>
      </motion.h1>

      {/* Content Section */}
      <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Left Side - Image */}
        <motion.div
          className="flex justify-center"
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9 }}
        >
          <div className="relative w-64 h-64 rounded-2xl overflow-hidden shadow-lg shadow-pink-400/40">
            <Image
              src="/photo.png" // apni image "public" folder me rakho
              alt="My Photo"
              fill
              className="object-cover"
            />
          </div>
        </motion.div>

        {/* Right Side - Text */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9 }}
          className="flex flex-col gap-6 text-center md:text-left"
        >
          <h2 className="text-3xl font-bold text-pink-400">
            Software Developer & Programmer
          </h2>
          <p className="text-gray-300 leading-relaxed">
            I am a passionate Software Programmer and Web Developer with a
            strong interest in building efficient, scalable, and user-friendly
            applications. I love solving complex problems using clean code and
            modern technologies.
          </p>
          <p className="text-gray-300 leading-relaxed">
            With hands-on experience in web development and problem-solving, I
            aim to create impactful projects that focus on usability and
            performance. I’m always eager to learn new technologies and explore
            innovative ideas.
          </p>
          <div className="flex justify-center md:justify-start">
<a href="resume.jpg" download="resume.jpg" >   <button className="bg-pink-400 hover:bg-pink-300 px-6 py-2 rounded-xl text-white shadow-lg shadow-pink-400/40 transition">
              View Resume
            </button></a>         
          </div>
        </motion.div>
      </div>
    </div>
  );
}
