function Template3({
  personalInfo,
  workExperience,
  education,
  skills,
}) {
  return (
    <div className="bg-white shadow-lg">

      <div className="bg-gray-900 text-white p-8">

        <h1 className="text-4xl font-bold">
          {personalInfo.firstName} {personalInfo.lastName}
        </h1>

        <p>{personalInfo.email}</p>
        <p>{personalInfo.mobile}</p>

      </div>

      <div className="p-8">

        <h2 className="text-xl font-bold border-b-2 border-gray-900 mb-3">
          Objective
        </h2>

        <p className="mb-6">
          {personalInfo.objective}
        </p>

        <h2 className="text-xl font-bold border-b-2 border-gray-900 mb-3">
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

        <h2 className="text-xl font-bold border-b-2 border-gray-900 mb-3">
          Education
        </h2>

        <p>{education.degree}</p>
        <p>{education.college}</p>
        <p>{education.passingYear}</p>

        <h2 className="text-xl font-bold border-b-2 border-gray-900 mt-6 mb-3">
          Skills
        </h2>

        <ul className="list-disc ml-6">
          {skills.skill1 && <li>{skills.skill1}</li>}
          {skills.skill2 && <li>{skills.skill2}</li>}
          {skills.skill3 && <li>{skills.skill3}</li>}
          {skills.skill4 && <li>{skills.skill4}</li>}
        </ul>

      </div>

    </div>
  );
}

export default Template3;