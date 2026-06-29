import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import About from "./pages/About";
import PersonalInfo from "./pages/PersonalInfo";
import WorkExperience from "./pages/WorkExperience";
import Education from "./pages/Education";
import Skills from "./pages/Skills";
import Preview from "./pages/Preview";
import MyResume from "./pages/MyResume";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />

      <Route path="/personal-info" element={<PersonalInfo />} />
      <Route path="/work-experience" element={<WorkExperience />} />
      <Route path="/education" element={<Education />} />
      <Route path="/skills" element={<Skills />} />
      <Route path="/preview" element={<Preview />} />

      {/* My Resume Page */}
      <Route path="/my-resumes" element={<MyResume />} />
    </Routes>
  );
}

export default App;