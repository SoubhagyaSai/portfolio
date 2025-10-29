import { FaLocationDot } from "react-icons/fa6";
import { FaEnvelope } from "react-icons/fa6";
import { IoCall } from "react-icons/io5";
import { FaGithub } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className="py-[50px]">
      <div className="mx-auto max-w-7xl sm:px-6 lg:px-8 flex justify-between">
          <div className="flex-1">
            <h2 className="text-3xl font-bold text-indigo-500 mb-5">Soubhagya</h2>
            <p className="text-lg text-slate-50">passionate Frontend Developer, creating visually stunning web applications</p>
          </div>
          <div className="flex-1 px-5">
            <h2 className="text-xl font-semibold text-gray-50 mb-4">Quick Links</h2>
            <div className="flex flex-col gap-3">
                <a href="#" className="text-lg text-slate-50">Home</a>
                <a href="#" className="text-lg text-slate-50">About</a>
                <a href="#" className="text-lg text-slate-50">Skills</a>
                <a href="#" className="text-lg text-slate-50">Projects</a>
                <a href="#" className="text-lg text-slate-50">Contact</a>
            </div>
            
          </div>
          <div className="flex-1 px-5">
            <h2 className="text-xl font-semibold text-gray-50 mb-4">Contact Me</h2>
            <div className="flex flex-col gap-3 mb-4">
                <div className="flex items-center gap-2">
                    <FaLocationDot className="text-lg text-slate-50"/>
                    <p className="text-lg text-slate-50">Bhubaneswar, Odisha</p>
                </div>
                <div className="flex items-center gap-2">
                    <FaEnvelope className="text-lg text-slate-50"/>
                    <a href="mailto:soubhagyasai.dev@gmail.com" className="text-lg text-slate-50 hover:underline">soubhagyasai.dev@gmail.com</a>
                </div>
                <div className="flex items-center gap-2">
                    <IoCall className="text-lg text-slate-50"/>
                    <a href="callto:+91 9114942292" className="text-lg text-slate-50 hover:underline">+91 9114942292</a>
                </div>
            </div>
            <h2 className="text-xl font-semibold text-gray-50 mb-4">Social Media</h2>
            <div className="flex items-center gap-5">
               <a href="https://github.com/SoubhagyaSai" target="_blank"><FaGithub className="text-xl text-slate-50"/></a>
               <a href="https://www.linkedin.com/in/soubhagya-sai-das-6983621b3/" target="_blank"><FaLinkedin className="text-xl text-slate-50"/></a>
               <a href="#"><FaXTwitter className="text-xl text-slate-50"/></a>
            </div>
          </div>
      </div>
      <hr className="text-gray-500 mx-auto max-w-7xl my-[30px] sm:px-6 lg:px-8"/>
      <div class="text-center mx-auto max-w-7xl sm:px-6 lg:px-8">
          <p class="text-gray-50 text-base">© 2025 Soubhagya Sai Das. All rights reserved.</p>
          <p class="text-gray-500 text-sm mt-1">Built with ❤️ using React.js &amp; Tailwind CSS</p>
      </div>
    </div>
  )
}

export default Footer
