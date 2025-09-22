"use client";
import { motion } from "framer-motion";
import { BarChart3, Github, Code2 } from "lucide-react";
import Link from "next/link";

export default function page() {
  return (
    <div className="min-h-screen bg-black text-white px-6 py-12">
      {/* Hero Section */}
      <section className="text-center mb-16">
        <motion.h1
          className="md:text-4xl text-2xl font-bold text-pink-400"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
        >
          🚀 My DSA Journey
        </motion.h1>
        <p className="mt-4 text-lg max-w-2xl mx-auto">
          I love solving algorithmic challenges and continuously improving my
          problem-solving skills. Here’s a quick snapshot of my{" "}
          <span className="text-pink-400">DSA expertise</span>.
        </p>
        <Link  href="https://leetcode.com/progress/" // <-- apna LeetCode link daalna
          target="_blank"
          className="inline-block mt-6 px-6 py-3 rounded-2xl bg-pink-400 text-black font-semibold hover:scale-105 transition">    Visit My LeetCode Profile</Link>
       
      </section>

      {/* Data Structures Section */}
      <section className="mb-20">
        <h2 className="md:text-3xl text-xl font-semibold text-pink-400 mb-8 text-center">
          📂 Data Structures I Know
        </h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {[
            { title: "Arrays & Strings" },
            { title: "Linked List (Singly & Doubly)" },
            { title: "Stacks & Queues" },
            { title: "HashMap / HashSet" },
            { title: "Trees (BST, Segment Tree)" },
            { title: "Graphs (BFS, DFS, Dijkstra)" },
            { title: "Heaps (Min / Max Heap)" },
            { title: "Trie" },
            { title: "Dynamic Programming" },
          ].map((ds, i) => (
            <motion.div
              key={i}
              className="p-6 rounded-2xl bg-zinc-900 shadow-lg border border-pink-400/30 hover:border-pink-400 hover:scale-105 transition"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <Code2 className="text-pink-400 w-8 h-8 mb-3" />
              <h3 className="text-xl font-semibold">{ds.title}</h3>
            </motion.div>
          ))}
        </div>
      </section>

      {/* LeetCode Stats Section */}
      <section className="text-center">
        <h2 className="text-3xl font-semibold text-pink-400 mb-8">
          📊 LeetCode Stats
        </h2>
        <div className="max-w-3xl mx-auto bg-zinc-900 p-8 rounded-2xl shadow-lg border border-pink-400/30">
          <BarChart3 className="w-10 h-10 text-pink-400 mx-auto mb-4" />
          <p className="text-lg">
            ✅ <span className="text-pink-400 font-bold">75+</span> Problems
            Solved
          </p>
          <div className="grid grid-cols-3 gap-4 mt-6 text-center">
            <div className="p-4 rounded-xl bg-zinc-800 border border-pink-400/20">
              <p className="text-pink-400 text-xl font-bold">15</p>
              <p className="text-sm">Easy</p>
            </div>
            <div className="p-4 rounded-xl bg-zinc-800 border border-pink-400/20">
              <p className="text-pink-400 text-xl font-bold">41</p>
              <p className="text-sm">Medium</p>
            </div>
            <div className="p-4 rounded-xl bg-zinc-800 border border-pink-400/20">
              <p className="text-pink-400 text-xl font-bold">21</p>
              <p className="text-sm">Hard</p>
            </div>
          </div>
          {/* <a
            href="https://github.com/your-github" // <-- apna GitHub repo daalna jaha DSA solutions hai
            target="_blank"
            className="inline-block mt-8 px-6 py-3 rounded-2xl border border-pink-400 text-pink-400 hover:bg-pink-400 hover:text-black transition"
          >
            View My DSA Repos on GitHub
          </a> */}
        </div>
      </section>
    </div>
  );
}
