function Template4({
  personalInfo,
  workExperience,
  education,
  skills,
}) {
  return (
    <div className="grid grid-cols-3 bg-white shadow-lg">

      <div className="bg-blue-800 text-white p-6">

        <h1 className="text-3xl font-bold">
          {personalInfo.firstName}
        </h1>

        <h1 className="text-3xl font-bold mb-6">
          {personalInfo.lastName}
        </h1>

        <h2 className="font-bold mb-2">
          Contact
        </h2>

        <p>{personalInfo.email}</p>
        <p>{personalInfo.mobile}</p>

        <h2 className="font-bold mt-8 mb-2">
          Skills
        </h2>

        <ul className="list-disc ml-5">
          {skills.skill1 && <li>{skills.skill1}</li>}
          {skills.skill2 && <li>{skills.skill2}</li>}
          {skills.skill3 && <li>{skills.skill3}</li>}
          {skills.skill4 && <li>{skills.skill4}</li>}
        </ul>

      </div>

      <div className="col-span-2 p-8">

        <h2 className="text-2xl font-bold text-blue-700 mb-2">
          Career Objective
        </h2>

        <p className="mb-6">
          {personalInfo.objective}
        </p>

        <h2 className="text-2xl font-bold text-blue-700 mb-2">
          Work Experience
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

        <p>{education.degree}</p>

        <p>{education.college}</p>

        <p>{education.passingYear}</p>

      </div>

    </div>
  );
}

export default Template4;