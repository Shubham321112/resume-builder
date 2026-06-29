import Navbar from "../components/Navbar";
import aboutImage from "../assets/about-image.png";

import {
  FaFacebookF,
  FaLinkedinIn,
  FaGithub,
  FaTwitter,
} from "react-icons/fa";

function About() {
  return (
    <>
      <Navbar />

      <div className="bg-gray-50 min-h-screen">

        <div className="max-w-7xl mx-auto px-8 py-16">

          <div className="grid md:grid-cols-2 gap-16 items-center">

            {/* Left Side */}

            <div>

              <h1 className="text-6xl font-bold text-gray-800 leading-tight">
                Resume
                <br />
                Builder
              </h1>

              <div className="w-24 h-1 bg-blue-600 rounded-full mt-4 mb-8"></div>

              <p className="text-gray-600 leading-8 text-justify">

                Resume Builder is a modern web application developed using
                React, Redux Toolkit, React Router and Tailwind CSS.

                <br />
                <br />

                It helps students and professionals create ATS-friendly,
                professional resumes quickly by providing multiple templates,
                live preview and one-click PDF download.

                <br />
                <br />

                Users can enter their personal information, work experience,
                education and skills, then instantly preview and download a
                polished resume.

              </p>

              <h3 className="text-2xl font-semibold mt-12 mb-5">
                Share with your friends
              </h3>

              <div className="flex gap-4">

                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noreferrer"
                  className="w-11 h-11 rounded bg-blue-600 text-white flex items-center justify-center hover:scale-110 duration-300"
                >
                  <FaFacebookF />
                </a>

                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noreferrer"
                  className="w-11 h-11 rounded bg-blue-700 text-white flex items-center justify-center hover:scale-110 duration-300"
                >
                  <FaLinkedinIn />
                </a>

                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noreferrer"
                  className="w-11 h-11 rounded bg-gray-800 text-white flex items-center justify-center hover:scale-110 duration-300"
                >
                  <FaGithub />
                </a>

                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noreferrer"
                  className="w-11 h-11 rounded bg-sky-500 text-white flex items-center justify-center hover:scale-110 duration-300"
                >
                  <FaTwitter />
                </a>

              </div>

            </div>

            {/* Right Side */}

            <div className="flex justify-center">

              <img
  src={aboutImage}
  alt="Resume Builder"
  className="w-[450px] h-auto object-contain mx-auto"
/>

            </div>

          </div>

        </div>

      </div>
    </>
  );
}

export default About;