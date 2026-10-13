"use client";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
const links = [["experience","Experience"],["capabilities","Capabilities"],["projects","Case studies"],["education","Learning"],["contact","Contact"]];
export default function Sidebar() { const [open,setOpen] = useState(false);
const buttonRef = useRef(null);
const firstRef = useRef(null); useEffect(() => { if (!open) return; firstRef.current?.focus();
const close = e => { if (e.key === "Escape") { setOpen(false); buttonRef.current?.focus(); } }; document.addEventListener("keydown", close); return () => document.removeEventListener("keydown", close); }, [open]);
const nav = <>{links.map(([id,label],i) =>
<Link ref={i === 0 ? firstRef : undefined} key={id} href={"/#" + id} onClick={() => setOpen(false)}>{String(i+1).padStart(2,"0")} <span>{label}</span>
</Link>)}<Link href="/cv" onClick={() => setOpen(false)}>CV <span>Résumé</span>
</Link>
</>; return <header className="site-header">
<Link className="wordmark" href="/">AI<span>—</span>01</Link>
<nav className="desktop-nav" aria-label="Primary">{nav}</nav>
<button ref={buttonRef} className="menu-button" onClick={() => setOpen(!open)} aria-expanded={open} aria-controls="mobile-nav" aria-label={open ? "Close menu" : "Open menu"}>{open ? <X/> : <Menu/>}</button>{open && <nav id="mobile-nav" className="mobile-nav" aria-label="Mobile navigation">{nav}</nav>}</header>; }
