import { UserPlus } from "lucide-react";

function MentorCard({ image = "", name, techRole = "", techStacks = [] }) {
  return (
    <div className="bg-white max-w-sm w-full rounded-2xl shadow-md p-5 flex flex-col gap-4 hover:shadow-lg transition">

      <div className="flex items-center gap-4">
        <img
          src={image}
          alt={name}
          className="w-16 h-16 rounded-full object-cover"
        />

        <div>
          <h2 className="text-lg font-semibold text-gray-800">
            {name}
          </h2>
          <p className="text-sm text-gray-500">
            {techRole}
          </p>
        </div>
      </div>

      {/* Tech Stacks */}
      <ul className="flex flex-wrap gap-2">
        {techStacks.map((stack, index) => (
          <li
            key={index}
            className="text-xs bg-blue-100 text-blue-600 px-3 py-1 rounded-full"
          >
            {stack}
          </li>
        ))}
      </ul>

      {/* Buttons */}
      <div className="flex gap-3 mt-2">
        <button className="flex-1 bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition cursor-pointer">
          View Profile
        </button>

        <button className="p-2 border rounded-lg hover:bg-gray-100 transition">
          <UserPlus size={18} />
        </button>
      </div>

    </div>
  )
}

export default MentorCard;