"use client";

import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gray-900 text-white fixed top-0 left-0 w-full shadow-md z-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo / Name */}
          <Link href="/" className="text-2xl font-bold">
            Abdullah
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-6">
            <Link href="#about" className="hover:text-gray-400">About</Link>
            <Link href="#experience" className="hover:text-gray-400">Experience</Link>
            <Link href="#education" className="hover:text-gray-400">Education</Link>
            <Link href="#skills" className="hover:text-gray-400">Skills</Link>
            <Link href="#projects" className="hover:text-gray-400">Projects</Link>
            <Link href="#contact" className="hover:text-gray-400">Contact</Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden focus:outline-none"
          >
            ☰
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-gray-800 px-4 py-2 space-y-2">
          <Link href="#about" className="block">About</Link>
          <Link href="#experience" className="block">Experience</Link>
          <Link href="#education" className="block">Education</Link>
          <Link href="#skills" className="block">Skills</Link>
          <Link href="#projects" className="block">Projects</Link>
          <Link href="#contact" className="block">Contact</Link>
        </div>
      )}
    </nav>
  );
}
