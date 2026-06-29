function Template1({
  personalInfo,
  workExperience,
  education,
  skills,
}) {
  return (
    <div className="bg-white shadow-xl max-w-5xl mx-auto min-h-[1120px]">

      {/* Header */}

      <div className="bg-blue-700 text-white p-8">

        <div className="flex items-center gap-8">

          <img
            src={
              personalInfo.profileImage ||
              "https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
            }
            alt="Profile"
            className="w-36 h-36 rounded-full border-4 border-white object-cover"
          />

          <div>

            <h1 className="text-5xl font-bold uppercase">
              {personalInfo.firstName} {personalInfo.lastName}
            </h1>

            <p className="mt-3 text-lg">
              {personalInfo.email}
            </p>

            <p>{personalInfo.mobile}</p>

            <p>
              {personalInfo.address},
              {" "}
              {personalInfo.city},
              {" "}
              {personalInfo.state}
              {" "}
              {personalInfo.postalCode}
            </p>

          </div>

        </div>

      </div>

      {/* Body */}

      <div className="grid grid-cols-3">

        {/* Left */}

        <div className="bg-gray-100 p-8">

          <h2 className="text-xl font-bold text-blue-700 mb-4">
            Career Objective
          </h2>

          <p className="text-gray-700 leading-7">
            {personalInfo.objective}
          </p>

          <hr className="my-8" />

          <h2 className="text-xl font-bold text-blue-700 mb-4">
            Skills
          </h2>

          <div className="flex flex-wrap gap-2">

            {skills.skill1 && (
              <span className="bg-blue-600 text-white px-3 py-1 rounded-full">
                {skills.skill1}
              </span>
            )}

            {skills.skill2 && (
              <span className="bg-blue-600 text-white px-3 py-1 rounded-full">
                {skills.skill2}
              </span>
            )}

            {skills.skill3 && (
              <span className="bg-blue-600 text-white px-3 py-1 rounded-full">
                {skills.skill3}
              </span>
            )}

            {skills.skill4 && (
              <span className="bg-blue-600 text-white px-3 py-1 rounded-full">
                {skills.skill4}
              </span>
            )}

            {skills.skill5 && (
              <span className="bg-blue-600 text-white px-3 py-1 rounded-full">
                {skills.skill5}
              </span>
            )}

            {skills.skill6 && (
              <span className="bg-blue-600 text-white px-3 py-1 rounded-full">
                {skills.skill6}
              </span>
            )}

          </div>

        </div>

        {/* Right */}

        <div className="col-span-2 p-8">

          <h2 className="text-2xl font-bold text-blue-700 mb-4">
            Work Experience
          </h2>

          <h3 className="text-lg font-semibold">
            {workExperience.jobTitle}
          </h3>

          <p className="font-medium">
            {workExperience.company}
          </p>

          <p className="text-gray-500 mb-2">
            {workExperience.startDate}
            {" - "}
            {workExperience.endDate}
          </p>

          <p className="leading-7">
            {workExperience.description}
          </p>

          <hr className="my-8" />

          <h2 className="text-2xl font-bold text-blue-700 mb-4">
            Education
          </h2>
                    <div className="space-y-4">

            <div>

              <h3 className="text-lg font-semibold">
                {education.degree}
              </h3>

              <p className="text-gray-700">
                {education.specialization}
              </p>

              <p className="font-medium">
                {education.college}
              </p>

              <p className="text-gray-600">
                {education.location}
              </p>

              <p className="text-gray-600">
                CGPA : {education.cgpa}
              </p>

              <p className="text-gray-600">
                Passing Year : {education.passingYear}
              </p>

            </div>

          </div>

          <hr className="my-8" />

          <h2 className="text-2xl font-bold text-blue-700 mb-4">
            Contact Information
          </h2>

          <div className="space-y-2">

            <p>
              <span className="font-semibold">
                Email :
              </span>{" "}
              {personalInfo.email}
            </p>

            <p>
              <span className="font-semibold">
                Mobile :
              </span>{" "}
              {personalInfo.mobile}
            </p>

            <p>
              <span className="font-semibold">
                Address :
              </span>{" "}
              {personalInfo.address},
              {" "}
              {personalInfo.city},
              {" "}
              {personalInfo.state}
              {" "}
              {personalInfo.postalCode}
            </p>

          </div>

        </div>

      </div>

      {/* Footer */}

      <div className="bg-blue-700 text-center text-white py-4 text-sm">

        Resume generated using
        {" "}
        <span className="font-semibold">
          Resume Builder
        </span>

      </div>

    </div>
  );
}

export default Template1;