"use client";
import { motion } from "framer-motion";

export default function Experience() {
  const experiences = [
    {
      role: "Backend Developer – Laravel & AI Integrations",
      period: "2023 – Present",
      description: [
        "Built full-stack Laravel applications with robust database design, migrations, and role-based access control (Sanctum, Jetstream, Livewire).",
        "Developed and integrated RESTful APIs for WhatsApp chatbot (Meta API), bulk email campaigns (Resend API), and AI agent conversations (OpenRouter AI).",
        "Designed an AI-powered chatbot system following the MCP (Model–Context–Prompt) pattern with vectorized memory, complaint automation, and PDF generation.",
        "Built an OCR Agent for document/image text extraction, validation, and automation workflows.",
        "Enhanced product search with Meilisearch (query correction + spelling optimization).",
        "Implemented queues, jobs, and event-driven workflows to scale applications.",
      ],
    },
    {
      role: "WordPress Developer (Freelance Projects)",
      period: "2024 – Present",
      description: [
        "Delivered responsive WordPress websites using Elementor.",
        "Migrated projects from development to live environments.",
        "Customized designs and optimized performance for small business websites.",
      ],
    },
    {
      role: "Learning & Exploration",
      period: "Ongoing",
      description: [
        "Practicing Python scripting for backend automation and AI experiments.",
        "Experimenting with vector databases and AI fine-tuning for intelligent context-aware systems.",
        "Continuously improving problem-solving and backend coding skills.",
      ],
    },
  ];

  return (
    <section id="experience" className="w-full bg-gray-50 py-20">
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
          💻 Experience & Projects
        </h2>

        <div className="relative border-l-2 border-indigo-600">
          {experiences.map((exp, index) => (
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

              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition">
                <h3 className="text-xl font-semibold text-indigo-600">
                  {exp.role}
                </h3>
                <p className="text-gray-500 mb-4">{exp.period}</p>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  {exp.description.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
