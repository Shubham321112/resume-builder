import Navbar from "../components/Navbar";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

function MyResume() {
  const navigate = useNavigate();

  const [resumes, setResumes] = useState([]);

  useEffect(() => {
    const savedResumes =
      JSON.parse(localStorage.getItem("resumes")) || [];

    setResumes(savedResumes);
  }, []);

  const deleteResume = (id) => {
    if (!window.confirm("Delete this resume?")) return;

    const updatedResumes = resumes.filter(
      (resume) => resume.id !== id
    );

    setResumes(updatedResumes);

    localStorage.setItem(
      "resumes",
      JSON.stringify(updatedResumes)
    );
  };

  return (
    <>
      <Navbar />

      <div className="bg-gray-100 min-h-screen py-10 px-8">

        <div className="max-w-6xl mx-auto">

          <h1 className="text-5xl font-bold mb-3">
            My Resumes
          </h1>

          <p className="text-gray-600 mb-10">
            View, Edit and Delete your saved resumes.
          </p>

          {resumes.length === 0 ? (

            <div className="bg-white rounded-xl shadow-lg p-12 text-center">

              <h2 className="text-3xl font-semibold mb-4">
                No Resume Found
              </h2>

              <p className="text-gray-500 mb-8">
                Create your first professional resume.
              </p>

              <button
                onClick={() => navigate("/")}
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg"
              >
                Create Resume
              </button>

            </div>

          ) : (

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {resumes.map((resume) => (

                <div
                  key={resume.id}
                  className="bg-white rounded-xl shadow-lg overflow-hidden"
                >

                  <div className="bg-blue-600 text-white p-6">

                    <h2 className="text-2xl font-bold">
                      {resume.personalInfo.firstName}{" "}
                      {resume.personalInfo.lastName}
                    </h2>

                    <p className="mt-2">
                      {resume.personalInfo.email}
                    </p>

                    <p>
                      {resume.personalInfo.mobile}
                    </p>

                  </div>

                  <div className="p-6">

                    <p className="text-gray-700 mb-2">
                      <span className="font-semibold">
                        Template:
                      </span>{" "}
                      {resume.selectedTemplate}
                    </p>

                    <p className="text-gray-700 mb-6">
                      <span className="font-semibold">
                        Address:
                      </span>{" "}
                      {resume.personalInfo.city},{" "}
                      {resume.personalInfo.state}
                    </p>

                    <div className="flex flex-col gap-3">

                      <button
                        onClick={() => navigate("/preview")}
                        className="bg-green-600 hover:bg-green-700 text-white py-3 rounded-lg transition"
                      >
                        👁 View Resume
                      </button>

                      <button
                        onClick={() => navigate("/personal-info")}
                        className="bg-yellow-500 hover:bg-yellow-600 text-white py-3 rounded-lg transition"
                      >
                        ✏ Edit Resume
                      </button>

                      <button
                        onClick={() => deleteResume(resume.id)}
                        className="bg-red-600 hover:bg-red-700 text-white py-3 rounded-lg transition"
                      >
                        🗑 Delete Resume
                      </button>

                    </div>

                  </div>

                </div>

              ))}

            </div>

          )}

        </div>

      </div>

    </>
  );
}

export default MyResume;