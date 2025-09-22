"use client";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import Link from "next/link";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gray-900 text-white sticky top-0 z-50 shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/"> <div className="flex-shrink-0 text-2xl font-bold">
            <span className="text-white">Levar</span><span className="text-pink-400">cof</span>
          </div></Link>
         

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            <Link  className="hover:text-pink-400 transition" href="/">Home</Link> 
           <Link  className="hover:text-pink-400 transition" href="/about">About</Link> 
           <Link  className="hover:text-pink-400 transition" href="/skill">Skills</Link> 
           <Link  className="hover:text-pink-400 transition" href="/project">Projects</Link> 
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="focus:outline-none"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-gray-800 px-4 pb-4 space-y-2">
         
          <Link   className="block hover:text-pink-400 transition"
            onClick={() => setIsOpen(false)} href="/">Home</Link>
         <Link   className="block hover:text-pink-400 transition"
            onClick={() => setIsOpen(false)} href="/about">About</Link>
           <Link   className="block hover:text-pink-400 transition"
            onClick={() => setIsOpen(false)} href="/skill">Skills</Link>
           <Link   className="block hover:text-pink-400 transition"
            onClick={() => setIsOpen(false)} href="/project">Projects</Link>
        </div>
      )}
    </nav>
  );
}
