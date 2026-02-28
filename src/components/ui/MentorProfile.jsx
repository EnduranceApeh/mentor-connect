import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../../firebase/config";
import { useAuth } from "../../context/AuthContext";

import sendMentorshipRequest from "../../firebase/requestService";
import { Briefcase, Clock, Mail } from "lucide-react";

function MentorProfile() {
  const { userData } = useAuth();
  const { id } = useParams();
  const [mentor, setMentor] = useState(null);
  const [loading, setLoading] = useState(true);

  async function handleRequest() {
    if (!userData) return;

    try{
      await sendMentorshipRequest({
        mentorId: id,
        mentorName: mentor.fullName || mentor.name,
         menteeId: userData.uid,
         menteeName: userData?.name
      })
      
      alert("Request sent successfully")
    }catch(error) {
      console.log(error)
      alert("Failed to send request")
    }
  }

  useEffect(() => {
    const fetchMentor = async () => {
      try {
        //console.log(user)
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
    <div className="max-w-3xl mx-auto px-4 sm:px-6 py-10">

  {/* Header */}
  <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6 bg-white rounded-2xl shadow-md border border-gray-100 p-6">

    <img
      src={
        mentor.photoURL ||
        `https://ui-avatars.com/api/?name=${mentor.fullName}&background=6366F1&color=fff`
      }
      alt="mentor"
      className="w-28 h-28 sm:w-32 sm:h-32 rounded-full object-cover border-4 border-gray-100 shadow-sm"
    />

    <div className="text-center sm:text-left">
      <h2 className="text-2xl sm:text-3xl font-bold text-gray-800">
        {mentor.fullName || mentor.name}
      </h2>

      <p className="text-indigo-600 text-base sm:text-lg font-medium mt-1">
        {mentor.techRole}
      </p>

      <div className="flex items-center justify-center sm:justify-start gap-2 text-gray-600 mt-3">
        <Briefcase size={18} />
        <span className="text-sm sm:text-base">
          {mentor.experience} years experience
        </span>
      </div>

      <p className="text-sm text-gray-400 capitalize mt-2">
        {mentor.role}
      </p>
    </div>
  </div>

  {/* Skills */}
  <div className="mt-8 bg-white rounded-2xl shadow-md border border-gray-100 p-6">
    <h3 className="font-semibold text-lg text-gray-800 mb-4">
      Skills
    </h3>

    <div className="flex flex-wrap gap-3">
      {mentor.skills?.map((skill, index) => (
        <span
          key={index}
          className="bg-indigo-50 text-indigo-600 px-4 py-1.5 rounded-full text-sm font-medium"
        >
          {skill}
        </span>
      ))}
    </div>
  </div>

  {/* Bio */}
  <div className="mt-8 bg-white rounded-2xl shadow-md border border-gray-100 p-6">
    <h3 className="font-semibold text-lg text-gray-800 mb-3">
      About
    </h3>

    <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
      {mentor.bio}
    </p>
  </div>

  {/* Info Section */}
  <div className="mt-8 bg-white rounded-2xl shadow-md border border-gray-100 p-6 grid grid-cols-1 sm:grid-cols-2 gap-6">

    <div className="flex items-center gap-3 text-gray-600">
      <Clock size={18} className="text-indigo-600" />
      <span>{mentor.availability}</span>
    </div>

    <div className="flex items-center gap-3 text-gray-600 break-all">
      <Mail size={18} className="text-indigo-600" />
      <span>{mentor.email}</span>
    </div>
  </div>

  {/* CTA */}
  <button
    className="
      w-full
      mt-10
      bg-indigo-600
      text-white
      py-3.5
      rounded-xl
      font-medium
      shadow-md
      hover:bg-indigo-700
      hover:shadow-lg
      transition-all
      duration-200
    "
    onClick={handleRequest}
  >
    Request Mentorship
  </button>

</div>
  )
}

export default MentorProfile;