"use client";
import Image from "next/image"
import Link from "next/link";
import { ArrowRight, Code, Terminal, Cpu, Download, Github, Mail } from "lucide-react";
import { motion } from "framer-motion";

export default function Home() {
  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    transition: { duration: 0.8, ease: "easeOut" },
    viewport: { once: true, margin: "-100px" }
  };

  return (
<<<<<<< HEAD
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/bgPortfolio.jpg"
            alt="Hero Background"
            fill
            className="object-cover opacity-40"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/80 to-background z-10" />
        </div>

        {/* Animated Background Glow */}
        <div className="bg-glow top-1/4 -right-20 opacity-30" />
        <div className="bg-glow bottom-1/4 -left-20 opacity-20" style={{ animationDelay: '2s' }} />

        {/* Content */}
        <div className="relative z-20 text-center px-6 max-w-5xl mx-auto mt-20">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="animate-float"
          >
            <span className="px-4 py-1.5 rounded-full border border-pink-500/30 bg-pink-500/10 text-pink-400 text-xs font-semibold tracking-widest uppercase mb-6 inline-block backdrop-blur-sm">
              Open for new opportunities
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-3xl font-medium mb-4 opacity-90"
          >
            Hello, I&apos;m
          </motion.h2>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-4xl md:text-6xl font-bold mb-6 tracking-tighter"
          >
            Vikram <span className="text-gradient">Prajapat</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-sm md:text-lg text-gray-400 max-w-2xl mx-auto mb-10 leading-relaxed font-light"
          >
            A high-end <span className="text-foreground font-medium">Software Developer</span> and <span className="text-foreground font-medium">Programmer</span> crafting premium digital experiences with precision and passion.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex items-center justify-center gap-4"
          >
            <Link href="/contact" className="group relative">
              <div className="absolute -inset-0.5 bg-pink-gradient rounded-xl blur opacity-30 group-hover:opacity-100 transition duration-500"></div>
              <button className="relative bg-pink-gradient text-white px-10 py-2 rounded-xl font-semibold flex items-center gap-2 hover:scale-105 transition-all duration-300">
                Hire Me <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </Link>

            <Link href="/project">
              <button className="glass text-foreground px-10 py-2 rounded-xl font-semibold hover:bg-gray-100/10 transition-all duration-300">
                View Projects
              </button>
            </Link>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.5 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 hidden md:block"
        >
          <div className="w-6 h-10 border-2 border-foreground rounded-full flex justify-center p-1">
            <div className="w-1 h-3 bg-pink-400 rounded-full animate-bounce" />
          </div>
        </motion.div>
      </section>

      {/* About Section */}
      <section className="py-24 px-6 md:px-20 relative overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <motion.div
              {...fadeInUp}
              className="relative w-full lg:w-1/2 group"
            >
              <div className="absolute -inset-4 bg-pink-gradient rounded-3xl blur-2xl opacity-10 group-hover:opacity-20 transition duration-700"></div>
              <div className="relative glass rounded-3xl p-2 overflow-hidden">
                <Image
                  src="/photo2.png"
                  alt="Vikram Prajapat"
                  width={600}
                  height={600}
                  className="rounded-2xl object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                />
              </div>
              {/* Badge */}
              <div className="absolute -bottom-6 -right-6 glass p-6 rounded-2xl hidden md:block">
                <p className="text-3xl font-bold text-gradient">2+</p>
                <p className="text-xs text-gray-400 uppercase tracking-widest">Years Experience</p>
              </div>
            </motion.div>

            <motion.div
              {...fadeInUp}
              transition={{ ...fadeInUp.transition, delay: 0.2 }}
              className="w-full lg:w-1/2"
            >
              <h3 className="text-pink-400 font-bold uppercase tracking-widest text-sm mb-4">Discovery</h3>
              <h2 className="text-4xl md:text-5xl font-bold mb-8 tracking-tight">About <span className="text-gradient">Me</span></h2>

              <div className="space-y-6 text-gray-400 text-lg leading-relaxed font-light">
                <p>
                  I am a passionate <span className="text-foreground font-medium">Software Programmer</span> and <span className="text-foreground font-medium">Web Developer</span> with a strong interest in building efficient, scalable, and user-friendly applications.
                </p>
                <p>
                  With hands-on experience in modern technologies, I focus on writing optimized solutions while keeping usability and performance in mind. My goal is to transform complex problems into elegant, functional digital solutions.
                </p>
              </div>

              <div className="mt-10 grid grid-cols-2 gap-6">
                <div className="glass p-4 rounded-xl">
                  <p className="text-foreground font-semibold">Fast Delivery</p>
                  <p className="text-xs text-gray-500">Efficient workflow</p>
                </div>
                <div className="glass p-4 rounded-xl">
                  <p className="text-foreground font-semibold">Pixel Perfect</p>
                  <p className="text-xs text-gray-500">Attention to detail</p>
                </div>
              </div>

              <Link href="/about" className="inline-block mt-10">
                <button className="text-pink-400 font-bold flex items-center gap-2 group">
                  Read Full Story <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </button>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 px-6 md:px-20 bg-black/20">
        <motion.div
          {...fadeInUp}
          className="max-w-7xl mx-auto text-center mb-16"
        >
          <h3 className="text-pink-400 font-bold uppercase tracking-widest text-sm mb-4">What I Do</h3>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight">Technical <span className="text-gradient">Expertise</span></h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {/* Web Dev Card */}
          <motion.div
            {...fadeInUp}
            transition={{ ...fadeInUp.transition, delay: 0.1 }}
            className="glass p-10 rounded-3xl group hover:-translate-y-2 transition-all duration-300"
          >
            <div className="w-14 h-14 bg-pink-500/10 rounded-2xl flex items-center justify-center mb-6 group-hover:pink-glow transition-all">
              <Code className="text-pink-400" size={30} />
            </div>
            <h4 className="text-xl font-bold mb-4">Web Development</h4>
            <p className="text-gray-400 leading-relaxed mb-8">
              Creating modern, responsive, and user-friendly websites using cutting-edge front-end technologies and frameworks.
            </p>
            <Link href="/webd" className="text-sm font-semibold text-pink-400 flex items-center gap-2 group">
              Explore <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>

          {/* DSA Card */}
          <motion.div
            {...fadeInUp}
            transition={{ ...fadeInUp.transition, delay: 0.2 }}
            className="glass p-10 rounded-3xl group hover:-translate-y-2 transition-all duration-300"
          >
            <div className="w-14 h-14 bg-blue-500/10 rounded-2xl flex items-center justify-center mb-6 group-hover:shadow-[0_0_20px_rgba(59,130,246,0.3)] transition-all">
              <Terminal className="text-blue-400" size={30} />
            </div>
            <h4 className="text-xl font-bold mb-4">Programming</h4>
            <p className="text-gray-400 leading-relaxed mb-8">
              Strong problem-solving skills with a solid foundation in Data Structures and Algorithms for efficient software solutions.
            </p>
            <Link href="/dsa" className="text-sm font-semibold text-blue-400 flex items-center gap-2 group">
              Explore <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>

          {/* Software Engineer Card */}
          <motion.div
            {...fadeInUp}
            transition={{ ...fadeInUp.transition, delay: 0.3 }}
            className="glass p-10 rounded-3xl group hover:-translate-y-2 transition-all duration-300"
          >
            <div className="w-14 h-14 bg-purple-500/10 rounded-2xl flex items-center justify-center mb-6 group-hover:shadow-[0_0_20px_rgba(168,85,247,0.3)] transition-all">
              <Cpu className="text-purple-400" size={30} />
            </div>
            <h4 className="text-xl font-bold mb-4">Software Engineering</h4>
            <p className="text-gray-400 leading-relaxed mb-8">
              Designing and developing scalable, efficient, and reliable software systems with clean and maintainable code.
            </p>
            <Link href="/software" className="text-sm font-semibold text-purple-400 flex items-center gap-2 group">
              Explore <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Resume CTA Section */}
      <section className="py-24 px-6 md:px-20 relative overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <motion.div
            {...fadeInUp}
            className="glass p-12 md:p-20 rounded-[3rem] relative overflow-hidden bg-gradient-to-br from-pink-500/5 via-transparent to-purple-500/5 group"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-pink-500/10 rounded-full blur-[100px] pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-purple-500/10 rounded-full blur-[100px] pointer-events-none" />

            <div className="flex flex-col lg:flex-row items-center justify-between gap-12 relative z-10">
              <div className="text-center lg:text-left">
                <h2 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">Ready to <span className="text-gradient">Collaborate</span>?</h2>
                <p className="text-gray-400 text-lg md:text-xl max-w-xl mx-auto lg:mx-0 font-light leading-relaxed">
                  I&apos;m currently open to freelance opportunities and full-time positions. Let&apos;s build something amazing together.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-6 shrink-0">
                <a href="/resume.jpg" download="Vikram_Resume.jpg" className="group">
                  <button className="bg-pink-gradient text-white px-10 py-5 rounded-2xl font-bold flex items-center gap-3 pink-glow hover:scale-105 transition-all">
                    <Download size={22} className="group-hover:translate-y-0.5 transition-transform" /> Get Resume
                  </button>
                </a>
                <Link href="/contact">
                  <button className="glass px-10 py-5 rounded-2xl font-bold flex items-center gap-3 hover:bg-white/10 transition-all">
                    <Mail size={22} /> Say Hello
                  </button>
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 md:px-20 border-t border-white/5">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-10">
          <div className="text-center md:text-left">
            <Link href="/" className="text-2xl font-bold tracking-tighter inline-block mb-4">
              <span className="text-foreground">Levar</span>
              <span className="text-pink-400">cof</span>
            </Link>
            <p className="text-gray-500 text-sm">
              © {new Date().getFullYear()} Vikram Prajapat. All rights reserved.
            </p>
          </div>

          <div className="flex items-center gap-8">
            <a href="https://github.com/Levarcof" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-pink-400 transition-colors">
              <Github size={24} />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-pink-400 transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-pink-400 transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" width="23" height="23" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg>
            </a>
          </div>

          <p className="text-sm text-gray-500 font-medium">
            Designed with <span className="text-pink-400">❤</span> by Vikram
          </p>
        </div>
      </footer>
    </main>
=======
    <>
      <div className="main flex w-[100vw] bg-[#0a0b0b]">
        <div className="txt w-[60%] m-6 flex items-center justify-center">
          <div className="flex-col flex gap-1">
            <p className=" text-[10px] md:text-xl">Hello i&apos;am</p>
            <p className="md:text-6xl">Vikram <span className="text-pink-400">Prajapat</span></p>
            <p className="md:text-xl text-[10px]">i am Software developer and Programmer</p>
            <Link href="/contact">            <button className="bg-pink-400 cursor-pointer mt-3 w-fit  hover:bg-pink-300 px-5 py-1 md:p-2 rounded-xl text-white">contact</button></Link>

          </div>
        </div>
        <div className="img">
          <Image
            src="/photo.png"   
            alt="My Photo"
            width={350}
            height={350}
            className="object-cover opacity-95 mask-image"
          />

        </div>
      </div>
      <div className="middle w-full bg-[#171d29] flex flex-col md:flex-row items-center justify-center px-6 py-10 md:py-16 gap-8 md:gap-16">

  {/* Image Section */}
  <div className="img bg-black rounded-2xl overflow-hidden shadow-lg">
    <Image
      src="/photo2.png"  // image ko "public" folder me rakhna hai
      alt="My Photo"
      width={300}
      height={300}
      className="object-cover rounded-2xl opacity-95"
    />
  </div>

  {/* Text Section */}
  <div className="txt w-full md:w-[45%] text-center md:text-left flex flex-col items-center md:items-start gap-4">
    <div>
      <p className="font-bold text-3xl md:text-5xl text-white mb-2">About Me</p>
      <p className="text-pink-400 text-sm md:text-base font-medium">
        Programmer <span className="text-white">&</span> Developer
      </p>
    </div>

    <p className="text-gray-400 text-sm md:text-base leading-relaxed">
      I am a passionate Software Programmer and Web Developer with a strong interest in building efficient, scalable, and user-friendly applications. I enjoy solving complex problems through clean code and modern technologies.
    </p>

    <p className="text-gray-400 text-sm md:text-base leading-relaxed">
      With hands-on experience in web development, programming, and problem-solving, I focus on writing optimized solutions while keeping usability and performance in mind. I am always eager to learn new technologies, explore innovative ideas, and contribute to impactful projects.
    </p>

    <Link href="/about">
      <button className="bg-pink-400 hover:bg-pink-300 transition-all mt-4 px-5 py-2 rounded-xl text-white font-medium">
        Learn more
      </button>
    </Link>
  </div>

</div>

      <div className="service w-[100vw]  md:h-[75vh] bg-[#060b17] flex flex-col items-center justify-center p-3">
        <div className="head font-bold text-2xl md:text-5xl">Our Service</div>
        <div className="flex flex-col md:flex-row flex-wrap items-center justify-center gap-6 p-4 w-full">
  
  <div className="bg-[#171d29] rounded-2xl flex flex-col items-center gap-3 p-4 w-full sm:w-[80%] md:w-[30%] text-center transition-transform hover:scale-105 duration-300">
    <div className="text-pink-400 font-bold text-4xl">&lt;/&gt;</div>
    <p className="font-semibold text-lg text-white">Web Developer</p>
    <p className="text-gray-400">
      I am a passionate Web Developer skilled in creating modern, responsive, and user-friendly websites. 
      My expertise includes front-end technologies like HTML, CSS, and JavaScript.
    </p>
    <Link href="/webd">
      <button className="bg-pink-400 hover:bg-pink-300 mt-3 px-4 py-1 rounded-xl text-white font-medium">
        Read more
      </button>
    </Link>
  </div>

  <div className="bg-[#171d29] rounded-2xl flex flex-col items-center gap-3 p-4 w-full sm:w-[80%] md:w-[30%] text-center transition-transform hover:scale-105 duration-300">
    <div className="text-pink-400 font-bold text-3xl">DSA</div>
    <p className="font-semibold text-lg text-white">Programmer</p>
    <p className="text-gray-400">
      I have strong problem-solving skills with a solid foundation in Data Structures and Algorithms.
      I enjoy optimizing solutions for efficiency and tackling complex coding challenges.
    </p>
    <Link href="/dsa">
      <button className="bg-pink-400 hover:bg-pink-300 mt-3 px-4 py-1 rounded-xl text-white font-medium">
        Read more
      </button>
    </Link>
  </div>

  <div className="bg-[#171d29] rounded-2xl flex flex-col items-center gap-3 p-4 w-full sm:w-[80%] md:w-[30%] text-center transition-transform hover:scale-105 duration-300">
    <div className="text-pink-400 font-bold text-3xl">Software</div>
    <p className="font-semibold text-lg text-white">Software Engineer</p>
    <p className="text-gray-400">
      Skilled in designing and developing scalable, efficient, and reliable software solutions.
      Focused on writing clean code, optimizing performance, and delivering impactful applications.
    </p>
    <Link href="/software">
      <button className="bg-pink-400 hover:bg-pink-300 mt-3 px-4 py-1 rounded-xl text-white font-medium">
        Read more
      </button>
    </Link>
  </div>

</div>

      </div>
<footer className="bg-[#171d29] text-gray-300 py-6 mt-10">
  <div className="max-w-6xl mx-auto px-4 flex flex-col sm:flex-row justify-between items-center gap-6">
    
    <p className="text-sm text-center sm:text-left">
      © {new Date().getFullYear()} - Vikram Prajapat 
    </p>


    <div className="flex space-x-5 justify-center">
      
      <a href="https://github.com/Levarcof" target="_blank" rel="noopener noreferrer">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 hover:text-white transition" fill="currentColor" viewBox="0 0 24 24">
          <path fillRule="evenodd" d="M12 .297C5.373.297 0 5.67 0 12.297c0 5.302 3.438 9.8 8.205 11.387.6.113.82-.26.82-.577 
            0-.285-.01-1.04-.015-2.04-3.338.726-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.756-1.333-1.756-1.09-.744.082-.729.082-.729 
            1.205.085 1.84 1.237 1.84 1.237 1.07 1.834 2.807 1.304 3.492.997.108-.775.418-1.305.762-1.605-2.665-.305-5.466-1.334-5.466-5.93 
            0-1.31.468-2.38 1.235-3.22-.123-.303-.535-1.527.117-3.176 
            0 0 1.008-.322 3.3 1.23a11.52 
            11.52 0 013.003-.404c1.018.005 2.044.138 
            3.003.404 2.29-1.552 3.296-1.23 
            3.296-1.23.653 1.649.241 2.873.118 
            3.176.77.84 1.233 1.91 1.233 
            3.22 0 4.61-2.804 5.624-5.475 
            5.922.43.372.823 1.102.823 
            2.222 0 1.606-.015 2.898-.015 
            3.293 0 .32.218.694.825.576C20.565 
            22.092 24 17.594 24 12.297 24 
            5.67 18.627.297 12 .297z"/>
        </svg>
      </a>

      <a href="https://www.linkedin.com/feed/" target="_blank" rel="noopener noreferrer">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 hover:text-white transition" fill="currentColor" viewBox="0 0 24 24">
          <path d="M4.98 3.5C4.98 4.88 3.88 6 2.5 
            6S0 4.88 0 3.5 1.12 1 2.5 1 4.98 
            2.12 4.98 3.5zM.5 8h4V24h-4V8zM8 
            8h3.6v2.3h.05c.5-.95 1.75-2.3 
            3.6-2.3C19.4 8 20 11.3 20 
            15.2V24h-4v-8c0-1.9-.03-4.3-2.6-4.3-2.6 
            0-3 2-3 4.1V24H8V8z"/>
        </svg>
      </a>

      <a href="https://x.com/home" target="_blank" rel="noopener noreferrer">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 hover:text-white transition" fill="currentColor" viewBox="0 0 24 24">
          <path d="M23.954 4.569c-.885.392-1.83.656-2.825.775 
            1.014-.611 1.794-1.574 2.163-2.723-.949.555-2.005.959-3.127 
            1.184-.897-.959-2.178-1.555-3.594-1.555-2.717 
            0-4.924 2.206-4.924 4.924 0 .39.045.765.127 
            1.124-4.09-.205-7.719-2.165-10.148-5.144-.424.729-.666 
            1.577-.666 2.475 0 1.708.869 3.216 2.188 
            4.099-.807-.026-1.566-.248-2.229-.616v.062c0 
            2.385 1.693 4.374 3.946 4.827-.413.111-.849.171-1.296.171-.317 
            0-.626-.03-.928-.086.627 1.956 2.444 3.379 4.6 
            3.419-1.68 1.318-3.809 2.105-6.102 
            2.105-.396 0-.788-.023-1.175-.069 
            2.179 1.397 4.768 2.212 7.557 
            2.212 9.054 0 14-7.496 14-13.986 
            0-.21-.006-.423-.016-.634.962-.689 
            1.8-1.56 2.46-2.548l-.047-.02z"/>
        </svg>
      </a>
    </div>
  </div>
</footer>


    </>
>>>>>>> 756008c51090e8c76de52b3cc5b45facbb208da4
  );
}
