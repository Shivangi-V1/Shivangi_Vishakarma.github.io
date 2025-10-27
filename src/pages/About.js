import React, { useState } from "react";
import { FaLaptopCode, FaRobot, FaServer } from "react-icons/fa";
import { BsPeople } from "react-icons/bs";

const skillCategories = [
  {
    icon: <FaRobot className="text-3xl text-teal-500" />,
    title: "IoT Development",
    skills: ["ESP32 / Arduino", "Sensors & Actuators", "ThingSpeak", "MQTT"],
  },
  {
    icon: <FaLaptopCode className="text-3xl text-orange-500" />,
    title: "Programming",
    skills: ["Python", "C/C++", "HTML", "CSS", "JavaScript"],
  },
  {
    icon: <FaServer className="text-3xl text-yellow-500" />,
    title: "Embedded & Cloud",
    skills: ["Microcontrollers", "APIs", "Data Logging", "Firebase"],
  },
  {
    icon: <BsPeople className="text-3xl text-blue-500" />,
    title: "Soft Skills",
    skills: ["Teamwork", "Problem Solving", "Communication"],
  },
];

export default function About() {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    company: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", form);
    alert("Your message has been recorded.");
    setForm({
      firstName: "",
      lastName: "",
      company: "",
      email: "",
      message: "",
    });
  };

  return (
    <section className="bg-white dark:bg-gray-900 py-20" id="about">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* About Intro */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-teal-500 mb-4">
            About Me
          </h2>
          <p className="text-gray-700 dark:text-gray-300 max-w-3xl mx-auto text-lg">
           Hi, I'm <span className="font-semibold text-orange-500">Shivangi Vishwakarma</span>,
a passionate 3rd-year <span className="font-semibold text-teal-500">B.Tech IoT student</span>.
I enjoy bringing together software and hardware to design intelligent IoT systems,
working with sensors, and leveraging cloud technologies for real-time data insights.
          </p>
        </div>

        {/* Skills Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {skillCategories.map((cat, idx) => (
            <div
              key={idx}
              className="bg-cream dark:bg-gray-800 rounded-xl shadow-md p-6 text-center hover:shadow-lg transition"
            >
              <div className="flex justify-center mb-3">{cat.icon}</div>
              <h3 className="text-lg font-semibold text-textDark dark:text-gray-100 mb-2">
                {cat.title}
              </h3>
              <ul className="text-gray-600 dark:text-gray-300 text-sm space-y-1">
                {cat.skills.map((skill, i) => (
                  <li key={i}>{skill}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Contact Form */}
        <div className="bg-gray-50 dark:bg-gray-800 rounded-xl shadow-md p-8">
          <h3 className="text-2xl font-bold text-teal-500 mb-6 text-center">
            Get in Touch
          </h3>
          <form
            onSubmit={handleSubmit}
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
          >
            {[
              { label: "First Name", name: "firstName", placeholder: "John" },
              { label: "Last Name", name: "lastName", placeholder: "Doe" },
              {
                label: "Company / College",
                name: "company",
                placeholder: "Your College or Company",
              },
              {
                label: "Email",
                name: "email",
                placeholder: "you@example.com",
                type: "email",
              },
            ].map((field, idx) => (
              <div key={idx}>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-1">
                  {field.label}
                </label>
                <input
                  name={field.name}
                  type={field.type || "text"}
                  placeholder={field.placeholder}
                  value={form[field.name]}
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded-md px-4 py-2 
                             focus:outline-none focus:ring-2 focus:ring-teal-400
                             bg-white text-black placeholder-gray-500 
                             dark:bg-white dark:text-black dark:placeholder-gray-500"
                  required
                />
              </div>
            ))}

            <div className="md:col-span-2">
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-1">
                Message
              </label>
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                placeholder="Write your message here..."
                rows="4"
                className="w-full border border-gray-300 rounded-md px-4 py-2 
                           focus:outline-none focus:ring-2 focus:ring-teal-400 
                           bg-white text-black placeholder-gray-500 
                           dark:bg-white dark:text-black dark:placeholder-gray-500"
              ></textarea>
            </div>

            <div className="md:col-span-2 flex justify-center">
              <button
                type="submit"
                className="bg-teal-500 hover:bg-teal-600 text-white px-6 py-2 rounded-md shadow-md transition"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}