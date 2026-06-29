import Navbar from "../components/Navbar";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { saveWorkExperience } from "../redux/resumeSlice";

function WorkExperience() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [formData, setFormData] = useState({
    company: "",
    jobTitle: "",
    startDate: "",
    endDate: "",
    currentJob: false,
    description: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });

    setErrors({
      ...errors,
      [name]: "",
    });
  };

  const validate = () => {
    let newErrors = {};

    if (!formData.company.trim())
      newErrors.company = "Company Name is required";

    if (!formData.jobTitle.trim())
      newErrors.jobTitle = "Job Title is required";

    if (!formData.startDate)
      newErrors.startDate = "Start Date is required";

    if (!formData.currentJob && !formData.endDate)
      newErrors.endDate = "End Date is required";

    if (!formData.description.trim())
      newErrors.description = "Job Description is required";

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleNext = () => {
    if (!validate()) return;

    dispatch(saveWorkExperience(formData));
    navigate("/education");
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
                <p className="text-sm text-gray-500">
                  Step 1
                </p>

                <h4 className="font-semibold">
                  Personal Info
                </h4>
              </div>

            </div>

            <div className="flex items-center gap-4 p-5 border-l-4 border-blue-600 bg-blue-50">

              <div className="w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold">
                2
              </div>

              <div>

                <p className="text-sm text-blue-600">
                  Step 2
                </p>

                <h4 className="font-semibold text-blue-700">
                  Work Experience
                </h4>

              </div>

            </div>

            <div
              onClick={() => navigate("/education")}
              className="flex items-center gap-4 p-5 border-t cursor-pointer hover:bg-gray-50"
            >
              <div className="w-10 h-10 rounded-full bg-gray-300 flex items-center justify-center font-bold">
                3
              </div>

              <div>

                <p className="text-sm text-gray-500">
                  Step 3
                </p>

                <h4 className="font-semibold">
                  Education
                </h4>

              </div>

            </div>

            <div
              onClick={() => navigate("/skills")}
              className="flex items-center gap-4 p-5 border-t cursor-pointer hover:bg-gray-50"
            >
              <div className="w-10 h-10 rounded-full bg-gray-300 flex items-center justify-center font-bold">
                4
              </div>

              <div>

                <p className="text-sm text-gray-500">
                  Step 4
                </p>

                <h4 className="font-semibold">
                  Skills
                </h4>

              </div>

            </div>

          </div>

          {/* Form */}

          <div className="flex-1 bg-white rounded-xl shadow p-10">

            <h2 className="text-4xl font-bold mb-2">
              Work Experience
            </h2>

            <p className="text-gray-500 mb-8">
              Add your latest work experience.
            </p>

            <div className="grid md:grid-cols-2 gap-6">

              <div>

                <label className="block font-medium mb-2">
                  Company Name
                </label>

                <input
                  type="text"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  placeholder="Google"
                  className={`w-full rounded-lg p-3 border ${
                    errors.company
                      ? "border-red-500"
                      : "border-gray-300"
                  }`}
                />

                {errors.company && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.company}
                  </p>
                )}

              </div>

              <div>

                <label className="block font-medium mb-2">
                  Job Title
                </label>

                <input
                  type="text"
                  name="jobTitle"
                  value={formData.jobTitle}
                  onChange={handleChange}
                  placeholder="Software Engineer"
                  className={`w-full rounded-lg p-3 border ${
                    errors.jobTitle
                      ? "border-red-500"
                      : "border-gray-300"
                  }`}
                />

                {errors.jobTitle && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.jobTitle}
                  </p>
                )}

              </div>
                            <div>

                <label className="block font-medium mb-2">
                  Start Date
                </label>

                <input
                  type="date"
                  name="startDate"
                  value={formData.startDate}
                  onChange={handleChange}
                  className={`w-full rounded-lg p-3 border ${
                    errors.startDate
                      ? "border-red-500"
                      : "border-gray-300"
                  }`}
                />

                {errors.startDate && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.startDate}
                  </p>
                )}

              </div>

              <div>

                <label className="block font-medium mb-2">
                  End Date
                </label>

                <input
                  type="date"
                  name="endDate"
                  value={formData.endDate}
                  onChange={handleChange}
                  disabled={formData.currentJob}
                  className={`w-full rounded-lg p-3 border ${
                    errors.endDate
                      ? "border-red-500"
                      : "border-gray-300"
                  }`}
                />

                {errors.endDate && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.endDate}
                  </p>
                )}

              </div>

            </div>

            {/* Current Job */}

            <div className="mt-5">

              <label className="flex items-center gap-3">

                <input
                  type="checkbox"
                  name="currentJob"
                  checked={formData.currentJob}
                  onChange={handleChange}
                />

                I currently work here

              </label>

            </div>

            {/* Job Description */}

            <div className="mt-8">

              <label className="block font-medium mb-2">
                Job Description
              </label>

              <textarea
                name="description"
                value={formData.description}
                onChange={handleChange}
                placeholder="Describe your responsibilities, achievements and technologies used..."
                rows="6"
                className={`w-full rounded-lg p-4 resize-none border ${
                  errors.description
                    ? "border-red-500"
                    : "border-gray-300"
                }`}
              />

              {errors.description && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.description}
                </p>
              )}

            </div>

            {/* Add Another Experience */}

            <div className="mt-6">

              <button
                type="button"
                className="border-2 border-dashed border-blue-400 text-blue-600 px-6 py-3 rounded-lg hover:bg-blue-50 transition"
              >
                + Add Another Experience
              </button>

            </div>

            {/* Buttons */}

            <div className="flex justify-between mt-10">

              <button
                onClick={() => navigate("/personal-info")}
                className="bg-gray-500 hover:bg-gray-600 text-white px-8 py-3 rounded-lg transition"
              >
                Back
              </button>

              <button
                onClick={handleNext}
                className="bg-blue-600 hover:bg-blue-700 text-white px-10 py-3 rounded-lg transition"
              >
                Next
              </button>

            </div>

          </div>

        </div>

      </div>

    </>
  );
}

export default WorkExperience;