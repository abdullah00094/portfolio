"use client";
import { motion } from "framer-motion";

export default function Education() {
  const education = [
    {
      degree: "GED",
      institution: "Social Service High Institute, Alexandria, Egypt",
      period: "September 2017",
    },
    {
      degree: "GED",
      institution: "Egoth High Institute For Tourism And Hotels, Alexandria",
      period: "September 2015",
    },
    {
      degree: "High School Diploma",
      institution: "Mostafa Kamel, Alexandria, Egypt",
      period: "July 2014",
    },
  ];

  return (
    <section id="education" className="w-full bg-white py-20">
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
          🎓 Education
        </h2>

        <div className="relative border-l-2 border-indigo-600">
          {education.map((edu, index) => (
            <motion.div
              key={index}
              className="ml-6 mb-12 relative"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              {/* Timeline Dot */}
              <div className="absolute -left-[11px] w-6 h-6 bg-indigo-600 rounded-full border-2 border-white"></div>

              <div className="bg-gray-50 p-6 rounded-lg shadow-md hover:shadow-lg transition">
                <h3 className="text-xl font-semibold text-indigo-600">
                  {edu.degree}
                </h3>
                <p className="text-gray-500 mb-2">
                  {edu.institution} • {edu.period}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
