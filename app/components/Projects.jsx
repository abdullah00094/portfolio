export default function Projects() {
  const projects = [
    {
      title: "Portfolio Website",
      description: "Personal portfolio built with Next.js and Tailwind CSS.",
      link: "https://yourportfolio.com",
    },
    {
      title: "E-commerce App",
      description: "Full-stack e-commerce app with cart & checkout features.",
      link: "https://github.com/yourusername/ecommerce-app",
    },
  ];

  return (
    <section id="projects" className="py-20 bg-gray-100 px-6 md:px-20">
      <h2 className="text-3xl font-bold text-gray-900 mb-10">Projects</h2>
      <div className="grid md:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <div
            key={index}
            className="p-6 bg-white rounded-lg shadow hover:shadow-lg"
          >
            <h3 className="text-xl font-semibold text-indigo-600">
              {project.title}
            </h3>
            <p className="text-gray-700 mt-2">{project.description}</p>
            <a
              href={project.link}
              target="_blank"
              className="text-indigo-600 mt-4 inline-block hover:underline"
            >
              View Project →
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
