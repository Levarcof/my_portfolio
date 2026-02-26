"use client";
import { motion } from "framer-motion";
import { Terminal, Trophy, Code2 } from "lucide-react";
import Link from "next/link";

export default function DSA() {
  const dataStructures = [
    { title: "Arrays & Strings", desc: "Linear systems" },
    { title: "Linked Lists", desc: "Sequential mapping" },
    { title: "Stacks & Queues", desc: "LIFO/FIFO Logic" },
    { title: "Trees & BST", desc: "Hierarchical data" },
    { title: "Graphs", desc: "Complex networks" },
    { title: "HashMaps", desc: "Efficient indexing" },
    { title: "Dynamic Programming", desc: "Optimized recursion" },
    { title: "Sorting / Searching", desc: "Algorithmic core" },
    { title: "Advanced Trees", desc: "Segment & Fenwick" },
  ];

  return (
    <div className="min-h-screen pt-20 pb-24 px-6 md:px-20 relative overflow-hidden">
      
      <div className="bg-glow top-0 right-1/4 opacity-20" />
      <div className="bg-glow bottom-0 left-1/4 opacity-10" />

      <div className="max-w-7xl mx-auto text-center mb-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="inline-block px-4 py-1.5 rounded-full border border-pink-500/30 bg-pink-500/10 text-pink-400 text-xs font-semibold tracking-widest uppercase mb-6 backdrop-blur-sm"
        >
          Algorithmics
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold tracking-tight mb-4"
        >
          Problem <span className="text-gradient">Solving</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-gray-400 text-sm md:text-lg max-w-2xl mx-auto font-light leading-relaxed"
        >
          Master of logic and efficiency. I focus on crafting optimized solutions for complex computational problems.
        </motion.p>
      </div>

      {/* DSA Grid */}
      <section className="mb-32 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {dataStructures.map((ds, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: i * 0.05 }}
            viewport={{ once: true }}
            className="glass p-8 rounded-3xl group hover:-translate-y-2 transition-all duration-300 border-white/5"
          >
            <div className="w-12 h-12 rounded-xl bg-pink-500/10 flex items-center justify-center text-pink-400 mb-6">
              <Code2 size={24} />
            </div>
            <h3 className="text-xl font-bold mb-2">{ds.title}</h3>
            <p className="text-xs text-gray-500 uppercase tracking-widest font-bold">
              {ds.desc}
            </p>
          </motion.div>
        ))}
      </section>

      {/* LeetCode Section */}
      <section className="max-w-4xl mx-auto">
        <div className="glass p-12 md:p-16 rounded-[3rem] text-center relative overflow-hidden">
          <div className="bg-glow -top-20 -left-20 opacity-10" />

          <div className="w-16 h-16 rounded-2xl bg-blue-500/10 flex items-center justify-center text-blue-400 mx-auto mb-8">
            <Terminal size={32} />
          </div>

          <h2 className="text-3xl md:text-5xl font-bold mb-8">
            LeetCode <span className="text-gradient">Statistics</span>
          </h2>

          <div className="grid grid-cols-3 gap-6 mb-12">
            {[
              { label: "Easy", count: "15", color: "text-green-400" },
              { label: "Medium", count: "41", color: "text-yellow-400" },
              { label: "Hard", count: "21", color: "text-pink-400" },
            ].map((stat, i) => (
              <div key={i} className="bg-white/5 rounded-2xl p-6 border border-white/5">
                <p className={`text-2xl md:text-4xl font-bold mb-2 ${stat.color}`}>
                  {stat.count}
                </p>
                <p className="text-xs text-gray-500 uppercase font-bold tracking-widest">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <a
              href="https://leetcode.com"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-pink-gradient text-white px-10 py-4 rounded-xl font-bold flex items-center gap-2 hover:scale-105 transition-all text-sm"
            >
              LeetCode Profile <Trophy size={18} />
            </a>

            <a
              href="https://github.com/Levarcof"
              target="_blank"
              rel="noopener noreferrer"
              className="glass px-10 py-4 rounded-xl font-bold flex items-center gap-2 hover:bg-white/10 transition-all text-sm"
            >
              View DSA Repos <Code2 size={18} />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
