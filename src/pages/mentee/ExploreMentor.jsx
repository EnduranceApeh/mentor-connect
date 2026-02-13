import { db } from "../../firebase/config";
import { collection, getDocs, query, where } from "firebase/firestore"
import { useState, useEffect } from "react";


import MentorCard from "../../pages/mentor/MentorCard";

function ExploreMentor() {
  const [mentors, setMentors] = useState([]);

  useEffect(() => {
    async function fetchMentors() {
      try {
        // Build query
        const q = query(collection(db, "users"), where("role", "==", "mentor"));

        // Execute query
        const querySnapShot = await getDocs(q);

        const mentorList = querySnapShot.docs.map(doc => ({
          ...doc.data()
        }))

        setMentors(mentorList);

        console.log(mentorList)
      } catch (e) {
        console.log(e)
      }
    }

    fetchMentors()

  }, [])

  return (
   <div>
    <h2>Explore Mentors</h2>
    <p>Discover experienced professionals ready to guide your career journey</p>


     <ul className="grid-cols">
      {mentors.map(mentor =>
        <li key={mentor.uid}>
          <MentorCard name={mentor.name} />
        </li>
      )}
    </ul>
   </div>
  )
}

export default ExploreMentor