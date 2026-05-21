"use client";
import { useState } from "react";

export default function Contact() {
  const [contactMethod, setContactMethod] = useState("email"); // 'email' or 'form'

  return (
    <section id="contact" className="py-20 bg-white px-6 md:px-20 text-center">
      <h2 className="text-3xl font-bold text-gray-900 mb-6">Contact Me</h2>
      <p className="text-gray-600 mb-6">
        Interested in working together or have any questions? Feel free to
        reach out!
      </p>

      <div className="flex justify-center mb-8">
        <button
          onClick={() => setContactMethod("email")}
          className={`px-6 py-2 rounded-l-lg ${
            contactMethod === "email"
              ? "bg-indigo-600 text-white"
              : "bg-gray-200 text-gray-700"
          }`}
        >
          Email
        </button>
        <button
          onClick={() => setContactMethod("form")}
          className={`px-6 py-2 rounded-r-lg ${
            contactMethod === "form"
              ? "bg-indigo-600 text-white"
              : "bg-gray-200 text-gray-700"
          }`}
        >
          Form
        </button>
      </div>

      {contactMethod === "email" ? (
        <a
          href="mailto:your.email@example.com"
          className="px-6 py-3 bg-indigo-600 text-white rounded-lg shadow hover:bg-indigo-700"
        >
          Send Email
        </a>
      ) : (
        <form className="max-w-xl mx-auto text-left">
          <div className="mb-4">
            <label htmlFor="name" className="block text-gray-700 font-bold mb-2">
              Name
            </label>
            <input
              type="text"
              id="name"
              className="w-full px-3 py-2 border rounded-lg text-gray-700 focus:outline-none focus:border-indigo-500"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="contactInfo" className="block text-gray-700 font-bold mb-2">
              Email or Phone
            </label>
            <input
              type="text"
              id="contactInfo"
              className="w-full px-3 py-2 border rounded-lg text-gray-700 focus:outline-none focus:border-indigo-500"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="message" className="block text-gray-700 font-bold mb-2">
              Message
            </label>
            <textarea
              id="message"
              rows="4"
              className="w-full px-3 py-2 border rounded-lg text-gray-700 focus:outline-none focus:border-indigo-500"
            ></textarea>
          </div>
          <div className="text-center">
            <button
              type="submit"
              className="px-6 py-3 bg-indigo-600 text-white rounded-lg shadow hover:bg-indigo-700"
            >
              Send Message
            </button>
          </div>
        </form>
      )}
    </section>
  );
}
