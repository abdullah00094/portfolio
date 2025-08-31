export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-white px-6 md:px-20 text-center">
      <h2 className="text-3xl font-bold text-gray-900 mb-6">Contact Me</h2>
      <p className="text-gray-600 mb-6">
        Interested in working together or have any questions? Feel free to
        reach out!
      </p>
      <a
        href="mailto:your.email@example.com"
        className="px-6 py-3 bg-indigo-600 text-white rounded-lg shadow hover:bg-indigo-700"
      >
        Send Email
      </a>
    </section>
  );
}
