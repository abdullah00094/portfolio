"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { Typewriter } from "react-simple-typewriter";

export default function Hero() {
  return (
    <section
      id="about"
      className="w-full min-h-screen flex flex-col-reverse md:flex-row items-center justify-center px-6 md:px-20 bg-gray-100"
    >
      {/* Left Content */}
      <motion.div
        className="flex-1 text-center md:text-left space-y-6"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-4xl md:text-6xl font-bold text-gray-900">
          Hi, I'm{" "}
          <span className="text-indigo-600">Abdullah Ibraheem</span>
        </h1>

        {/* Typing Effect */}
        <h2 className="text-xl md:text-2xl text-indigo-600 font-semibold">
          <Typewriter
            words={[
              "Full-Stack Developer 🚀",
              "Problem Solver 💡",
              "Tech Enthusiast 💻",
              "Lifelong Learner 📚",
            ]}
            loop={true}
            cursor
            cursorStyle="|"
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1500}
          />
        </h2>

        <p className="text-gray-600 max-w-lg">
          Passionate developer with experience in building scalable web
          applications, solving complex problems, and always eager to learn new
          technologies. Welcome to my portfolio!
        </p>
        <div className="space-x-4">
          <a
            href="#projects"
            className="px-6 py-2 bg-indigo-600 text-white rounded-lg shadow hover:bg-indigo-700"
          >
            View Projects
          </a>
          <a
            href="#contact"
            className="px-6 py-2 border border-indigo-600 text-indigo-600 rounded-lg hover:bg-indigo-50"
          >
            Contact Me
          </a>
        </div>
      </motion.div>

      {/* Right Content - Profile Image */}
      <motion.div
        className="flex-1 flex justify-center mb-8 md:mb-0"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.8, delay: 0.5 }}
      >
        <Image
          src="/images/profile.jpg"
          alt="Profile"
          width={300}
          height={300}
          className="rounded-l-2xl border-4 border-indigo-600 shadow-lg"
        />
      </motion.div>
    </section>
  );
}
