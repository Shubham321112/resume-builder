function Template2({
  personalInfo,
  workExperience,
  education,
  skills,
}) {
  return (
    <div className="bg-white shadow-xl rounded-lg overflow-hidden">

      <div className="bg-blue-700 text-white p-8">
        <h1 className="text-4xl font-bold">
          {personalInfo.firstName} {personalInfo.lastName}
        </h1>

        <p className="mt-2">
          {personalInfo.email}
        </p>

        <p>
          {personalInfo.mobile}
        </p>

        <p>
          {personalInfo.city}, {personalInfo.state}
        </p>
      </div>

      <div className="p-8">

        <h2 className="text-2xl font-bold text-blue-700 mb-2">
          Profile
        </h2>

        <p className="mb-6">
          {personalInfo.objective}
        </p>

        <h2 className="text-2xl font-bold text-blue-700 mb-2">
          Experience
        </h2>

        <h3 className="font-semibold">
          {workExperience.jobTitle}
        </h3>

        <p>{workExperience.company}</p>

        <p>
          {workExperience.startDate} - {workExperience.endDate}
        </p>

        <p className="mb-6">
          {workExperience.description}
        </p>

        <h2 className="text-2xl font-bold text-blue-700 mb-2">
          Education
        </h2>

        <p className="font-semibold">
          {education.degree}
        </p>

        <p>{education.college}</p>

        <p className="mb-6">
          {education.passingYear}
        </p>

        <h2 className="text-2xl font-bold text-blue-700 mb-2">
          Skills
        </h2>

        <div className="flex flex-wrap gap-3">
          {skills.skill1 && (
            <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full">
              {skills.skill1}
            </span>
          )}

          {skills.skill2 && (
            <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full">
              {skills.skill2}
            </span>
          )}

          {skills.skill3 && (
            <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full">
              {skills.skill3}
            </span>
          )}

          {skills.skill4 && (
            <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full">
              {skills.skill4}
            </span>
          )}
        </div>

      </div>

    </div>
  );
}

export default Template2;