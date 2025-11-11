import { FaLocationDot } from "react-icons/fa6";
import { FaEnvelope } from "react-icons/fa6";
import { IoCall } from "react-icons/io5";
import { FaGithub } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Contact = () => {
  return (
    <section className="py-5 md:pt-8 md:pb-16" id="contact">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 items-center">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-10 text-gray-10 text-center text-gray-300">
          Contact Me
        </h2>
        <div className="xl:w-5xl mx-auto flex flex-wrap items-center gap-5">
            <div className="p-5 xl:p-10 rounded-2xl border border-gray-800 bg-[#131123] flex-1">
                <h4 className="text-xl sm:text-2xl font-semibold text-gray-300">Get in tauch</h4>
                <div className="flex flex-col gap-3 mt-4">
                    <div className="flex items-center gap-2">
                        <FaLocationDot className="text-lg text-gray-300"/>
                        <p className="text-lg text-gray-300">Bhubaneswar, Odisha</p>
                    </div>
                    <div className="flex items-center gap-2">
                        <FaEnvelope className="text-lg text-gray-300"/>
                        <a href="mailto:soubhagyasai.dev@gmail.com" className="text-lg text-gray-300 hover:underline">soubhagyasai.dev@gmail.com</a>
                    </div>
                    <div className="flex items-center gap-2">
                        <IoCall className="text-lg text-gray-300"/>
                        <a href="callto:+91 9114942292" className="text-lg text-gray-300 hover:underline">+91 9114942292</a>
                    </div>
                </div>
            </div>
            <div className="p-5 xl:p-10 rounded-2xl border border-gray-800 bg-[#131123] flex-1">
                <h4 className="text-xl sm:text-2xl font-semibold text-gray-300">Social Media</h4>
                <div className="flex flex-col gap-3 mt-4">
                    <div className="flex items-center gap-2">
                        <FaGithub className="text-lg text-gray-300"/>
                        <a href="#" className="text-lg text-gray-300 hover:underline">Github / Soubhagya sai</a>
                    </div>
                    <div className="flex items-center gap-2">
                        <FaLinkedin className="text-lg text-gray-300"/>
                        <a href="#" className="text-lg text-gray-300 hover:underline">LinkedIn / Soubhagya sai</a>
                    </div>
                    <div className="flex items-center gap-2">
                        <FaXTwitter className="text-lg text-gray-300"/>
                        <a href="#" className="text-lg text-gray-300 hover:underline">Twitter-X / Soubhagya sai</a>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
