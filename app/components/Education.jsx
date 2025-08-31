export default function Education() {
  const schools = [
    {
      institution: "University Name",
      degree: "Bachelor in Computer Science",
      period: "2016 – 2020",
    },
    {
      institution: "High School Name",
      degree: "High School Diploma",
      period: "2013 – 2016",
    },
  ];

  return (
    <section id="education" className="py-20 bg-gray-100 px-6 md:px-20">
      <h2 className="text-3xl font-bold text-gray-900 mb-10">Education</h2>
      <div className="space-y-6">
        {schools.map((school, index) => (
          <div key={index} className="p-4 bg-white rounded-lg shadow">
            <h3 className="text-xl font-semibold">{school.institution}</h3>
            <p className="text-gray-700">{school.degree}</p>
            <p className="text-gray-500">{school.period}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
