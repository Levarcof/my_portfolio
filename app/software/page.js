"use client";
import { motion } from "framer-motion";
import { FaCuttlefish, FaJava, FaJs } from "react-icons/fa";
import { 
  SiCplusplus, 
  SiMongodb, 
  SiIntellijidea, 
  SiPostman 
} from "react-icons/si";
import { Code2, Server } from "lucide-react";

export default function SoftwareDevPage() {
  const skills = [
    {
      title: "Languages",
      items: [
        { name: "C", icon: <FaCuttlefish className="text-pink-400 text-4xl" /> },
        { name: "C++", icon: <SiCplusplus className="text-pink-400 text-4xl" /> },
        { name: "Java", icon: <FaJava className="text-pink-400 text-4xl" /> },
        { name: "JavaScript", icon: <FaJs className="text-pink-400 text-4xl" /> },
      ],
    },
    {
      title: "Databases",
      items: [
        { name: "MongoDB", icon: <SiMongodb className="text-pink-400 text-4xl" /> },
      ],
    },
    {
      title: "Tools & IDEs",
      items: [
        { name: "VS Code", icon: <Code2 className="text-pink-400 text-4xl" /> },
        { name: "IntelliJ IDEA", icon: <SiIntellijidea className="text-pink-400 text-4xl" /> },
      ],
    },
    {
      title: "Other Skills",
      items: [
        { name: "API Development", icon: <Server className="text-pink-400 text-4xl" /> },
        { name: "Problem Solving", icon: <Code2 className="text-pink-400 text-4xl" /> },
        { name: "Testing (Postman)", icon: <SiPostman className="text-pink-400 text-4xl" /> },
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-black text-white px-6 py-12">
      {/* Hero Section */}
      <section className="text-center mb-16">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-2xl md:text-5xl font-bold text-pink-400 mb-4"
        >
          💻 Software Development Skills
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-lg md:text-xl max-w-2xl mx-auto text-white mb-6"
        >
          I develop scalable, maintainable, and efficient software solutions.
          From programming languages to databases and APIs, here are my core
          competencies.
        </motion.p>
        <motion.a
          href="https://github.com/Levarcof?tab=repositories" // replace with your GitHub link
          target="_blank"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="inline-block mt-4 px-8 py-3 rounded-2xl bg-pink-400 text-black font-semibold hover:scale-105 transition"
        >
          View My Projects
        </motion.a>
      </section>

      {/* Skills Section */}
      <section className="mb-20 max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-10">
          {skills.map((category, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-zinc-900 p-6 rounded-2xl shadow-lg border border-pink-400/30"
            >
              <h2 className="text-2xl font-semibold text-pink-400 mb-6">
                {category.title}
              </h2>
              <div className="grid grid-cols-2 gap-6">
                {category.items.map((item, i) => (
                  <div
                    key={i}
                    className="flex flex-col items-center gap-2 hover:scale-110 transition-transform"
                  >
                    {item.icon}
                    <p className="text-white mt-2 font-medium">{item.name}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Optional Projects / Experience Section */}
      {/* <section className="max-w-4xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="md:text-3xl text-xl font-semibold text-pink-400 mb-8 text-center"
        >
          🔹 Key Projects & Experience
        </motion.h2>
        <motion.div
          className="space-y-6"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          <div className="bg-zinc-900 p-6 rounded-2xl shadow-lg border border-pink-400/30 hover:scale-105 transition">
            <h3 className="text-xl font-semibold text-pink-400 mb-2">
              Library Management System
            </h3>
            <p className="text-white">
              Built in Java with MongoDB backend. Implements CRUD operations,
              REST API for book management and user authentication.
            </p>
          </div>

          <div className="bg-zinc-900 p-6 rounded-2xl shadow-lg border border-pink-400/30 hover:scale-105 transition">
            <h3 className="text-xl font-semibold text-pink-400 mb-2">
              API Development
            </h3>
            <p className="text-white">
              Developed RESTful APIs using Node.js & Express for a task
              management app. Includes authentication, validation and database
              integration with MongoDB.
            </p>
          </div>

          <div className="bg-zinc-900 p-6 rounded-2xl shadow-lg border border-pink-400/30 hover:scale-105 transition">
            <h3 className="text-xl font-semibold text-pink-400 mb-2">
              Custom Data Structures
            </h3>
            <p className="text-white">
              Implemented custom HashMap and LinkedList in C++ and Java. Focused
              on efficiency and memory optimization.
            </p>
          </div>
        </motion.div>
      </section> */}
    </div>
  );
}
