import Navbar from "../components/Navbar";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { saveSkills } from "../redux/resumeSlice";

function Skills() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [formData, setFormData] = useState({
    skill1: "",
    skill2: "",
    skill3: "",
    skill4: "",
    skill5: "",
    skill6: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handlePreview = () => {
    dispatch(saveSkills(formData));
    navigate("/preview");
  };

  return (
    <>
      <Navbar />

      <div className="min-h-screen bg-gray-100 py-10 px-8">

        <div className="max-w-7xl mx-auto flex gap-8">

          {/* Sidebar */}

          <div className="w-72 bg-white rounded-xl shadow">

            <div
              onClick={() => navigate("/personal-info")}
              className="flex items-center gap-4 p-5 border-b cursor-pointer hover:bg-gray-50"
            >
              <div className="w-10 h-10 rounded-full bg-green-500 text-white flex items-center justify-center font-bold">
                ✓
              </div>

              <div>
                <p className="text-sm text-gray-500">Step 1</p>
                <h4 className="font-semibold">Personal Info</h4>
              </div>
            </div>

            <div
              onClick={() => navigate("/work-experience")}
              className="flex items-center gap-4 p-5 border-b cursor-pointer hover:bg-gray-50"
            >
              <div className="w-10 h-10 rounded-full bg-green-500 text-white flex items-center justify-center font-bold">
                ✓
              </div>

              <div>
                <p className="text-sm text-gray-500">Step 2</p>
                <h4 className="font-semibold">Work Experience</h4>
              </div>
            </div>

            <div
              onClick={() => navigate("/education")}
              className="flex items-center gap-4 p-5 border-b cursor-pointer hover:bg-gray-50"
            >
              <div className="w-10 h-10 rounded-full bg-green-500 text-white flex items-center justify-center font-bold">
                ✓
              </div>

              <div>
                <p className="text-sm text-gray-500">Step 3</p>
                <h4 className="font-semibold">Education</h4>
              </div>
            </div>

            <div className="flex items-center gap-4 p-5 border-l-4 border-blue-600 bg-blue-50">

              <div className="w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold">
                4
              </div>

              <div>
                <p className="text-sm text-blue-600">Step 4</p>
                <h4 className="font-semibold text-blue-700">
                  Skills
                </h4>
              </div>

            </div>

          </div>

          {/* Form */}

          <div className="flex-1 bg-white rounded-xl shadow p-10">

            <h2 className="text-4xl font-bold mb-2">
              Key Skills
            </h2>

            <p className="text-gray-500 mb-8">
              Add your technical and professional skills.
            </p>

            <div className="grid md:grid-cols-2 gap-6">

              <input
                type="text"
                name="skill1"
                value={formData.skill1}
                onChange={handleChange}
                placeholder="HTML"
                className="border rounded-lg p-3"
              />

              <input
                type="text"
                name="skill2"
                value={formData.skill2}
                onChange={handleChange}
                placeholder="CSS"
                className="border rounded-lg p-3"
              />

              <input
                type="text"
                name="skill3"
                value={formData.skill3}
                onChange={handleChange}
                placeholder="JavaScript"
                className="border rounded-lg p-3"
              />

              <input
                type="text"
                name="skill4"
                value={formData.skill4}
                onChange={handleChange}
                placeholder="React"
                className="border rounded-lg p-3"
              />

              <input
                type="text"
                name="skill5"
                value={formData.skill5}
                onChange={handleChange}
                placeholder="Redux"
                className="border rounded-lg p-3"
              />

              <input
                type="text"
                name="skill6"
                value={formData.skill6}
                onChange={handleChange}
                placeholder="Tailwind CSS"
                className="border rounded-lg p-3"
              />

            </div>
                        {/* Skill Level */}

            <div className="mt-8">

              <label className="block font-semibold mb-2">
                Skill Level
              </label>

              <select
                className="w-full border rounded-lg p-3"
                defaultValue=""
              >
                <option value="" disabled>
                  Select Skill Level
                </option>

                <option>Beginner</option>

                <option>Intermediate</option>

                <option>Advanced</option>

                <option>Expert</option>

              </select>

            </div>

            {/* Tips */}

            <div className="mt-8 bg-blue-50 border border-blue-200 rounded-xl p-5">

              <h3 className="font-bold text-blue-700 mb-2">
                💡 Resume Tips
              </h3>

              <ul className="list-disc ml-5 text-gray-700 space-y-2">

                <li>Add only relevant technical skills.</li>

                <li>Keep skills updated with your latest knowledge.</li>

                <li>Mention technologies used in your projects.</li>

                <li>Avoid adding too many unrelated skills.</li>

              </ul>

            </div>

            {/* Buttons */}

            <div className="flex justify-between mt-10">

              <button
                onClick={() => navigate("/education")}
                className="bg-gray-500 hover:bg-gray-600 text-white px-8 py-3 rounded-lg transition"
              >
                Back
              </button>

              <button
                onClick={handlePreview}
                className="bg-blue-600 hover:bg-blue-700 text-white px-10 py-3 rounded-lg transition"
              >
                Preview Resume
              </button>

            </div>

          </div>

        </div>

      </div>

    </>
  );
}

export default Skills;