import { SiJavascript, SiReact, SiRedux, SiNextdotjs, SiJquery, SiHtml5, SiCss3, SiBootstrap, SiTailwindcss, SiSass } from "react-icons/si";

const Skills = () => { 

    const skills = [
        { label: "Javascript", icon: <SiJavascript color="#F7DF1E"/> },
        { label: "React.js", icon: <SiReact color="#61DAFB"/> },
        { label: "Redux toolkit", icon: <SiRedux color="#764ABC"/> },
        { label: "Next.js", icon: <SiNextdotjs/> },
        { label: "jQuery", icon: <SiJquery color="#0769AD"/> },
        { label: "HTML 5", icon: <SiHtml5 color="#E34F26"/> },
        { label: "CSS 3", icon: <SiCss3 color="#1572B6"/> },
        { label: "Bootstrap 5", icon: <SiBootstrap color="#7952B3"/> },
        { label: "Tailwind CSS", icon: <SiTailwindcss color="#06B6D4"/> },
        { label: "SCSS", icon: <SiSass color="#CC6699"/> }
    ];
    
  return (
    <section className="py-5 md:py-8" id="skills">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 items-center">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-10 text-gray-10 text-center text-gray-300">
          My Skills
        </h2>
        <div className="flex flex-wrap gap-5 items-center justify-center mx-auto xl:w-5xl">
          {skills.map((skill, index) => (
            <div key={index} className="py-3 px-5 flex items-center gap-2 rounded-full border border-gray-800 bg-[#131123] cursor-pointer transform transition-all hover:-translate-y-[3px]">
                <span className="text-2xl">{skill.icon}</span>
                <p className="text-gray-300 text-base sm:text-sm font-semibold">{skill.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
