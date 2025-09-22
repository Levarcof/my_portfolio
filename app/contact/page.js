"use client";
import { motion } from "framer-motion";
import { FaWhatsapp, FaEnvelope } from "react-icons/fa";

export default function page() {
  // Replace with your details
  const whatsappNumber = "919216919249"; // India number without +
  const emailAddress = "vikramp.1619@gmail.com";
  const whatsappMessage = "Hi Vikram! I want to connect with you."; // pre-filled message

  // Encode the message for URL
  const encodedMessage = encodeURIComponent(whatsappMessage);

  return (
    <div className="min-h-screen bg-black text-white px-6 py-12 flex flex-col items-center justify-center">
      
      {/* Hero Section */}
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl md:text-5xl font-bold text-pink-400 mb-6 text-center"
      >
        📞 Contact Me
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.6 }}
        className="text-lg md:text-xl text-center max-w-xl mb-12"
      >
        Have a project, question, or collaboration in mind? Reach out to me via
        WhatsApp or Email. I would love to hear from you!
      </motion.p>

      {/* Contact Buttons */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.6 }}
        className="flex flex-col sm:flex-row gap-6"
      >
        {/* WhatsApp Button */}
        <a
          href={`https://api.whatsapp.com/send?phone=${whatsappNumber}&text=${encodedMessage}`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-3 px-6 py-4 bg-green-500 text-black rounded-2xl font-semibold hover:scale-105 transition shadow-lg"
        >
          <FaWhatsapp className="text-2xl" />
          Chat on WhatsApp
        </a>

        {/* Email Button */}
        <a
          href={`https://mail.google.com/mail/?view=cm&to=${emailAddress}&su=Hello&body=Hi`}
          className="flex items-center gap-3 px-6 py-4 bg-pink-400 text-black rounded-2xl font-semibold hover:scale-105 transition shadow-lg"
        >
          <FaEnvelope className="text-2xl" />
          Send an Email
        </a>
      </motion.div>

      {/* Optional Footer Note */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6, duration: 0.6 }}
        className="mt-12 text-sm text-white/70 text-center max-w-md"
      >
        I will respond to all messages as soon as possible. Looking forward to
        collaborating with you!
      </motion.p>
    </div>
  );
}
