"use client";
import { motion, useReducedMotion } from "framer-motion";
export default function Reveal({ children, className = "", delay = 0 }) { const reduced = useReducedMotion(); return <motion.div className={className} initial={reduced ? false : { opacity: 0, y: 18 }} whileInView={reduced ? {} : { opacity: 1, y: 0 }} viewport={{ once: true, margin: "-40px" }} transition={{ duration: .55, delay }}>{children}</motion.div>; }
