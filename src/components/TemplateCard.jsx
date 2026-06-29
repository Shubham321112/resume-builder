import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setTemplate } from "../redux/resumeSlice";

function TemplateCard({ title, image, templateId }) {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSelectTemplate = () => {
    dispatch(setTemplate(templateId));
    navigate("/personal-info");
  };

  return (
    <div
      onClick={handleSelectTemplate}
      className="bg-white border rounded-lg shadow-sm hover:shadow-lg transition duration-300 cursor-pointer p-3"
    >
      <img
        src={image}
        alt={title}
        className="w-full h-80 object-cover border"
      />

      <h3 className="text-center font-semibold mt-4">
        {title}
      </h3>
    </div>
  );
}

export default TemplateCard;