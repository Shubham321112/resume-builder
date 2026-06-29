import Navbar from "../components/Navbar";
import TemplateCard from "../components/TemplateCard";

import template1 from "../assets/template1.png";
import template2 from "../assets/template2.png";
import template3 from "../assets/template3.png";
import template4 from "../assets/template4.png";

console.log(template1);
console.log(template2);

function Home() {
  const templates = [
    {
      id: 1,
      title: "Template 1",
      image: template1,
    },
    {
      id: 2,
      title: "Template 2",
      image: template2,
    },
    {
      id: 3,
      title: "Template 3",
      image: template3,
    },
    {
      id: 4,
      title: "Template 4",
      image: template4,
    },
  ];

  return (
    <>
      <Navbar />

      <div className="max-w-7xl mx-auto px-8 py-10">
        <h1 className="text-4xl font-bold mb-2">
          Templates
        </h1>

        <p className="text-gray-600 mb-10">
          Select a Template to get Started
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {templates.map((template) => (
            <TemplateCard
              key={template.id}
              templateId={template.id}
              title={template.title}
              image={template.image}
            />
          ))}
        </div>
      </div>
    </>
  );
}

export default Home;