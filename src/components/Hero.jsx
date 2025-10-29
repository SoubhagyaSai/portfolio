import { BsArrowDownRightCircle } from "react-icons/bs";
import { GoDownload } from "react-icons/go";

const Hero = () => {
  return (
    <div className="h-[89vh] w-full bg-bg flex flex-col justify-center items-center">
      <h1 className="text-7xl font-bold text-indigo-500">Design & Development</h1>
      <h2 className="text-4xl text-white mt-10">Hi, I am Soubhagya Sai <span className="bg-linear-to-r from-pink-300 via-slate-500 to-indigo-500 bg-clip-text tracking-tight text-transparent font-semibold">Frontend Developer</span></h2>
      <p className="text-2xl text-white text-center mt-5 w-3xl">a passionate developer crafting intuitive and visually stunning web applications that bridge the gap between imagination and reality</p>
      <div className="flex items-center gap-3 mt-10 overflow-visible">
        <button class="prime-btn border border-indigo-600 bg-indigo-600 text-white text-lg font-semibold py-4 px-6 rounded-xl flex items-center gap-3 cursor-pointer transform transition-all hover:-translate-y-[3px]">
            View my work <BsArrowDownRightCircle className="icon text-xl rotate-280"/>
        </button>
        <button class="sec-btn border border-white text-white text-lg font-semibold py-4 px-6 rounded-xl flex items-center gap-3 cursor-pointer transform transition-all hover:-translate-y-[3px]">
            Download CV <GoDownload className="text-xl font-semibold"/>
        </button>
      </div>
      <div className="mouse_scroll mt-[60px]">
        <span className="scroll-arrow" style={{"--delay": "0.1s"}}></span>
        <span className="scroll-arrow" style={{"--delay": "0.2s"}}></span>
        <span className="scroll-arrow" style={{"--delay": "0.3s"}}></span>
      </div>
    </div>
  )
}

export default Hero
