const projects = [
  {
    title: "Interfacing of Flame Sensor with Buzzer using ESP32 on ThingSpeak",
    description:
      "A simple IoT project using ESP32 and a flame sensor that detects fire and activates a buzzer alert. The data is uploaded to ThingSpeak for real-time monitoring and visualization.",
    image: "https://t3.ftcdn.net/jpg/02/48/01/76/360_F_248017677_Y6xgYu1Icsd425PZiUz2k1Hgcy4NQwJo.jpg",
    link: null,
  },
  {
    title: "Obstacle Detection for the Visually Impaired",
    description:
      "An ultrasonic sensor-based system designed to assist visually impaired individuals by detecting nearby obstacles and alerting them through a buzzer sound.",
    image:  "https://static.vecteezy.com/system/resources/thumbnails/014/030/856/small/blind-children-cartoon-set-vector.jpg",
    link: null,
  },
  {
    title: "Smart Gas Leak Alert System",
    description:
      "An IoT-based gas leakage detection system using an MQ sensor and ESP32. Sends instant alerts and triggers a buzzer in case of gas leakage to ensure safety.",
    image: "https://www.shutterstock.com/image-vector/gas-leak-pipe-icon-vector-260nw-1787251208.jpg",
    link: null,
  },
  {
    title: "Hotel Reservation System",
    description:
      "A software project that allows users to book and manage hotel rooms efficiently, featuring room availability tracking, booking confirmation, and simple data management.",
    image: "https://media.istockphoto.com/id/1318075909/vector/man-with-magnifying-glass-travel-book-tickets-and-hotel-room-apartment-reservation-service.jpg?s=612x612&w=0&k=20&c=AXm5EYlEQufq43JXg4kRmMMLl3fGHOkVSH-vvZ9s7_o=",
    link: null,
  },
  {
    title: "E-commerce Web Site",
    description:
      "A smart inventory management system that helps working women track household groceries, predict shortages, and send timely reminders for monthly restocking.",
    image: "data:image/png;base64,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",
    link: "https://github.com/anjali123-hue/Portfolio", // replace with your actual GitHub repo link
  },
  {
    title: "Portfolio Website",
    description:
      "A personal portfolio website built with React and Tailwind CSS showcasing my projects, skills, and background in IoT and web development.",
    image: "https://static.vecteezy.com/system/resources/previews/026/994/773/non_2x/preview-folder-presentation-artist-designer-or-photographer-portfolio-concept-briefcase-with-work-gallery-and-file-collection-modern-flat-cartoon-style-illustration-on-white-background-vector.jpg",
    link: "https://github.com/anjali123-hue/Portfolio", // replace with your actual GitHub repo link
  },
];

export default function Projects() {
  return (
    <section className="pt-24 bg-cream dark:bg-gray-900 min-h-screen">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-teal-500 mb-8 text-center">
          Projects
        </h2>
        <div className="grid gap-8 md:grid-cols-3">
          {projects.map((project, idx) => (
            <div
              key={idx}
              className="bg-white dark:bg-gray-800 rounded-lg shadow-md hover:shadow-lg transition p-4 border-t-4 border-orange-400 flex flex-col"
            >
              <img
                src={project.image}
                alt={project.title}
                className="rounded-md w-full h-40 object-cover"
              />
              <h3 className="text-xl font-semibold mt-4 text-textDark dark:text-gray-100">
                {project.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mt-2">
                {project.description}
              </p>
              {project.link ? (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-block text-teal-500 font-semibold hover:underline"
                >
                  View on GitHub
                </a>
              ) : (
                <span className="mt-4 inline-block text-gray-400 text-sm italic">
                  Not uploaded on GitHub
                </span>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}