import { BsArrowDownRightCircle } from "react-icons/bs";
import { GoDownload } from "react-icons/go";

const Hero = () => {
  return (
    <section className="h-screen sm:h-[89vh] bg-bg flex flex-col justify-center items-center px-4 sm:px-6" id="home">
      <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-indigo-500 text-center">Design & Development</h1>
      <h2 className="text-2xl sm:text-3xl lg:text-4xl text-gray-300 mt-10 text-center">Hi, I am Soubhagya Sai <span className="bg-linear-to-r from-pink-300 via-slate-500 to-indigo-500 bg-clip-text tracking-tight text-transparent font-semibold">Frontend Developer</span></h2>
      <h5 className="text-base sm:text-lg lg:text-2xl text-gray-300 text-center mt-5 lg:w-3xl">a passionate developer crafting intuitive and visually stunning web applications that bridge the gap between imagination and reality</h5>
      <div className="flex flex-col md:flex-row items-center gap-3 mt-10 overflow-visible">
        <button class="prime-btn border border-indigo-600 bg-indigo-600 text-gray-300 text-base sm:text-lg font-semibold py-3 sm:py-4 px-6 rounded-xl flex items-center gap-3 cursor-pointer transform transition-all hover:-translate-y-[3px]">
            View my work <BsArrowDownRightCircle className="icon text-xl rotate-280"/>
        </button>
        <button class="sec-btn border border-gray-300 text-gray-300 text-base sm:text-lg font-semibold py-3 sm:py-4 px-6 rounded-xl flex items-center gap-3 cursor-pointer transform transition-all hover:-translate-y-[3px]">
            Download CV <GoDownload className="text-xl font-semibold"/>
        </button>
      </div>
      <div className="mouse_scroll mt-[30px] sm:mt-[60px]">
        <span className="scroll-arrow" style={{"--delay": "0.1s"}}></span>
        <span className="scroll-arrow" style={{"--delay": "0.2s"}}></span>
        <span className="scroll-arrow" style={{"--delay": "0.3s"}}></span>
      </div>
    </section>
  )
}

export default Hero
