import Navbar from "../components/Navbar";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { savePersonalInfo } from "../redux/resumeSlice";
import { useDispatch, useSelector } from "react-redux";

function PersonalInfo() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const savedPersonalInfo = useSelector(
  (state) => state.resume.personalInfo
);

 const [formData, setFormData] = useState(
  savedPersonalInfo.profileImage ||
  savedPersonalInfo.firstName ||
  savedPersonalInfo.lastName ||
  savedPersonalInfo.email
    ? savedPersonalInfo
    : {
        profileImage: "",
        firstName: "",
        lastName: "",
        email: "",
        mobile: "",
        address: "",
        city: "",
        state: "",
        postalCode: "",
        objective: "",
      }
);
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

  const handleImageChange = (e) => {
    const file = e.target.files[0];

    if (!file) return;

    const reader = new FileReader();

    reader.onloadend = () => {
      setFormData((prev) => ({
        ...prev,
        profileImage: reader.result,
      }));
    };

    reader.readAsDataURL(file);
  };

  const validate = () => {
    let newErrors = {};

    if (!formData.firstName.trim())
      newErrors.firstName = "First Name is required";

    if (!formData.lastName.trim())
      newErrors.lastName = "Last Name is required";

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(formData.email)
    ) {
      newErrors.email = "Enter a valid email";
    }

    if (!formData.mobile.trim()) {
      newErrors.mobile = "Mobile Number is required";
    } else if (!/^[0-9]{10}$/.test(formData.mobile)) {
      newErrors.mobile = "Enter valid 10 digit mobile";
    }

    if (!formData.address.trim())
      newErrors.address = "Address is required";

    if (!formData.city.trim())
      newErrors.city = "City is required";

    if (!formData.state.trim())
      newErrors.state = "State is required";

    if (!formData.postalCode.trim())
      newErrors.postalCode = "Postal Code is required";

    if (!formData.objective.trim())
      newErrors.objective = "Career Objective is required";

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleNext = () => {
    if (!validate()) return;

    dispatch(savePersonalInfo(formData));
    navigate("/work-experience");
  };

  return (
    <>
      <Navbar />

      <div className="flex gap-10 p-10 bg-gray-100 min-h-screen">

        {/* Sidebar */}

        <div className="w-72 bg-white shadow rounded">

          <div className="p-4 border-l-4 border-blue-600 text-blue-600 font-semibold">
            Personal Info
          </div>

          <div
            onClick={() => navigate("/work-experience")}
            className="p-4 border-t cursor-pointer hover:bg-gray-100"
          >
            Work Experience
          </div>

          <div
            onClick={() => navigate("/education")}
            className="p-4 border-t cursor-pointer hover:bg-gray-100"
          >
            Education
          </div>

          <div
            onClick={() => navigate("/skills")}
            className="p-4 border-t cursor-pointer hover:bg-gray-100"
          >
            Key Skills
          </div>

        </div>

        {/* Form */}

        <div className="bg-white shadow rounded p-10 flex-1">

          <h2 className="text-4xl font-bold mb-8">
            Personal Information
          </h2>

          <div className="flex flex-col items-center mb-8">

            <img
              src={
                formData.profileImage ||
                "https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
              }
              alt="Profile"
              className="w-28 h-28 rounded-full object-cover border-4 border-gray-300"
            />

            <label className="mt-3 text-blue-600 font-semibold cursor-pointer hover:underline">

              Change Profile Photo

              <input
                type="file"
                accept="image/*"
                className="hidden"
                onChange={handleImageChange}
              />

            </label>

          </div>
                    <div className="grid grid-cols-2 gap-6">

            {/* First Name */}

            <div>
              <input
                type="text"
                name="firstName"
                placeholder="First Name"
                value={formData.firstName}
                onChange={handleChange}
                className={`w-full p-4 rounded border ${
                  errors.firstName
                    ? "border-red-500"
                    : "border-gray-300"
                }`}
              />

              {errors.firstName && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.firstName}
                </p>
              )}
            </div>

            {/* Last Name */}

            <div>
              <input
                type="text"
                name="lastName"
                placeholder="Last Name"
                value={formData.lastName}
                onChange={handleChange}
                className={`w-full p-4 rounded border ${
                  errors.lastName
                    ? "border-red-500"
                    : "border-gray-300"
                }`}
              />

              {errors.lastName && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.lastName}
                </p>
              )}
            </div>

            {/* Email */}

            <div>
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                className={`w-full p-4 rounded border ${
                  errors.email
                    ? "border-red-500"
                    : "border-gray-300"
                }`}
              />

              {errors.email && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.email}
                </p>
              )}
            </div>

            {/* Mobile */}

            <div>
              <input
                type="text"
                name="mobile"
                placeholder="Mobile Number"
                value={formData.mobile}
                onChange={handleChange}
                className={`w-full p-4 rounded border ${
                  errors.mobile
                    ? "border-red-500"
                    : "border-gray-300"
                }`}
              />

              {errors.mobile && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.mobile}
                </p>
              )}
            </div>

          </div>

          {/* Address */}

          <div className="mt-6">
            <input
              type="text"
              name="address"
              placeholder="Address"
              value={formData.address}
              onChange={handleChange}
              className={`w-full p-4 rounded border ${
                errors.address
                  ? "border-red-500"
                  : "border-gray-300"
              }`}
            />

            {errors.address && (
              <p className="text-red-500 text-sm mt-1">
                {errors.address}
              </p>
            )}
          </div>

          {/* City State Postal */}

          <div className="grid grid-cols-3 gap-6 mt-6">

            <div>
              <input
                type="text"
                name="city"
                placeholder="City"
                value={formData.city}
                onChange={handleChange}
                className={`w-full p-4 rounded border ${
                  errors.city
                    ? "border-red-500"
                    : "border-gray-300"
                }`}
              />

              {errors.city && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.city}
                </p>
              )}
            </div>

            <div>
              <input
                type="text"
                name="state"
                placeholder="State"
                value={formData.state}
                onChange={handleChange}
                className={`w-full p-4 rounded border ${
                  errors.state
                    ? "border-red-500"
                    : "border-gray-300"
                }`}
              />

              {errors.state && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.state}
                </p>
              )}
            </div>

            <div>
              <input
                type="text"
                name="postalCode"
                placeholder="Postal Code"
                value={formData.postalCode}
                onChange={handleChange}
                className={`w-full p-4 rounded border ${
                  errors.postalCode
                    ? "border-red-500"
                    : "border-gray-300"
                }`}
              />

              {errors.postalCode && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.postalCode}
                </p>
              )}
            </div>

          </div>

          {/* Objective */}

          <div className="mt-6">
            <textarea
              name="objective"
              placeholder="Career Objective"
              value={formData.objective}
              onChange={handleChange}
              className={`w-full h-40 p-4 rounded border ${
                errors.objective
                  ? "border-red-500"
                  : "border-gray-300"
              }`}
            />

            {errors.objective && (
              <p className="text-red-500 text-sm mt-1">
                {errors.objective}
              </p>
            )}
          </div>

          <div className="flex justify-end mt-8">

            <button
              onClick={handleNext}
              className="bg-blue-600 hover:bg-blue-700 text-white px-10 py-3 rounded"
            >
              Next
            </button>

          </div>

        </div>

      </div>

    </>
  );
}

export default PersonalInfo;