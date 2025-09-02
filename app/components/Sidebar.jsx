"use client";
import { useState } from "react";
import Link from "next/link";
import { Home, User, Briefcase, BookOpen, Folder, Mail, Menu, X } from "lucide-react";

export default function Sidebar() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("home");

  const links = [
    { id: "home", label: "Home", icon: <Home size={20} /> },
    { id: "about", label: "About", icon: <User size={20} /> },
    { id: "experience", label: "Resume", icon: <Briefcase size={20} /> },
    { id: "projects", label: "Portfolio", icon: <Folder size={20} /> },
    { id: "skills", label: "Services", icon: <BookOpen size={20} /> },
    { id: "contact", label: "Contact", icon: <Mail size={20} /> },
  ];

  return (
    <>
      {/* Desktop Sidebar */}
      <aside className="hidden md:flex fixed left-6 top-1/2 -translate-y-1/2 flex-col space-y-6 z-50">
        {links.map((link) => (
          <Link
            key={link.id}
            href={`#${link.id}`}
            onClick={() => setActive(link.id)}
            className={`w-12 h-12 flex items-center justify-center rounded-full shadow-md transition ${
              active === link.id
                ? "bg-indigo-600 text-white"
                : "bg-gray-200 text-gray-600 hover:bg-indigo-100 hover:text-indigo-600"
            }`}
          >
            {link.icon}
          </Link>
        ))}
      </aside>

      {/* Mobile Burger */}
      <button
        className="md:hidden fixed top-6 right-6 z-50 p-2 rounded-full bg-indigo-600 text-white"
        onClick={() => setOpen(!open)}
      >
        {open ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Mobile Sidebar */}
      {open && (
        <div className="md:hidden fixed inset-0 bg-white z-40 flex flex-col space-y-6 py-20 px-10 shadow-lg">
          {links.map((link) => (
            <Link
              key={link.id}
              href={`#${link.id}`}
              onClick={() => {
                setActive(link.id);
                setOpen(false);
              }}
              className={`flex items-center gap-3 px-4 py-3 rounded-full transition ${
                active === link.id
                  ? "bg-indigo-600 text-white"
                  : "bg-gray-200 text-gray-600 hover:bg-indigo-100 hover:text-indigo-600"
              }`}
            >
              {link.icon}
              <span className="font-medium">{link.label}</span>
            </Link>
          ))}
        </div>
      )}
    </>
  );
}
