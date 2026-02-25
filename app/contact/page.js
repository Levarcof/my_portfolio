"use client";
import { motion } from "framer-motion";
import { Mail, MessageSquare, Send, Phone, MapPin } from "lucide-react";

export default function Contact() {
  const whatsappNumber = "919216919249";
  const emailAddress = "vikramp.1619@gmail.com";
  const whatsappMessage = "Hi Vikram! I want to connect with you.";
  const encodedMessage = encodeURIComponent(whatsappMessage);

  return (
    <div className="min-h-screen pt-32 pb-24 px-6 md:px-20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="bg-glow top-0 left-0 opacity-20" />
      <div className="bg-glow bottom-0 right-0 opacity-10" />

      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="inline-block px-4 py-1.5 rounded-full border border-pink-500/30 bg-pink-500/10 text-pink-400 text-xs font-semibold tracking-widest uppercase mb-6 backdrop-blur-sm"
          >
            Get In Touch
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-7xl font-bold tracking-tight mb-8"
          >
            Let&apos;s Build Something <span className="text-gradient">Great</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto font-light leading-relaxed"
          >
            I&apos;m currently available for freelance projects and full-time opportunities. Reach out and let&apos;s talk!
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="space-y-10"
          >
            <div className="glass p-8 rounded-3xl relative overflow-hidden group">
              <div className="bg-glow -top-20 -left-20 opacity-10 group-hover:opacity-20 transition-opacity" />
              <h3 className="text-2xl font-bold mb-8">Contact Information</h3>

              <div className="space-y-6">
                <div className="flex items-center gap-6 group">
                  <div className="w-12 h-12 rounded-2xl bg-pink-500/10 flex items-center justify-center text-pink-400 pink-glow transition-all">
                    <Mail size={24} />
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 uppercase tracking-widest font-bold mb-1">Email Me</p>
                    <p className="text-foreground font-medium">{emailAddress}</p>
                  </div>
                </div>

                <div className="flex items-center gap-6 group">
                  <div className="w-12 h-12 rounded-2xl bg-blue-500/10 flex items-center justify-center text-blue-400 transition-all group-hover:shadow-[0_0_20px_rgba(59,130,246,0.3)]">
                    <Phone size={24} />
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 uppercase tracking-widest font-bold mb-1">WhatsApp</p>
                    <p className="text-foreground font-medium">+{whatsappNumber}</p>
                  </div>
                </div>

                <div className="flex items-center gap-6 group">
                  <div className="w-12 h-12 rounded-2xl bg-purple-500/10 flex items-center justify-center text-purple-400 transition-all group-hover:shadow-[0_0_20px_rgba(168,85,247,0.3)]">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 uppercase tracking-widest font-bold mb-1">Location</p>
                    <p className="text-foreground font-medium">Rajasthan, India</p>
                  </div>
                </div>
              </div>

              <div className="mt-12 flex gap-4">
                <a
                  href={`https://api.whatsapp.com/send?phone=${whatsappNumber}&text=${encodedMessage}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 glass py-4 rounded-2xl font-bold text-sm flex items-center justify-center gap-2 hover:bg-white/10 transition-all"
                >
                  <MessageSquare size={18} className="text-green-400" /> WhatsApp
                </a>
                <a
                  href={`https://mail.google.com/mail/?view=cm&to=${emailAddress}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 bg-pink-gradient text-white py-4 rounded-2xl font-bold text-sm flex items-center justify-center gap-2 pink-glow hover:scale-105 transition-all"
                >
                  <Mail size={18} /> Send Email
                </a>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <form className="glass p-10 rounded-[2.5rem] space-y-8 relative overflow-hidden">
              <div className="bg-glow -bottom-20 -right-20 opacity-10" />
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-gray-500 ml-1">Your Name</label>
                  <input
                    type="text"
                    placeholder="John Doe"
                    className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 focus:outline-none focus:border-pink-400/50 focus:ring-1 focus:ring-pink-400/50 transition-all"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-gray-500 ml-1">Email Address</label>
                  <input
                    type="email"
                    placeholder="john@example.com"
                    className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 focus:outline-none focus:border-pink-400/50 focus:ring-1 focus:ring-pink-400/50 transition-all"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-gray-500 ml-1">Subject</label>
                <input
                  type="text"
                  placeholder="Project Inquiry"
                  className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 focus:outline-none focus:border-pink-400/50 focus:ring-1 focus:ring-pink-400/50 transition-all"
                />
              </div>

              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-gray-500 ml-1">Message</label>
                <textarea
                  rows="5"
                  placeholder="Tell me about your project..."
                  className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 focus:outline-none focus:border-pink-400/50 focus:ring-1 focus:ring-pink-400/50 transition-all resize-none"
                />
              </div>

              <button className="w-full bg-pink-gradient text-white py-5 rounded-[1.5rem] font-bold text-lg flex items-center justify-center gap-3 pink-glow hover:scale-[1.02] transition-all">
                Send Message <Send size={20} />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
