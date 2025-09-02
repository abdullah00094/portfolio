"use client";
import Image from "next/image";

export default function Projects() {
  const projects = [
    {
      title: "AI Chatbot System",
      description: "AI-powered chatbot with vector memory & automation flows.",
      technology: "php, laravel, embedings & openai api.",
      image: "/images/projects/chatbot.jpg",
      link: "https://github.com/yourusername/chatbot",
      companyLogo: "/images/Logo.png",
      available: false,
    },
    {
      title: "tickteing system",
      description: "provide apis for cashier,mobile,dashboard.",
      technology: "php, laravel, postman, ",
      image: "/images/projects/tickteing.jpg",
      link: "https://github.com/yourusername/ecommerce-app",
      companyLogo: "/images/Logo.png",
      available: false,
    },
    {
      title: "WordPress Website",
      description: "Custom WordPress site with Elementor & optimization.",
      technology: "php, laravel, embedings & openai api.",

      image: "/images/projects/tickteing.jpg",
      link: "https://yourportfolio.com/wordpress",
      companyLogo: "/images/Logo.png",
      available: false,
    },
    {
      title: "WordPress Website",
      description: "Custom WordPress site with Elementor & optimization.",
      technology: "php, laravel, embedings & openai api.",

      image: "/images/projects/wordpress.jpg",
      link: "https://yourportfolio.com/wordpress",
      companyLogo: "/images/Logo.png",
      available: false,
    },
    {
      title: "WordPress Website",
      description: "Custom WordPress site with Elementor & optimization.",
      technology: "php, laravel, embedings & openai api.",

      image: "/images/projects/wordpress.jpg",
      link: "https://yourportfolio.com/wordpress",
      companyLogo: "/images/Logo.png",
      available: false,
    },
    {
      title: "WordPress Website",
      description: "Custom WordPress site with Elementor & optimization.",
      technology: "php, laravel, embedings & openai api.",

      image: "/images/projects/wordpress.jpg",
      link: "https://yourportfolio.com/wordpress",
      companyLogo: "/images/Logo.png",
      available: false,
    },
  ];

  return (
    <section id="projects" className="w-full bg-white py-20">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
          📂 Projects
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`relative group rounded-xl overflow-hidden shadow-md hover:shadow-xl transition ${
                !project.available ? "cursor-not-allowed" : "cursor-pointer"
              }`}
            >
              {/* Project Image */}
              <Image
                src={project.image}
                alt={project.title}
                width={400}
                height={250}
                className={`w-full h-56 object-cover ${
                  !project.available ? "blur-sm grayscale" : ""
                }`}
              />

              {/* Overlay on Hover */}
              <div className="absolute inset-0 bg-black/60 flex flex-col items-center justify-center text-center opacity-0 group-hover:opacity-100 transition">
                <Image
                  src={project.companyLogo}
                  alt="Company Logo"
                  width={60}
                  height={60}
                  className="mb-4"
                />
                <p className="text-white px-4">{project.description}</p>
              </div>
              {/* Overlay on Hover / Always on Mobile */}
              <div
                className="absolute inset-0 bg-black/60 flex flex-col items-center justify-center text-center 
  opacity-100 md:opacity-0 md:group-hover:opacity-100 transition"
              >
                <Image
                  src={project.companyLogo}
                  alt="Company Logo"
                  width={60}
                  height={60}
                  className="mb-4"
                />
                <p className="text-white px-4">{project.description}</p>
              </div>

              {/* Project Info */}
              <div className="p-4 bg-gray-50">
                <h3 className="text-lg font-semibold text-indigo-600">
                  {project.title}
                </h3>
                <p className="text-black px-4">{project.technology}</p>
                {project.available ? (
                  <a
                    href={project.link}
                    target="_blank"
                    className="text-indigo-600 hover:underline text-sm"
                  >
                    View Project →
                  </a>
                ) : (
                  <span className="text-gray-400 text-sm">Company Project</span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
