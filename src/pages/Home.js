import React from "react";
import { FaLaptopCode, FaRobot, FaServer } from "react-icons/fa";
import { BsPeople } from "react-icons/bs";
import profileImg from "./Shivangi.jpg";

const skillCategories = [
    {
        title: "IoT & Embedded Systems",
        icon: <FaRobot />,
        skills: [ "Arduino", "Raspberry Pi", "ESP32", "Sensors & Actuators", "Microcontrollers"],
        color: "bg-teal-500",
    },
     {
        title: "Programming & Development",
        icon: <FaLaptopCode />,
        skills: ["Python", "C/C++", "HTML", "CSS", "JavaScript", "React (Basics)"],
        color: "bg-orange-400",
    },
    {
        title: "Electronics & Hardware",
        icon: <FaServer />,
        skills: ["IoT Prototyping", "Breadboard"],
        color: "bg-yellow-400",
    },
    {
        title: "Cloud & Data",
        icon: <BsPeople />,
        skills: ["ThingSpeak","Power BI"],
        color: "bg-purple-400",
    },
];

export default function Home() {
    return (
        <section className="pt-20 sm:pt-16 md:pt-24 bg-cream dark:bg-gray-900 overflow-hidden">
            {/* Hero Section */}
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row items-center">

                    {/*Left Column*/}
                    <div className="md:w-1/2 mb-10 md:mb-0 text-center md:text-left">
                        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-textDark dark:text-gray-100">
                            Hey There, I'm {" "}
                            <span className="text-teal-500"> Shivangi Vishwakarma </span>
                        </h1>
                      <p className="text-gray-600 dark:text-gray-300 text-base sm:text-lg mb-4">
                        Exploring <span className="text-orange-500 font-semibold">IoT</span> to create intelligent systems that bridge 
                        <span className="text-orange-500 font-semibold"> innovation </span> 
                        and real-world impact.
                      </p>

                        <p className="text-sm sm:text-base font-medium text-gray-700 dark:text-gray-200 mb-6">
                            shivangitcet@gmail.com
                        </p>
                    </div>

                    {/* Right Column*/}
                    <div className="md:w-1/2 relative">
                        <div className="relative flex justify-center py-4 md:py-8">
                            <img
  src={profileImg}
  alt="Shivangi Vishwakarma"
  className="mx-auto rounded-full border-4 border-teal-400 shadow-lg object-cover 
             w-96 h-96 sm:w-[28rem] sm:h-[28rem] md:w-[32rem] md:h-[32rem]"
/>


                        </div>
                    </div>
                </div>
            </div>

            {/*Skill Cards*/}
            <div className="container mx-auto px-4 mt-20">
                <h2 className="text-2xl md:text-3xl font-bold text-textDark dark:text-gray mb-8 text-center">
                    Core Skill Areas
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
                    {skillCategories.map((category, idx) => (
                        <div
                            key={idx}
                            className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow"
                        >
                            <div className="flex items-start space-x-6">
                                <div
                                    className={`${category.color} p-4 rounded-full text-white text-2xl`}
                                >
                                    {category.icon}
                                </div>
                                <div className="flex-1">
                                    <h3 className="text-2xl font-bold text-textDark dark:text-gray-100 mb-3">
                                        {category.title}
                                    </h3>
                                    <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                                        {category.skills.join(", ")}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Education Section */}
            <div className="container mx-auto px-4 mt-12 mb-20">
            <h2 className="text-2xl md:text-3xl font-bold text-textDark dark:text-gray mb-6 text-center">
                 Education
            </h2>
            <div className="flex flex-col md:flex-row justify-center gap-8">
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6 flex-1 border-t-4 border-teal-400">
            <h3 className="text-lg font-bold text-teal-600 mb-1">
              Bachelor of Technology (B.Tech) — Internet of Things (IoT)
            </h3>
            <p className="text-gray-700 dark:text-gray-200 font-medium mb-1">
                Thakur College of Engineering and Technology 
            </p>
            <p className="text-gray-500 dark:text-gray-400 text-sm mb-2">
                2023 - Present
            </p>
            <ul className="list-disc ml-5 mt-2 text-gray-700 dark:text-gray-200 text-sm space-y-1">
                <li>Currently pursuing 3rd year in B.Tech IoT specialization.</li>
                <li>Learning IoT systems, embedded programming, and cloud integration.</li>
                <li>Working on academic projects using Arduino, Raspberry Pi, and sensors.</li>
                <li>Exploring AI, data visualization, and IoT communication protocols.</li>
            </ul>
            </div>
            </div>
            </div>
        </section>
    );
}