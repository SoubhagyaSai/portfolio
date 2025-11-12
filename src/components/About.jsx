import { motion } from "framer-motion";

const About = () => {
  return (
    // <div className="py-[50px]">
    //   <h2 className="text-center text-4xl">About <span className="bg-linear-to-r from-pink-300 via-slate-500 to-indigo-500 bg-clip-text tracking-tight text-transparent font-semibold">Me</span></h2>
    // </div>
    <section className="py-5 md:pt-16 md:pb-8" id="about">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 items-center">
        <motion.h2 
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: 100 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="text-2xl md:text-3xl lg:text-4xl font-bold mb-10 text-gray-10 text-center text-gray-300">
          About Me
        </motion.h2>
        <motion.div 
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: 100 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="p-5 md:p-10 rounded-2xl border border-gray-800 bg-[#131123] xl:w-5xl mx-auto mb-6">
          <p className="text-base leading-relaxed text-gray-300 text-center">
            Hi, I’m{" "}
            <span className="font-semibold text-indigo-600">
              Soubhagya Sai Das
            </span>{" "}
            — a passionate Frontend Developer who loves building clean,
            responsive interfaces and intuitive digital experiences. With a
            strong foundation in React, Tailwind, and JavaScript, I focus on
            creating performant web applications that look great on any device.
          </p>
        </motion.div>
        <motion.div 
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: 100 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="mb-3 p-5 md:p-10 rounded-2xl border border-gray-800 bg-[#131123] xl:w-5xl mx-auto">
          <div className="bg-gray-800 inline-block text-base py-2 px-3 rounded-lg text-gray-400">
            Experience
          </div>
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between mt-4 mb-1">
            <h4 className="text-xl sm:text-2xl font-semibold text-gray-300">
              Frontend Developer
            </h4>
            <p className="text-gray-400 text-base sm:text-lg">2025 - Present</p>
          </div>
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between">
            <h4 className="text-indigo-600 text-base sm:text-lg">
              Hexaphor Technologies Pvt.Ltd
            </h4>
            <p className="text-gray-400 text-base sm:text-lg">Bhubaneswar, Odisha</p>
          </div>
          <ul class="mt-5 list-disc pl-5 space-y-2">
            <li className="text-base text-gray-300">
              Designed and developed responsive UI components with React and
              Tailwind CSS, ensuring seamless experience across devices.
            </li>
            <li className="text-base text-gray-300">
              Integrated and handled RESTful APIs to fetch, filter, and display
              dynamic property data.
            </li>
            <li className="text-base text-gray-300">
              Optimized API calls and rendering to enhance page load time and
              reduce unnecessary re-renders.
            </li>
            <li className="text-base text-gray-300">
              Handled image optimization and lazy loading to improve performance
              and user experience.
            </li>
            <li className="text-base text-gray-300">
              Collaborated with backend developers to ensure smooth API
              integration and accurate data representation.
            </li>
            <li className="text-base text-gray-300">
              Utilized Git and GitHub for version control and project
              collaboration.
            </li>
          </ul>
        </motion.div>
        <motion.div 
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: 100 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="mb-3 p-5 md:p-10 rounded-2xl border border-gray-800 bg-[#131123] xl:w-5xl mx-auto">
          <div className="bg-gray-800 inline-block text-base sm:text-lg py-2 px-3 rounded-lg text-gray-400">
            Experience
          </div>
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between mt-4 mb-1">
            <h4 className="text-xl sm:text-2xl font-semibold text-gray-300">
              Frontend Developer
            </h4>
            <p className="text-gray-400 text-base">2024 - 2025</p>
          </div>
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between">
            <h4 className="text-indigo-600 text-base sm:text-lg">
              Applute Technologies Pvt. Ltd
            </h4>
            <p className="text-gray-400 text-base">Remote, Odisha</p>
          </div>
          <ul class="mt-5 list-disc pl-5 space-y-2">
            <li className="text-base text-gray-300">
              Developed responsive and interactive UI components using React and
              Tailwind CSS to enhance user experience across devices.
            </li>
            <li className="text-base text-gray-300">
              Managed state efficiently with Redux Toolkit and Context API for
              seamless data flow and component reusability.
            </li>
            <li className="text-base text-gray-300">
              Implemented API integration and data handling, including filtering
              and displaying dynamic data from backend services.
            </li>
            <li className="text-base text-gray-300">
              Utilized modular and reusable code practices to improve
              maintainability and scalability.
            </li>
          </ul>
        </motion.div>
        <motion.div 
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: 100 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="mb-3 p-5 md:p-10 rounded-2xl border border-gray-800 bg-[#131123] xl:w-5xl mx-auto">
          <div className="bg-gray-800 inline-block text-base sm:text-lg py-2 px-3 rounded-lg text-gray-400">
            Experience
          </div>
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between mt-4 mb-1">
            <h4 className="text-xl sm:text-2xl font-semibold text-gray-300">
              UI Developer
            </h4>
            <p className="text-gray-400 text-base">2022 - 2024</p>
          </div>
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between">
            <h4 className="text-indigo-600 text-base sm:text-lg">
              Compugraphs Softech Solution Pvt. Ltd
            </h4>
            <p className="text-gray-400 text-base">Bhubaneswar, Odisha</p>
          </div>
          <ul class="mt-5 list-disc pl-5 space-y-2">
            <li className="text-base text-gray-300">
              User Interface Development: Designing & implementing visually
              appealing and user-friendly interfaces using HTML,CSS, Bootstrap,
              JavaScript & jQuery.
            </li>
            <li className="text-base text-gray-300">
              Responsive Design: Ensuring that the web applications are
              responsive and compatible with various devices and screen sizes.
            </li>
            <li className="text-base text-gray-300">
              Cross Browser Compatibility: Ensuring that the web applications
              are compatible with different browsers and versions.
            </li>
          </ul>
        </motion.div>
        <motion.div 
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: 100 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="mb-3 p-5 md:p-10 rounded-2xl border border-gray-800 bg-[#131123] xl:w-5xl mx-auto">
          <div className="bg-gray-800 inline-block text-base sm:text-lg py-2 px-3 rounded-lg text-gray-400">
            Internship
          </div>
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between mt-4 mb-1">
            <h4 className="text-xl sm:text-2xl font-semibold text-gray-300">
              Software Engineer Trainee
            </h4>
            <p className="text-gray-400 text-base">2022 (Feb - May)</p>
          </div>
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between">
            <h4 className="text-indigo-600 text-base sm:text-lg">
              Eyenix Technosoft Pvt. Ltd
            </h4>
            <p className="text-gray-400 text-base">Bhubaneswar, Odisha</p>
          </div>
          <ul class="mt-5 list-disc pl-5 space-y-2">
            <li className="text-base text-gray-300">Developed responsive user interfaces using HTML, CSS, and JavaScript to ensure cross-device compatibility.</li>
            <li className="text-base text-gray-300">Collaborated with design teams to translate Figma or UI mockups into pixel-perfect, interactive web pages.</li>
          </ul>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
