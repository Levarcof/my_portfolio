"use client";
import { motion } from "framer-motion";
import Link from "next/link";


export default function page() {
  const projects = [
    {
      name: "Spotify-clon",
      link: "https://github.com/Levarcof/spotify-clon",
      img: "/spotify.png", // apna project image path
    },
    {
      name: "Patreon",
       link: "https://github.com/Levarcof/patreaon_clon",
      img: "/paterion.png",
    },
    {
      name: "Password Mannager",
      link: "https://github.com/Levarcof/password-manager",
      img: "password.png",
    },
    {
      name: "Twitter",
   link: "https://github.com/Levarcof/Twitter-clon",
      img: "twitter.png",
    },
    {
      name: "Link Tree",
      link: "https://github.com/Levarcof/link-tree",
      img: "link.png",
    },
    {
      name: "currency convertor",
 link: "https://github.com/Levarcof/currency-convertor",
      img: "currency.png",
    },
    {
      name: "Tast Manager",
   link: "https://github.com/Levarcof/Todo",
      img: "todo.png",
    },
    {
      name: "Tic toc toi game",
     link: "https://github.com/Levarcof/Tic-tok-game",
      img: "/tictoc.png",
    },
    {
      name: "Snack Game",
      link: "https://github.com/Levarcof/snake-game",
      img: "snack.png",
    },
    // aur projects add kar sakte ho
  ];

  return (
    <div className="min-h-screen bg-black text-white px-6 py-12">
      {/* Hero Section */}
      <section className="text-center mb-16">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-5xl font-bold text-pink-400 mb-4"
        >
          🚀 My Projects
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-lg md:text-xl max-w-2xl mx-auto text-white"
        >
          Here are some of the projects I have built. Click on the project to
          view the code or live demo.
        </motion.p>
      </section>

      {/* Projects Grid */}
      <section className="max-w-6xl mx-auto grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, idx) => (
          
          <motion.a
            key={idx}
            href={project.link}
            target="_blank"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: idx * 0.1 }}
            className="bg-zinc-900 rounded-2xl overflow-hidden shadow-lg border border-pink-400/30 hover:scale-105 transition-transform"
          >
            <img
              src={project.img}
              alt={project.name}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-xl font-semibold text-pink-400 mb-2">
                {project.name}
              </h3>
              <p className="text-white underline text-sm">
                View
                
              </p>
            </div>
          </motion.a>
        ))}
      </section>
    </div>
  );
}
