export default function Skills() {
  const skills = [
    "JavaScript",
    "React",
    "Next.js",
    "Node.js",
    "Express",
    "MongoDB",
    "Tailwind CSS",
    "Git & GitHub",
    "REST APIs",
    "laravel",
    "php",
    "openai integration",
    "whatsapp integration",
    "paypal integration",
    "cahtbot systems"
  ];

  return (
    <section id="skills" className="py-20 bg-white px-6 md:px-20">
      <h2 className="text-3xl font-bold text-gray-900 mb-10">Skills</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="p-4 bg-gray-100 rounded-lg shadow hover:shadow-lg text-center"
          >
            {skill}
          </div>
        ))}
      </div>
    </section>
  );
}
