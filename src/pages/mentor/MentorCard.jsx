import { useNavigate } from "react-router-dom";
import { UserPlus } from "lucide-react";

function MentorCard({ id, image = "", name, fullName, techRole = "", skills = [] }) {
  const navigate = useNavigate();



  return (
    <div className="
  bg-white 
  w-full 
  rounded-2xl 
  shadow-md 
  p-4 sm:p-5 
  flex flex-col 
  gap-4 
  hover:shadow-xl 
  transition-all 
  duration-300
">

  {/* Top Section */}
  <div className="flex items-center gap-4">

    <img
      src={image || `https://ui-avatars.com/api/?name=${fullName || name}&background=6366F1&color=fff`}
      alt={name}
      className="
        w-14 h-14 
        sm:w-16 sm:h-16 
        rounded-full 
        object-cover 
        flex-shrink-0
      "
    />

    <div className="min-w-0">
      <h2 className="
        text-base sm:text-lg 
        font-semibold 
        text-gray-800 
        truncate
      ">
        {fullName || name}
      </h2>

      <p className="
        text-xs sm:text-sm 
        text-gray-500 
        truncate
      ">
        {techRole}
      </p>
    </div>
  </div>

  {/* Skills */}
  <ul className="flex flex-wrap gap-2">
    {skills?.slice(0, 4).map((skill, index) => (
      <li
        key={index}
        className="
          text-xs 
          bg-blue-100 
          text-blue-600 
          px-3 py-1 
          rounded-full
          whitespace-nowrap
        "
      >
        {skill}
      </li>
    ))}

    {skills?.length > 4 && (
      <li className="text-xs text-gray-400">
        +{skills.length - 4} more
      </li>
    )}
  </ul>

  {/* Buttons */}
  <div className="
    flex 
    flex-col 
    sm:flex-row 
    gap-3 
    mt-2
  ">
    <button
      className="
        flex-1 
        bg-blue-500 
        text-white 
        py-2.5 
        rounded-lg 
        hover:bg-blue-600 
        transition 
        text-sm sm:text-base
      "
      onClick={() => navigate(`/mentee/mentor/${id}`)}
    >
      View Profile
    </button>

    <button
      className="
        flex items-center justify-center
        border 
        rounded-lg 
        py-2.5 
        px-3
        hover:bg-gray-100 
        transition
      "
    >
      <UserPlus size={18} />
    </button>
  </div>

</div>
  )
}

export default MentorCard;