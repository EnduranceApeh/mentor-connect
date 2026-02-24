import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../../firebase/config";
import { Briefcase, Clock, Mail } from "lucide-react";

function MentorProfile() {
  const { id } = useParams();
  const [mentor, setMentor] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMentor = async () => {
      try {
        const docRef = doc(db, "users", id);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          setMentor(docSnap.data())
        } else {
          console.log("No such mentor")
        }

      } catch (error) {
        console.error(error)

      } finally {
        setLoading(false)
      }
    }

    fetchMentor()
  }, [id]);

  if (loading) {
    return <p className="text-center mt-10">Loading profile....</p>
  }

  if (!mentor) {
    return <p>Mentor not found.</p>
  }

  return (
    <div className="max-w-3xl rounded-2xl">
      {/* Header */}
      <div className="flex items-center gap-6 bg-[#FFFFFF] rounded-xl shadow-lg py-5">
        <img
          src={mentor.photoURL || "https://via.placeholder.com/120"}
          alt="mentor"
          className="w-28 h-28 rounded-full object-cover"
        />
        <div>
          <h2 className="text-2xl font-bold">{mentor.name}</h2>
          <p className="text-[#6366F1] text-lg">{mentor.techRole}</p>
          <div className="flex items-center gap-2">
          <Briefcase size={18} />
          <span>{mentor.experience} years experience</span>
        </div>
          <p className="text-gray-500 capitalize">{mentor.role}</p>
        </div>
      </div>

       {/* Skills */}
      <div className="mt-6  bg-[#FFFFFF] rounded-xl shadow-lg py-5 px-4">
        <h3 className="font-semibold text-lg mb-3">Skills</h3>
        <div className="flex flex-wrap gap-2">
          {mentor.skills?.map((skill, index) => (
            <span
              key={index}
              className="text-blue-600 px-3 py-1 rounded-full text-sm"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>

      {/* Bio */}
      <div className="mt-6 bg-[#FFFFFF] rounded-xl shadow-lg py-5 px-4">
        <h3 className="font-semibold text-lg mb-2">About</h3>
        <p className="text-gray-600">{mentor.bio}</p>
      </div>

      {/* Info Section */}
      <div className="grid grid-cols-2 gap-6 mt-6">

        <div className="flex items-center gap-2">
          <Clock size={18} />
          <span>{mentor.availability}</span>
        </div>

        <div className="flex items-center gap-2">
          <Mail size={18} />
          <span>{mentor.email}</span>
        </div>
      </div>

     

      {/* CTA */}
      <button className="w-full mt-8 bg-blue-500 text-white py-3 rounded-lg hover:bg-blue-600 transition">
        Request Mentorship
      </button>
    </div>
  )
}

export default MentorProfile;