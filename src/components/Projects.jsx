import { GiCheckMark } from "react-icons/gi";
import { BsBoxArrowUpRight, BsGithub } from "react-icons/bs";
import proj1 from '../assets/project_img/sand2sky.png';
import proj2 from '../assets/project_img/jhadeswar.png';
import { motion } from "framer-motion";


const Projects = () => {

    const projectData = [
        {
            title: "Sand2sky",
            live: true,
            img: proj1,
            desc: "It is a Real Estate Web Application. showing Properties in Bhubaneswar and Other Cities",
            key_point: [
                "Property listings based on geographic location.",
                "Search and filtering Properties",
                "Advertise according to users location"
            ],
            tech: ["React", "Tailwind CSS", "React Router Dom", "Javascript", "Axios", "Shimmer"],
            live_link: "https://sand2sky.com",
            code_link: null
        },
        {
            title: "JIS",
            full_name: "Jhadeswar International School",
            live: true,
            img: proj2,
            desc: "This project is a responsive school website designed to provide information, communication, and accessibility for students, parents, and teachers.",
            key_point: [
                "Displays school details, admissions, academics, and updates in a clear, organized layout.",
                "Fully optimized for desktops, tablets, and mobile devices",
                "Includes sections like gallery, news, and contact forms for better engagement and communication.",
                "Admin-Friendly Management: Designed to easily update content like news, images, and notices without major code changes."
            ],
            tech: ["Javascript", "CSS 3", "HTML 5", "jQuery"],
            live_link: "https://www.jisodisha.in/",
            code_link: null
        },
        
    ]

  return (
    <section className="py-5 md:py-8" id="projects">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 items-center">
        <motion.h2 
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: 100 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="text-2xl md:text-3xl lg:text-4xl font-bold mb-10 text-gray-10 text-center text-gray-300">
          Projects
        </motion.h2>
        <div className="flex flex-wrap items-stretch flex-col md:flex-row justify-center gap-5">
        {projectData.map((proj, index) => (
            <motion.div 
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 100 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="border border-gray-800 bg-[#131123] w-auto md:w-[48%] lg:w-[31%] xl:w-[32%] rounded-2xl p-5" key={index}>
                <div className="h-[200px] rounded-xl w-full">
                    <img src={proj.img} alt="project image" className="w-full h-full rounded-xl"/>
                </div>
                <div className="mt-5 flex items-center justify-between">
                <h4 className="text-indigo-600 text-xl sm:text-2xl font-semibold" title={proj.full_name}>
                    {proj.title}
                </h4>
                {proj.live ? (
                        <div className="flex items-center justify-center rounded-full px-4 py-1 border text-gray-300 bg-green-700 border-green-500">
                            <small className="font-semibold">Live</small>
                        </div>
                    ) : (
                        <div className="flex items-center justify-center rounded-full px-4 py-1 border text-gray-800 bg-gray-700 border-gray-500">
                            <small className="font-semibold">Live</small>
                        </div>
                    )}
                </div>
                <p className="mt-2 text-base text-gray-300 clamp-2-lines" title={proj.desc}>{proj.desc}</p>
                <ul class="mt-5 space-y-2">
                    {proj.key_point.map((point, i) => (
                        <li
                            key={i}
                            className="flex items-center gap-2 text-sm text-gray-300"
                            title={point}
                        >
                            <GiCheckMark className="text-indigo-600 shrink-0" /> <span className="clamp-1-lines">{point}</span>
                        </li>
                    ))}
                </ul>
                <div className="flex flex-wrap items-center gap-2 mt-5">
                    {proj.tech.map((tech, i) => (
                        <div
                            key={i}
                            className="flex items-center justify-center py-1 px-3 rounded-full border border-gray-600 bg-gray-800 text-sm text-gray-300"
                        >
                            {tech}
                        </div>
                    ))}
                </div>
                <div className="flex items-center gap-5 mt-5 ">
                    <a href={proj.live_link} target="_blank" className="flex items-center gap-2 text-indigo-600 hover:text-indigo-500 text-sm font-semibold">
                        <BsBoxArrowUpRight className="text-base font-semibold"/> Live Demo
                    </a>
                    <a href={proj.code_link} target="_blank" className="flex items-center gap-2 text-indigo-600 hover:text-indigo-500 text-sm font-semibold">
                        <BsGithub className="text-base font-semibold"/> Code
                    </a>
                </div>
          </motion.div>
        ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
