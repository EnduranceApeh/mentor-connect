import { Link } from "react-router-dom";

function Button() {
  return (
    <div className="flex gap-8">
      <Link
        to="/sign-up"
        className="bg-[#3B82F6] py-2 px-4 text-[#FFFFFF] rounded-sm"
      >
        Join as Mentee
      </Link>

      <Link
        to="/sign-up"
        className="py-2 px-4 bg-transparent border-2 border-[#E5E7EB] text-[#374151] rounded-sm"
      >
        Become a Mentor
      </Link>
    </div>

  )
}

export default Button;