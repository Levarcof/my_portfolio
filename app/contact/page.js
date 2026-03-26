"use client";
import { motion } from "framer-motion";
import { Mail, MessageSquare, Phone, Linkedin } from "lucide-react";
import Image from "next/image";

export default function Contact() {
  const whatsappNumber = "919216919249";
  const emailAddress = "vikramp.1619@gmail.com";
  const whatsappMessage = "Hi Vikram! I want to connect with you.";
  const encodedMessage = encodeURIComponent(whatsappMessage);
  const linkedinUrl = "https://www.linkedin.com/in/vikram-prajapat-a19a742aa/";

  const contacts = [
    {
      label: "Email",
      value: emailAddress,
      href: `mailto:${emailAddress}`,
      icon: <Mail size={20} />,
      color: "pink",
      hoverBg: "hover:bg-pink-500/10",
      border: "hover:border-pink-500/40",
      shadow: "hover:shadow-[0_0_28px_rgba(236,72,153,0.18)]",
      iconBg: "bg-pink-500/15 group-hover/btn:bg-pink-500/25",
      iconColor: "text-pink-500",
      external: false,
    },
    {
      label: "Call",
      value: `+${whatsappNumber}`,
      href: `tel:+${whatsappNumber}`,
      icon: <Phone size={20} />,
      color: "sky",
      hoverBg: "hover:bg-sky-500/10",
      border: "hover:border-sky-500/40",
      shadow: "hover:shadow-[0_0_28px_rgba(14,165,233,0.18)]",
      iconBg: "bg-sky-500/15 group-hover/btn:bg-sky-500/25",
      iconColor: "text-sky-500",
      external: false,
    },
    {
      label: "WhatsApp",
      value: "Send a message",
      href: `https://api.whatsapp.com/send?phone=${whatsappNumber}&text=${encodedMessage}`,
      icon: <MessageSquare size={20} />,
      color: "green",
      hoverBg: "hover:bg-green-500/10",
      border: "hover:border-green-500/40",
      shadow: "hover:shadow-[0_0_28px_rgba(34,197,94,0.18)]",
      iconBg: "bg-green-500/15 group-hover/btn:bg-green-500/25",
      iconColor: "text-green-500",
      external: true,
    },
    {
      label: "LinkedIn",
      value: "Connect with me",
      href: linkedinUrl,
      icon: <Linkedin size={20} />,
      color: "blue",
      hoverBg: "hover:bg-blue-600/10",
      border: "hover:border-blue-600/40",
      shadow: "hover:shadow-[0_0_28px_rgba(37,99,235,0.18)]",
      iconBg: "bg-blue-600/15 group-hover/btn:bg-blue-600/25",
      iconColor: "text-blue-600 dark:text-blue-400",
      external: true,
    },
  ];

  return (
    <div className="min-h-screen pt-28 pb-24 px-4 relative overflow-hidden flex items-center justify-center">
      {/* Background glows */}
      <div className="bg-glow top-0 left-0 opacity-20" />
      <div className="bg-glow bottom-0 right-0 opacity-10" />

      <motion.div
        initial={{ opacity: 0, y: 32 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="relative w-full max-w-md mx-auto z-10"
      >
        <div className="glass rounded-[2rem] p-8 md:p-10 relative overflow-hidden shadow-xl">
          {/* subtle inner glow */}
          <div className="absolute -top-24 -left-24 w-64 h-64 rounded-full bg-pink-500/10 blur-3xl pointer-events-none" />
          <div className="absolute -bottom-24 -right-24 w-64 h-64 rounded-full bg-blue-500/10 blur-3xl pointer-events-none" />

          <div className="relative flex flex-col items-center gap-7">

            {/* Avatar */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.15 }}
              className="relative w-32 h-32 md:w-40 md:h-40 rounded-full p-[3px] bg-gradient-to-tr from-pink-500 via-purple-500 to-blue-500 shadow-[0_0_36px_rgba(236,72,153,0.28)]"
            >
              <div className="w-full h-full rounded-full overflow-hidden ring-4 ring-background relative">
                <Image
                  src="/photo2.png"
                  alt="Vikram"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 128px, 160px"
                  priority
                />
              </div>
            </motion.div>

            {/* Identity */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.25 }}
              className="text-center space-y-1"
            >
              <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground">
                Vikram Prajapat
              </h1>
              <p className="text-sm text-foreground/50 tracking-widest uppercase font-medium">
                Full Stack Developer
              </p>
            </motion.div>

            {/* Divider */}
            <div className="w-full h-px bg-foreground/10" />

            {/* Contact info pills */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.32 }}
              className="flex flex-col items-center gap-2 w-full"
            >
              <div className="flex items-center gap-2 text-foreground/70 text-sm">
                <Mail size={14} className="text-pink-500 shrink-0" />
                <span className="truncate max-w-[220px]">{emailAddress}</span>
              </div>
              <div className="flex items-center gap-2 text-foreground/70 text-sm">
                <Phone size={14} className="text-sky-500 shrink-0" />
                <span>+{whatsappNumber}</span>
              </div>
            </motion.div>

            {/* Divider */}
            <div className="w-full h-px bg-foreground/10" />

            {/* Action buttons */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="grid grid-cols-2 gap-3 w-full"
            >
              {contacts.map((c) => (
                <a
                  key={c.label}
                  href={c.href}
                  target={c.external ? "_blank" : undefined}
                  rel={c.external ? "noopener noreferrer" : undefined}
                  className={`group/btn glass border border-foreground/10 ${c.border} ${c.hoverBg} ${c.shadow} rounded-2xl py-4 px-3 flex flex-col items-center justify-center gap-2 transition-all duration-300 active:scale-95`}
                >
                  <div className={`p-2.5 rounded-full ${c.iconBg} transition-colors`}>
                    <span className={`${c.iconColor} group-hover/btn:scale-110 inline-flex transition-transform duration-200`}>
                      {c.icon}
                    </span>
                  </div>
                  <span className="text-foreground text-[13px] font-semibold leading-none">
                    {c.label}
                  </span>
                </a>
              ))}
            </motion.div>

          </div>
        </div>
      </motion.div>
    </div>
  );
}
