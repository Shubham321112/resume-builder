import Navbar from "../components/Navbar";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useRef } from "react";
import html2pdf from "html2pdf.js";

import Template1 from "../templates/Template1";
import Template2 from "../templates/Template2";
import Template3 from "../templates/Template3";
import Template4 from "../templates/Template4";

function Preview() {
  const navigate = useNavigate();
  const resumeRef = useRef();

  const {
    selectedTemplate,
    personalInfo,
    workExperience,
    education,
    skills,
  } = useSelector((state) => state.resume);

  // Save Resume
  const saveResume = () => {
    const resume = {
      id: Date.now(),
      selectedTemplate,
      personalInfo,
      workExperience,
      education,
      skills,
    };

    const savedResumes =
      JSON.parse(localStorage.getItem("resumes")) || [];

    savedResumes.push(resume);

    localStorage.setItem(
      "resumes",
      JSON.stringify(savedResumes)
    );

    alert("Resume Saved Successfully!");
  };

  // Download PDF
  const downloadPDF = async () => {
    try {
      const element = resumeRef.current;

      if (!element) {
        alert("Resume not found");
        return;
      }

      const options = {
        margin: 0.5,
        filename: `${personalInfo.firstName || "Resume"}.pdf`,
        image: {
          type: "jpeg",
          quality: 1,
        },
        html2canvas: {
          scale: 2,
          useCORS: true,
          logging: false,
        },
        jsPDF: {
          unit: "in",
          format: "a4",
          orientation: "portrait",
        },
      };

      await html2pdf().set(options).from(element).save();

    } catch (error) {
      console.error(error);
      alert("PDF Download Failed");
    }
  };

  const templateProps = {
    personalInfo,
    workExperience,
    education,
    skills,
  };

  return (
    <>
      <Navbar />

      <div className="bg-gray-100 min-h-screen py-10">

        <div
          ref={resumeRef}
          className="max-w-5xl mx-auto"
        >

          {selectedTemplate === 1 && (
            <Template1 {...templateProps} />
          )}

          {selectedTemplate === 2 && (
            <Template2 {...templateProps} />
          )}

          {selectedTemplate === 3 && (
            <Template3 {...templateProps} />
          )}

          {selectedTemplate === 4 && (
            <Template4 {...templateProps} />
          )}

        </div>

        <div className="max-w-5xl mx-auto flex justify-between mt-8">

          <button
            onClick={() => navigate("/skills")}
            className="bg-gray-600 hover:bg-gray-700 text-white px-8 py-3 rounded-lg transition"
          >
            ← Back
          </button>

          <div className="flex gap-4">

            <button
              onClick={saveResume}
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg transition"
            >
              💾 Save Resume
            </button>

            <button
              onClick={downloadPDF}
              className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-lg transition"
            >
              📄 Download PDF
            </button>

          </div>

        </div>

      </div>
    </>
  );
}

export default Preview;