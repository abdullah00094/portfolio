export default function Experience() {
  const jobs = [
    {
      company: "Company A",
      role: "Full Stack Developer",
      period: "2022 – Present",
      description:
        "Worked on modern web apps, optimized performance, and implemented scalable solutions.",
    },
    {
      company: "Company B",
      role: "Frontend Developer",
      period: "2020 – 2022",
      description:
        "Focused on building responsive user interfaces with React and Next.js.",
    },
  ];

  return (
    <section id="experience" className="py-20 bg-white px-6 md:px-20">
      <h2 className="text-3xl font-bold text-gray-900 mb-10">Experience</h2>
      <div className="space-y-8">
        {jobs.map((job, index) => (
          <div
            key={index}
            className="border-l-4 border-indigo-600 pl-6 hover:bg-gray-50 p-4 rounded-md transition"
          >
            <h3 className="text-xl font-semibold text-gray-800">{job.role}</h3>
            <p className="text-gray-600">{job.company} • {job.period}</p>
            <p className="text-gray-700 mt-2">{job.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
