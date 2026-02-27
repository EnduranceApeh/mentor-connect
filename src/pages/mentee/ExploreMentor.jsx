import { db } from "../../firebase/config";
import { collection, getDocs, query, where } from "firebase/firestore";
import { useState, useEffect } from "react";

import MentorCard from "../../pages/mentor/MentorCard";

function ExploreMentor() {
  const [mentors, setMentors] = useState([]);

  useEffect(() => {
    async function fetchMentors() {
      try {
        const q = query(collection(db, "users"), where("role", "==", "mentor"));
        const querySnapShot = await getDocs(q);

        const mentorList = querySnapShot.docs.map((doc) => ({
          ...doc.data(),
        }));

        setMentors(mentorList);
      } catch (e) {
        console.log(e);
      }
    }

    fetchMentors();
  }, []);

  return (
    <div className="pt-20 md:pl-44 px-4 sm:px-6 lg:px-10">
      {/* Heading */}
      <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-2">
        Explore Mentors
      </h2>
      <p className="text-gray-500 text-lg max-w-2xl mb-6">
        Discover experienced professionals ready to guide your career journey
      </p>

      {/* Mentor Grid */}
      {mentors.length === 0 ? (
        <div className="text-center text-gray-500 py-16">
          No mentors available at the moment.
        </div>
      ) : (
        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 sm:gap-8">
          {mentors.map((mentor) => (
            <li
              key={mentor.uid}
              className="transition-transform duration-200 hover:-translate-y-1"
            >
              <MentorCard
                id={mentor.uid}
                name={mentor.name}
                fullName={mentor.fullName}
                techRole={mentor.techRole}
                skills={mentor.skills}
              />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default ExploreMentor;