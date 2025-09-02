"use client";
import { motion } from "framer-motion";

export default function Skills() {
  const skills = [
    { name: "Laravel / PHP", level: 90 },
    { name: "Next.js / React", level: 85 },
    { name: "Node.js / Express", level: 80 },
    { name: "MongoDB / MySQL", level: 75 },
    { name: "WordPress", level: 70 },
    { name: "Python (automation & AI)", level: 65 },
    { name: "Tailwind CSS / Bootstrap", level: 85 },
    { name: "Git & GitHub", level: 80 },
  ];

  return (
    <section id="skills" className="w-full bg-gray-50 py-20">
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
          ⭐ Skills
        </h2>

        <div className="grid md:grid-cols-2 gap-10">
          {skills.map((skill, index) => (
            <div key={index}>
              <div className="flex justify-between mb-2">
                <span className="font-medium text-gray-700">{skill.name}</span>
                <span className="text-gray-500">{skill.level}%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-3">
                <motion.div
                  className="bg-indigo-600 h-3 rounded-full"
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  transition={{ duration: 1 }}
                  viewport={{ once: true }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
