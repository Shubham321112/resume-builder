import Navbar from "../components/Navbar";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { saveEducation } from "../redux/resumeSlice";

function Education() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [formData, setFormData] = useState({
    college: "",
    degree: "",
    specialization: "",
    cgpa: "",
    location: "",
    passingYear: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });

    setErrors({
      ...errors,
      [e.target.name]: "",
    });
  };

  const validate = () => {
    let newErrors = {};

    if (!formData.college.trim()) {
      newErrors.college = "College Name is required";
    }

    if (!formData.degree.trim()) {
      newErrors.degree = "Degree is required";
    }

    if (!formData.specialization.trim()) {
      newErrors.specialization = "Specialization is required";
    }

    if (!formData.cgpa.trim()) {
      newErrors.cgpa = "CGPA / Percentage is required";
    }

    if (!formData.location.trim()) {
      newErrors.location = "College Location is required";
    }

    if (!formData.passingYear.trim()) {
      newErrors.passingYear = "Passing Year is required";
    } else if (!/^[0-9]{4}$/.test(formData.passingYear)) {
      newErrors.passingYear = "Enter valid year";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleNext = () => {
    if (!validate()) return;

    dispatch(saveEducation(formData));
    navigate("/skills");
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

            <div className="flex items-center gap-4 p-5 border-l-4 border-blue-600 bg-blue-50">

              <div className="w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold">
                3
              </div>

              <div>
                <p className="text-sm text-blue-600">
                  Step 3
                </p>

                <h4 className="font-semibold text-blue-700">
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

          <div className="flex-1 bg-white rounded-xl shadow p-10">

            <h2 className="text-4xl font-bold mb-2">
              Education
            </h2>

            <p className="text-gray-500 mb-8">
              Add your education details.
            </p>

            <div className="grid md:grid-cols-2 gap-6">

              <div>

                <label className="block mb-2 font-medium">
                  College / University
                </label>

                <input
                  type="text"
                  name="college"
                  value={formData.college}
                  onChange={handleChange}
                  placeholder="ABC University"
                  className={`w-full rounded-lg p-3 border ${
                    errors.college
                      ? "border-red-500"
                      : "border-gray-300"
                  }`}
                />

                {errors.college && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.college}
                  </p>
                )}

              </div>

              <div>

                <label className="block mb-2 font-medium">
                  Degree
                </label>

                <input
                  type="text"
                  name="degree"
                  value={formData.degree}
                  onChange={handleChange}
                  placeholder="B.Tech"
                  className={`w-full rounded-lg p-3 border ${
                    errors.degree
                      ? "border-red-500"
                      : "border-gray-300"
                  }`}
                />

                {errors.degree && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.degree}
                  </p>
                )}

              </div>
                            <div>

                <label className="block mb-2 font-medium">
                  Specialization
                </label>

                <input
                  type="text"
                  name="specialization"
                  value={formData.specialization}
                  onChange={handleChange}
                  placeholder="Computer Science"
                  className={`w-full rounded-lg p-3 border ${
                    errors.specialization
                      ? "border-red-500"
                      : "border-gray-300"
                  }`}
                />

                {errors.specialization && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.specialization}
                  </p>
                )}

              </div>

              <div>

                <label className="block mb-2 font-medium">
                  Passing Year
                </label>

                <input
                  type="text"
                  name="passingYear"
                  value={formData.passingYear}
                  onChange={handleChange}
                  placeholder="2026"
                  className={`w-full rounded-lg p-3 border ${
                    errors.passingYear
                      ? "border-red-500"
                      : "border-gray-300"
                  }`}
                />

                {errors.passingYear && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.passingYear}
                  </p>
                )}

              </div>

              <div>

                <label className="block mb-2 font-medium">
                  CGPA / Percentage
                </label>

                <input
                  type="text"
                  name="cgpa"
                  value={formData.cgpa}
                  onChange={handleChange}
                  placeholder="8.50 CGPA"
                  className={`w-full rounded-lg p-3 border ${
                    errors.cgpa
                      ? "border-red-500"
                      : "border-gray-300"
                  }`}
                />

                {errors.cgpa && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.cgpa}
                  </p>
                )}

              </div>

              <div>

                <label className="block mb-2 font-medium">
                  College Location
                </label>

                <input
                  type="text"
                  name="location"
                  value={formData.location}
                  onChange={handleChange}
                  placeholder="Delhi, India"
                  className={`w-full rounded-lg p-3 border ${
                    errors.location
                      ? "border-red-500"
                      : "border-gray-300"
                  }`}
                />

                {errors.location && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.location}
                  </p>
                )}

              </div>

            </div>

            <div className="flex justify-between mt-10">

              <button
                onClick={() => navigate("/work-experience")}
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

export default Education;